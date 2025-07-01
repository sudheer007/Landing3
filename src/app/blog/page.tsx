'use client'

import { useState, useEffect } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Rss, User, Calendar, Clock, Tag, BookOpen, Code, Megaphone, Building } from 'lucide-react'
import { 
  ContentItem, 
  getAllContent, 
  getContentByCategory, 
  searchContent, 
  formatDate, 
  getBadgeVariant
} from '@/lib/content'

export default function BlogPage() {
  const [allContent, setAllContent] = useState<ContentItem[]>([])
  const [filteredContent, setFilteredContent] = useState<ContentItem[]>([])
  const [selectedCategory, setSelectedCategory] = useState('All Posts')
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const categories = [
    { name: 'All Posts', icon: BookOpen },
    { name: 'Engineering', icon: Code },
    { name: 'Community', icon: User }, 
    { name: 'Company News', icon: Building },
    { name: 'Changelog', icon: Megaphone },
    { name: 'Major Release', icon: Tag },
    { name: 'Feature Release', icon: Tag },
    { name: 'Security Update', icon: Tag }
  ]

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
    
    return (
      <article key={item.id} className="border-b border-[#333] py-8 last:border-b-0">
        <div className="flex flex-col space-y-4">
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
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${badgeStyle.className}`}>
              {typeof item.badge === 'string' ? item.badge : 'Update'}
            </span>
          </div>

          <Link href={`/blog/${item.slug}`} className="group">
            <h2 className="text-2xl font-bold text-white group-hover:text-[#0f81fb] transition-colors cursor-pointer">
              {highlightText(item.title || '', searchQuery)}
            </h2>
          </Link>

          <p className="text-lg text-[#888] leading-relaxed">
            {highlightText(item.excerpt || '', searchQuery)}
          </p>

          <div className="mt-4">
            <Link href={`/blog/${item.slug}`}>
              <Button variant="outline" size="sm" className="border-[#0f81fb] text-[#0f81fb] hover:bg-[#0f81fb] hover:text-white">
                Read Full Article →
              </Button>
            </Link>
          </div>

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
            <p className="text-[#888]">Loading blog posts...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <main className="flex-grow">
        <div className="border-b border-[#333] bg-black">
          <div className="container max-w-6xl mx-auto px-8 py-12">
            <div className="text-center mb-8">
              <h1 className="text-5xl font-bold mb-4">
                Blog & <span className="text-[#0f81fb]">Updates</span>
              </h1>
              <p className="text-xl text-[#888] max-w-3xl mx-auto">
                Stay updated with the latest insights, engineering updates, product releases, and company news from our team.
              </p>
            </div>

            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#888]" />
                <Input
                  type="search"
                  placeholder="Search blog posts and updates..."
                  className="pl-10 bg-[#111] border-[#333] text-white placeholder-[#888] focus:border-[#0f81fb]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => {
                const IconComponent = category.icon
                const isActive = selectedCategory === category.name
                return (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#0f81fb] text-white'
                        : 'bg-[#111] text-[#888] hover:text-white hover:bg-[#333] border border-[#333]'
                    }`}
                  >
                    <IconComponent className="h-4 w-4 mr-2" />
                    {category.name}
                  </button>
                )
              })}
            </div>

            <div className="text-center">
              <Button variant="ghost" size="sm" className="text-[#888] hover:text-white">
                <Rss className="h-4 w-4 mr-2" />
                Subscribe to RSS Feed
              </Button>
            </div>
          </div>
        </div>

        <div className="container max-w-4xl mx-auto px-8 py-12">
          {filteredContent.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold mb-4">No posts found</h3>
              <p className="text-[#888] mb-6">
                {searchQuery 
                  ? `No posts match your search for "${searchQuery}".` 
                  : `No posts found in the "${selectedCategory}" category.`
                }
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('All Posts')
                }}
                className="border-[#333] text-[#888] hover:text-white"
              >
                Clear Filters
              </Button>
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