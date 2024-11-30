'use client'

import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { telgraf } from "@/app/fonts/fonts"
import { Layout, GitBranch, Eye, Shield, Box, Activity, BarChart, Code2 } from 'lucide-react'

export function Header() {
  const [activeNav, setActiveNav] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#333] bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container flex h-16 items-center justify-between max-w-full px-4">
        <div className="flex items-center space-x-4 sm:space-x-8">
          <Link className="flex items-center space-x-2" href="/">
            <Image 
              src="/logo.png" 
              alt="Your Logo" 
              width={40} 
              height={40} 
              className="h-5 w-auto"
              priority
            />
            <span className={`${telgraf.className} text-xl font-semibold`}>Graycommit</span>
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
                            <Link href="/products" className="group flex items-start gap-4 rounded-lg p-3 hover:bg-[#111] text-white hover:text-white">
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
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Button variant="ghost" className="text-[#888] hover:text-white hover:bg-[#333] hidden sm:inline-flex">
            Contact
          </Button>
          <Link href="https://apps.graycommit.com/">
            <Button variant="outline" className="text-black bg-white hover:bg-gray-200">
              Log In
            </Button>
          </Link>
          <Link href="https://apps.graycommit.com/signup">
            <Button className="text-black bg-white hover:bg-gray-200 hidden sm:inline-flex">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
