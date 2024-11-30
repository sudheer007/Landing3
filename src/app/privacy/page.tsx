export default function PrivacyPolicy() {
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
            <h1 className="mb-8 text-4xl font-bold tracking-tighter sm:text-5xl">Privacy Policy</h1>
            <p className="text-lg text-[#888]">
              How we collect, use, and protect your information.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="relative py-16 border-t border-[#333]">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="prose prose-invert max-w-none space-y-12">
              {/* Section 1 */}
              <div>
                <h2 className="text-2xl font-bold mb-4">SECTION 1 - WHAT DO WE DO WITH YOUR INFORMATION?</h2>
                <div className="space-y-4 text-[#888]">
                  <p>
                    When you purchase something from our store, as part of the buying and selling process, we collect the personal information you give us such as your name, address and email address.
                  </p>
                  <p>
                    When you browse our store, we also automatically receive your computer's internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system.
                  </p>
                  <p>
                    Email marketing (if applicable): With your permission, we may send you emails about our store, new products and other updates.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl font-bold mb-4">SECTION 2 - CONSENT</h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">How do you get my consent?</h3>
                  <p className="text-[#888]">
                    When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery or return a purchase, we imply that you consent to our collecting it and using it for that specific reason only.
                  </p>
                  
                  <h3 className="text-xl font-semibold">How do I withdraw my consent?</h3>
                  <p className="text-[#888]">
                    If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information, at anytime, by contacting us at info@graycommit.com or mailing us at: RITLO TECHNOLOGIES PRIVATE LIMITED, 8-162, Dammaiguda, Hyderabad, Telangana, India - 500083
                  </p>
                </div>
              </div>

              {/* Payment Section */}
              <div>
                <h2 className="text-2xl font-bold mb-4">SECTION 4 - PAYMENT</h2>
                <div className="space-y-4 text-[#888]">
                  <p>
                    We use Razorpay for processing payments. We/Razorpay do not store your card data on their servers. The data is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS) when processing payment.
                  </p>
                  <p>
                    Our payment gateway adheres to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express and Discover.
                  </p>
                  <p>
                    For more insight, you may also want to read terms and conditions of razorpay on{" "}
                    <a href="https://razorpay.com" className="text-white hover:text-[#0070F3]" target="_blank" rel="noopener noreferrer">
                      https://razorpay.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Contact Section */}
              <div className="mt-16 p-6 rounded-lg border border-[#333] bg-[#111]">
                <h2 className="text-xl font-bold mb-4">QUESTIONS AND CONTACT INFORMATION</h2>
                <div className="space-y-4 text-[#888]">
                  <p>
                    If you would like to: access, correct, amend or delete any personal information we have about you, register a complaint, or simply want more information contact our Privacy Compliance Officer at{" "}
                    <a href="mailto:info@graycommit.com" className="text-white hover:text-[#0070F3]">
                      info@graycommit.com
                    </a>
                  </p>
                  <p>
                    Or by mail at:<br />
                    RITLO TECHNOLOGIES PRIVATE LIMITED<br />
                    8-162, Dammaiguda<br />
                    Hyderabad, Telangana, India - 500083
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 