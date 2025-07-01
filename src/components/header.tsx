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
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
            <span className={`${telgraf.className} text-xl font-semibold text-foreground`}>Graycommit</span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  className={`bg-transparent text-muted-foreground hover:text-foreground hover:bg-accent hidden sm:inline-flex ${
                    activeNav === 'products' ? 'bg-accent text-foreground' : ''
                  }`}
                  onClick={() => setActiveNav(activeNav === 'products' ? null : 'products')}
                >
                  Features
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  {/* Desktop View (md and above) */}
                  <div className="hidden md:block w-[750px] p-6 bg-card border border-border">
                    <div className="grid grid-cols-2 gap-6">
                      {/* Revenue Intelligence */}
                      <div className="space-y-4">
                        <h3 className="text-sm font-medium text-muted-foreground">Revenue Intelligence</h3>
                        <div className="space-y-4">
                          <NavigationMenuLink asChild>
                            <Link href="/products" className="group flex items-start gap-4 rounded-lg p-3 hover:bg-muted text-foreground hover:text-foreground">
                              <div className="mt-1">
                                <Activity className="h-5 w-5 text-[#0f81fb]" />
                              </div>
                              <div>
                                <div className="font-medium">Realtime Playbook for meetings</div>
                                <div className="text-sm text-muted-foreground group-hover:text-foreground">
                                  Create Playbooks for each company and for any stage of the sales process, Load your research onto Playbooks and use it during meetings.
                                </div>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>

                      {/* Sales Excellence */}
                      <div className="space-y-4">
                        <h3 className="text-sm font-medium text-muted-foreground">Sales Excellence</h3>
                        <div className="space-y-4">
                          <NavigationMenuLink asChild>
                            <Link href="/products/deepsearch" className="group flex items-start gap-4 rounded-lg p-3 hover:bg-muted text-foreground hover:text-foreground">
                              <div className="mt-1">
                                <Layout className="h-5 w-5 text-[#0f81fb]" />
                              </div>
                              <div>
                                <div className="font-medium">DeepSearch</div>
                                <div className="text-sm text-muted-foreground group-hover:text-foreground">
                                  Ask questions to any LLM and get intelligent responses
                                </div>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Banner */}
                    <div className="mt-6 p-4 bg-muted rounded-lg border border-border">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Shield className="h-5 w-5 text-[#0f81fb]" />
                          <div>
                            <div className="font-medium text-foreground">Enterprise Ready</div>
                            <div className="text-sm text-muted-foreground">SOC 2 Type II, GDPR, and HIPAA compliant</div>
                          </div>
                        </div>
                        <Link href="/products">
                          <Button variant="ghost" className="text-[#0f81fb] hover:text-foreground hover:bg-accent">
                            Learn More →
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Mobile View (smaller than md) */}
                  <div className="md:hidden w-screen bg-card border border-border p-4">
                    <div className="space-y-6">
                      {/* Revenue Intelligence */}
                      <div className="space-y-3">
                        <h3 className="text-sm font-medium text-muted-foreground">Revenue Intelligence</h3>
                        <NavigationMenuLink asChild>
                          <Link href="/products" className="group flex items-start gap-3 rounded-lg p-3 hover:bg-muted text-foreground">
                            <Activity className="h-5 w-5 text-[#0f81fb] shrink-0 mt-0.5" />
                            <div>
                              <div className="font-medium">Realtime Playbook for meetings</div>
                              <div className="text-sm text-muted-foreground group-hover:text-foreground line-clamp-2">
                                Live deal guidance and coaching
                              </div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </div>

                      {/* Sales Excellence */}
                      <div className="space-y-3">
                        <h3 className="text-sm font-medium text-muted-foreground">Sales Excellence</h3>
                        <NavigationMenuLink asChild>
                          <Link href="/products/deepsearch" className="group flex items-start gap-3 rounded-lg p-3 hover:bg-muted text-foreground">
                            <Layout className="h-5 w-5 text-[#0f81fb] shrink-0 mt-0.5" />
                            <div>
                              <div className="font-medium">DeepSearch</div>
                              <div className="text-sm text-muted-foreground group-hover:text-foreground line-clamp-2">
                                Ask questions to any LLM
                              </div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </div>

                      {/* Mobile Bottom Banner */}
                      <div className="mt-4 p-3 bg-muted rounded-lg border border-border">
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center gap-3">
                            <Shield className="h-5 w-5 text-[#0f81fb] shrink-0" />
                            <div>
                              <div className="font-medium text-foreground">Enterprise Ready</div>
                              <div className="text-sm text-muted-foreground">SOC 2 Type II Certified</div>
                            </div>
                          </div>
                          <Link href="/products">
                            <Button variant="ghost" className="w-full text-[#0f81fb] hover:text-foreground hover:bg-accent">
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
          <Link href="/blog">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground hover:bg-accent hidden sm:inline-flex">
              Blog
            </Button>
          </Link>
          <Link href="/pricing">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground hover:bg-accent hidden sm:inline-flex">
              Pricing
            </Button>
          </Link>
          <Link href="https://tidycal.com/sudheer.sandu/problemoverview" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground hover:bg-accent hidden sm:inline-flex">
              Contact
            </Button>
          </Link>
          <Link href="https://app.graycommit.com" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="text-foreground bg-background hover:bg-accent border-border">
              Log In
            </Button>
          </Link>
          <Link href="https://app.graycommit.com" target="_blank" rel="noopener noreferrer">
            <Button className="text-background bg-foreground hover:bg-foreground/90 hidden sm:inline-flex">
              Sign Up
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground"
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
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-4 px-4 space-y-4">
            <div className="space-y-4">
              <div className="font-medium text-muted-foreground">Products</div>
              <div className="pl-4 space-y-3">
                <Link 
                  href="/products"
                  className="flex items-center gap-3 p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Activity className="h-5 w-5 text-[#0f81fb]" />
                  <span>Real-time AI Coach</span>
                </Link>
                <Link 
                  href="/products/sales-enablement"
                  className="flex items-center gap-3 p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Layout className="h-5 w-5 text-[#0f81fb]" />
                  <span>Playbook Automation</span>
                </Link>
              </div>
            </div>
            
            <Link 
              href="/blog"
              className="block p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            
            <Link 
              href="/pricing"
              className="block p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            
            <Link 
              href="https://tidycal.com/sudheer.sandu/problemoverview"
              className="block p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            <div className="pt-4 space-y-3">
              <Link href="https://app.graycommit.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full text-foreground bg-background hover:bg-accent border-border">
                  Log In
                </Button>
              </Link>
              <Link href="https://app.graycommit.com" target="_blank" rel="noopener noreferrer">
                <Button className="w-full text-background bg-foreground hover:bg-foreground/90">
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
