'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { EmailCapture } from "@/components/email-capture"
import {
  Activity,
  ArrowRight,
  BarChart3,
  BellRing,
  BrainCircuit,
  CandlestickChart,
  CheckCircle2,
  Gauge,
  LineChart,
  LockKeyhole,
  Radar,
  ScanLine,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  TrendingUp,
  Zap
} from 'lucide-react'

const tickerTape = [
  { ticker: 'NVDA', change: '+4.8%', up: true },
  { ticker: 'MSFT', change: '+1.6%', up: true },
  { ticker: 'TSLA', change: '-2.1%', up: false },
  { ticker: 'AMD', change: '+3.2%', up: true },
  { ticker: 'AAPL', change: '+0.7%', up: true },
  { ticker: 'GOOGL', change: '+2.3%', up: true },
  { ticker: 'META', change: '-1.2%', up: false },
  { ticker: 'AVGO', change: '+5.1%', up: true },
  { ticker: 'CRWD', change: '+2.9%', up: true },
  { ticker: 'PLTR', change: '-0.8%', up: false }
]

const watchlist = [
  { ticker: 'NVDA', name: 'Nvidia', price: '$142.80', change: '+4.8%', signal: 'Breakout', tone: 'text-emerald-400' },
  { ticker: 'MSFT', name: 'Microsoft', price: '$498.12', change: '+1.6%', signal: 'Accumulation', tone: 'text-cyan-300' },
  { ticker: 'TSLA', name: 'Tesla', price: '$211.44', change: '-2.1%', signal: 'Risk', tone: 'text-red-300' },
  { ticker: 'AMD', name: 'Advanced Micro Devices', price: '$176.09', change: '+3.2%', signal: 'Momentum', tone: 'text-amber-300' }
]

const features = [
  {
    icon: Radar,
    title: 'Market Radar',
    description: 'Scan momentum, volume shocks, sector rotation, and unusual price behavior across your universe.'
  },
  {
    icon: BrainCircuit,
    title: 'AI Thesis Builder',
    description: 'Turn noisy chart action, news, filings, and technical structure into a clean trading thesis.'
  },
  {
    icon: BellRing,
    title: 'Signal Alerts',
    description: 'Get notified when a stock moves from watchlist noise into a high-conviction setup.'
  },
  {
    icon: ShieldCheck,
    title: 'Risk Console',
    description: 'See support, invalidation zones, volatility pressure, and portfolio exposure before entering.'
  }
]

const scans = [
  'Gap-up with institutional volume',
  'Relative strength versus sector',
  'Earnings drift continuation',
  'Base breakout near 52-week high',
  'Option flow confirmation',
  'Mean-reversion exhaustion'
]

const sectors = [
  { name: 'AI Chips', score: 94, color: 'bg-emerald-400' },
  { name: 'Cybersecurity', score: 87, color: 'bg-cyan-300' },
  { name: 'Cloud Infra', score: 79, color: 'bg-blue-400' },
  { name: 'EV Supply', score: 52, color: 'bg-amber-300' },
  { name: 'Consumer Tech', score: 38, color: 'bg-red-300' }
]

export default function StockRadarLanding() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070b] text-white">
      <div className="relative overflow-hidden border-b border-white/10 bg-[#070a10] py-2.5">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...tickerTape, ...tickerTape].map((item, i) => (
            <div key={`${item.ticker}-${i}`} className="mx-6 flex items-center gap-2 text-sm font-medium">
              <span className="text-slate-300">{item.ticker}</span>
              <span className={`flex items-center gap-1 ${item.up ? 'text-emerald-400' : 'text-red-400'}`}>
                {item.up ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />}
                {item.change}
              </span>
            </div>
          ))}
        </div>
      </div>

      <section className="relative min-h-[calc(100vh-4rem)] border-b border-white/10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[length:48px_48px]" />
        <div className="absolute -left-24 top-10 h-72 w-72 animate-float rounded-full bg-emerald-400/20 blur-[100px]" style={{ animationDelay: '0s' }} />
        <div className="absolute -right-16 top-1/3 h-80 w-80 animate-float rounded-full bg-cyan-400/20 blur-[110px]" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 animate-float rounded-full bg-amber-400/10 blur-[100px]" style={{ animationDelay: '3s' }} />
        <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />

        <div className="container relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-100 shadow-[0_0_40px_rgba(16,185,129,0.18)]">
              <ScanLine className="h-4 w-4 animate-glow-pulse" />
              Graycommit Stock Radar - GSR 1
            </div>

            <div className="space-y-5">
              <h1 className="max-w-5xl bg-[length:200%_auto] bg-gradient-to-r from-white via-emerald-200 to-cyan-200 bg-clip-text text-5xl font-bold leading-[0.95] tracking-tight text-transparent sm:text-6xl lg:text-7xl animate-gradient-x">
                See the market before the market sees itself.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                GSR 1 is a futuristic AI stock screener for traders and investors who want signal, context, and risk in one command center.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="https://app.graycommit.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="h-12 w-full bg-emerald-400 px-7 text-black shadow-[0_0_30px_rgba(52,211,153,0.25)] transition hover:scale-[1.03] hover:bg-emerald-300 hover:shadow-[0_0_45px_rgba(52,211,153,0.4)] sm:w-auto">
                  Launch Radar
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#radar">
                <Button size="lg" variant="outline" className="h-12 w-full border-cyan-300/50 bg-white/5 px-7 text-cyan-100 transition hover:scale-[1.03] hover:bg-cyan-300/10 hover:text-white sm:w-auto">
                  View Screener
                </Button>
              </Link>
            </div>

            <div className="grid max-w-2xl grid-cols-3 gap-3">
              {[
                ['18K+', 'Stocks scanned'],
                ['42ms', 'Signal latency'],
                ['24/7', 'Market watch']
              ].map(([value, label]) => (
                <div key={label} className="border-l border-white/15 pl-4">
                  <div className="text-2xl font-bold text-white">{value}</div>
                  <div className="text-sm text-slate-400">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div id="radar" className="relative">
            <div className="absolute -inset-8 bg-[conic-gradient(from_180deg,rgba(16,185,129,0.18),rgba(34,211,238,0.2),rgba(245,158,11,0.12),rgba(16,185,129,0.18))] blur-3xl" />
            <div className="relative overflow-hidden rounded-lg border border-white/15 bg-[#071017]/95 shadow-2xl shadow-cyan-950/40">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-emerald-400 text-black">
                    <Radar className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">GSR 1 Live Console</div>
                    <div className="text-xs text-slate-400">US equities / pre-market intelligence</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.9)]" />
                  Online
                </div>
              </div>

              <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="border-b border-white/10 p-5 lg:border-b-0 lg:border-r">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">Signal Matrix</div>
                      <div className="mt-1 text-2xl font-semibold">High conviction watchlist</div>
                    </div>
                    <CandlestickChart className="h-7 w-7 text-cyan-300" />
                  </div>

                  <div className="space-y-3">
                    {watchlist.map((stock) => (
                      <div key={stock.ticker} className="grid grid-cols-[0.65fr_1fr_0.75fr_0.75fr] items-center gap-3 rounded-md border border-white/10 bg-white/[0.035] px-4 py-3">
                        <div>
                          <div className="font-semibold">{stock.ticker}</div>
                          <div className="text-xs text-slate-500">{stock.name}</div>
                        </div>
                        <div className="h-10 overflow-hidden">
                          <div className="flex h-full items-end gap-1">
                            {[28, 38, 34, 52, 47, 68, 62, 74, 88, 80].map((height, index) => (
                              <span
                                key={`${stock.ticker}-${index}`}
                                className="w-full rounded-t-sm bg-gradient-to-t from-cyan-500/25 to-emerald-300/80"
                                style={{ height: `${height}%` }}
                              />
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-slate-400">Price</div>
                          <div className="font-medium">{stock.price}</div>
                        </div>
                        <div className="text-right">
                          <div className={`font-semibold ${stock.tone}`}>{stock.change}</div>
                          <div className="text-xs text-slate-500">{stock.signal}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-5 p-5">
                  <div>
                    <div className="mb-3 flex items-center justify-between">
                      <div className="text-sm font-medium text-slate-200">Sector Heat</div>
                      <Gauge className="h-5 w-5 text-amber-300" />
                    </div>
                    <div className="space-y-3">
                      {sectors.map((sector) => (
                        <div key={sector.name}>
                          <div className="mb-1 flex justify-between text-xs text-slate-400">
                            <span>{sector.name}</span>
                            <span>{sector.score}</span>
                          </div>
                          <div className="h-2 overflow-hidden rounded-full bg-white/10">
                            <div className={`h-full ${sector.color}`} style={{ width: `${sector.score}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-md border border-cyan-300/20 bg-cyan-300/5 p-4">
                    <div className="mb-2 flex items-center gap-2 text-cyan-200">
                      <BrainCircuit className="h-4 w-4" />
                      <span className="text-sm font-semibold">AI Readout</span>
                    </div>
                    <p className="text-sm leading-6 text-slate-300">
                      Semiconductor momentum is broadening. Watch NVDA confirmation above resistance while AMD shows catch-up strength.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#070a10] py-20">
        <div className="container mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-100">
              <Sparkles className="h-4 w-4" />
              Built for fast market decisions
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">From raw market chaos to ranked opportunities.</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="group rounded-lg border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-emerald-300/[0.04] hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]">
                <feature.icon className="mb-5 h-7 w-7 text-emerald-300 transition group-hover:scale-110" />
                <h3 className="mb-3 text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm leading-6 text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-b border-white/10 bg-[#05070b] py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(34,211,238,0.12),transparent_30%)]" />
        <div className="container relative mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2 lg:px-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-amber-300/10 px-3 py-1 text-sm text-amber-100">
              <Zap className="h-4 w-4" />
              Scanner presets
            </div>
            <h2 className="text-3xl font-bold sm:text-5xl">Start with proven scans, then tune your own edge.</h2>
            <p className="text-lg leading-8 text-slate-400">
              GSR 1 combines technical conditions, news catalysts, sector movement, and AI ranking so every scan returns a usable shortlist.
            </p>
            <Link href="https://app.graycommit.com" target="_blank" rel="noopener noreferrer">
              <Button className="bg-cyan-300 text-slate-950 hover:bg-cyan-200">
                Build My Radar
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {scans.map((scan, index) => (
              <div key={scan} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-300/[0.04]">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white/10 text-cyan-200">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="text-sm font-medium text-slate-200">{scan}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#070a10] py-20">
        <div className="container mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-10 rounded-lg border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.025] p-6 sm:p-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="space-y-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-emerald-300 text-black">
                <LockKeyhole className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold sm:text-4xl">A cleaner command center for serious market work.</h2>
              <p className="text-slate-400">
                Track watchlists, score setups, compare sectors, and pressure-test entries without jumping between ten different tabs.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { icon: LineChart, title: 'Trend', text: 'Detect continuation and reversal structure.' },
                { icon: BarChart3, title: 'Volume', text: 'Spot abnormal participation before breakouts.' },
                { icon: Activity, title: 'Risk', text: 'Map volatility and invalidation in context.' }
              ].map((item) => (
                <div key={item.title} className="rounded-lg border border-white/10 bg-[#05070b]/70 p-5">
                  <item.icon className="mb-4 h-6 w-6 text-amber-300" />
                  <div className="mb-2 font-semibold">{item.title}</div>
                  <p className="text-sm leading-6 text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/10 bg-[#05070b] py-20 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.2),transparent_34%)]" />
        <div className="absolute left-1/4 top-0 h-72 w-72 animate-float rounded-full bg-emerald-400/10 blur-[120px]" />
        <div className="absolute right-1/4 bottom-0 h-72 w-72 animate-float rounded-full bg-cyan-400/10 blur-[120px]" style={{ animationDelay: '2s' }} />
        <div className="container relative mx-auto max-w-4xl px-4">
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">Turn market noise into your next watchlist.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Graycommit Stock Radar - GSR 1 is built for traders who want a sharper, faster, AI-assisted read on opportunity.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <EmailCapture variant="hero" source="hero_cta" />
            <Link href="/products" className="text-sm text-slate-400 underline-offset-4 hover:text-white hover:underline">
              or explore products instead
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-sm text-slate-400">
            {['No credit card required', 'AI-ranked signals', 'Built for daily scans'].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
