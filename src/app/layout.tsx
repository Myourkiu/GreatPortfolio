import type { Metadata } from "next";
import "./globals.css";

import { Poppins } from "next/font/google";
import StarBackground from "./components/StarBackground";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});



export const metadata: Metadata = {
  title: "Pedro - Great Portfolio",
  description: "Pedro's portfolio - 17/02",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarBackground/>
        {children}
      </body>
    </html>
  );
}
