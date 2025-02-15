import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "this is a Portfolio Website use Next.js App, Framer Motion, TypeScript, Tailwind CSS, Email",
  robots: {
    index: true,  
    follow: true, 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} 
        antialiased bg-[#e5e5f7]
      bg-opacity-80
       bg-[radial-gradient(#3b3b44_.25px,transparent_.25px),radial-gradient(#3b3b44_.25px,#e5e5f7_.25px)]
        bg-[size:50px_50px] bg-[position:0_0,25px_25px] relative  overflow-x-hidden
          dark:bg-[#000319]
           dark:bg-[radial-gradient(#888eff_0.85px,transparent_0.85px),radial-gradient(#888eff_0.85px,#000319_0.85px)]
            dark:bg-[size:34px_34px] dark:bg-[position:0_0,17px_17px] dark:text-gray-50 dark:text-opacity-90  `}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
