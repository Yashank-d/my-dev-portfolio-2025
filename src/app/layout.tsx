import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@500,700,400,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} font-sans`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
