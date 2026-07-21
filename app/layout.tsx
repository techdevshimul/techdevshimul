import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

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
    <html
      lang="en"
      className={`dark ${inter.variable} ${geist.variable} ${geistMono.variable}`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Shimul Hossain | Full Stack Web Developer</title>
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- icon font, not a text font; next/font/google doesn't optimize variable icon fonts the same way */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface font-body-md text-on-background selection:bg-primary selection:text-on-primary">
        <div className="atmospheric-blob bg-primary w-125 h-125 -top-48 -left-48"></div>
        <div className="atmospheric-blob bg-secondary w-100 h-100 bottom-0 -right-24"></div>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
