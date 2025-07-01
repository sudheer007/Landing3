'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen } from 'lucide-react'

export default function ChangelogRedirectPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect after a short delay to allow users to see the message
    const timer = setTimeout(() => {
      router.push('/blog')
    }, 3000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-8">
          <div className="mb-8">
            <BookOpen className="h-16 w-16 text-[#0f81fb] mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">
              We've moved our content!
            </h1>
            <p className="text-xl text-[#888] mb-8">
              All changelogs, updates, and blog posts are now available on our unified Blog page for better discoverability and SEO.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-[#888]">
              You'll be automatically redirected in 3 seconds...
            </p>
            
            <Link href="/blog">
              <Button className="bg-[#0f81fb] text-white hover:bg-[#0c6cd4]">
                <BookOpen className="mr-2 h-4 w-4" />
                Go to Blog & Updates
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="mt-12 text-sm text-[#666]">
            <p>Looking for something specific? Use the search and filters on our blog page.</p>
          </div>
        </div>
      </main>
    </div>
  )
}