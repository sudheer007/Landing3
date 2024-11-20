'use client'

import { useState } from 'react'
import Link from "next/link"
import Image from "next/image" // Uncomment if you plan to use Image
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { ArrowRight, CheckCircle2, Layout, GitBranch, Eye, Shield, Box, Activity, BarChart, Code2 } from 'lucide-react'

export default function Component() {
  const [activeNav, setActiveNav] = useState<string | null>(null)

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="sticky top-0 z-50 w-full border-b border-[#333] bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center justify-between max-w-full px-4">
          <div className="flex items-center space-x-8">
            <Link className="flex items-center space-x-2" href="/">
              <Image src="/logo.png" alt="Your Logo" width={40} height={40} className="h-5 w-auto" />
              <span className="font-bold">Graycommit</span>
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={`bg-transparent text-[#888] hover:text-white hover:bg-[#333] ${
                      activeNav === 'products' ? 'bg-[#333] text-white' : ''
                    }`}
                    onClick={() => setActiveNav(activeNav === 'products' ? null : 'products')}
                  >
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[750px] p-6 bg-black border border-[#333]">
                      <div className="grid grid-cols-3 gap-6">
                        <div className="space-y-4">
                          <h3 className="text-sm font-medium text-[#888]">DX Platform</h3>
                          <div className="space-y-4">
                            <NavigationMenuLink asChild>
                              <Link href="#" className="group flex items-start gap-4 rounded-lg p-3 hover:bg-[#111] text-white hover:text-white">
                                <div className="mt-1">
                                  <Layout className="h-5 w-5" />
                                </div>
                                <div>
                                  <div className="font-medium">Previews</div>
                                  <div className="text-sm text-[#888] group-hover:text-[#ccc]">Helping teams ship 6× faster</div>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Link href="#" className="group flex items-start gap-4 rounded-lg p-3 hover:bg-[#111] text-white hover:text-white">
                                <div className="mt-1">
                                  <Code2 className="h-5 w-5" />
                                </div>
                                <div>
                                  <div className="font-medium">AI</div>
                                  <div className="text-sm text-[#888] group-hover:text-[#ccc]">Powering breakthroughs</div>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <h3 className="text-sm font-medium text-[#888]">Managed Infrastructure</h3>
                          <div className="space-y-4">
                            <NavigationMenuLink asChild>
                              <Link href="#" className="group flex items-start gap-4 rounded-lg p-3 hover:bg-[#111] text-white hover:text-white">
                                <div className="mt-1">
                                  <Activity className="h-5 w-5" />
                                </div>
                                <div>
                                  <div className="font-medium">Rendering</div>
                                  <div className="text-sm text-[#888] group-hover:text-[#ccc]">Fast, scalable, and reliable</div>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Link href="#" className="group flex items-start gap-4 rounded-lg p-3 hover:bg-[#111] text-white hover:text-white">
                                <div className="mt-1">
                                  <BarChart className="h-5 w-5" />
                                </div>
                                <div>
                                  <div className="font-medium">Observability</div>
                                  <div className="text-sm text-[#888] group-hover:text-[#ccc]">Trace every step</div>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Link href="#" className="group flex items-start gap-4 rounded-lg p-3 hover:bg-[#111] text-white hover:text-white">
                                <div className="mt-1">
                                  <Shield className="h-5 w-5" />
                                </div>
                                <div>
                                  <div className="font-medium">Security</div>
                                  <div className="text-sm text-[#888] group-hover:text-[#ccc]">Scale without compromising</div>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <h3 className="text-sm font-medium text-[#888]">Open Source</h3>
                          <div className="space-y-4">
                            <NavigationMenuLink asChild>
                              <Link href="#" className="group flex items-start gap-4 rounded-lg p-3 hover:bg-[#111] text-white hover:text-white">
                                <div className="mt-1">
                                  <Box className="h-5 w-5" />
                                </div>
                                <div>
                                  <div className="font-medium">Next.js</div>
                                  <div className="text-sm text-[#888] group-hover:text-[#ccc]">The native Next.js platform</div>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Link href="#" className="group flex items-start gap-4 rounded-lg p-3 hover:bg-[#111] text-white hover:text-white">
                                <div className="mt-1">
                                  <GitBranch className="h-5 w-5" />
                                </div>
                                <div>
                                  <div className="font-medium">Turborep</div>
                                  <div className="text-sm text-[#888] group-hover:text-[#ccc]">Speed with Enterprise scale</div>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Link href="#" className="group flex items-start gap-4 rounded-lg p-3 hover:bg-[#111] text-white hover:text-white">
                                <div className="mt-1">
                                  <Eye className="h-5 w-5" />
                                </div>
                                <div>
                                  <div className="font-medium">AI SDK</div>
                                  <div className="text-sm text-[#888] group-hover:text-[#ccc]">The AI Toolkit for TypeScript</div>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {/* Similar structure for Solutions, Resources, etc. */}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-[#888] hover:text-white hover:bg-[#333]">Contact</Button>
            <Button variant="outline" className="border-[#333] text-black hover:bg-[#333]">Log In</Button>
            <Button className="bg-white text-black hover:bg-gray-200">Sign Up</Button>
          </div>
        </div>
      </header>

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

        {/* v1 Section */}
        <section className="py-24 relative border-t border-[#333]">
          <div className="container max-w-full px-4">
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
          <div className="container max-w-full px-4">
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

      <footer className="border-t border-[#333] py-12">
        <div className="container max-w-full px-4">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <h4 className="font-semibold">Products</h4>
              <ul className="space-y-2 text-sm text-[#888]">
                <li><Link href="#" className="hover:text-white">Infrastructure</Link></li>
                <li><Link href="#" className="hover:text-white">Preview Deployments</Link></li>
                <li><Link href="#" className="hover:text-white">Analytics</Link></li>
                <li><Link href="#" className="hover:text-white">Next.js</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Resources</h4>
              <ul className="space-y-2 text-sm text-[#888]">
                <li><Link href="#" className="hover:text-white">Documentation</Link></li>
                <li><Link href="#" className="hover:text-white">Guides</Link></li>
                <li><Link href="#" className="hover:text-white">Support</Link></li>
                <li><Link href="#" className="hover:text-white">API Reference</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-[#888]">
                <li><Link href="#" className="hover:text-white">About</Link></li>
                <li><Link href="#" className="hover:text-white">Blog</Link></li>
                <li><Link href="#" className="hover:text-white">Careers</Link></li>
                <li><Link href="#" className="hover:text-white">Contact Sales</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm text-[#888]">
                <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-white">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-white">Trademark Policy</Link></li>
                <li><Link href="#" className="hover:text-white">Inactivity Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#333] pt-8 sm:flex-row">
            <div className="flex items-center space-x-2">
              <svg className="h-5 w-5" viewBox="0 0 76 65" fill="currentColor">
                <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
              </svg>
              <span className="text-sm">© 2024 Vercel Inc.</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-sm text-[#888] hover:text-white">
                Status
              </Link>
              <Link href="#" className="text-sm text-[#888] hover:text-white">
                Changelog
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}