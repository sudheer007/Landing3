'use client'

import { useState } from 'react'
import Link from 'next/link'
import { EmailCapture } from '@/components/email-capture'
import { telgraf } from '@/app/fonts/fonts'
import { cn } from '@/lib/utils'
import {
  ArrowUpRight, BarChart3, BellRing, BookOpen,
  Brain, FileText, Gauge, LineChart,
  Radar, Shield, TrendingDown, TrendingUp,
} from 'lucide-react'

/* ─── DATA ─────────────────────────────────────── */

const opportunities = [
  { ticker: 'NVDA', name: 'Nvidia Corporation',    price: '$142.80', change: '+4.8%', up: true,  signal: 'Breakout',     score: 94 },
  { ticker: 'AVGO', name: 'Broadcom Inc.',         price: '$218.40', change: '+3.2%', up: true,  signal: 'Momentum',     score: 87 },
  { ticker: 'MSFT', name: 'Microsoft Corporation', price: '$498.12', change: '+1.6%', up: true,  signal: 'Accumulation', score: 78 },
  { ticker: 'META', name: 'Meta Platforms',        price: '$612.05', change: '-1.2%', up: false, signal: 'Watch',        score: 52 },
]

const features = [
  { icon: Radar,    title: 'AI Stock Radar',         desc: 'Continuously scans market data to surface high-conviction setups.' },
  { icon: Gauge,    title: 'Conviction Score',        desc: 'Proprietary 0–100 ranking weighing momentum, fundamentals, and risk.' },
  { icon: Brain,    title: 'AI Market Analyst',       desc: 'Ask anything about a stock. Get institutional-grade research instantly.' },
  { icon: BarChart3,title: 'Portfolio Intelligence',  desc: 'Real-time health scoring, concentration risk, and rebalancing signals.' },
  { icon: Shield,   title: 'Risk Radar',              desc: 'Identifies tail risks, earnings exposure, and sentiment shifts early.' },
  { icon: FileText, title: 'Daily AI Brief',          desc: 'A concise morning brief covering the signals that matter for your portfolio.' },
]

const showcaseTabs = ['Dashboard', 'AI Analysis', 'Opportunity Feed', 'Portfolio']

const heatCells = [
  { label: 'Tech',    v: 91, up: true  }, { label: 'Energy', v: 76, up: true  },
  { label: 'Health',  v: 68, up: true  }, { label: 'Fin',    v: 62, up: true  },
  { label: 'Indust',  v: 54, up: false }, { label: 'Cons',   v: 41, up: false },
  { label: 'Util',    v: 38, up: false }, { label: 'RE',      v: 29, up: false },
]

const portfolioAlloc = [
  { label: 'Technology',  pct: 42, color: 'bg-emerald-400' },
  { label: 'Financials',  pct: 18, color: 'bg-cyan-400'    },
  { label: 'Healthcare',  pct: 14, color: 'bg-blue-400'    },
  { label: 'Energy',      pct: 9,  color: 'bg-amber-400'   },
  { label: 'Other',       pct: 17, color: 'bg-zinc-600'    },
]

/* ─── HERO APP MOCKUP ───────────────────────────── */

function AppMockup() {
  return (
    <div className="relative w-full">
      {/* Glow */}
      <div className="absolute -inset-12 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -inset-8 rounded-full bg-cyan-500/5 blur-2xl pointer-events-none" />

      {/* Window */}
      <div className="relative rounded-2xl border border-white/[0.1] bg-[#090b0f] shadow-[0_40px_120px_rgba(0,0,0,0.9)] overflow-hidden">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-white/[0.06] bg-[#0c0e13] px-4 h-9">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <span className="font-mono text-[10px] text-zinc-600 tracking-widest">GRAYCOMMIT STOCK RADAR</span>
          <div className="flex items-center gap-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" style={{ animation: 'pulse-dot 2s ease-in-out infinite' }} />
            <span className="font-mono text-[10px] text-emerald-400">LIVE</span>
          </div>
        </div>

        {/* App layout */}
        <div className="flex" style={{ height: 420 }}>

          {/* Sidebar */}
          <div className="flex w-10 flex-col items-center gap-3 border-r border-white/[0.06] py-3">
            {[Radar, BarChart3, Shield, BellRing, BookOpen].map((Icon, i) => (
              <button key={i} className={cn('flex h-7 w-7 items-center justify-center rounded-md transition', i === 0 ? 'bg-white/[0.08] text-white' : 'text-zinc-600 hover:text-zinc-400')}>
                <Icon className="h-3.5 w-3.5" />
              </button>
            ))}
          </div>

          {/* AI Opportunity Feed */}
          <div className="flex flex-1 flex-col border-r border-white/[0.06]">
            <div className="border-b border-white/[0.06] px-3 py-2">
              <span className="font-mono text-[9px] tracking-[0.15em] text-zinc-600 uppercase">AI Opportunity Feed</span>
            </div>
            <div className="flex-1 overflow-hidden space-y-1 p-2">
              {opportunities.map((o) => (
                <div key={o.ticker} className="rounded-lg border border-white/[0.06] bg-white/[0.025] p-2.5 transition hover:bg-white/[0.04]">
                  <div className="flex items-start justify-between mb-1.5">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono text-[11px] font-semibold text-white">{o.ticker}</span>
                        <span className={cn('rounded px-1 py-0.5 text-[8px] font-medium', o.signal === 'Breakout' ? 'bg-emerald-400/15 text-emerald-300' : o.signal === 'Momentum' ? 'bg-amber-400/15 text-amber-300' : o.signal === 'Accumulation' ? 'bg-cyan-400/15 text-cyan-300' : 'bg-zinc-700 text-zinc-400')}>
                          {o.signal}
                        </span>
                      </div>
                      <div className="text-[9px] text-zinc-600 mt-0.5">{o.name}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-[10px] text-white">{o.price}</div>
                      <div className={cn('font-mono text-[9px]', o.up ? 'text-emerald-400' : 'text-red-400')}>
                        {o.up ? <TrendingUp className="inline h-2.5 w-2.5 mr-0.5" /> : <TrendingDown className="inline h-2.5 w-2.5 mr-0.5" />}
                        {o.change}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="h-1 flex-1 rounded-full bg-white/[0.06]">
                      <div className={cn('h-full rounded-full', o.score >= 80 ? 'bg-emerald-400' : o.score >= 60 ? 'bg-amber-400' : 'bg-zinc-500')} style={{ width: `${o.score}%` }} />
                    </div>
                    <span className="font-mono text-[9px] text-zinc-400 w-5 text-right">{o.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right panels */}
          <div className="flex w-44 flex-col">
            {/* Conviction Score */}
            <div className="border-b border-white/[0.06] p-3">
              <div className="font-mono text-[8px] tracking-widest text-zinc-600 uppercase mb-2">Conviction Score</div>
              <svg viewBox="0 0 100 62" className="w-full">
                <path d="M12,58 A38,38 0 0,1 88,58" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="5" strokeLinecap="round"/>
                <path d="M12,58 A38,38 0 0,1 88,58" fill="none" stroke="#22c55e" strokeWidth="5" strokeLinecap="round" strokeDasharray="120" strokeDashoffset="7.2" />
                <text x="50" y="54" textAnchor="middle" fill="white" fontSize="18" fontWeight="700" fontFamily="monospace">94</text>
                <text x="50" y="64" textAnchor="middle" fill="#52525b" fontSize="6" fontFamily="monospace">/ 100</text>
              </svg>
              <div className="mt-1.5 text-center font-mono text-[8px] text-emerald-400">Strong Buy</div>
            </div>

            {/* Portfolio Health */}
            <div className="border-b border-white/[0.06] p-3">
              <div className="font-mono text-[8px] tracking-widest text-zinc-600 uppercase mb-2">Portfolio Health</div>
              <div className="flex items-end justify-between mb-1.5">
                <span className="font-mono text-[17px] font-bold text-white leading-none">87</span>
                <span className="font-mono text-[8px] text-zinc-500">/ 100</span>
              </div>
              <div className="space-y-1">
                {[['Momentum','bg-emerald-400',88],['Diversif.','bg-cyan-400',82],['Risk Adj.','bg-blue-400',91]].map(([l,c,v]) => (
                  <div key={String(l)} className="flex items-center gap-1.5">
                    <div className="h-1 w-full rounded-full bg-white/[0.05]">
                      <div className={cn('h-full rounded-full', String(c))} style={{ width: `${v}%` }} />
                    </div>
                    <span className="font-mono text-[8px] text-zinc-600 w-10 shrink-0">{l}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Chat */}
            <div className="flex-1 p-3 flex flex-col">
              <div className="font-mono text-[8px] tracking-widest text-zinc-600 uppercase mb-2">AI Analyst</div>
              <div className="flex-1 space-y-1.5 overflow-hidden">
                <div className="rounded-lg bg-white/[0.04] p-2">
                  <p className="text-[8px] text-zinc-300 leading-relaxed">NVDA is in a textbook breakout from a 6-week base. Volume confirmation is strong at 2.4× the 50-day average.</p>
                </div>
                <div className="rounded-lg bg-white/[0.04] p-2">
                  <p className="text-[8px] text-zinc-300 leading-relaxed">Price target: $168. Invalidation below $134. Risk/reward: 3.2×.</p>
                </div>
              </div>
              <div className="mt-2 flex items-center gap-1.5 rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-1.5">
                <span className="text-[8px] text-zinc-600 flex-1">Ask about any stock…</span>
                <ArrowUpRight className="h-2.5 w-2.5 text-zinc-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── SHOWCASE SCREENS ─────────────────────────── */

function ShowcaseDashboard() {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-[#090b0f] overflow-hidden">
      <div className="border-b border-white/[0.06] bg-[#0c0e13] px-5 py-3 flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">Dashboard</span>
        <div className="flex items-center gap-1.5"><div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"/><span className="font-mono text-[10px] text-emerald-400">LIVE</span></div>
      </div>
      <div className="p-5 space-y-5">
        <div className="grid grid-cols-3 gap-3">
          {[['Portfolio Value','$284,750','+2.4%', true],["Today's P&L",'$4,130','+1.47%',true],['Active Signals','23','↑ 7 new', true]].map(([l,v,s,up]) => (
            <div key={String(l)} className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-3">
              <div className="text-[10px] text-zinc-600 mb-1">{l}</div>
              <div className="font-mono text-lg font-semibold text-white">{v}</div>
              <div className={cn('font-mono text-[10px]', up ? 'text-emerald-400' : 'text-red-400')}>{s}</div>
            </div>
          ))}
        </div>
        <div>
          <div className="text-[10px] text-zinc-600 mb-2">Conviction Trend — 30d</div>
          <svg viewBox="0 0 400 60" className="w-full h-12" preserveAspectRatio="none">
            <defs><linearGradient id="g1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#22c55e" stopOpacity="0.25"/><stop offset="100%" stopColor="#22c55e" stopOpacity="0"/></linearGradient></defs>
            <path d="M0,50 L40,42 L80,38 L120,40 L160,30 L200,22 L240,18 L280,12 L320,8 L360,5 L400,4 L400,60 L0,60 Z" fill="url(#g1)"/>
            <path d="M0,50 L40,42 L80,38 L120,40 L160,30 L200,22 L240,18 L280,12 L320,8 L360,5 L400,4" fill="none" stroke="#22c55e" strokeWidth="1.5"/>
          </svg>
        </div>
        <div className="space-y-2">
          <div className="text-[10px] text-zinc-600 mb-1">Top Signals Today</div>
          {opportunities.slice(0,3).map(o => (
            <div key={o.ticker} className="flex items-center gap-3">
              <span className="font-mono text-xs font-semibold text-white w-12">{o.ticker}</span>
              <span className="text-[10px] text-zinc-500 w-20">{o.signal}</span>
              <div className="flex-1 h-1 rounded-full bg-white/[0.05]">
                <div className="h-full rounded-full bg-emerald-400" style={{width:`${o.score}%`}} />
              </div>
              <span className="font-mono text-[10px] text-zinc-400 w-6">{o.score}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ShowcaseAnalysis() {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-[#090b0f] overflow-hidden">
      <div className="border-b border-white/[0.06] bg-[#0c0e13] px-5 py-3">
        <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">AI Stock Analysis</span>
      </div>
      <div className="p-5 space-y-5">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2"><span className="text-2xl font-bold text-white font-mono">NVDA</span><span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[10px] text-emerald-300 font-medium">Breakout</span></div>
            <div className="text-sm text-zinc-500 mt-0.5">Nvidia Corporation</div>
          </div>
          <div className="text-right">
            <div className="font-mono text-xl font-semibold text-white">$142.80</div>
            <div className="font-mono text-sm text-emerald-400">+4.8% today</div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <svg viewBox="0 0 100 64" className="w-28 shrink-0">
            <path d="M10,58 A40,40 0 0,1 90,58" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" strokeLinecap="round"/>
            <path d="M10,58 A40,40 0 0,1 90,58" fill="none" stroke="#22c55e" strokeWidth="6" strokeLinecap="round" strokeDasharray="126" strokeDashoffset="7.5"/>
            <text x="50" y="55" textAnchor="middle" fill="white" fontSize="20" fontWeight="700" fontFamily="monospace">94</text>
          </svg>
          <div className="flex-1 space-y-2">
            {[['Momentum','bg-emerald-400',96],['Technical','bg-cyan-400',91],['Fundamental','bg-blue-400',88],['Risk-Adj.','bg-amber-400',92]].map(([l,c,v]) => (
              <div key={String(l)} className="flex items-center gap-2">
                <span className="text-[10px] text-zinc-500 w-20">{l}</span>
                <div className="flex-1 h-1 rounded-full bg-white/[0.05]"><div className={cn('h-full rounded-full',String(c))} style={{width:`${v}%`}}/></div>
                <span className="font-mono text-[10px] text-zinc-400">{v}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
          <div className="text-[10px] text-zinc-600 mb-2 uppercase tracking-widest font-mono">AI Analysis</div>
          <p className="text-sm text-zinc-300 leading-relaxed">"NVDA is in a textbook breakout from a 6-week consolidation base with above-average volume at 2.4× the 50-day average. Institutional activity is accelerating. Price target: $168. Invalidation below $134."</p>
        </div>
      </div>
    </div>
  )
}

function ShowcaseFeed() {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-[#090b0f] overflow-hidden">
      <div className="border-b border-white/[0.06] bg-[#0c0e13] px-5 py-3 flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">Opportunity Feed</span>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-zinc-600">Sort: Conviction</span>
          <span className="text-[10px] text-emerald-400 font-mono">24 signals</span>
        </div>
      </div>
      <div className="divide-y divide-white/[0.04]">
        {[
          {ticker:'NVDA',name:'Nvidia',change:'+4.8%',up:true,signal:'Breakout',score:94,action:'Buy Zone'},
          {ticker:'AVGO',name:'Broadcom',change:'+3.2%',up:true,signal:'Momentum',score:87,action:'Entry'},
          {ticker:'MSFT',name:'Microsoft',change:'+1.6%',up:true,signal:'Accumulation',score:78,action:'Watch'},
          {ticker:'CRWD',name:'CrowdStrike',change:'+2.1%',up:true,signal:'Volume',score:71,action:'Alert'},
          {ticker:'META',name:'Meta',change:'-1.2%',up:false,signal:'Hold',score:52,action:'Monitor'},
          {ticker:'TSLA',name:'Tesla',change:'-2.1%',up:false,signal:'Risk',score:38,action:'Caution'},
        ].map(o => (
          <div key={o.ticker} className="flex items-center gap-4 px-5 py-3 hover:bg-white/[0.02] transition">
            <div className="flex h-7 w-7 items-center justify-center rounded-md border border-white/[0.08] bg-white/[0.03]">
              <div className={cn('h-1.5 w-1.5 rounded-full', o.score >= 70 ? 'bg-emerald-400' : 'bg-zinc-500')} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm font-semibold text-white">{o.ticker}</span>
                <span className="text-[10px] text-zinc-600">{o.name}</span>
              </div>
            </div>
            <span className={cn('rounded px-1.5 py-0.5 text-[9px] font-medium',
              o.signal==='Breakout'?'bg-emerald-400/10 text-emerald-300':
              o.signal==='Momentum'||o.signal==='Volume'?'bg-amber-400/10 text-amber-300':
              o.signal==='Accumulation'?'bg-cyan-400/10 text-cyan-300':'bg-zinc-800 text-zinc-500'
            )}>{o.signal}</span>
            <div className="w-16 text-right">
              <div className={cn('font-mono text-xs', o.up ? 'text-emerald-400' : 'text-red-400')}>{o.change}</div>
              <div className="font-mono text-[9px] text-zinc-600">{o.action}</div>
            </div>
            <div className="font-mono text-sm font-semibold text-white w-8 text-right">{o.score}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ShowcasePortfolio() {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-[#090b0f] overflow-hidden">
      <div className="border-b border-white/[0.06] bg-[#0c0e13] px-5 py-3 flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">Portfolio Insights</span>
        <div className="flex items-center gap-1.5"><span className="font-mono text-[10px] text-zinc-500">Health</span><span className="font-mono text-[10px] text-emerald-400 font-semibold">87/100</span></div>
      </div>
      <div className="p-5 space-y-5">
        <div className="grid grid-cols-3 gap-3">
          {[['Total Value','$284,750'],['Annualized','+18.4%'],['Sharpe Ratio','1.87']].map(([l,v]) => (
            <div key={String(l)} className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-3">
              <div className="text-[10px] text-zinc-600">{l}</div>
              <div className="font-mono text-base font-semibold text-white mt-0.5">{v}</div>
            </div>
          ))}
        </div>
        <div>
          <div className="text-[10px] text-zinc-600 mb-3 font-mono uppercase tracking-widest">Allocation</div>
          <div className="space-y-2">
            {portfolioAlloc.map(a => (
              <div key={a.label} className="flex items-center gap-3">
                <span className="text-xs text-zinc-400 w-20">{a.label}</span>
                <div className="flex-1 h-1.5 rounded-full bg-white/[0.05]">
                  <div className={cn('h-full rounded-full', a.color)} style={{width:`${a.pct}%`}}/>
                </div>
                <span className="font-mono text-[10px] text-zinc-500 w-8 text-right">{a.pct}%</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
          <div className="text-[10px] text-zinc-600 mb-3 font-mono uppercase tracking-widest">Risk Metrics</div>
          <div className="grid grid-cols-3 gap-3">
            {[['Beta','1.24'],['Max DD','-12.3%'],['VaR (95%)','$3,420']].map(([l,v]) => (
              <div key={String(l)}>
                <div className="text-[9px] text-zinc-600">{l}</div>
                <div className="font-mono text-sm text-white font-medium">{v}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="text-[10px] text-zinc-600 mb-2 font-mono uppercase tracking-widest">Sector Heatmap</div>
          <div className="grid grid-cols-4 gap-1">
            {heatCells.map(c => (
              <div key={c.label} className={cn('rounded p-2 text-center', c.up ? 'bg-emerald-500/20' : 'bg-red-500/10')}>
                <div className={cn('font-mono text-[9px] font-semibold', c.up ? 'text-emerald-300' : 'text-red-400')}>{c.v}</div>
                <div className="font-mono text-[8px] text-zinc-600 mt-0.5">{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const showcaseComponents = [ShowcaseDashboard, ShowcaseAnalysis, ShowcaseFeed, ShowcasePortfolio]

/* ─── PAGE ─────────────────────────────────────── */

export default function HomePage() {
  const [activeTab, setActiveTab] = useState(0)
  const ActiveScreen = showcaseComponents[activeTab]

  return (
    <main className="min-h-screen bg-[#030507] text-white selection:bg-emerald-400/20">

      {/* ── HERO ───────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
        {/* Background grid */}
        <div className="pointer-events-none absolute inset-0"
          style={{backgroundImage:'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)',backgroundSize:'64px 64px'}} />
        {/* Radial glow */}
        <div className="pointer-events-none absolute inset-0"
          style={{background:'radial-gradient(ellipse 80% 50% at 50% -10%,rgba(16,185,129,0.12),transparent)'}} />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12 items-center">

            {/* Left */}
            <div>
              {/* Badge */}
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.04] px-4 py-2 backdrop-blur-sm">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" style={{animation:'pulse-dot 2s ease-in-out infinite'}} />
                <span className="font-mono text-xs tracking-widest text-zinc-300 uppercase">Introducing Graycommit Stock Radar</span>
              </div>

              {/* Headline */}
              <h1 className={cn(telgraf.className, 'text-[clamp(42px,6vw,78px)] font-black leading-[0.93] tracking-[-0.04em] text-white mb-6')}>
                Institutional-grade<br />
                market intelligence.<br />
                <span className="text-transparent" style={{WebkitTextStroke:'1px rgba(255,255,255,0.3)'}}>Powered by AI.</span>
              </h1>

              {/* Subheadline */}
              <p className="max-w-lg text-lg leading-8 text-zinc-400 mb-10">
                Graycommit Stock Radar continuously scans market data, earnings, news, technical indicators and institutional activity to surface high-conviction investment opportunities before they become obvious.
              </p>

              {/* CTAs */}
              <div id="waitlist" className="scroll-mt-24 flex flex-col sm:flex-row gap-3 mb-10">
                <EmailCapture variant="trigger" source="hero_primary" triggerLabel="Join Waitlist" className="[&>button]:rounded-full [&>button]:px-6 [&>button]:h-12 [&>button]:text-sm [&>button]:font-medium" />
                <Link href="#showcase"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-6 text-sm font-medium text-zinc-300 transition hover:bg-white/[0.08] hover:text-white">
                  View Demo
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Stats */}
              <div className="flex gap-8 border-t border-white/[0.06] pt-8">
                {[['18K+','Stocks scanned daily'],['42ms','Signal latency'],['24/7','Market watch']].map(([v,l]) => (
                  <div key={String(l)}>
                    <div className="font-mono text-xl font-bold text-white">{v}</div>
                    <div className="text-xs text-zinc-600 mt-0.5">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — App UI */}
            <div className="hidden lg:block">
              <AppMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ───────────────────────────── */}
      <section className="border-t border-white/[0.06] py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <p className="font-mono text-[11px] tracking-[0.2em] text-zinc-600 uppercase mb-4">Capabilities</p>
            <h2 className={cn(telgraf.className, 'text-[clamp(32px,4vw,52px)] font-black tracking-[-0.03em] text-white max-w-xl leading-tight')}>
              Every tool a serious investor needs.
            </h2>
          </div>
          <div className="grid gap-px grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-white/[0.06] rounded-2xl overflow-hidden">
            {features.map((f, i) => (
              <div key={f.title}
                className={cn('group p-8 bg-[#030507] transition hover:bg-white/[0.025]', i < 3 ? 'border-b border-white/[0.06] lg:border-b' : '')}>
                <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] transition group-hover:border-emerald-300/30 group-hover:bg-emerald-300/[0.05]">
                  <f.icon className="h-4 w-4 text-zinc-500 transition group-hover:text-emerald-300" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm leading-6 text-zinc-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT SHOWCASE ───────────────────── */}
      <section id="showcase" className="border-t border-white/[0.06] py-28 scroll-mt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <p className="font-mono text-[11px] tracking-[0.2em] text-zinc-600 uppercase mb-4">The Product</p>
            <h2 className={cn(telgraf.className, 'text-[clamp(32px,4vw,52px)] font-black tracking-[-0.03em] text-white max-w-2xl leading-tight')}>
              Built for the way professionals actually work.
            </h2>
            <p className="mt-4 max-w-xl text-zinc-400 leading-7">
              Every screen is designed for speed and signal clarity. No dashboards buried in settings. No learning curve.
            </p>
          </div>

          {/* Tab selector */}
          <div className="mb-6 flex gap-1 rounded-xl border border-white/[0.06] bg-white/[0.02] p-1 w-fit">
            {showcaseTabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={cn('rounded-lg px-4 py-2 text-sm font-medium transition', activeTab === i ? 'bg-white/[0.08] text-white' : 'text-zinc-500 hover:text-zinc-300')}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Active screen */}
          <div className="relative">
            <div className="absolute -inset-8 rounded-3xl bg-emerald-500/[0.04] blur-2xl pointer-events-none" />
            <div className="relative">
              <ActiveScreen />
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ──────────────────────────────── */}
      <section className="border-t border-white/[0.06] py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono text-[11px] tracking-[0.2em] text-zinc-600 uppercase mb-6">About Graycommit</p>
              <h2 className={cn(telgraf.className, 'text-[clamp(32px,4vw,52px)] font-black tracking-[-0.03em] text-white leading-tight mb-6')}>
                Built by Graycommit.
              </h2>
              <p className="text-lg leading-8 text-zinc-400 mb-4">
                Graycommit builds AI-powered intelligence products that help professionals make better decisions.
              </p>
              <p className="text-lg leading-8 text-zinc-400">
                Our first flagship product is Graycommit Stock Radar, an AI-first platform designed to bring institutional-quality market research to every investor.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: 'AI-First',    l: 'Not a screener with AI bolted on. Built from the ground up for machine intelligence.' },
                { v: 'Institutional', l: 'The same signals hedge funds use. Now accessible to every investor.' },
                { v: 'Real-time',   l: '42ms median signal latency. You see the opportunity when it forms.' },
                { v: 'Transparent', l: 'Every score explained. Understand why, not just what.' },
              ].map(({ v, l }) => (
                <div key={v} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                  <div className="font-mono text-xs text-emerald-400 mb-2">{v}</div>
                  <p className="text-sm text-zinc-500 leading-6">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────── */}
      <section className="border-t border-white/[0.06] py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative rounded-3xl border border-white/[0.08] bg-white/[0.02] overflow-hidden px-8 py-20 text-center">
            {/* Background glow */}
            <div className="pointer-events-none absolute inset-0"
              style={{background:'radial-gradient(ellipse 60% 60% at 50% 100%,rgba(16,185,129,0.1),transparent)'}} />
            <div className="pointer-events-none absolute inset-0"
              style={{background:'radial-gradient(ellipse 40% 40% at 50% 0%,rgba(6,182,212,0.06),transparent)'}} />

            <div className="relative">
              <p className="font-mono text-[11px] tracking-[0.2em] text-zinc-600 uppercase mb-6">Early Access</p>
              <h2 className={cn(telgraf.className, 'text-[clamp(36px,5vw,72px)] font-black tracking-[-0.04em] text-white leading-[0.95] mb-5')}>
                Invest with intelligence.
              </h2>
              <p className="mx-auto max-w-lg text-lg leading-8 text-zinc-400 mb-10">
                Join the next generation of investors using AI to discover opportunities faster.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <EmailCapture
                  variant="trigger"
                  source="final_cta"
                  triggerLabel="Get Early Access"
                  className="[&>button]:rounded-full [&>button]:px-8 [&>button]:h-12 [&>button]:text-sm [&>button]:font-medium"
                />
                <Link href="/pricing" className="text-sm text-zinc-500 hover:text-zinc-300 transition underline-offset-4 hover:underline">
                  View pricing
                </Link>
              </div>
              <p className="mt-6 text-xs text-zinc-700">No credit card required · Free tier available</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
