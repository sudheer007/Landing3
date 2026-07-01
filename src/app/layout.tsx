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

const BASE_URL = "https://graycommit.com";
const TITLE    = "Graycommit Stock Radar — AI Market Intelligence";
const DESC     = "Graycommit Stock Radar is an AI stock screener that continuously scans 18,000+ equities to surface high-conviction investment opportunities. Real-time signals, Conviction Scores, AI analyst, and portfolio risk — built for investors who think ahead.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default:  TITLE,
    template: "%s | Graycommit",
  },

  description: DESC,

  keywords: [
    "AI stock screener",
    "AI stock radar",
    "stock conviction score",
    "AI market intelligence",
    "institutional stock analysis",
    "AI stock scanner",
    "stock signals",
    "portfolio intelligence",
    "AI investment research",
    "stock breakout detection",
    "sector rotation tracker",
    "AI stock picker",
    "real-time stock signals",
    "market intelligence platform",
    "Graycommit",
    "Graycommit Stock Radar",
    "GSR 1",
  ],

  authors:     [{ name: "Graycommit", url: BASE_URL }],
  creator:     "Graycommit",
  publisher:   "Graycommit",
  category:    "Finance",
  applicationName: "Graycommit Stock Radar",

  robots: {
    index:          true,
    follow:         true,
    googleBot: {
      index:               true,
      follow:              true,
      "max-image-preview": "large",
      "max-snippet":       -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type:        "website",
    locale:      "en_US",
    url:         BASE_URL,
    siteName:    "Graycommit",
    title:       TITLE,
    description: DESC,
    images: [
      {
        url:    `${BASE_URL}/logo.png`,
        width:  512,
        height: 512,
        alt:    "Graycommit Stock Radar",
      },
    ],
  },

  twitter: {
    card:        "summary_large_image",
    title:       TITLE,
    description: DESC,
    images:      [`${BASE_URL}/logo.png`],
    creator:     "@graycommit",
    site:        "@graycommit",
  },

  alternates: {
    canonical: BASE_URL,
  },

  other: {
    // llms.txt — tells AI crawlers where to find the structured product description
    "llms-txt": `${BASE_URL}/llms.txt`,
  },
};

const jsonLd = [
  // ── Organization ────────────────────────────────────────
  {
    "@context": "https://schema.org",
    "@type":    "Organization",
    "@id":      `${BASE_URL}/#organization`,
    name:       "Graycommit",
    url:        BASE_URL,
    logo: {
      "@type":      "ImageObject",
      url:          `${BASE_URL}/logo.png`,
      width:        512,
      height:       512,
    },
    description: "Graycommit builds AI-powered intelligence products that help professionals make better decisions. Flagship product: Graycommit Stock Radar.",
    contactPoint: {
      "@type":       "ContactPoint",
      contactType:   "sales",
      url:           "https://tidycal.com/sudheer.sandu/problemoverview",
    },
  },

  // ── WebSite ──────────────────────────────────────────────
  {
    "@context":      "https://schema.org",
    "@type":         "WebSite",
    "@id":           `${BASE_URL}/#website`,
    url:             BASE_URL,
    name:            "Graycommit",
    publisher:       { "@id": `${BASE_URL}/#organization` },
    potentialAction: {
      "@type":          "SearchAction",
      target:           { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/blog?q={search_term_string}` },
      "query-input":    "required name=search_term_string",
    },
  },

  // ── SoftwareApplication (Stock Radar) ───────────────────
  {
    "@context":           "https://schema.org",
    "@type":              "SoftwareApplication",
    "@id":                `${BASE_URL}/#product`,
    name:                 "Graycommit Stock Radar",
    alternateName:        ["GSR 1", "Graycommit Stock Radar GSR 1"],
    applicationCategory:  "FinanceApplication",
    applicationSubCategory: "StockScreener",
    operatingSystem:      "Web, iOS, Android",
    url:                  BASE_URL,
    description:          "AI stock screener and market intelligence platform that continuously scans equities to surface high-conviction investment opportunities. Features Conviction Scores, AI analyst, portfolio intelligence, and real-time risk monitoring.",
    screenshot:           `${BASE_URL}/logo.png`,
    featureList: [
      "AI Stock Radar — continuous scanning of 18,000+ US equities",
      "Conviction Score — proprietary 0–100 AI-calculated investment signal",
      "AI Market Analyst — conversational AI research on any stock",
      "Portfolio Intelligence — real-time health scoring and risk analytics",
      "Risk Radar — tail risk identification and earnings exposure monitoring",
      "Daily AI Brief — personalized morning market summary",
    ],
    offers: [
      {
        "@type":         "Offer",
        name:            "Free",
        price:           "0",
        priceCurrency:   "USD",
        priceSpecification: { "@type": "UnitPriceSpecification", price: "0", priceCurrency: "USD", billingDuration: "P1M" },
        description:     "Daily scan (15-min delay), watchlist of 5 tickers, core signals, sector overview.",
      },
      {
        "@type":         "Offer",
        name:            "Pro",
        price:           "9",
        priceCurrency:   "USD",
        priceSpecification: { "@type": "UnitPriceSpecification", price: "9", priceCurrency: "USD", billingDuration: "P1M" },
        description:     "Real-time signals, unlimited watchlist, AI Thesis Builder, Risk Console, all scanner presets.",
      },
      {
        "@type":         "Offer",
        name:            "Pro+",
        price:           "19",
        priceCurrency:   "USD",
        priceSpecification: { "@type": "UnitPriceSpecification", price: "19", priceCurrency: "USD", billingDuration: "P1M" },
        description:     "Multiple portfolios, advanced sector rotation, SMS + push alerts, early access to new features, 1:1 onboarding.",
      },
    ],
    creator: { "@id": `${BASE_URL}/#organization` },
    keywords: "AI stock screener, stock radar, conviction score, AI market intelligence, portfolio intelligence, stock signals",
  },

  // ── FAQ (Pricing) ────────────────────────────────────────
  {
    "@context": "https://schema.org",
    "@type":    "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Is Graycommit Stock Radar free?",
        acceptedAnswer: { "@type": "Answer", text: "Yes. There is a free tier with daily scanning and a watchlist of 5 tickers. Paid plans start at $9/month for Pro (real-time) and $19/month for Pro+." } },
      { "@type": "Question", name: "What is a Conviction Score?",
        acceptedAnswer: { "@type": "Answer", text: "A Conviction Score is a proprietary 0–100 AI-calculated score that weighs momentum, volume, sector strength, fundamental quality, and risk together into a single number for each stock. Scores above 80 indicate strong, high-confidence setups." } },
      { "@type": "Question", name: "How is Graycommit Stock Radar different from a regular stock screener?",
        acceptedAnswer: { "@type": "Answer", text: "Traditional screeners filter on static rules. Graycommit Stock Radar uses AI to dynamically rank stocks, combine multiple signal types, explain its reasoning in plain English, and surface opportunities the user was not already watching." } },
      { "@type": "Question", name: "What markets does Graycommit Stock Radar cover?",
        acceptedAnswer: { "@type": "Answer", text: "Graycommit Stock Radar currently scans 18,000+ US equities across all major sectors, updated continuously throughout the trading day with a 42ms median signal latency." } },
    ],
  },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="format-detection"  content="telephone=no, date=no, email=no, address=no" />
        <link rel="canonical"          href={BASE_URL} />
        {/* Structured data — all schemas in one array for efficiency */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
