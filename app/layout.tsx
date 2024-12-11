import type { Metadata } from "next";
import Header from "./components/layouts/header";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SexualityTalk - 恋も友情も、あなたのペースで",
  description: "SexualityTalkでは、あなたの性について、恋愛や友情における心の成長を支援します。",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
