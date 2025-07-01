import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "./theme-toggle"


export function Footer() {
  return (
    <footer className="border-t border-border py-12 bg-background">
        <div className="container max-w-full px-4 mx-auto pl-28 pr-24">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-5"> {/* Changed to 5 columns */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Products</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground">Realtime Playbook</Link></li>
                <li><Link href="#" className="hover:text-foreground">Deepsearch  (Chat with any AI) </Link></li>
                
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="https://docs.graycommit.com" className="hover:text-foreground">Documentation</Link></li>
                <li><Link href="https://docs.graycommit.com/SalesKnowledge" className="hover:text-foreground">Guides</Link></li>
                <li><Link href="https://discord.gg/ChY6C4nkRp" className="hover:text-foreground">Support</Link></li>
                
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-foreground">About</Link></li>
                <li><Link href="/blog" className="hover:text-foreground">Blog</Link></li>
                <li><Link href="/careers" className="hover:text-foreground">Careers</Link></li>
                <li><Link href="https://tidycal.com/sudheer.sandu/problemoverview" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Contact Sales</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/security" className="hover:text-foreground">Security</Link></li>
                <li><Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
                <li><Link href="/termsofservice" className="hover:text-foreground">Terms of Service</Link></li>
                <li><Link href="/refunds" className="hover:text-foreground">Refunds Policy</Link></li>
              </ul>
            </div>
            {/* New Social Column */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Social</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                
                <li>
                  <Link href="https://linkedin.com/company/graycommit" className="flex items-center hover:text-foreground">
                    
                    LinkedIn
                  </Link>
                </li>
                
                <li>
                  <Link href="https://youtube.com/@graycommit" className="flex items-center hover:text-foreground">
                    
                    YouTube
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
            <div className="flex items-center space-x-2 text-foreground">
              <Image 
                src="/logo.png" 
                alt="Your Logo" 
                width={40} 
                height={40} 
                className="h-5 w-auto"
                priority
              />
              <span className="text-sm">© 2024 Graycommit Inc.</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/status" className="text-sm text-muted-foreground hover:text-foreground">
                Status
              </Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                Changelog
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </footer>
  )
}