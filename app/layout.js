"use client";

import "./globals.css";
import { ThemeProvider } from "next-themes";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";

export default function RootLayout({ children }) {


  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="">
            <Providers>
            <Navbar />
            <div className="my-[10vh]"></div>

            {children}
            </Providers>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
