'use client'

import Link from "next/link"
import { EmailCapture } from "@/components/email-capture"
import {
  ArrowRight,
  BellRing,
  BrainCircuit,
  Check,
  Gauge,
  LineChart,
  MessageSquare,
  Minus,
  Radar,
  ShieldCheck,
  Sparkles,
  Zap
} from 'lucide-react'

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get a feel for the radar before you commit.",
    icon: Radar,
    accent: "text-slate-300",
    cta: "Start Free",
    popular: false,
    features: [
      "Daily market scan (delayed 15 min)",
      "Watchlist of up to 5 tickers",
      "Core technical signals",
      "Sector heat overview",
      "Community support",
    ],
  },
  {
    name: "Pro",
    price: "$9",
    period: "/ month",
    description: "Real-time signal and full scanner access for active traders.",
    icon: Zap,
    accent: "text-emerald-300",
    cta: "Get Pro Access",
    popular: true,
    features: [
      "Everything in Free, plus:",
      "Real-time signal updates",
      "Unlimited watchlist",
      "AI Thesis Builder",
      "Risk console (support, invalidation, volatility)",
      "All scanner presets unlocked",
      "Priority email support",
    ],
  },
  {
    name: "Pro+",
    price: "$19",
    period: "/ month",
    description: "Maximum coverage for traders running multiple strategies.",
    icon: Sparkles,
    accent: "text-cyan-300",
    cta: "Get Pro+ Access",
    popular: false,
    features: [
      "Everything in Pro, plus:",
      "Multiple watchlists / portfolios",
      "Advanced sector rotation analytics",
      "SMS + mobile push signal alerts",
      "Early access to new scanner presets",
      "1:1 onboarding session",
      "Priority support with faster response time",
    ],
  },
]

const comparisonRows = [
  { label: "Daily market scan", free: "Delayed 15 min", pro: "Real-time", proplus: "Real-time" },
  { label: "Watchlist size", free: "Up to 5 tickers", pro: "Unlimited", proplus: "Unlimited, multi-portfolio" },
  { label: "AI Thesis Builder", free: false, pro: true, proplus: true },
  { label: "Risk console", free: false, pro: true, proplus: true },
  { label: "Scanner presets", free: "Limited", pro: "All presets", proplus: "All presets + early access" },
  { label: "Sector rotation analytics", free: "Basic", pro: "Standard", proplus: "Advanced" },
  { label: "Signal alerts", free: false, pro: "Email", proplus: "Email + SMS + push" },
  { label: "Support", free: "Community", pro: "Priority email", proplus: "Priority + onboarding call" },
]

const faqs = [
  {
    q: "Can I switch plans later?",
    a: "Yes. You can move between Free, Pro, and Pro+ at any time once your account is active — pricing simply adjusts from your next billing cycle.",
  },
  {
    q: "Is there a free trial on Pro or Pro+?",
    a: "Early access invites typically include a trial window on the paid tiers so you can test real-time signals and the AI Thesis Builder before paying.",
  },
  {
    q: "What counts as a 'signal'?",
    a: "A signal is GSR 1 flagging a ticker for momentum, volume, sector strength, or risk conditions that match one of your active scans.",
  },
  {
    q: "Do you offer annual billing?",
    a: "Monthly pricing is what's available during early access. Annual plans with a discount are planned for general availability.",
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#05070b] text-white">
      <section className="relative overflow-hidden border-b border-white/10 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(16,185,129,0.16),transparent_30%),radial-gradient(circle_at_80%_15%,rgba(34,211,238,0.14),transparent_28%)]" />
        <div className="container relative mx-auto max-w-4xl px-4 text-center lg:px-8">
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-100">
            <Radar className="h-4 w-4" />
            Graycommit Stock Radar &mdash; GSR 1 pricing
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Simple pricing for sharper signal.</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Start free, scan smarter as you grow. Every plan is built around one product: the GSR 1 AI stock radar.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 py-16">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl border p-7 transition duration-300 hover:-translate-y-1 ${
                  tier.popular
                    ? "border-emerald-300/50 bg-gradient-to-b from-emerald-300/[0.08] to-white/[0.02] shadow-[0_0_45px_rgba(16,185,129,0.15)]"
                    : "border-white/10 bg-white/[0.03] hover:border-white/20"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-400 px-3 py-1 text-xs font-semibold text-black">
                    Most popular
                  </div>
                )}

                <tier.icon className={`mb-5 h-7 w-7 ${tier.accent}`} />
                <h2 className="text-xl font-semibold text-white">{tier.name}</h2>
                <p className="mt-1 text-sm text-slate-400">{tier.description}</p>

                <div className="mt-6 flex items-baseline gap-1.5">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-sm text-slate-400">{tier.period}</span>
                </div>

                <ul className="mt-7 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <EmailCapture
                  variant="trigger"
                  source={`pricing_${tier.name.toLowerCase().replace('+', 'plus')}`}
                  plan={tier.name}
                  triggerLabel={tier.cta}
                  className="mt-8 [&>button]:w-full [&>button]:justify-center"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#070a10] py-20">
        <div className="container mx-auto max-w-6xl px-4 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Compare plans in detail.</h2>
            <p className="mt-2 text-slate-400">Every plan runs on the same GSR 1 engine &mdash; what changes is depth and speed.</p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th className="px-5 py-4 font-medium text-slate-400">Feature</th>
                  <th className="px-5 py-4 font-semibold text-white">Free</th>
                  <th className="px-5 py-4 font-semibold text-emerald-300">Pro</th>
                  <th className="px-5 py-4 font-semibold text-cyan-300">Pro+</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? "bg-white/[0.015]" : ""}>
                    <td className="border-t border-white/10 px-5 py-4 text-slate-300">{row.label}</td>
                    {[row.free, row.pro, row.proplus].map((val, j) => (
                      <td key={j} className="border-t border-white/10 px-5 py-4">
                        {typeof val === "boolean" ? (
                          val ? (
                            <Check className="h-4 w-4 text-emerald-300" />
                          ) : (
                            <Minus className="h-4 w-4 text-slate-600" />
                          )
                        ) : (
                          <span className="text-slate-300">{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-20">
        <div className="container mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {[
            { icon: BrainCircuit, title: "AI Thesis Builder", text: "Turn raw price action into a plain-English trading thesis." },
            { icon: BellRing, title: "Signal Alerts", text: "Know the moment a setup moves from watchlist to high-conviction." },
            { icon: ShieldCheck, title: "Risk Console", text: "See invalidation levels and volatility before you size a position." },
            { icon: Gauge, title: "Sector Heat", text: "Track which sectors are leading or lagging in real time." },
          ].map((f) => (
            <div key={f.title} className="rounded-lg border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-emerald-300/30">
              <f.icon className="mb-4 h-6 w-6 text-emerald-300" />
              <div className="mb-1.5 font-semibold text-white">{f.title}</div>
              <p className="text-sm leading-6 text-slate-400">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#070a10] py-20">
        <div className="container mx-auto max-w-3xl px-4 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Pricing questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-start gap-2.5 font-medium text-white">
                  <MessageSquare className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                  {item.q}
                </div>
                <p className="mt-2 pl-6 text-sm leading-6 text-slate-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/10 py-20 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.18),transparent_34%)]" />
        <div className="container relative mx-auto max-w-2xl px-4">
          <LineChart className="mx-auto mb-5 h-10 w-10 text-emerald-300" />
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Pick a plan, get your invite.</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Early access is rolling out in waves &mdash; grab a spot now and we&apos;ll notify you the moment yours opens up.
          </p>
          <div className="mt-7 flex flex-col items-center gap-3">
            <EmailCapture variant="trigger" source="pricing_footer_cta" />
            <Link href="/" className="text-sm text-slate-400 underline-offset-4 hover:text-white hover:underline">
              <ArrowRight className="mr-1 inline h-3.5 w-3.5 rotate-180" />
              Back to GSR 1 overview
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
