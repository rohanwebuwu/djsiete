"use client";

import "./globals.css";
import { ThemeProvider } from "next-themes";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en"  suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSyste disableTransitionOnChange>
          <div className="">

          <Navbar />

          {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
