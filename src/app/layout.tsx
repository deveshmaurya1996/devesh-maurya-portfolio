import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import { Providers } from "@/lib/providers";
import Footer from "@/components/layout/footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import HireMeCursor from "@/components/general/hire-me-cursor";

const inter = Inter({ subsets: ["latin"] });

const title = "Devesh Maurya | Full Stack Engineer";
const description =
  "Full Stack Engineer based in Mumbai. React, Next.js, React Native, and Node.js. Experience across web, mobile, and AI product work.";
const url = "https://devesh-maurya-portfolio.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: [
    "Full Stack Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "AI Engineer",
    "Devesh Maurya",
  ],
  creator: "Devesh Maurya",
  openGraph: {
    type: "website",
    url,
    title,
    description,
    siteName: title,
    images: [
      {
        url: "/images/DMLogo.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@deveshmaurya3",
    images: "/images/DM-round.png",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-gray text-gray-600 antialiased transition-colors duration-300`}
        suppressHydrationWarning
      >
        <Providers>
          <HireMeCursor />
          <Header />
          <main className="flex min-h-screen w-full flex-col">{children}</main>
          <Footer />
        </Providers>
        <GoogleAnalytics gaId="G-SX447XBNE1" />
      </body>
    </html>
  );
}
