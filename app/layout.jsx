import { Noto_Serif_Display, Jost, Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-raleway",
});

const notoSerifDisplay = Noto_Serif_Display({
  subsets: ["cyrillic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-notoSerifDisplay",
});

const jost = Jost({
  subsets: ["cyrillic", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-jost",
});

export const metadata = {
  title: "Stimul Sports Resort",
  description: "A Landing Page built with Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${notoSerifDisplay.variable} ${jost.variable}`}>{children}</body>
    </html>
  );
};