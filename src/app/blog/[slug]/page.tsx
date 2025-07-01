'use client'

import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, User, Tag, Share2 } from 'lucide-react'
import { 
  ContentItem, 
  getAllContent, 
  formatDate, 
  getBadgeVariant,
  renderContentBlocks
} from '@/lib/content'

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  const [post, setPost] = useState<ContentItem | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<ContentItem[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const allContent = getAllContent()
    const foundPost = allContent.find(item => item.slug === slug)
    
    if (foundPost) {
      setPost(foundPost)
      
      // Get related posts (same category, exclude current post)
      const related = allContent
        .filter(item => 
          item.category === foundPost.category && 
          item.id !== foundPost.id
        )
        .slice(0, 3)
      setRelatedPosts(related)
    }
    
    setIsLoading(false)
  }, [slug])

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col bg-black text-white">
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0f81fb] mx-auto mb-4"></div>
            <p className="text-[#888]">Loading post...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col bg-black text-white">
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">📄</div>
            <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
            <p className="text-[#888] mb-6">The blog post you're looking for doesn't exist.</p>
            <Link href="/blog">
              <Button variant="outline" className="border-[#333] text-[#888] hover:text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Posts
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const badgeStyle = getBadgeVariant(post.badge)

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <main className="flex-grow">
        {/* Header */}
        <div className="border-b border-[#333] bg-black">
          <div className="container max-w-4xl mx-auto px-8 py-6">
            <Link href="/blog" className="inline-flex items-center text-[#888] hover:text-white mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Posts
            </Link>
          </div>
        </div>

        {/* Article */}
        <article className="container max-w-4xl mx-auto px-8 py-12">
          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${badgeStyle.className}`}>
                {post.badge}
              </span>
              <div className="flex items-center gap-4 text-sm text-[#888]">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <time>{formatDate(post.date)}</time>
                </div>
                {post.readTime && (
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                )}
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-xl text-[#888] leading-relaxed mb-8">
              {post.excerpt}
            </p>

            {/* Author */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-[#333] flex items-center justify-center">
                  <User className="h-6 w-6 text-[#888]" />
                </div>
                <div>
                  <div className="font-medium text-white">
                    {post.author?.name || 'Unknown Author'}
                  </div>
                  <div className="text-sm text-[#888]">
                    {post.author?.role || ''}
                  </div>
                </div>
              </div>

              <Button variant="ghost" size="sm" className="text-[#888] hover:text-white">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </header>

          {/* Article Content */}
          <div 
            className="prose prose-invert prose-lg max-w-none mb-12"
            style={{
              '--tw-prose-body': '#cccccc',
              '--tw-prose-headings': '#ffffff',
              '--tw-prose-lead': '#aaaaaa',
              '--tw-prose-links': '#0f81fb',
              '--tw-prose-bold': '#ffffff',
              '--tw-prose-counters': '#888888',
              '--tw-prose-bullets': '#888888',
              '--tw-prose-hr': '#333333',
              '--tw-prose-quotes': '#cccccc',
              '--tw-prose-quote-borders': '#333333',
              '--tw-prose-captions': '#888888',
              '--tw-prose-code': '#ffffff',
              '--tw-prose-pre-code': '#cccccc',
              '--tw-prose-pre-bg': '#111111',
              '--tw-prose-th-borders': '#333333',
              '--tw-prose-td-borders': '#333333',
            } as any}
            dangerouslySetInnerHTML={{ 
              __html: renderContentBlocks(post.content)
            }}
          />

          {/* Tags */}
          {Array.isArray(post.tags) && post.tags.length > 0 && (
            <div className="mb-12">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Tag className="h-5 w-5 mr-2" />
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-[#111] text-[#888] text-sm rounded-full border border-[#333] hover:border-[#0f81fb] transition-colors"
                  >
                    #{typeof tag === 'string' ? tag : ''}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Impacts (for changelog entries) */}
          {post.impacts && Array.isArray(post.impacts) && post.impacts.length > 0 && (
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-white mb-6">📊 Impact Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {post.impacts.map((impact, index) => (
                  <div key={index} className="bg-[#111] rounded-lg p-6 border border-[#333] text-center">
                    <div className="text-3xl font-bold text-[#0f81fb] mb-2">
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
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="border-t border-[#333] bg-[#0A0A0A]">
            <div className="container max-w-4xl mx-auto px-8 py-12">
              <h2 className="text-2xl font-bold mb-8">Related Posts</h2>
              <div className="grid gap-6">
                {relatedPosts.map((relatedPost) => {
                  const relatedBadgeStyle = getBadgeVariant(relatedPost.badge)
                  return (
                    <Link 
                      key={relatedPost.id} 
                      href={`/blog/${relatedPost.slug}`}
                      className="block group"
                    >
                      <div className="bg-[#111] rounded-lg p-6 border border-[#333] hover:border-[#0f81fb] transition-all">
                        <div className="flex items-start justify-between mb-4">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${relatedBadgeStyle.className}`}>
                            {relatedPost.badge}
                          </span>
                          <div className="text-sm text-[#888]">
                            {formatDate(relatedPost.date)}
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-[#0f81fb] transition-colors mb-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-[#888] line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  )
} 