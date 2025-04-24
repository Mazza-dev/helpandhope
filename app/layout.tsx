import type { Metadata } from "next";
import { Inter, Dancing_Script } from 'next/font/google';
import Script from 'next/script';
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dancingScript = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing-script" });

export const metadata: Metadata = {
  title: "Help & Hope - Making a Difference",
  description: "Helping with Orphans, Education, Health, Immigration, and Environment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://gumroad.com/js/gumroad.js"
          strategy="lazyOnload"
        />
      </head>
      <body className={`${inter.variable} ${dancingScript.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
