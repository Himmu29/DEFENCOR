import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://defencor.in'), // Replace with actual domain if known
  verification: {
    google: "2qTTec0691QUfHFhK4O_dtRy-I4HMdZ8nr-IqqZBvJo",
  },
  title: {
    default: "DEFENCOR | Elite Security Agency",
    template: "%s | DEFENCOR",
  },
  description: "High-performance, professional Security Agency providing elite protection, consultancy, and risk assessment globally.",
  keywords: ["Security Agency", "Elite Protection", "Risk Assessment", "Security Consultancy", "Bodyguards", "Corporate Security", "DEFENCOR"],
  authors: [{ name: "DEFENCOR" }],
  creator: "DEFENCOR",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "DEFENCOR | Elite Security Agency",
    description: "High-performance, professional Security Agency providing elite protection, consultancy, and risk assessment.",
    siteName: "DEFENCOR",
    images: [
      {
        url: "/images/logo.jpeg", // Using an existing image from the site
        width: 1200,
        height: 630,
        alt: "DEFENCOR Security Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DEFENCOR | Elite Security Agency",
    description: "High-performance, professional Security Agency providing elite protection, consultancy, and risk assessment.",
    images: ["/images/logo.jpeg"],
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
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col relative`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
