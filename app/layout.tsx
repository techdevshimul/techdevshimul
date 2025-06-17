import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/main-header";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: "Shimul Hossain | Tech Dev Shimul",
  description: "Portfolio of Shimul Hossain (techdevshimul)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-white text-black dark:text-white dark:bg-gray-900 px-4 ${inter.className}`}
      >
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
