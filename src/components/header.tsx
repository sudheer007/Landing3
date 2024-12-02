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
                    <div className="grid grid-cols-2 gap-6">
                      {/* Sales Intelligence Platform */}
                      <div className="space-y-4">
                        <h3 className="text-sm font-medium text-[#888]">Revenue Intelligence</h3>
                        <div className="space-y-4">
                          <NavigationMenuLink asChild>
                            <Link href="/products" className="group flex items-start gap-4 rounded-lg p-3 hover:bg-[#111] text-white hover:text-white">
                              <div className="mt-1">
                                <Activity className="h-5 w-5 text-[#0f81fb]" />
                              </div>
                              <div>
                                <div className="font-medium">Real-time AI Coach</div>
                                <div className="text-sm text-[#888] group-hover:text-[#ccc]">
                                  Live deal guidance, competitive intel, and objection handling during calls
                                </div>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                          
                        </div>
                      </div>

                      {/* Sales Enablement Suite */}
                      <div className="space-y-4">
                        <h3 className="text-sm font-medium text-[#888]">Sales Excellence</h3>
                        <div className="space-y-4">
                          <NavigationMenuLink asChild>
                            <Link href="/products/sales-enablement" className="group flex items-start gap-4 rounded-lg p-3 hover:bg-[#111] text-white hover:text-white">
                              <div className="mt-1">
                                <Layout className="h-5 w-5 text-[#0f81fb]" />
                              </div>
                              <div>
                                <div className="font-medium">Playbook Automation</div>
                                <div className="text-sm text-[#888] group-hover:text-[#ccc]">
                                  AI-powered playbooks that adapt to each deal context
                                </div>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                          
                        </div>
                      </div>
                    </div>

                    {/* Bottom Banner */}
                    <div className="mt-6 p-4 bg-[#111] rounded-lg border border-[#333]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Shield className="h-5 w-5 text-[#0f81fb]" />
                          <div>
                            <div className="font-medium text-white">Enterprise Ready</div>
                            <div className="text-sm text-[#888]">SOC 2 Type II, GDPR, and HIPAA compliant</div>
                          </div>
                        </div>
                        <Button variant="ghost" className="text-[#0f81fb] hover:text-white hover:bg-[#333]">
                          Learn More →
                        </Button>
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
          <Link href="/pricing">
            <Button variant="ghost" className="text-[#888] hover:text-white hover:bg-[#333] hidden sm:inline-flex">
              Pricing
            </Button>
          </Link>
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
