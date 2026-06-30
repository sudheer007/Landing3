'use client'

import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Activity, Layout, Shield, Book, DollarSign, Phone, Radar, ArrowRight } from 'lucide-react'
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
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#05070b]/85 backdrop-blur-md">
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
            <span className={`${telgraf.className} text-xl font-bold text-white`}>Graycommit</span>
          </Link>
          
          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-slate-200 hover:bg-white/10 hover:text-white data-[state=open]:bg-white/10 data-[state=open]:text-white">Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] grid-cols-2 gap-x-8 gap-y-4 bg-[#0a0d14] p-6">
                    <div className="col-span-2">
                      <h3 className="font-semibold text-lg text-white">Graycommit Products</h3>
                      <p className="text-sm text-slate-400">AI command centers for markets, sales, and research.</p>
                    </div>
                    <NavigationMenuLink asChild>
                      <Link href="/" className="group flex flex-col justify-center rounded-lg p-4 hover:bg-white/5">
                        <div className="flex items-center gap-3 mb-2">
                          <Radar className="h-5 w-5 text-emerald-400" />
                          <p className="font-medium text-white">Stock Radar - GSR 1</p>
                        </div>
                        <p className="text-sm text-slate-400">AI stock screener and signal radar.</p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/products" className="group flex flex-col justify-center rounded-lg p-4 hover:bg-white/5">
                        <div className="flex items-center gap-3 mb-2">
                          <Activity className="h-5 w-5 text-cyan-400" />
                          <p className="font-medium text-white">Sales Intelligence</p>
                        </div>
                        <p className="text-sm text-slate-400">Live meeting guidance and talk tracks.</p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/products/deepsearch" className="group flex flex-col justify-center rounded-lg p-4 hover:bg-white/5">
                        <div className="flex items-center gap-3 mb-2">
                          <Layout className="h-5 w-5 text-cyan-400" />
                          <p className="font-medium text-white">DeepSearch AI</p>
                        </div>
                        <p className="text-sm text-slate-400">Ask any question to 15+ top AI models.</p>
                      </Link>
                    </NavigationMenuLink>
                    <div className="col-span-2 mt-4 rounded-lg border border-white/10 bg-white/[0.03] p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Shield className="h-6 w-6 text-cyan-400" />
                          <div>
                            <p className="font-semibold text-white">Enterprise Grade Security</p>
                            <p className="text-sm text-slate-400">SOC 2 Type II Certified and GDPR compliant.</p>
                          </div>
                        </div>
                        <Button asChild variant="ghost" size="sm" className="text-slate-200 hover:bg-white/10 hover:text-white">
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
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent text-slate-200 hover:bg-white/10 hover:text-white`}>
                      {link.text}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:flex items-center">
          <Link href="/#get-access">
            <Button className="bg-emerald-400 text-black shadow-[0_0_25px_rgba(52,211,153,0.25)] transition hover:scale-[1.03] hover:bg-emerald-300 hover:shadow-[0_0_35px_rgba(52,211,153,0.4)]">
              Get Early Access
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Mobile Buttons */}
        <div className="flex md:hidden items-center space-x-2">
          <Link href="/#get-access">
            <Button size="sm" className="bg-emerald-400 text-black hover:bg-emerald-300">
              Get Access
            </Button>
          </Link>
          <button
            className="p-2 text-slate-300 hover:text-white"
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
        <div className="md:hidden border-t border-white/10 bg-[#05070b]/95 backdrop-blur-md">
          <div className="container py-4 px-4 space-y-4">
            {/* Products Section */}
            <div className="space-y-4">
              <div className="font-semibold text-lg text-white">Products</div>
              <div className="space-y-2">
                <Link 
                  href="/"
                  className="group flex items-start gap-4 rounded-lg p-3 hover:bg-white/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Radar className="h-5 w-5 text-emerald-400 mt-1" />
                  <div>
                    <p className="font-medium text-white">Stock Radar - GSR 1</p>
                    <p className="text-sm text-slate-400">AI stock screener and signal radar.</p>
                  </div>
                </Link>
                <Link 
                  href="/products"
                  className="group flex items-start gap-4 rounded-lg p-3 hover:bg-white/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Activity className="h-5 w-5 text-cyan-400 mt-1" />
                  <div>
                    <p className="font-medium text-white">Sales Intelligence</p>
                    <p className="text-sm text-slate-400">Live meeting guidance and talk tracks.</p>
                  </div>
                </Link>
                <Link 
                  href="/products/deepsearch"
                  className="group flex items-start gap-4 rounded-lg p-3 hover:bg-white/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Layout className="h-5 w-5 text-cyan-400 mt-1" />
                  <div>
                    <p className="font-medium text-white">DeepSearch AI</p>
                    <p className="text-sm text-slate-400">Ask any question to 15+ top AI models.</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Other Navigation Links */}
            <div className="border-t border-white/10 pt-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.text}
                  href={link.href}
                  className="flex items-center gap-4 p-3 font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.icon}
                  {link.text}
                </Link>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="border-t border-white/10 pt-4">
              <Link href="/#get-access" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full justify-center bg-emerald-400 text-black hover:bg-emerald-300">
                  Get Early Access
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
} 
