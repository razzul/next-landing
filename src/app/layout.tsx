import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextLanding - Launch Your SaaS in Minutes",
  description: "Beautiful, conversion-optimized landing pages built with Next.js. Get your SaaS idea to market faster with our template.",
  keywords: "saas, landing page, next.js, template, startup, conversion",
  authors: [{ name: "NextLanding Team" }],
  openGraph: {
    title: "NextLanding - Launch Your SaaS in Minutes",
    description: "Beautiful, conversion-optimized landing pages built with Next.js",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NextLanding - Launch Your SaaS in Minutes",
    description: "Beautiful, conversion-optimized landing pages built with Next.js",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
