'use client'

import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Activity, Layout, Shield, Book, DollarSign, Phone } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { telgraf } from "@/app/fonts/fonts"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "/blog", text: "Blog", icon: <Book className="h-5 w-5" /> },
    { href: "/pricing", text: "Pricing", icon: <DollarSign className="h-5 w-5" /> },
    { href: "https://tidycal.com/sudheer.sandu/problemoverview", text: "Contact", icon: <Phone className="h-5 w-5" /> },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between max-w-full px-4 sm:px-6">
        <div className="flex items-center space-x-4">
          <Link className="flex items-center space-x-2" href="/">
            <Image 
              src="/logo.png" 
              alt="Graycommit Logo" 
              width={32} 
              height={32}
              priority
            />
            <span className={`${telgraf.className} text-xl font-bold text-foreground`}>Graycommit</span>
          </Link>
          
          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] grid-cols-2 gap-x-8 gap-y-4 p-6">
                    <div className="col-span-2">
                      <h3 className="font-semibold text-lg text-foreground">Discover Our Platform</h3>
                      <p className="text-sm text-muted-foreground">AI-powered sales intelligence to close more deals.</p>
                    </div>
                    <NavigationMenuLink asChild>
                      <Link href="/products" className="group flex flex-col justify-center rounded-lg p-4 hover:bg-accent">
                        <div className="flex items-center gap-3 mb-2">
                          <Activity className="h-5 w-5 text-[#0f81fb]" />
                          <p className="font-medium text-foreground">Real-time Playbooks</p>
                        </div>
                        <p className="text-sm text-muted-foreground">Live meeting guidance and talk tracks.</p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/products/deepsearch" className="group flex flex-col justify-center rounded-lg p-4 hover:bg-accent">
                        <div className="flex items-center gap-3 mb-2">
                          <Layout className="h-5 w-5 text-[#0f81fb]" />
                          <p className="font-medium text-foreground">DeepSearch AI</p>
                        </div>
                        <p className="text-sm text-muted-foreground">Ask any question to 15+ top AI models.</p>
                      </Link>
                    </NavigationMenuLink>
                    <div className="col-span-2 mt-4 p-4 bg-muted rounded-lg border">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Shield className="h-6 w-6 text-[#0f81fb]" />
                          <div>
                            <p className="font-semibold text-foreground">Enterprise Grade Security</p>
                            <p className="text-sm text-muted-foreground">SOC 2 Type II Certified and GDPR compliant.</p>
                          </div>
                        </div>
                        <Button asChild variant="ghost" size="sm">
                          <Link href="/security">Learn More &rarr;</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.text}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {link.text}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-2">
          <Button asChild variant="ghost">
            <Link href="https://app.graycommit.com">Log In</Link>
          </Button>
          <Button asChild>
            <Link href="https://app.graycommit.com">Sign Up Free</Link>
          </Button>
        </div>

        {/* Mobile Buttons */}
        <div className="flex md:hidden items-center space-x-2">
          <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="https://app.graycommit.com">Log In</Link>
          </Button>
          <button
            className="p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
          <div className="container py-4 px-4 space-y-4">
            {/* Features Section */}
            <div className="space-y-4">
              <div className="font-semibold text-lg text-foreground">Features</div>
              <div className="space-y-2">
                <Link 
                  href="/products"
                  className="group flex items-start gap-4 rounded-lg p-3 hover:bg-accent"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Activity className="h-5 w-5 text-[#0f81fb] mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Real-time Playbooks</p>
                    <p className="text-sm text-muted-foreground">Live meeting guidance and talk tracks.</p>
                  </div>
                </Link>
                <Link 
                  href="/products/deepsearch"
                  className="group flex items-start gap-4 rounded-lg p-3 hover:bg-accent"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Layout className="h-5 w-5 text-[#0f81fb] mt-1" />
                  <div>
                    <p className="font-medium text-foreground">DeepSearch AI</p>
                    <p className="text-sm text-muted-foreground">Ask any question to 15+ top AI models.</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Other Navigation Links */}
            <div className="border-t pt-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.text}
                  href={link.href}
                  className="flex items-center gap-4 p-3 font-medium text-foreground/80 hover:text-foreground hover:bg-accent rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.icon}
                  {link.text}
                </Link>
              ))}
            </div>

            {/* Mobile Sign Up Button */}
            <div className="border-t pt-4">
              <Button asChild className="w-full justify-start">
                <Link href="https://app.graycommit.com">Sign Up Free</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
} 