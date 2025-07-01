import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog & Updates - Graycommit | AI Sales Coaching & Automation',
  description: 'Stay updated with the latest insights, engineering updates, product releases, and company news from Graycommit. Discover AI sales coaching strategies and best practices.',
  keywords: 'sales coaching, AI automation, sales technology, engineering blog, product updates, sales insights, B2B sales, changelog',
  openGraph: {
    title: 'Blog & Updates - Graycommit',
    description: 'Latest insights, updates, and engineering news from Graycommit\'s AI sales coaching platform.',
    type: 'website',
    url: 'https://graycommit.com/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog & Updates - Graycommit',
    description: 'Stay updated with AI sales coaching insights and product updates from Graycommit.',
  },
  alternates: {
    canonical: 'https://graycommit.com/blog'
  }
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 