// Import content directly - in a real app, this would come from an API or CMS
import engineeringPost from '@/content/posts/engineering-post-1.json'
import communityPost from '@/content/posts/community-post-1.json'
import companyPost from '@/content/posts/company-news-1.json'
import aiCoachingChangelog from '@/content/changelog/2024-01-15-ai-coaching-v2.json'
import playbookChangelog from '@/content/changelog/2024-01-10-playbook-automation.json'
import securityChangelog from '@/content/changelog/2024-01-05-security-update.json'

export interface ContentItem {
  id: string
  type: 'blog' | 'changelog'
  category: string
  date: string
  title: string
  slug: string
  badge: string
  excerpt: string
  content: ContentBlock[]
  author: {
    name: string
    role: string
    avatar?: string
  }
  readTime?: string
  tags: string[]
  featured: boolean
  version?: string
  impacts?: {
    metric: string
    improvement: string
    description: string
  }[]
}

export interface ContentBlock {
  type: 'text' | 'heading' | 'list' | 'feature' | 'code' | 'image'
  content?: string
  level?: string
  items?: string[]
  title?: string
  description?: string
  impact?: string
  language?: string
  alt?: string
  src?: string
}

// Static content data
const allContentData: ContentItem[] = [
  engineeringPost as ContentItem,
  communityPost as ContentItem,
  companyPost as ContentItem,
  aiCoachingChangelog as ContentItem,
  playbookChangelog as ContentItem,
  securityChangelog as ContentItem
]

export function getAllContent(): ContentItem[] {
  // Sort by date (newest first)
  return allContentData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getContentByType(type: 'blog' | 'changelog' | 'all' = 'all'): ContentItem[] {
  const allContent = getAllContent()
  
  if (type === 'all') {
    return allContent
  }
  
  return allContent.filter(item => item.type === type)
}

export function getContentByCategory(category: string): ContentItem[] {
  const allContent = getAllContent()
  
  if (category === 'All Posts') {
    return allContent
  }
  
  return allContent.filter(item => 
    item.category.toLowerCase() === category.toLowerCase() ||
    item.type.toLowerCase() === category.toLowerCase()
  )
}

export function getFeaturedContent(): ContentItem[] {
  const allContent = getAllContent()
  return allContent.filter(item => item.featured)
}

export function searchContent(query: string): ContentItem[] {
  const allContent = getAllContent()
  const lowercaseQuery = query.toLowerCase()
  
  return allContent.filter(item => {
    // Safely check each field with fallbacks
    const title = (item.title || '').toLowerCase().includes(lowercaseQuery)
    const excerpt = (item.excerpt || '').toLowerCase().includes(lowercaseQuery)
    const authorName = (item.author?.name || '').toLowerCase().includes(lowercaseQuery)
    const category = (item.category || '').toLowerCase().includes(lowercaseQuery)
    
    // Safely check tags array
    const tags = Array.isArray(item.tags) 
      ? item.tags.some(tag => typeof tag === 'string' && tag.toLowerCase().includes(lowercaseQuery))
      : false
    
    return title || excerpt || authorName || tags || category
  })
}

export function getContentBySlug(slug: string): ContentItem | null {
  const allContent = getAllContent()
  return allContent.find(item => item.slug === slug) || null
}

export function getAllCategories(): string[] {
  const allContent = getAllContent()
  const categories = new Set<string>()
  
  // Add all unique categories
  allContent.forEach(item => {
    categories.add(item.category)
  })
  
  // Add type-based categories
  categories.add('Changelog')
  categories.add('Engineering')
  categories.add('Community')
  categories.add('Company News')
  
  return ['All Posts', ...Array.from(categories).sort()]
}

export function renderContentBlocks(blocks: ContentBlock[] | undefined | null): string {
  if (!blocks || !Array.isArray(blocks)) {
    return ''
  }
  
  return blocks.map(block => {
    if (!block || typeof block !== 'object') {
      return ''
    }
    
    switch (block.type) {
      case 'text':
        return `<p class="text-[#888] leading-relaxed mb-4">${block.content || ''}</p>`
      
      case 'heading':
        const HeadingTag = block.level || 'h3'
        return `<${HeadingTag} class="text-xl font-semibold text-white mt-6 mb-3">${block.content || ''}</${HeadingTag}>`
      
      case 'list':
        const listItems = block.items?.map(item => `<li class="text-[#888]">${item}</li>`).join('') || ''
        return `<ul class="list-disc pl-5 space-y-2 mb-4">${listItems}</ul>`
      
      case 'feature':
        return `<div class="bg-[#111] rounded-lg p-6 border border-[#333] mb-4">
            <h4 class="text-lg font-medium text-white mb-2">${block.title || ''}</h4>
            <p class="text-[#888] mb-3">${block.description || ''}</p>
            ${block.impact ? `<div class="text-sm text-[#0f81fb] font-medium">${block.impact}</div>` : ''}
          </div>`
      
      case 'code':
        return `<pre class="bg-[#111] rounded-lg p-4 overflow-x-auto mb-4 border border-[#333]">
            <code class="text-sm text-[#888]">${block.content || ''}</code>
          </pre>`
      
      case 'image':
        return `<div class="mb-4">
            <img src="${block.src || ''}" alt="${block.alt || ''}" class="w-full rounded-lg border border-[#333]" />
          </div>`
      
      default:
        return ''
    }
  }).join('')
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

export function getBadgeVariant(badge: string | undefined | null): {
  variant: string
  className: string
} {
  if (!badge || typeof badge !== 'string') {
    return { variant: 'outline', className: 'border-[#333] text-[#888]' }
  }
  
  const badgeLower = badge.toLowerCase()
  
  if (badgeLower.includes('major') || badgeLower.includes('release')) {
    return { variant: 'default', className: 'bg-[#0f81fb] text-white' }
  }
  
  if (badgeLower.includes('security')) {
    return { variant: 'default', className: 'bg-red-600 text-white' }
  }
  
  if (badgeLower.includes('feature') || badgeLower.includes('new')) {
    return { variant: 'outline', className: 'border-green-500 text-green-500' }
  }
  
  if (badgeLower.includes('engineering')) {
    return { variant: 'outline', className: 'border-blue-500 text-blue-500' }
  }
  
  if (badgeLower.includes('community')) {
    return { variant: 'outline', className: 'border-purple-500 text-purple-500' }
  }
  
  if (badgeLower.includes('company')) {
    return { variant: 'outline', className: 'border-yellow-500 text-yellow-500' }
  }
  
  return { variant: 'outline', className: 'border-[#333] text-[#888]' }
}