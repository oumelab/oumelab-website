import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  preload: false,
  display: "swap",
  fallback: ["Hiragino Kaku Gothic ProN","Hiragino Sans", "Meiryo", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJp.variable}  font-noto-sans-jp antialiased`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
