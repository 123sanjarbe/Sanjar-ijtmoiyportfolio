import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Sanjar Qo'chqorov | Sirdaryo Viloyati IT Koordinatori & Full-Stack Developer",
  description:
    "13 yoshli 8-sinf o'quvchisi, Sirdaryo Viloyati IT Koordinatori, Full-Stack va Telegram bot dasturchisi Sanjar Qo'chqorovning rasmiy interaktiv portfoliossi.",
  keywords: [
    "Qo'chqorov Sanjar",
    "Sanjarbek",
    "Sirdaryo IT Koordinatori",
    "Next.js Developer",
    "Telegram Bot Developer",
    "Full-Stack Dasturchi",
    "Aqlvoy AI",
    "Yosh dasturchi",
  ],
  authors: [{ name: "Sanjar Qo'chqorov" }],
  creator: "Sanjar Qo'chqorov",
  openGraph: {
    title: "Sanjar Qo'chqorov | IT Koordinatori & Dasturchi",
    description: "Sirdaryo Viloyati IT Koordinatori va 13 yoshli Full-Stack Dasturchi.",
    url: "https://sanjarbek.uz",
    siteName: "Sanjar Qo'chqorov Portfolio",
    images: [
      {
        url: "/sanjar.png",
        width: 768,
        height: 1024,
        alt: "Qo'chqorov Sanjar",
      },
    ],
    locale: "uz_UZ",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className="dark">
      <body className="bg-obsidian text-zinc-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200 font-sans">
        {children}
      </body>
    </html>
  );
}
