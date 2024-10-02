import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import MainHeader from "@/components/main-header";
import Link from "next/link";
import SideBarClose from "@/components/sidebar-close";

import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

const inter = Inter({ subsets: ["latin"] });

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
        <div
          id="sidebar"
          className="absolute top-0 right-0 overflow-hidden transition-all duration-300 bg-slate-500 w-0 h-0 p-0"
        >
          <div className="flex justify-between items-center gap-7">
            <Link href="/">
              <h1 className={`text-2xl font-bold ${pacifico.className}`}>
                TechDevShimul
              </h1>
            </Link>
            <SideBarClose />
          </div>

          <ul className="flex flex-col justify-center items-center gap-5 mt-7">
            <li>
              <Link href="#about" className="font-bold">
                ABOUT
              </Link>
            </li>
            <li>
              <Link href="#skills">SKILLS</Link>
            </li>
            <li>
              <Link href="#projects">PROJECTS</Link>
            </li>
            <li>
              <Link href="#education">EDUCATION</Link>
            </li>
            <li>
              <Link href="#contact">CONTACT</Link>
            </li>
          </ul>
        </div>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
