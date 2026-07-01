'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, Radar, Activity, ArrowUpRight } from 'lucide-react'
import { telgraf } from '@/app/fonts/fonts'
import { cn } from '@/lib/utils'

const NAV = [
  {
    label: 'Products',
    children: [
      { label: 'Stock Radar', href: '/', desc: 'AI market intelligence platform', badge: 'New', icon: Radar },
      { label: 'Sales Intelligence', href: '/products', desc: 'Live meeting guidance & talk tracks', icon: Activity },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About',   href: '/about'   },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [productOpen, setProductOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#030507]/90 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="Graycommit" width={28} height={28} priority />
          <span className={cn(telgraf.className, 'text-[17px] tracking-tight text-white')}>
            Graycommit
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {/* Products dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductOpen(true)}
            onMouseLeave={() => setProductOpen(false)}
          >
            <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-zinc-400 transition hover:text-white">
              Products
              <ChevronDown className={cn('h-3.5 w-3.5 transition-transform duration-200', productOpen && 'rotate-180')} />
            </button>

            {productOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                <div className="w-72 rounded-xl border border-white/[0.08] bg-[#0a0c10]/95 backdrop-blur-xl p-2 shadow-2xl shadow-black/60">
                  {NAV[0].children!.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex items-start gap-3 rounded-lg p-3 transition hover:bg-white/[0.05]"
                      onClick={() => setProductOpen(false)}
                    >
                      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-white/[0.08] bg-white/[0.04]">
                        <item.icon className="h-3.5 w-3.5 text-zinc-400 transition group-hover:text-emerald-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-white">{item.label}</span>
                          {'badge' in item && (
                            <span className="rounded-full bg-emerald-400/15 px-1.5 py-0.5 text-[10px] font-medium text-emerald-300">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="mt-0.5 text-xs text-zinc-500 truncate">{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {NAV.slice(1).map((item) => (
            <Link
              key={item.label}
              href={item.href!}
              className="rounded-md px-3 py-2 text-sm text-zinc-400 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/#waitlist"
            className="flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-zinc-100"
          >
            Get Early Access
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-zinc-400 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/[0.06] bg-[#030507]/95 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-6 py-4 space-y-1">
            <p className="px-3 pt-2 pb-1 text-[10px] font-mono tracking-widest text-zinc-600 uppercase">Products</p>
            {NAV[0].children!.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-zinc-300 hover:bg-white/[0.05] hover:text-white"
                onClick={() => setOpen(false)}
              >
                <item.icon className="h-4 w-4 text-zinc-500" />
                {item.label}
                {'badge' in item && (
                  <span className="ml-auto rounded-full bg-emerald-400/15 px-1.5 py-0.5 text-[10px] text-emerald-300">
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
            <div className="border-t border-white/[0.06] pt-2 mt-2">
              {NAV.slice(1).map((item) => (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="block rounded-lg px-3 py-2.5 text-sm text-zinc-300 hover:bg-white/[0.05] hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="border-t border-white/[0.06] pt-3 pb-1">
              <Link
                href="/#waitlist"
                className="flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-black"
                onClick={() => setOpen(false)}
              >
                Get Early Access
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
