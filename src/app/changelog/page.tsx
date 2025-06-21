'use client'

import { useState, useEffect } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Rss, User, Calendar, Clock, Tag } from 'lucide-react'
import { 
  ContentItem, 
  getAllContent, 
  getContentByCategory, 
  searchContent, 
  formatDate, 
  getBadgeVariant,
  renderContentBlocks
} from '@/lib/content'

export default function ChangelogPage() {
  const [allContent, setAllContent] = useState<ContentItem[]>([])
  const [filteredContent, setFilteredContent] = useState<ContentItem[]>([])
  const [selectedCategory, setSelectedCategory] = useState('All Posts')
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const categories = [
    'All Posts',
    'Engineering',
    'Community', 
    'Company News',
    'Changelog',
    'Major Release',
    'Feature Release',
    'Security Update'
  ]

  // Load content on component mount
  useEffect(() => {
    const loadContent = () => {
      try {
        const content = getAllContent()
        setAllContent(content)
        setFilteredContent(content)
        setIsLoading(false)
      } catch (error) {
        console.error('Error loading content:', error)
        setIsLoading(false)
      }
    }

    loadContent()
  }, [])

  // Filter content based on category
  useEffect(() => {
    let filtered = allContent

    if (selectedCategory !== 'All Posts') {
      filtered = getContentByCategory(selectedCategory)
    }

    if (searchQuery) {
      filtered = searchContent(searchQuery).filter(item => 
        selectedCategory === 'All Posts' || 
        item.category.toLowerCase() === selectedCategory.toLowerCase() ||
        item.type.toLowerCase() === selectedCategory.toLowerCase()
      )
    }

    setFilteredContent(filtered)
  }, [selectedCategory, searchQuery, allContent])

  const highlightText = (text: string, query: string) => {
    if (!query) return text
    
    const parts = text.split(new RegExp(`(${query})`, 'gi'))
    return parts.map((part, index) => 
      part.toLowerCase() === query.toLowerCase() ? 
        <mark key={index} className="bg-yellow-200 text-black">{part}</mark> : 
        part
    )
  }

  const renderContentItem = (item: ContentItem) => {
    const badgeStyle = getBadgeVariant(item.badge)
    const renderedContent = renderContentBlocks(item.content)
    
    return (
      <article key={item.id} className="border-b border-[#333] py-8 last:border-b-0">
        <div className="flex flex-col space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-[#888]" />
                <time className="text-sm text-[#888]">
                  {formatDate(item.date)}
                </time>
              </div>
              {item.version && (
                <div className="flex items-center space-x-2">
                  <Tag className="h-4 w-4 text-[#888]" />
                  <span className="text-sm text-[#888]">{item.version}</span>
                </div>
              )}
              {item.readTime && (
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-[#888]" />
                  <span className="text-sm text-[#888]">{item.readTime}</span>
                </div>
              )}
            </div>
            <Badge className={badgeStyle.className}>
              {typeof item.badge === 'string' ? item.badge : 'Update'}
            </Badge>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-white">
            {highlightText(item.title || '', searchQuery)}
          </h2>

          {/* Excerpt */}
          <p className="text-lg text-[#888] leading-relaxed">
            {highlightText(item.excerpt || '', searchQuery)}
          </p>

          {/* Content */}
          <div 
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ 
              __html: searchQuery ? 
                renderedContent.replace(
                  new RegExp(searchQuery, 'gi'),
                  match => `<mark class="bg-yellow-200 text-black">${match}</mark>`
                ) : 
                renderedContent
            }}
          />

          {/* Impacts (for changelog entries) */}
          {item.impacts && Array.isArray(item.impacts) && item.impacts.length > 0 && (
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-white mb-4">📊 Impact Metrics</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {item.impacts.map((impact, index) => (
                  <div key={index} className="bg-[#111] rounded-lg p-4 border border-[#333]">
                    <div className="text-2xl font-bold text-[#0f81fb] mb-1">
                      {impact.improvement || ''}
                    </div>
                    <div className="text-sm font-medium text-white mb-1">
                      {impact.metric || ''}
                    </div>
                    <div className="text-xs text-[#888]">
                      {impact.description || ''}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {Array.isArray(item.tags) && item.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-[#111] text-[#888] text-xs rounded-md border border-[#333]"
              >
                #{typeof tag === 'string' ? tag : ''}
              </span>
            ))}
          </div>

          {/* Author */}
          <div className="flex items-center space-x-3 mt-4 pt-4 border-t border-[#333]">
            <div className="h-8 w-8 rounded-full bg-[#333] flex items-center justify-center">
              <User className="h-4 w-4 text-[#888]" />
            </div>
            <div>
              <div className="text-sm font-medium text-white">
                {item.author?.name || 'Unknown Author'}
              </div>
              <div className="text-xs text-[#888]">
                {item.author?.role || ''}
              </div>
            </div>
          </div>
        </div>
      </article>
    )
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col bg-black text-white">
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0f81fb] mx-auto mb-4"></div>
            <p className="text-[#888]">Loading content...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Header Banner */}
      <div className="flex flex-col items-center justify-center py-6 bg-[#111] border-b border-[#333]">
        <Link 
          href="https://twitter.com/graycommit" 
          className="flex items-center space-x-2 px-6 py-3 bg-[#000] rounded-full text-sm hover:bg-[#111] transition-colors"
        >
          <span>Follow us on</span>
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          <span>to hear about updates first</span>
        </Link>
      </div>

      {/* Navigation */}
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
            <Button variant="ghost" size="sm" className="text-[#888] hover:text-white">
              <Rss className="h-4 w-4 mr-2" />
              RSS
            </Button>
          </div>
        </div>
      </nav>

      {/* Search */}
      <div className="border-b border-[#333] bg-black">
        <div className="container max-w-7xl mx-auto py-4 px-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#888]" />
            <Input
              placeholder="Search updates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-[#111] border-[#333] text-white placeholder-[#888]"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="flex-grow">
        <div className="container max-w-7xl mx-auto px-8 py-8">
          {filteredContent.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {searchQuery ? `No results for "${searchQuery}"` : 'No content found'}
              </h3>
              <p className="text-[#888] mb-6">
                {searchQuery 
                  ? 'Try adjusting your search terms or browse all posts.' 
                  : 'Check back later for updates!'
                }
              </p>
              {searchQuery && (
                <Button 
                  variant="outline" 
                  onClick={() => setSearchQuery('')}
                  className="border-[#333] text-[#888] hover:text-white"
                >
                  Clear Search
                </Button>
              )}
            </div>
          ) : (
            <div className="space-y-0">
              {filteredContent.map(renderContentItem)}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}