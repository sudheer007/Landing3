import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description: "Graycommit builds AI-powered intelligence products for professionals. Our flagship product, Graycommit Stock Radar, brings institutional-quality market research to every investor.",
  alternates: { canonical: "https://graycommit.com/about" },
  openGraph: {
    title:       "About Graycommit",
    description: "We build AI intelligence products that help professionals make better decisions. Starting with Graycommit Stock Radar.",
    url:         "https://graycommit.com/about",
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
