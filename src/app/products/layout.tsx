import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Products",
  description: "Graycommit's AI product suite: Stock Radar for investors, Sales Intelligence for revenue teams, and DeepSearch AI for research professionals.",
  alternates: { canonical: "https://graycommit.com/products" },
  openGraph: {
    title:       "Products — Graycommit",
    description: "AI-powered tools for investors, sales teams, and research professionals.",
    url:         "https://graycommit.com/products",
  },
}

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
