'use client'

import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, CheckCircle2, Layout, GitBranch, Eye, Globe, Terminal, Zap } from 'lucide-react'

export default function PreviewsPage() {
  const [_activeNav, _setActiveNav] = useState<string | null>(null)

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Reuse the same header from homepage */}
      

      <main className="flex-grow">
        {/* Hero Section */}
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
            </div>
          </div>

          <div className="container relative max-w-[1200px] px-4">
            <div className="flex flex-col items-center justify-center space-y-6 py-20 text-center md:py-32">
              <div className="flex items-center space-x-2">
                <Layout className="h-6 w-6" />
                <span className="text-lg font-medium">Previews</span>
              </div>
              <h1 className="max-w-3xl text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Preview every code change with zero configuration
              </h1>
              <p className="max-w-[700px] text-xl text-[#888]">
                Get a shareable URL for every commit. Perfect for code reviews, bug reporting, and gathering feedback from your team.
              </p>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button size="lg" className="h-12 px-8 bg-white text-black hover:bg-gray-200">
                  Start Deploying
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 border-[#333] text-white hover:bg-[#333]">
                  Contact Sales
                </Button>
              </div>
            </div>

            {/* Preview Demo Section */}
            <div className="relative mx-auto mb-20 aspect-video w-full max-w-5xl rounded-lg border border-[#333] bg-[#111]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="space-y-6 p-8">
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-[#333]" />
                    <div className="space-y-2">
                      <div className="h-4 w-32 rounded bg-[#333]" />
                      <div className="h-3 w-24 rounded bg-[#222]" />
                    </div>
                  </div>
                  <div className="grid gap-4">
                    <div className="h-4 w-full rounded bg-[#333]" />
                    <div className="h-4 w-3/4 rounded bg-[#333]" />
                    <div className="h-4 w-5/6 rounded bg-[#333]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Preview Interface Section */}
        <section className="py-24 relative border-t border-[#333]">
          <div className="container max-w-[1200px] px-4">
            <div className="grid md:grid-cols-[1px,1fr] gap-12">
              <div className="hidden md:block w-px bg-red-500 relative">
                <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 size-12 rounded-full border-4 border-black bg-red-500 flex items-center justify-center">
                  <div className="size-4 rounded-full bg-black" />
                </div>
              </div>
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Push to preview.</h2>
                  <p className="text-xl text-[#888]">
                    Setting up staging shouldn&apos;t be a separate step. With Vercel&apos;s DX Platform, every PR gets its own, fully-functional, evergreen environment.
                  </p>
                </div>

                <div className="rounded-lg border border-[#333] bg-[#111] overflow-hidden">
                  <div className="p-4 space-y-4">
                    <div className="flex items-center gap-2 text-sm text-[#888]">
                      <span className="font-medium text-white">vercel</span>
                      <span className="px-1.5 py-0.5 rounded-full bg-[#222] text-xs">bot</span>
                      <span>commented just now</span>
                    </div>

                    <div className="space-y-2">
                      <p>The latest updates on your project. Learn more about <Link href="#" className="text-blue-500 hover:underline">Vercel for Git <ArrowRight className="inline-block h-3 w-3" /></Link></p>

                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="border-b border-[#333]">
                              <th className="py-2 px-4 text-left font-medium">Name</th>
                              <th className="py-2 px-4 text-left font-medium">Status</th>
                              <th className="py-2 px-4 text-left font-medium">Preview</th>
                              <th className="py-2 px-4 text-left font-medium">Comments</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-[#333]">
                              <td className="py-2 px-4">app</td>
                              <td className="py-2 px-4">
                                <div className="flex items-center gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                                  <span>Ready</span>
                                  <Link href="#" className="text-blue-500 hover:underline">(Inspect)</Link>
                                </div>
                              </td>
                              <td className="py-2 px-4">
                                <Link href="#" className="text-blue-500 hover:underline">Visit Preview</Link>
                              </td>
                              <td className="py-2 px-4">
                                <div className="flex items-center gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                                  <span>3 Resolved</span>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="py-2 px-4">site</td>
                              <td className="py-2 px-4">
                                <div className="flex items-center gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                                  <span>Ready</span>
                                  <Link href="#" className="text-blue-500 hover:underline">(Inspect)</Link>
                                </div>
                              </td>
                              <td className="py-2 px-4">
                                <Link href="#" className="text-blue-500 hover:underline">Visit Preview</Link>
                              </td>
                              <td className="py-2 px-4">
                                <Link href="#" className="text-blue-500 hover:underline flex items-center gap-1">
                                  <Eye className="h-4 w-4" />
                                  Comment
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 relative border-t border-[#333]">
          <div className="container max-w-[1200px] px-4">
            <div className="grid gap-12 md:grid-cols-3">
              <div className="space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#111] border border-[#333]">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Instant Global Deployments</h3>
                <p className="text-[#888]">
                  Every git push creates a new deployment with its own URL, automatically distributed to our global edge network.
                </p>
              </div>
              <div className="space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#111] border border-[#333]">
                  <Terminal className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Zero Configuration</h3>
                <p className="text-[#888]">
                  Automatic preview deployments for every push. No setup required. Works out of the box with your existing workflow.
                </p>
              </div>
              <div className="space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#111] border border-[#333]">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Instant Feedback</h3>
                <p className="text-[#888]">
                  Share preview URLs with your team to get immediate feedback on your changes. Perfect for code reviews and QA.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Deployment Preview Section */}
        <section className="py-24 relative border-t border-[#333] bg-[#111]">
          <div className="container max-w-[1200px] px-4">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold md:text-4xl">Preview every pull request</h2>
                <p className="text-lg text-[#888]">
                  Get a unique URL for every code change. Share with your team, gather feedback, and iterate faster.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>Automatic deployments for every push</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>Instant rollbacks if something goes wrong</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>Built-in CI/CD pipeline</span>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-[#333] bg-black p-6">
                <Tabs defaultValue="preview" className="w-full">
                  <TabsList className="w-full bg-[#111] border-b border-[#333]">
                    <TabsTrigger value="preview" className="flex-1">Preview</TabsTrigger>
                    <TabsTrigger value="production" className="flex-1">Production</TabsTrigger>
                  </TabsList>
                  <TabsContent value="preview" className="space-y-4 mt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <GitBranch className="h-5 w-5 text-[#888]" />
                        <div>
                          <div className="text-sm">feature/new-landing</div>
                          <div className="text-xs text-[#888]">Latest commit 3m ago</div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="border-[#333] text-white hover:bg-[#333]">
                        View Build
                      </Button>
                    </div>
                    <div className="h-[300px] rounded-lg border border-[#333] bg-[#111] p-4">
                      <div className="space-y-2">
                        <div className="h-4 w-3/4 rounded bg-[#222]" />
                        <div className="h-4 w-1/2 rounded bg-[#222]" />
                        <div className="h-4 w-5/6 rounded bg-[#222]" />
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="production" className="space-y-4 mt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <GitBranch className="h-5 w-5 text-[#888]" />
                        <div>
                          <div className="text-sm">main</div>
                          <div className="text-xs text-[#888]">Deployed 1h ago</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                        <span className="text-sm text-[#888]">Live</span>
                      </div>
                    </div>
                    <div className="h-[300px] rounded-lg border border-[#333] bg-[#111] p-4">
                      <div className="space-y-2">
                        <div className="h-4 w-2/3 rounded bg-[#222]" />
                        <div className="h-4 w-3/4 rounded bg-[#222]" />
                        <div className="h-4 w-1/2 rounded bg-[#222]" />
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 relative border-t border-[#333]">
          <div className="container max-w-[1200px] px-4">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border border-[#333] bg-[#111] p-8">
                <div className="flex items-center gap-4">
                  <Image
                    src="/placeholder.svg"
                    alt="Company Logo"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-medium">Company Name</div>
                    <div className="text-sm text-[#888]">Reduced deployment time by 80%</div>
                  </div>
                </div>
                <p className="mt-4 text-[#888]">
                &quot;Preview deployments have completely transformed our development workflow. We can now iterate faster and get
                  immediate feedback from our team.&quot;
                </p>
              </div>
              <div className="rounded-lg border border-[#333] bg-[#111] p-8">
                <div className="flex items-center gap-4">
                  <Image
                    src="/placeholder.svg"
                    alt="Company Logo"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-medium">Company Name</div>
                    <div className="text-sm text-[#888]">Improved team collaboration by 60%</div>
                  </div>
                </div>
                <p className="mt-4 text-[#888]">
                &quot;The ability to preview changes before they go live has significantly reduced our QA time and improved our
                  deployment confidence.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative border-t border-[#333]">
          <div className="container max-w-[1200px] px-4">
            <div className="flex flex-col items-center text-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Start previewing your deployments
              </h2>
              <p className="max-w-[600px] text-lg text-[#888]">
                Get started with preview deployments in seconds. No configuration required.
              </p>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button size="lg" className="h-12 px-8 bg-white text-black hover:bg-gray-200">
                  Start Deploying
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 border-[#333] text-white hover:bg-[#333]">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>


    </div>
  )
}