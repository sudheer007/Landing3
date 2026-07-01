import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing",
  description: "Graycommit Stock Radar pricing: Free forever, Pro at $9/month with real-time signals and AI analysis, Pro+ at $19/month with alerts, multiple portfolios, and onboarding. No credit card required to start.",
  alternates: { canonical: "https://graycommit.com/pricing" },
  openGraph: {
    title:       "Pricing — Graycommit Stock Radar",
    description: "Free, Pro ($9/mo), and Pro+ ($19/mo). Real-time AI stock signals, conviction scores, and portfolio intelligence.",
    url:         "https://graycommit.com/pricing",
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
