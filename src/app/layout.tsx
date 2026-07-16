import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import { Providers } from "@/lib/providers";
import Footer from "@/components/layout/footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import HireMeCursor from "@/components/general/hire-me-cursor";
import {
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
  absoluteUrl,
  buildPersonJsonLd,
  buildWebsiteJsonLd,
  JsonLd,
} from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: SITE_KEYWORDS,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  classification: "Portfolio",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    images: [
      {
        url: absoluteUrl("/images/DMLogo.jpg"),
        width: 1200,
        height: 630,
        alt: "Devesh Maurya — Full Stack Engineer portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    creator: "@deveshmaurya3",
    site: "@deveshmaurya3",
    images: [absoluteUrl("/images/DM-round.png")],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
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
        <JsonLd data={buildPersonJsonLd()} />
        <JsonLd data={buildWebsiteJsonLd()} />
        <a
          href="#main-content"
          className="sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:inline-flex focus:h-auto focus:w-auto focus:items-center focus:overflow-visible focus:whitespace-nowrap focus:rounded-lg focus:bg-emerald-600 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:outline-none focus:ring-2 focus:ring-emerald-300"
        >
          Skip to main content
        </a>
        <Providers>
          <HireMeCursor />
          <Header />
          <main
            id="main-content"
            tabIndex={-1}
            className="flex min-h-screen w-full flex-col outline-none"
          >
            {children}
          </main>
          <Footer />
        </Providers>
        <GoogleAnalytics gaId="G-SX447XBNE1" />
      </body>
    </html>
  );
}
