import type { Metadata } from "next";
import { Inter } from "next/font/google";
import QueryProvider from "./_providers";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js HomeWork",
  description: "포켓몬 도감 불러오기 과제",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="	 bg-cyan-400 text-center h-14 font-extrabold flex items-center justify-center">
          my custom pokemon list
        </header>
        <QueryProvider>
          <nav className="text-center space-x-4 bg-cyan-200 flex items-center justify-center ">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/blog">Blog</a>
          </nav>

          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
