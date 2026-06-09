import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Shivam Goel | Software Engineer",
  description: "Portfolio of Shivam Goel, B.Tech CS Student at VIT & Full-Stack Developer.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.variable}>
        {/* Background Blobs */}
        <div className="blob blob-purp" />
        <div className="blob blob-blue" />
        <div className="blob blob-pink" />
        {/* Noise texture overlay */}
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
