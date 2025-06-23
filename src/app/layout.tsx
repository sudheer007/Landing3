import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Graycommit",
  description: "Realtime Sales Conversation Engine",
  openGraph: {
    title: "Graycommit",
    description: "Realtime Sales Conversation Engine",
    url: "https://graycommit.com",
    siteName: "Graycommit",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Graycommit",
    description: "Realtime Sales Conversation Engine",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://graycommit.com" />
        
        {/* Structured Data for LLMs and Search Engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Graycommit",
              "description": "Realtime Sales Conversation Engine - AI-powered sales intelligence that empowers your sales team with contextual insights, competitive advantages, and personalized talking points during live calls.",
              "url": "https://graycommit.com",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "description": "Free tier available"
              },
              "creator": {
                "@type": "Organization",
                "name": "Graycommit",
                "url": "https://graycommit.com"
              },
              "keywords": "sales intelligence, AI sales coach, conversation analysis, playbooks, sales automation, real-time coaching"
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`} suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}