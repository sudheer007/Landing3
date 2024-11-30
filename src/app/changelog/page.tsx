'use client'

import { useState, useEffect } from 'react'
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

import { Search, Rss, User } from 'lucide-react'


interface ChangelogEntry {
  id: string;
  date: string;
  title: string;
  badge: {
    text: string;
    variant: "default" | "secondary" | "destructive" | "outline";
    className?: string;
  };
  content: string;
  author: string;
}

const changelogData: ChangelogEntry[] = [
  {
    id: "entry-1",
    date: "Nov 19, 2024",
    title: "Skew Protection is now enabled by default for new projects",
    badge: { text: "New Feature", variant: "outline" },
    content: `
      <p><a href="#" class="text-blue-500 hover:underline">Skew Protection</a> eliminates version differences between web clients and servers—available for Pro and Enterprise customers. Starting today, new projects will have Skew Protection enabled by default.</p>
      <p>Existing projects will not be changed, however you can manually enable Skew Protection in the project's settings.</p>
      <ul class="list-disc pl-5 space-y-2">
        <li>Ensures client-side code matches server-side code</li>
        <li>Protects from version mismatch errors</li>
        <li>Applies to file name changes from hashed bundles</li>
        <li>Covers post backs from Server Actions</li>
      </ul>
    `,
    author: "Steven Salat"
  },
  {
    id: "entry-2",
    date: "Nov 15, 2024",
    title: "Introducing AI-Powered Code Suggestions",
    badge: { text: "AI Feature", variant: "secondary", className: "bg-gradient-to-r from-purple-400 to-pink-600 text-white" },
    content: `
      <p>Experience the power of AI-driven code completion and suggestions, now available for all Pro and Enterprise customers.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2">Key Features:</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li>Real-time code completion and suggestions</li>
        <li>Context-aware recommendations based on your project structure</li>
        <li>Integration with popular IDEs and code editors</li>
        <li>Customizable suggestion settings</li>
      </ul>
    `,
    author: "AI Team at Vercel"
  },
  {
    id: "entry-3",
    date: "Nov 10, 2024",
    title: "Performance Boost: 2x Faster Build Times",
    badge: { text: "Performance Update", variant: "default", className: "bg-green-600" },
    content: `
      <p>We're excited to announce a significant performance improvement in our build process. You can now expect your projects to build twice as fast on average.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2">What's Changed?</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li>Optimized dependency resolution</li>
        <li>Improved caching mechanisms</li>
        <li>Enhanced parallel processing</li>
      </ul>
      <p class="mt-4">These improvements apply to all projects automatically. No action is required from your side to benefit from these speed enhancements.</p>
    `,
    author: "Performance Team"
  },
  {
    id: "entry-4",
    date: "Nov 5, 2024",
    title: "Introducing Vercel Rewards Program",
    badge: { text: "New Program", variant: "outline", className: "border-yellow-400 text-yellow-400" },
    content: `
      <p>We're thrilled to launch the Vercel Rewards Program, designed to recognize and reward our most active and valuable community members.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2">How It Works</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li>Earn points for various activities (deployments, referrals, bug reports, etc.)</li>
        <li>Climb the ranks from Bronze to Platinum tier</li>
        <li>Redeem points for Vercel credits, exclusive swag, and more</li>
        <li>Unlock special features and early access to new products</li>
      </ul>
    `,
    author: "Community Team"
  },
  {
    id: "entry-5",
    date: "Nov 1, 2024",
    title: "Vercel CLI 2.0: Now with Interactive Mode",
    badge: { text: "Major Update", variant: "secondary", className: "bg-gradient-to-r from-cyan-400 to-blue-600 text-white" },
    content: `
      <p>We're excited to announce the release of Vercel CLI 2.0, featuring a new interactive mode that makes it easier than ever to set up and manage your projects.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2">What's New?</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li>Interactive project initialization</li>
        <li>Guided deployment process</li>
        <li>In-terminal environment variable management</li>
        <li>Visual domain configuration</li>
      </ul>
      <p class="mt-4">Upgrade to Vercel CLI 2.0 today and experience the future of command-line project management!</p>
    `,
    author: "CLI Team"
  }
];

export default function ChangelogPage() {
  const [selectedCategory, setSelectedCategory] = useState('Changelog')
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredEntries, setFilteredEntries] = useState(changelogData)
  const [activeNav, setActiveNav] = useState<string | null>(null)

  const categories = [
    'All Posts',
    'Engineering',
    'Community',
    'Company News',
    'Customers',
    'Changelog',
    'Press'
  ]

  useEffect(() => {
    const lowercaseQuery = searchQuery.toLowerCase()
    const filtered = changelogData.filter(entry =>
      entry.title.toLowerCase().includes(lowercaseQuery) ||
      entry.content.toLowerCase().includes(lowercaseQuery) ||
      entry.author.toLowerCase().includes(lowercaseQuery) ||
      entry.badge.text.toLowerCase().includes(lowercaseQuery)
    )
    setFilteredEntries(filtered)
  }, [searchQuery])

  const highlightText = (text: string, query: string) => {
    if (!query) return text
    
    if (text.includes('<')) {
      return text
    }
    
    const parts = text.split(new RegExp(`(${query})`, 'gi'))
    return parts.map((part, index) => 
      part.toLowerCase() === query.toLowerCase() ? 
        <mark key={index} className="bg-yellow-200 text-black">{part}</mark> : 
        part
    )
  }

  const renderContent = (content: string, query: string) => {
    if (query) {
      // When searching, highlight the matched text
      return content.replace(
        new RegExp(query, 'gi'),
        match => `<mark class="bg-yellow-200 text-black">${match}</mark>`
      )
    }
    // When not searching, just return the content as is
    return content
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">

      <div className="flex flex-col items-center justify-center py-6 bg-[#111] border-b border-[#333]">
        <Link 
          href="https://twitter.com/vercel" 
          className="flex items-center space-x-2 px-6 py-3 bg-[#000] rounded-full text-sm hover:bg-[#111] transition-colors"
        >
          <span>Follow us on</span>
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          <span>to hear about the changes first</span>
        </Link>
      </div>

      <nav className="border-b border-[#333] bg-black">
        <div className="container max-w-7xl mx-auto flex items-center justify-between py-4 px-8">
          <div className="flex items-center space-x-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-sm ${
                  selectedCategory === category
                    ? 'text-white bg-white/10 px-4 py-2 rounded-full'
                    : 'text-[#888] hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#888]" />
              <Input
                type="search"
                placeholder="Search posts"
                className="w-64 pl-10 bg-[#111] border-[#333] text-white placeholder:text-[#888]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="ghost" size="icon" className="text-[#888] hover:text-white">
              <Rss className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>

      <main className="flex-grow container max-w-7xl mx-auto py-12 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-[#333]">
            {filteredEntries.map((entry) => (
              <article key={entry.id} className="relative pl-12 pb-24">
                <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-blue-500 border-4 border-black -translate-x-1/2" style={{ left: '1px' }} ></div>
                <div className="text-sm text-[#888] mb-4">{highlightText(entry.date, searchQuery)}</div>
                
                <h2 className="text-3xl font-bold mb-4">
                  {highlightText(entry.title, searchQuery)}
                </h2>

                <Badge variant={entry.badge.variant} className={`mb-8 ${entry.badge.className || ''}`}>
                  {highlightText(entry.badge.text, searchQuery)}
                </Badge>

                <div 
                  className="space-y-4 text-[#888]"
                  dangerouslySetInnerHTML={{ 
                    __html: renderContent(entry.content.trim(), searchQuery)
                  }}
                />

                <div className="flex items-center space-x-2 mt-8 text-sm text-[#888]">
                  <User className="h-4 w-4" />
                  <span>{highlightText(entry.author, searchQuery)}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>


    </div>
  )
}