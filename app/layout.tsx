import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "name": "AG Accounting Solutions",
  "image": "https://www.ag-accounting.co.uk/logo.png",
  "description": "Premier accounting and tax consultancy services in Slough. Expert help with tax returns, self-assessment, company accounts, and business advisory.",
  "url": "https://www.ag-accounting.co.uk",
  "telephone": "+44 1753 530465",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "34 Mill Street",
    "addressLocality": "Slough",
    "postalCode": "SL2 5DG",
    "addressCountry": "UK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.5111,
    "longitude": -0.5908
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "17:00"
  }
}

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ag-accounting.co.uk"),
  title: {
    default: "AG Accounting Solutions - Chartered Accountants in Slough",
    template: "%s | AG Accounting Solutions"
  },
  description: "Premier accounting and tax consultancy services in Slough. Expert help with tax returns, self-assessment, company accounts, business advisory, and payroll management for growing businesses.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.ag-accounting.co.uk",
    title: "AG Accounting Solutions - Expert Chartered Accountants",
    description: "Your partner for growth. Specialized accounting services for businesses and individuals, ensuring compliance and maximizing financial potential.",
    siteName: "AG Accounting Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AG Accounting Solutions Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AG Accounting Solutions",
    description: "Expert accounting services in Slough and surrounding areas.",
    creator: "@AGAccounting", // Adjust if known
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-inter antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="min-h-screen pt-[120px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
