import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const circularBlack = localFont({
  src: [
    {
      path: "../public/fonts/CircularStd-Black.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/CircularStd-Black.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-circularBlack",
});

const circularMedium = localFont({
  src: [
    {
      path: "../public/fonts/CircularStd-Medium.woff2",
      style: "normal",
    },
    {
      path: "../public/fonts/CircularStd-Medium.woff",
      style: "normal",
    },
  ],
  variable: "--font-circularMedium",
});

const circularBook = localFont({
  src: [
    {
      path: "../public/fonts/CircularStd-Book.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/CircularStd-Book.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-circularBook",
});

const script = localFont({
  src: [
    {
      path: "../public/fonts/smith-allison.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-script",
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
    <html lang="en">
      <body className={`${circularBlack.variable} ${circularMedium.variable} ${circularBook.variable} ${script.variable}`}>{children}</body>
    </html>
  );
};