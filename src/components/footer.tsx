import Link from "next/link"
import Image from "next/image"


export function Footer() {
  return (
    <footer className="border-t border-[#333] py-12 bg-black">
        <div className="container max-w-full px-4 mx-auto pl-28 pr-24">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-5"> {/* Changed to 5 columns */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Products</h4>
              <ul className="space-y-2 text-sm text-[#888]">
                <li><Link href="#" className="hover:text-white">Realtime Playbook</Link></li>
                <li><Link href="#" className="hover:text-white">Deepsearch  (Chat with any AI) </Link></li>
                
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Resources</h4>
              <ul className="space-y-2 text-sm text-[#888]">
                <li><Link href="https://docs.graycommit.com" className="hover:text-white">Documentation</Link></li>
                <li><Link href="https://docs.graycommit.com/SalesKnowledge" className="hover:text-white">Guides</Link></li>
                <li><Link href="https://discord.gg/ChY6C4nkRp" className="hover:text-white">Support</Link></li>
                
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Company</h4>
              <ul className="space-y-2 text-sm text-[#888]">
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/changelog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
                <li><Link href="https://tidycal.com/sudheer.sandu/problemoverview" target="_blank" rel="noopener noreferrer" className="hover:text-white">Contact Sales</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Legal</h4>
              <ul className="space-y-2 text-sm text-[#888]">
                <li><Link href="/security" className="hover:text-white">Security</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/termsofservice" className="hover:text-white">Terms of Service</Link></li>
                <li><Link href="/refunds" className="hover:text-white">Refunds Policy</Link></li>
              </ul>
            </div>
            {/* New Social Column */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Social</h4>
              <ul className="space-y-2 text-sm text-[#888]">
                
                <li>
                  <Link href="https://linkedin.com/company/graycommit" className="flex items-center hover:text-white">
                    
                    LinkedIn
                  </Link>
                </li>
                
                <li>
                  <Link href="https://youtube.com/@graycommit" className="flex items-center hover:text-white">
                    
                    YouTube
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#333] pt-8 sm:flex-row">
            <div className="flex items-center space-x-2 text-white">
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
              <Link href="/status" className="text-sm text-[#888] hover:text-white">
                Status
              </Link>
              <Link href="/changelog" className="text-sm text-[#888] hover:text-white">
                Changelog
              </Link>
            </div>
          </div>
        </div>
      </footer>
  )
}