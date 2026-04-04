import type { Metadata } from "next";
import { EB_Garamond, Lato } from "next/font/google";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import PreviewMode from "@/components/PreviewMode";
import SessionTracker from "@/components/SessionTracker";
import "./globals.css";

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nicola Mason | Award-Winning Wedding & Events Singer",
  description:
    "Award-winning wedding and events singer based in Glasgow, Scotland. Tailored live music for ceremonies, receptions, and celebrations across Central Scotland.",
  keywords: [
    "wedding singer Glasgow",
    "wedding singer Scotland",
    "events singer",
    "ceremony singer",
    "Scottish wedding entertainment",
  ],
  metadataBase: new URL('https://www.nicolamason.co.uk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.nicolamason.co.uk',
    siteName: 'Nicola Mason Wedding & Events Singer',
    title: 'Nicola Mason | Award-Winning Wedding & Events Singer',
    description: 'Award-winning wedding and events singer based in Glasgow, Scotland. Tailored live music for ceremonies, receptions, and celebrations across Central Scotland.',
    images: [
      {
        url: '/images/nicola-mason-wedding-events-singer.jpg',
        width: 1200,
        height: 630,
        alt: 'Nicola Mason Wedding & Events Singer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nicola Mason | Award-Winning Wedding & Events Singer',
    description: 'Award-winning wedding and events singer based in Glasgow, Scotland.',
    images: ['/images/nicola-mason-wedding-events-singer.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
        {process.env.NODE_ENV === 'production' && (
          <script defer src="https://umami-three-smoky.vercel.app/script.js" data-website-id="22e8cb62-e1d7-4dbd-8df2-b4adcdd62f66" />
        )}
      </head>
      <body className={`${garamond.variable} ${lato.variable} antialiased`}>
        <Suspense>
          <PreviewMode />
        </Suspense>
        <SessionTracker />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
