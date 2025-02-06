'use client'

import { useState } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Zap, Shield, ArrowRight } from 'lucide-react'

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('annual')

  const tiers = [
    {
      name: "Free",
      description: "Perfect for startups exploring AI sales tools",
      price: {
        monthly: "$0",
        annual: "$0",
      },
      features: [
        "AI Sales Coach (5 calls/month)",
        "Basic competitive intelligence",
        "Single user license",
        "Email support",
        "Deal risk analysis",
        "Basic analytics dashboard",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      description: "For growing teams ready to scale",
      price: {
        monthly: "$99",
        annual: "$79",
      },
      features: [
        "Unlimited AI coaching calls",
        "Real-time battle cards",
        "Advanced competitive intel",
        "Up to 10 team members",
        "Priority support",
        "Custom playbooks",
        "Advanced analytics",
        "API access",
        "Salesforce integration",
        "Team performance tracking",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "Custom solutions for large teams",
      price: {
        monthly: "Custom",
        annual: "Custom",
      },
      features: [
        "Everything in Pro, plus:",
        "Unlimited team members",
        "Custom AI model training",
        "24/7 dedicated support",
        "Custom integrations",
        "Advanced security features",
        "SOC 2 Type II compliance",
        "Custom reporting",
        "Dedicated success manager",
        "Enterprise SLA",
      ],
      cta: "Contact Sales",
      popular: false,
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

              {/* Billing Toggle */}
              <div className="flex items-center gap-4 bg-[#111] p-1 rounded-full">
                <button
                  onClick={() => setBillingPeriod('monthly')}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    billingPeriod === 'monthly' 
                      ? 'bg-[#0f81fb] text-white' 
                      : 'text-[#888] hover:text-white'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingPeriod('annual')}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    billingPeriod === 'annual' 
                      ? 'bg-[#0f81fb] text-white' 
                      : 'text-[#888] hover:text-white'
                  }`}
                >
                  Annual
                  <span className="ml-1 text-xs text-[#0f81fb]">Save 20%</span>
                </button>
              </div>
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
                        {tier.price[billingPeriod]}
                      </div>
                      {tier.name !== "Enterprise" && (
                        <div className="text-sm text-[#888]">
                          per user/{billingPeriod === 'monthly' ? 'mo' : 'yr'}
                        </div>
                      )}
                    </div>

                    <Button 
                      className={`w-full h-12 ${
                        tier.popular
                          ? 'bg-[#0f81fb] text-white hover:bg-[#0f81fb]/90'
                          : 'bg-white text-black hover:bg-gray-200'
                      }`}
                    >
                      {tier.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>

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

            {/* Trust Indicators */}
            <div className="mt-16 text-center space-y-8">
              <div className="flex justify-center items-center gap-8 text-sm text-[#888]">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-[#0f81fb]" />
                  <span>SOC 2 Type II</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-[#0f81fb]" />
                  <span>GDPR Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-[#0f81fb]" />
                  <span>99.9% Uptime</span>
                </div>
              </div>

              <p className="text-[#888] max-w-2xl mx-auto">
                Join over 100+ startups already growing with Graycommit's AI-powered sales intelligence platform.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 border-t border-[#333]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  q: "How does the 14-day trial work?",
                  a: "Start with full access to all Pro features. No credit card required. Cancel anytime during the trial period."
                },
                {
                  q: "Can I change plans later?",
                  a: "Yes, upgrade, downgrade, or cancel anytime. We'll prorate any payments automatically."
                },
                {
                  q: "What kind of support is included?",
                  a: "All plans include support. Free tier via email, Pro with priority support, and Enterprise with 24/7 dedicated support."
                },
                {
                  q: "Is there a limit to AI coaching calls?",
                  a: "Free tier includes 5 calls/month. Pro and Enterprise have unlimited AI coaching calls."
                },
              ].map((faq, i) => (
                <div key={i} className="space-y-2">
                  <h3 className="font-medium">{faq.q}</h3>
                  <p className="text-[#888]">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
