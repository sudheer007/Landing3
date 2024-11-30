'use client'


import Link from "next/link"

import { Button } from "@/components/ui/button"

import { ArrowRight, CheckCircle2,  GitBranch, Eye } from 'lucide-react'

export default function Component() {
  

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      

      <main className="flex-grow">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#3D3D3D,_transparent_40%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#3D3D3D,_transparent_40%)]" />
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#333] to-transparent"
                  style={{ top: `${(i + 1) * 5}%` }}
                />
              ))}
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#333] to-transparent"
                  style={{ left: `${(i + 1) * 5}%` }}
                />
              ))}
            </div>
          </div>

          <div className="container relative max-w-full px-4">
            <div className="flex flex-col items-center justify-center space-y-4 py-20 text-center md:py-32">
              <div className="rounded-full bg-[#333] px-4 py-1.5 text-sm">
                <span className="text-[#0070F3] font-medium">New</span>
                {" Vercel named a Visionary in the Gartner® Magic Quadrant™ "}
                <Link href="#" className="inline-flex items-center font-medium text-white hover:text-[#0070F3]">
                  Read the report
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <h1 className="max-w-4xl text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Your complete platform for the web.
              </h1>
              <p className="max-w-[700px] text-xl text-[#888]">
                Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more
                personalized web.
              </p>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button size="lg" className="h-12 px-8 bg-white text-black hover:bg-gray-200">
                  Start Deploying
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 border-[#333] text-black hover:bg-[#333]">
                  Get a Demo
                </Button>
              </div>
            </div>

            <div className="relative mx-auto aspect-video w-full max-w-6xl">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF4D4D] via-[#F9CB28] to-[#4ADE80] opacity-20 blur-3xl" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#000,transparent_20%,transparent_80%,#000)]" />
              <div className="absolute inset-0">
                <div className="grid h-full w-full grid-cols-[repeat(auto-fit,minmax(2px,1fr))]">
                  {[...Array(100)].map((_, i) => (
                    <div
                      key={i}
                      className="h-full w-[2px] bg-gradient-to-b from-transparent via-[#333] to-transparent"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 relative border-t border-[#333]">
          {/* Changed from max-w-full to max-w-7xl and centered with mx-auto */}
          <div className="container mx-auto max-w-7xl px-6 sm:px-8">
            {/* Feature 1 - Image on left */}
            <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
              {/* Left: Image/Demo */}
              <div className="relative">
                <div className="aspect-square rounded-xl overflow-hidden bg-[#111] border border-[#333] relative">
                  {/* ... existing image container code ... */}
                </div>
              </div>
              
              {/* Right: Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center rounded-full bg-[#111] border border-[#333] px-4 py-1.5">
                  <span className="text-sm font-medium text-[#888]">New Feature</span>
                </div>
                <h2 className="text-4xl font-bold tracking-tight">
                  Build with unmatched speed
                </h2>
                <p className="text-xl text-[#888] leading-relaxed">
                  Experience lightning-fast development with our cutting-edge infrastructure. 
                  Deploy instantly and scale seamlessly as your needs grow.
                </p>
                <div className="space-y-4">
                  {/* Feature points */}
                  {[
                    'Instant deployments with zero config',
                    'Auto-scaling infrastructure',
                    'Global edge network',
                  ].map((point, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded-full bg-[#111] border border-[#333] flex items-center justify-center">
                        <CheckCircle2 className="h-4 w-4 text-[#0070F3]" />
                      </div>
                      <span className="text-[#888]">{point}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <Button variant="outline" className="bg-white text-black hover:bg-gray-200">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Feature 2 - Image on right */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left: Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center rounded-full bg-[#111] border border-[#333] px-4 py-1.5">
                  <span className="text-sm font-medium text-[#888]">Enterprise Ready</span>
                </div>
                <h2 className="text-4xl font-bold tracking-tight">
                  Scale with confidence
                </h2>
                <p className="text-xl text-[#888] leading-relaxed">
                  Built for enterprise-grade performance and reliability. 
                  Handle millions of requests with automated failover and zero downtime.
                </p>
                <div className="space-y-6">
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="rounded-lg bg-[#111] border border-[#333] p-4">
                      <div className="text-3xl font-bold">99.99%</div>
                      <div className="text-sm text-[#888]">Uptime SLA</div>
                    </div>
                    <div className="rounded-lg bg-[#111] border border-[#333] p-4">
                      <div className="text-3xl font-bold">≤ 50ms</div>
                      <div className="text-sm text-[#888]">Global Latency</div>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <Button variant="outline" className="bg-white text-black hover:bg-gray-200">
                    View documentation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Right: Image/Demo */}
              <div className="relative">
                <div className="aspect-square rounded-xl overflow-hidden bg-[#111] border border-[#333] relative">
                  {/* ... existing image container code ... */}
                </div>
              </div>
            </div>
          </div>
        </section>



        <section className="relative py-24 border-t border-[#333]">
          <div className="absolute inset-0">
            {/* Vertical lines */}
            {[...Array(40)].map((_, i) => (
              <div
                key={`v-${i}`}
                className="absolute top-0 bottom-0 w-[1px]"
                style={{ 
                  left: `${(i + 1) * 2.5}%`,
                  background: 'linear-gradient(to bottom, transparent, rgba(51, 51, 51, 0.5) 80%, transparent)',
                  opacity: '1'
                }}
              />
            ))}
            {/* Horizontal lines */}
            {[...Array(40)].map((_, i) => (
              <div
                key={`h-${i}`}
                className="absolute left-0 right-0 h-px"
                style={{ 
                  top: `${(i + 1) * 2.5}%`,
                  background: 'linear-gradient(to right, transparent, rgba(51, 51, 51, 0.5) 50%, transparent)',
                  opacity: '0.5'
                }}
              />
            ))}
          </div>

          <div className="container relative max-w-full px-4">
            <h2 className="text-3xl font-bold text-center mb-16">Trusted by</h2>
            <div className="grid grid-cols-3 gap-12 md:gap-24">
              {/* Row 1 */}
              <div className="flex items-center justify-center">
                <div className="text-2xl font-bold">groq</div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-2xl font-bold">Chroma</div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-2xl font-bold">Pika</div>
              </div>
              
              {/* Row 2 */}
              <div className="flex items-center justify-center">
                <div className="text-2xl font-bold">Suno</div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-2xl font-bold">LangChain</div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-2xl font-bold">Modal</div>
              </div>
              
              {/* Row 3 */}
              <div className="flex items-center justify-center">
                <div className="text-2xl font-bold">cohere</div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-2xl font-bold">Pinecone</div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-2xl font-bold">replicate</div>
              </div>
              
              {/* Row 4 */}
              <div className="flex items-center justify-center">
                <div className="text-2xl font-bold">runway</div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-2xl font-bold">stability.ai</div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-2xl font-bold">OpenAI</div>
              </div>
            </div>
          </div>
        </section>
        {/* v1 Section */}
        <section className="py-24 relative border-t border-[#333]">
            <div className="container mx-auto max-w-7xl px-4"> {/* Updated container */}
              <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
                <div className="space-y-8">
                  <h2 className="text-4xl font-bold">Go ahead, deploy on Friday.</h2>
                  <p className="text-2xl text-[#888]">Instantly rollback to a working deployment.</p>
                  <div className="space-y-4">
                    <div className="rounded-lg bg-[#111] p-4 border border-[#333]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <GitBranch className="h-5 w-5 text-[#888]" />
                          <div>
                            <div className="text-sm">vercel-site/jvjb4ynna</div>
                            <div className="text-xs text-[#888]">ba5f55f Update bento box design</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="text-sm text-[#888]">1d ago</div>
                          <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-black font-medium">90</div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg bg-[#111] p-4 border border-[#333]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <GitBranch className="h-5 w-5 text-[#888]" />
                          <div>
                            <div className="text-sm">vercel-site/gjgj178pv</div>
                            <div className="text-xs text-[#888]">bx012mm Fix ESLint error on query</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="text-sm text-[#888]">10m ago</div>
                          <div className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center text-black font-medium">55</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-8">
                  <h2 className="text-4xl font-bold">Move fast, dont break things.</h2>
                  <p className="text-2xl text-[#888]">Keep quality high while maintaining velocity with Enterprise Monorepos.</p>
                  <div className="rounded-lg bg-[#111] p-6 space-y-6 border border-[#333]">
                    <div className="flex items-center justify-between">
                      <div className="text-lg">Conformance</div>
                      <div className="flex items-center space-x-2">
                        <div className="text-[#888]">Excellent</div>
                        <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-black font-medium">9.5</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="text-sm text-[#888]">Total Issues</div>
                        <div className="text-2xl font-bold">34</div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm text-[#888]">Major Issues</div>
                        <div className="text-2xl font-bold">12</div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="text-sm">@vercel/design</div>
                        <div className="flex -space-x-2">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="h-8 w-8 rounded-full bg-[#333] border-2 border-black" />
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm">@vercel/eng</div>
                        <div className="flex -space-x-2">
                          {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="h-8 w-8 rounded-full bg-[#333] border-2 border-black" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> 

        {/* v2 Section */}
        <section className="py-24 relative border-t border-[#333]">
            <div className="container mx-auto max-w-7xl px-4"> {/* Updated container */}
              <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
              <div className="space-y-8">
                <h2 className="text-4xl font-bold">Develop with confidence.</h2>
                <p className="text-2xl text-[#888]">Preview changes instantly with zero configuration.</p>
                <div className="space-y-4">
                  <div className="rounded-lg bg-[#111] p-4 border border-[#333]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Eye className="h-5 w-5 text-[#888]" />
                        <div>
                          <div className="text-sm">Preview Deployment</div>
                          <div className="text-xs text-[#888]">feature/new-landing-page</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="text-sm text-[#888]">5m ago</div>
                        <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-black font-medium">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <h2 className="text-4xl font-bold">Ship with confidence.</h2>
                <p className="text-2xl text-[#888]">Automated CI/CD pipeline for seamless deployments.</p>
                <div className="rounded-lg bg-[#111] p-6 space-y-6 border border-[#333]">
                  <div className="flex items-center justify-between">
                    <div className="text-lg">Deployment Status</div>
                    <div className="flex items-center space-x-2">
                      <div className="text-[#888]">Production</div>
                      <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-black font-medium">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm">Build Time</div>
                      <div className="text-sm text-[#888]">45s</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">First Contentful Paint</div>
                      <div className="text-sm text-[#888]">0.8s</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">Time to Interactive</div>
                      <div className="text-sm text-[#888]">1.2s</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative border-t border-[#333]">
          <div className="container max-w-full px-4">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Start building on Vercel
              </h2>
              <p className="max-w-[600px] text-lg text-[#888]">
                Deploy your first project in seconds.
              </p>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button size="lg" className="h-12 px-8 bg-white text-black hover:bg-gray-200">
                  Start Deploying
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 border-[#333] text-white hover:bg-[#333]">
                  Get a Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  )
}