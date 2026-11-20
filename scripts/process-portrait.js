const sharp = require('sharp');
const fs = require('fs');

async function processImage() {
  const inputPath = 'public/sanjar.jpg';
  const outputPath = 'public/sanjar.png';

  const { data, info } = await sharp(inputPath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels; // 3 (RGB)

  const isBackground = new Uint8Array(width * height);
  const queue = new Int32Array(width * height * 2);
  let head = 0;
  let tail = 0;

  // Function to check if a pixel is near-white
  function isNearWhite(idx) {
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    // Background in studio shots is usually extremely close to pure white (>238 in all channels)
    return r >= 238 && g >= 238 && b >= 238;
  }

  // Seed boundary points
  for (let x = 0; x < width; x++) {
    // top edge
    let idx = (0 * width + x) * channels;
    if (isNearWhite(idx)) {
      isBackground[0 * width + x] = 1;
      queue[tail++] = x;
      queue[tail++] = 0;
    }
  }

  for (let y = 0; y < height; y++) {
    // left edge
    let idxL = (y * width + 0) * channels;
    if (isNearWhite(idxL) && !isBackground[y * width + 0]) {
      isBackground[y * width + 0] = 1;
      queue[tail++] = 0;
      queue[tail++] = y;
    }
    // right edge
    let idxR = (y * width + (width - 1)) * channels;
    if (isNearWhite(idxR) && !isBackground[y * width + (width - 1)]) {
      isBackground[y * width + (width - 1)] = 1;
      queue[tail++] = width - 1;
      queue[tail++] = y;
    }
  }

  // BFS
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  while (head < tail) {
    const cx = queue[head++];
    const cy = queue[head++];

    for (let i = 0; i < 4; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];

      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const nPos = ny * width + nx;
        if (!isBackground[nPos]) {
          const nIdx = nPos * channels;
          if (isNearWhite(nIdx)) {
            isBackground[nPos] = 1;
            queue[tail++] = nx;
            queue[tail++] = ny;
          }
        }
      }
    }
  }

  console.log(`Flood fill completed. Background pixels: ${tail / 2} / ${width * height}`);

  // Create RGBA output buffer
  const outData = Buffer.alloc(width * height * 4);

  // Simple anti-aliasing / feathering: check 3x3 neighborhood of background mask
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const pos = y * width + x;
      const inIdx = pos * channels;
      const outIdx = pos * 4;

      const r = data[inIdx];
      const g = data[inIdx + 1];
      const b = data[inIdx + 2];

      if (isBackground[pos]) {
        // Pixel is purely background
        outData[outIdx] = 0;
        outData[outIdx + 1] = 0;
        outData[outIdx + 2] = 0;
        outData[outIdx + 3] = 0;
      } else {
        // Foreground pixel: check if neighboring background to feather edge
        let bgNeighborCount = 0;
        let totalChecked = 0;
        for (let ny = Math.max(0, y - 1); ny <= Math.min(height - 1, y + 1); ny++) {
          for (let nx = Math.max(0, x - 1); nx <= Math.min(width - 1, x + 1); nx++) {
            totalChecked++;
            if (isBackground[ny * width + nx]) {
              bgNeighborCount++;
            }
          }
        }

        if (bgNeighborCount > 0) {
          // Edge pixel: feather alpha smoothly
          const fgRatio = 1 - (bgNeighborCount / totalChecked);
          // If the pixel was slightly light from the white background bleeding, defringe it
          const defringe = Math.min(1, fgRatio * 1.1);
          outData[outIdx] = Math.round(r * defringe);
          outData[outIdx + 1] = Math.round(g * defringe);
          outData[outIdx + 2] = Math.round(b * defringe);
          outData[outIdx + 3] = Math.round(255 * fgRatio);
        } else {
          // Solid foreground pixel (portrait, tie, shirt, hair)
          outData[outIdx] = r;
          outData[outIdx + 1] = g;
          outData[outIdx + 2] = b;
          outData[outIdx + 3] = 255;
        }
      }
    }
  }

  await sharp(outData, {
    raw: {
      width,
      height,
      channels: 4,
    },
  })
    .png({ compressionLevel: 9 })
    .toFile(outputPath);

  console.log(`Saved transparent portrait to ${outputPath}`);
}

processImage().catch(console.error);

