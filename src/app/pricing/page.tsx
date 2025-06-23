'use client'

import { useState } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Zap, Shield, ArrowRight } from 'lucide-react'

export default function PricingPage() {
  const tiers = [
    {
      name: "Free",
      description: "Perfect for trying out the platform",
      price: "$0",
      features: [
        "3 meetings per month",
        "Multiple tabs for LLMs",
        "Basic LLM access",
        "LLM switching",
        "3 pre-built meeting playbooks",
        "Email support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Starter",
      description: "Ideal for individuals and small teams",
      price: "$5",
      features: [
        "30 meetings per month",
        "10GB recording storage (6 months)",
        "All Premium LLM access",
        "10 playbook templates + custom creation",
        "Basic transcription & meeting notes",
        "24/7 support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      description: "Professional teams and businesses",
      price: "$20",
      features: [
        "Unlimited meetings",
        "100GB recording storage",
        "All premium LLMs (GPT-4, Claude Sonnet)",
        "Advanced playbook builder with AI",
        "Real-time transcription + speaker ID",
        "AI meeting insights & action items",
        "Meeting analytics dashboard",
        "Priority support (chat + email)",
        "Team collaboration features",
      ],
      cta: "Get Started",
      popular: true,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#0f81fb,_transparent_40%)] opacity-20" />
            {/* Grid lines */}
            {[...Array(40)].map((_, i) => (
              <div
                key={`v-${i}`}
                className="absolute top-0 bottom-0 w-[1px]"
                style={{ 
                  left: `${(i + 1) * 2.5}%`,
                  background: 'linear-gradient(to bottom, transparent, rgba(15, 129, 251, 0.1) 50%, transparent)',
                  opacity: '0.5'
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="inline-flex items-center space-x-2 rounded-full bg-[#111] px-4 py-1.5">
                <span className="text-[#0f81fb]">Simple Pricing</span>
                <span className="text-[#888]">No hidden fees</span>
              </div>
              
              <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Scale your sales with confidence
              </h1>
              
              <p className="max-w-2xl text-xl text-[#888]">
                Choose the perfect plan for your team. All plans include a 14-day free trial.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative rounded-xl border ${
                    tier.popular 
                      ? 'border-[#0f81fb] bg-[#0f81fb]/5' 
                      : 'border-[#333] bg-black hover:border-[#444]'
                  } p-8 transition-all duration-300`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#0f81fb] rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold">{tier.name}</h3>
                      <p className="mt-2 text-[#888]">{tier.description}</p>
                    </div>

                    <div className="space-y-1">
                      <div className="text-4xl font-bold">
                        {tier.price}
                      </div>
                      {tier.name !== "Enterprise" && tier.price !== "$0" && (
                        <div className="text-sm text-[#888]">
                          per user/mo
                        </div>
                      )}
                    </div>

                    <Link href="https://app.graycommit.com" target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button 
                        className={`group relative w-full h-12 transition-all duration-300 ${
                          tier.popular
                            ? 'bg-[#0f81fb] text-white hover:bg-[#0f81fb]/90'
                            : 'bg-white text-black hover:bg-gray-200'
                        }`}
                      >
                        <span className="relative z-10 flex items-center justify-center">
                          Get Started Free
                          <svg 
                            className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                      </Button>
                    </Link>

                    <div className="space-y-4 pt-6">
                      {tier.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className={`h-5 w-5 ${
                            tier.popular ? 'text-[#0f81fb]' : 'text-green-500'
                          }`} />
                          <span className="text-[#888]">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 border-t border-[#333]">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
              <p className="text-xl text-[#888] max-w-2xl mx-auto">
                Everything you need to know about our pricing and plans.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-8">
              {[
                {
                  q: "Can I switch plans anytime?",
                  a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately for upgrades and at the end of your billing cycle for downgrades."
                },
                {
                  q: "Is there a free trial?",
                  a: "You can use your free tier for completely free. No strings attached and We don't require a credit card to get started."
                },
                {
                  q: "What happens if I exceed my plan limits?",
                  a: "We'll notify you when you're approaching your limits. You can upgrade your plan or purchase additional capacity as needed."
                },
                {
                  q: "Do you offer refunds?",
                  a: "Yes, we offer a 30-day money-back guarantee. You can cancel anytime."
                }
              ].map((faq, i) => (
                <div key={i} className="border border-[#333] rounded-lg p-6 hover:border-[#444] transition-colors">
                  <h3 className="text-xl font-semibold mb-3">{faq.q}</h3>
                  <p className="text-[#888]">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 border-t border-[#333]">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold">Ready to close more deals?</h2>
                <p className="text-xl text-[#888] max-w-2xl mx-auto">
                  Join thousands of sales teams already using Graycommit to boost their conversion rates.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="https://app.graycommit.com" target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg" 
                    className="group relative h-12 px-8 bg-[#0f81fb] text-white hover:bg-[#0f81fb]/90 transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center">
                      Get Started Free
                      <svg 
                        className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </Button>
                </Link>
                <Link href="https://tidycal.com/sudheer.sandu/problemoverview" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="h-12 px-8 border-[#0f81fb] text-[#0f81fb] hover:bg-[#0f81fb] hover:text-white">
                    Schedule Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
