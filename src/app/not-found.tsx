import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-8">
          <div className="mb-8">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
            <p className="text-xl text-[#888] mb-8">
              Sorry, we couldn't find the page you're looking for.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="bg-[#0f81fb] text-white hover:bg-[#0c6cd4]">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Button>
            </Link>
            <Link href="/blog">
              <Button variant="outline" className="border-[#333] text-[#888] hover:text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Browse Blog
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
} 