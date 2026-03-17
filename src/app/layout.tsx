import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const clashDisplay = localFont({
  src: [
    { path: "../../public/fonts/ClashDisplay-Medium.woff2", weight: "500" },
    { path: "../../public/fonts/ClashDisplay-Semibold.woff2", weight: "600" },
    { path: "../../public/fonts/ClashDisplay-Bold.woff2", weight: "700" },
  ],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yashank D — Frontend Developer",
  description: "Frontend Developer with 2.5 years of enterprise engineering experience. Building production-grade UIs with React, Next.js, and TypeScript.",
  openGraph: {
    title: "Yashank D — Frontend Developer",
    description: "Building clean, production-grade UIs. React · Next.js · TypeScript",
    url: "https://yashank.in",
    siteName: "Yashank D Portfolio",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Yashank D – Frontend Developer" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yashank D — Frontend Developer",
    description: "Building clean, production-grade UIs. React · Next.js · TypeScript",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://yashank.in" />
      </head>
      <body className={`${inter.variable} ${clashDisplay.variable} font-sans`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
