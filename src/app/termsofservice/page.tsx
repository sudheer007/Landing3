export default function TermsOfService() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#3D3D3D,_transparent_40%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#3D3D3D,_transparent_40%)]" />
          </div>

          <div className="container relative mx-auto max-w-4xl px-4">
            <h1 className="mb-8 text-4xl font-bold tracking-tighter sm:text-5xl">Terms of Service</h1>
            <p className="text-lg text-[#888]">
              Please read these Terms of Service carefully before accessing or using our website.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="relative py-16 border-t border-[#333]">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="prose prose-invert max-w-none">
              <p className="text-[#888] mb-8">
                This website is operated by RITLO TECHNOLOGIES PRIVATE LIMITED. Throughout the site, the terms &ldquo;we&rdquo;, &ldquo;us&rdquo; and &ldquo;our&rdquo; refer to RITLO TECHNOLOGIES PRIVATE LIMITED.
              </p>

              {/* Section 1 */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">SECTION 1 - ONLINE STORE TERMS</h2>
                <div className="space-y-4 text-[#888]">
                  <p>
                    By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.
                  </p>
                  <p>
                    You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).
                  </p>
                  <p>
                    You must not transmit any worms or viruses or any code of a destructive nature.
                  </p>
                  <p>
                    A breach or violation of any of the Terms will result in an immediate termination of your Services.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">SECTION 2 - GENERAL CONDITIONS</h2>
                <div className="space-y-4 text-[#888]">
                  <p>
                    We reserve the right to refuse service to anyone for any reason at any time.
                  </p>
                  <p>
                    You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices.
                  </p>
                </div>
              </div>

              {/* Add more sections following the same pattern */}

              {/* Contact Section */}
              <div className="mt-16 p-6 rounded-lg border border-[#333] bg-[#111]">
                <h2 className="text-xl font-bold mb-4">CONTACT INFORMATION</h2>
                <p className="text-[#888]">
                  Questions about the Terms of Service should be sent to us at{" "}
                  <a href="mailto:info@graycommit.com" className="text-white hover:text-[#0070F3]">
                    info@graycommit.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 