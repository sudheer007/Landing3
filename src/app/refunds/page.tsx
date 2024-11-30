export default function RefundPolicy() {
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
            <h1 className="mb-8 text-4xl font-bold tracking-tighter sm:text-5xl">Refund Policy</h1>
            <p className="text-lg text-[#888]">
              Our policies regarding refunds and cancellations.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="relative py-16 border-t border-[#333]">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="prose prose-invert max-w-none space-y-12">
              {/* Payment Terms */}
              <div className="space-y-4">
                <p className="text-[#888]">
                  You agree that the Company may charge to Your credit card or other payment mechanism selected by You and approved by the Company ("Your Account") all amounts due and owing for the Services, including taxes and service fees, set up fees, subscription fees, or any other fee or charge associated with Your Account.
                </p>
                <p className="text-[#888]">
                  Unless stated otherwise, all prices and fees shown by the Company are exclusive of taxes and regulatory fees, service, service fees, set up fees, subscription fees, or any other fee or charge associated with Your Account. Where applicable, taxes and regulatory fees will be charged on the invoices issued by the Company in accordance with local laws and regulations.
                </p>
              </div>

              {/* Annual Subscription */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Annual Subscription</h2>
                <p className="text-[#888]">
                  If You have opted for an annual subscription, the payment is required to be made in advance. If You wish to terminate or cancel your subscription prior to the expiry of the annual subscription for any reason other than for breach of terms of use(&ldquo;ToU&rdquo;) by the Company, the payment made by You towards the annual subscription is non-refundable. However, if you wish to cancel your subscription due to breach by the Company of the ToU, subject to the breach is not disputed by the Company, You will be entitled to a refund of the balance term of the subscription period for which the service is not availed by You.
                </p>
              </div>

              {/* Monthly Subscription */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Monthly Subscription</h2>
                <p className="text-[#888]">
                  If You have opted for a monthly subscription, You are required to make payments at the start of the billing cycle for the service to be availed for the said month. Accordingly, the Company does not offer any refunds for monthly subscriptions. In genuine cases, After verifying the details if the refund claim is valid we will refund the amount in 30 days.
                </p>
              </div>

              {/* Policy Changes */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Policy Changes</h2>
                <p className="text-[#888]">
                  The cancellation and refund policy is subject to change at the sole discretion of the Company and in the event of any change in the same, the Company will notify you of the change thirty (30) days prior to giving effect to the change in the policy.
                </p>
              </div>

              {/* Contact Section */}
              <div className="mt-16 p-6 rounded-lg border border-[#333] bg-[#111]">
                <h2 className="text-xl font-bold mb-4">Contact Us</h2>
                <p className="text-[#888]">
                  For any questions about our refund policy, please contact us at{" "}
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