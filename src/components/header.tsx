'use client'

import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
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
                  className={`bg-transparent text-[#888] hover:text-white hover:bg-[#333] hidden sm:inline-flex ${
                    activeNav === 'products' ? 'bg-[#333] text-white' : ''
                  }`}
                  onClick={() => setActiveNav(activeNav === 'products' ? null : 'products')}
                >
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  {/* Desktop View (md and above) */}
                  <div className="hidden md:block w-[750px] p-6 bg-black border border-[#333]">
                    <div className="grid grid-cols-2 gap-6">
                      {/* Revenue Intelligence */}
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

                      {/* Sales Excellence */}
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
                        <Link href="/products">
                          <Button variant="ghost" className="text-[#0f81fb] hover:text-white hover:bg-[#333]">
                            Learn More →
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Mobile View (smaller than md) */}
                  <div className="md:hidden w-screen bg-black border border-[#333] p-4">
                    <div className="space-y-6">
                      {/* Revenue Intelligence */}
                      <div className="space-y-3">
                        <h3 className="text-sm font-medium text-[#888]">Revenue Intelligence</h3>
                        <NavigationMenuLink asChild>
                          <Link href="/products" className="group flex items-start gap-3 rounded-lg p-3 hover:bg-[#111] text-white">
                            <Activity className="h-5 w-5 text-[#0f81fb] shrink-0 mt-0.5" />
                            <div>
                              <div className="font-medium">Real-time AI Coach</div>
                              <div className="text-sm text-[#888] group-hover:text-[#ccc] line-clamp-2">
                                Live deal guidance and coaching
                              </div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </div>

                      {/* Sales Excellence */}
                      <div className="space-y-3">
                        <h3 className="text-sm font-medium text-[#888]">Sales Excellence</h3>
                        <NavigationMenuLink asChild>
                          <Link href="/products/sales-enablement" className="group flex items-start gap-3 rounded-lg p-3 hover:bg-[#111] text-white">
                            <Layout className="h-5 w-5 text-[#0f81fb] shrink-0 mt-0.5" />
                            <div>
                              <div className="font-medium">Playbook Automation</div>
                              <div className="text-sm text-[#888] group-hover:text-[#ccc] line-clamp-2">
                                AI-powered playbooks
                              </div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </div>

                      {/* Mobile Bottom Banner */}
                      <div className="mt-4 p-3 bg-[#111] rounded-lg border border-[#333]">
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center gap-3">
                            <Shield className="h-5 w-5 text-[#0f81fb] shrink-0" />
                            <div>
                              <div className="font-medium text-white">Enterprise Ready</div>
                              <div className="text-sm text-[#888]">SOC 2 Type II Certified</div>
                            </div>
                          </div>
                          <Link href="/products">
                            <Button variant="ghost" className="w-full text-[#0f81fb] hover:text-white hover:bg-[#333]">
                              Learn More →
                            </Button>
                          </Link>
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
          <Link href="/pricing">
            <Button variant="ghost" className="text-[#888] hover:text-white hover:bg-[#333] hidden sm:inline-flex">
              Pricing
            </Button>
          </Link>
          <Link href="https://tidycal.com/sudheer.sandu/problemoverview" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" className="text-[#888] hover:text-white hover:bg-[#333] hidden sm:inline-flex">
              Contact
            </Button>
          </Link>
          <Link href="https://app.graycommit.com" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="text-black bg-white hover:bg-gray-200">
              Log In
            </Button>
          </Link>
          <Link href="https://app.graycommit.com" target="_blank" rel="noopener noreferrer">
            <Button className="text-black bg-white hover:bg-gray-200 hidden sm:inline-flex">
              Sign Up
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-[#888] hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[#333] bg-black">
          <div className="container py-4 px-4 space-y-4">
            <div className="space-y-4">
              <div className="font-medium text-[#888]">Products</div>
              <div className="pl-4 space-y-3">
                <Link 
                  href="/products"
                  className="flex items-center gap-3 p-2 text-[#888] hover:text-white rounded-lg hover:bg-[#111]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Activity className="h-5 w-5 text-[#0f81fb]" />
                  <span>Real-time AI Coach</span>
                </Link>
                <Link 
                  href="/products/sales-enablement"
                  className="flex items-center gap-3 p-2 text-[#888] hover:text-white rounded-lg hover:bg-[#111]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Layout className="h-5 w-5 text-[#0f81fb]" />
                  <span>Playbook Automation</span>
                </Link>
              </div>
            </div>
            
            <Link 
              href="/pricing"
              className="block p-2 text-[#888] hover:text-white rounded-lg hover:bg-[#111]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            
            <Link 
              href="https://tidycal.com/sudheer.sandu/problemoverview"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-2 text-[#888] hover:text-white rounded-lg hover:bg-[#111]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="pt-4 space-y-4">
              <Link 
                href="https://app.graycommit.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button variant="outline" className="w-full text-black bg-white hover:bg-gray-200">
                  Log In
                </Button>
              </Link>
              <Link 
                href="https://app.graycommit.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button className="w-full text-black bg-white hover:bg-gray-200 mt-2">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
