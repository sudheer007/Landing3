import Link from 'next/link'
import Image from 'next/image'
import { telgraf } from '@/app/fonts/fonts'
import { cn } from '@/lib/utils'

const LINKS = {
  Products: [
    { label: 'Stock Radar',         href: '/'                          },
    { label: 'Sales Intelligence',  href: '/products'                  },
    { label: 'DeepSearch AI',       href: '/products/deepsearch'       },
    { label: 'Pricing',             href: '/pricing'                   },
  ],
  Company: [
    { label: 'About',               href: '/about'                     },
    { label: 'Careers',             href: '/careers'                   },
    { label: 'Changelog',           href: '/changelog'                 },
    { label: 'Contact',             href: 'https://tidycal.com/sudheer.sandu/problemoverview' },
  ],
  Resources: [
    { label: 'Documentation',       href: 'https://docs.graycommit.com' },
    { label: 'Guides',              href: 'https://docs.graycommit.com/SalesKnowledge' },
    { label: 'Discord',             href: 'https://discord.gg/ChY6C4nkRp' },
    { label: 'Blog',                href: '/blog'                      },
  ],
  Legal: [
    { label: 'Privacy Policy',      href: '/privacy'                   },
    { label: 'Terms of Service',    href: '/termsofservice'            },
    { label: 'Refund Policy',       href: '/refunds'                   },
    { label: 'Security',            href: '/security'                  },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#030507]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        {/* Top row */}
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <Image src="/logo.png" alt="Graycommit" width={26} height={26} />
              <span className={cn(telgraf.className, 'text-[16px] tracking-tight text-white')}>Graycommit</span>
            </Link>
            <p className="text-sm leading-6 text-zinc-600">
              AI-powered intelligence products for professionals who make high-stakes decisions.
            </p>
            <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="font-mono text-[10px] text-zinc-500">Stock Radar — Early Access</span>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {Object.entries(LINKS).map(([group, items]) => (
              <div key={group}>
                <h4 className="font-mono text-[10px] font-semibold tracking-[0.15em] text-zinc-600 uppercase mb-4">{group}</h4>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-sm text-zinc-500 transition hover:text-zinc-200"
                        {...(item.href.startsWith('http') ? { target:'_blank', rel:'noopener noreferrer' } : {})}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="font-mono text-[11px] text-zinc-700">
            © {new Date().getFullYear()} Graycommit. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-zinc-700">
            Built for investors who think ahead.
          </p>
        </div>
      </div>
    </footer>
  )
}
