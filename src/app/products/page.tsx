'use client'

import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Activity, BarChart, Eye, Layout, GitBranch, Box, Shield, Zap, Target, Sparkles } from 'lucide-react'

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState('startup')

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#0f81fb,_transparent_40%)] opacity-20" />
            {/* Vertical lines */}
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
            {/* Horizontal lines */}
            {[...Array(40)].map((_, i) => (
              <div
                key={`h-${i}`}
                className="absolute left-0 right-0 h-px"
                style={{ 
                  top: `${(i + 1) * 2.5}%`,
                  background: 'linear-gradient(to right, transparent, rgba(15, 129, 251, 0.1) 50%, transparent)',
                  opacity: '0.3'
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="inline-flex items-center space-x-2 rounded-full bg-[#111] px-4 py-1.5 text-sm">
                <span className="text-[#0f81fb]">New</span>
                <span className="text-[#888]">AI-Powered Deal Intelligence</span>
              </div>
              
              <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Transform Your Sales Team with AI-Powered Intelligence
              </h1>
              
              <p className="max-w-2xl text-xl text-[#888]">
                Close more enterprise deals with real-time coaching, competitive intelligence, and predictive analytics.
              </p>

              <div className="flex flex-col gap-4 min-[400px]:flex-row relative z-20">
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
                    Book a Demo
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-4 text-sm text-[#888]">
                <Shield className="h-5 w-5 text-[#0f81fb]" />
                <span>SOC 2 Type II Certified</span>
                <span className="text-[#333]">|</span>
                <span>GDPR Compliant</span>
                <span className="text-[#333]">|</span>
                <span>HIPAA Compliant</span>
              </div>
            </div>
          </div>
        </section>

        {/* Revenue Intelligence Section */}
        <section className="py-24 border-t border-[#333]">
          <div className="container mx-auto px-4">
            <div className="grid gap-16 md:grid-cols-2 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center space-x-2 rounded-full bg-[#111] px-4 py-1.5">
                  <Activity className="h-5 w-5 text-[#0f81fb]" />
                  <span className="text-sm font-medium">Revenue Intelligence</span>
                </div>
                
                <h2 className="text-4xl font-bold tracking-tight">Real-time AI Coach</h2>
                
                <p className="text-xl text-[#888]">
                  Your virtual sales expert that provides real-time guidance during customer calls.
                </p>

                <div className="space-y-4">
                  {[
                    'Live competitive battlecards and objection handling',
                    'Industry-specific success stories and references',
                    'Real-time pricing and negotiation guidance',
                    'Personalized value propositions based on buyer context'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded-full bg-[#111] border border-[#333] flex items-center justify-center">
                        <Sparkles className="h-4 w-4 text-[#0f81fb]" />
                      </div>
                      <span className="text-[#888]">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#0f81fb]">45%</div>
                    <div className="text-sm text-[#888]">Higher Win Rates</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#0f81fb]">2.3x</div>
                    <div className="text-sm text-[#888]">Faster Deal Velocity</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#0f81fb]">60%</div>
                    <div className="text-sm text-[#888]">Larger Deal Sizes</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-xl overflow-hidden bg-[#111] border border-[#333] p-6">
                  {/* Live Demo Interface */}
                  <div className="absolute inset-6 rounded-lg bg-[#0A0A0A] overflow-hidden">
                    <div className="h-full flex flex-col">
                      {/* Call Header */}
                      <div className="p-4 border-b border-[#222] flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-3 w-3 rounded-full bg-green-500" />
                          <span className="text-sm">Live Call - Enterprise Deal</span>
                        </div>
                        <div className="text-sm text-[#888]">00:15:23</div>
                      </div>

                      {/* Live Suggestions */}
                      <div className="flex-grow p-4 space-y-4">
                        <div className="bg-[#0f81fb]/10 rounded-lg p-4 border border-[#0f81fb]/20">
                          <div className="flex items-center gap-2 mb-2">
                            <Zap className="h-4 w-4 text-[#0f81fb]" />
                            <span className="text-sm font-medium text-[#0f81fb]">Competitive Intelligence</span>
                          </div>
                          <p className="text-sm text-white">
                            "Their solution requires manual setup. Highlight our zero-config automation and 60% faster deployment."
                          </p>
                        </div>

                        <div className="bg-[#111] rounded-lg p-4 border border-[#333]">
                          <div className="flex items-center gap-2 mb-2">
                            <Target className="h-4 w-4 text-green-500" />
                            <span className="text-sm font-medium text-green-500">Success Story</span>
                          </div>
                          <p className="text-sm text-[#888]">
                            "Similar enterprise client achieved 40% higher conversion rates within 3 months"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deal Intelligence Section */}
        <section className="py-24 border-t border-[#333] bg-[#0A0A0A]">
          <div className="container mx-auto px-4">
            <div className="grid gap-16 md:grid-cols-2 items-center">
              <div className="relative order-2 md:order-1">
                <div className="aspect-square rounded-xl overflow-hidden bg-black border border-[#333] p-6">
                  {/* Deal Intelligence Dashboard */}
                  <div className="absolute inset-6 rounded-lg bg-[#111] overflow-hidden">
                    <div className="h-full flex flex-col">
                      <div className="p-4 border-b border-[#222]">
                        <h3 className="font-medium">Deal Risk Analysis</h3>
                      </div>
                      <div className="flex-grow p-4 space-y-6">
                        {[
                          { name: 'Stakeholder Buy-in', score: 85 },
                          { name: 'Technical Validation', score: 92 },
                          { name: 'Budget Confirmation', score: 75 },
                          { name: 'Competitive Position', score: 88 }
                        ].map((metric) => (
                          <div key={metric.name} className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>{metric.name}</span>
                              <span className="text-[#0f81fb]">{metric.score}%</span>
                            </div>
                            <div className="h-2 bg-[#222] rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-[#0f81fb] rounded-full"
                                style={{ width: `${metric.score}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8 order-1 md:order-2">
                <div className="inline-flex items-center space-x-2 rounded-full bg-[#111] px-4 py-1.5">
                  <BarChart className="h-5 w-5 text-[#0f81fb]" />
                  <span className="text-sm font-medium">Deal Intelligence</span>
                </div>
                
                <h2 className="text-4xl font-bold tracking-tight">
                  Predict and Close Deals with Confidence
                </h2>
                
                <p className="text-xl text-[#888]">
                  AI-powered deal analytics that help you focus on the right opportunities and take action at the right time.
                </p>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-black rounded-lg p-4 border border-[#333]">
                      <div className="text-2xl font-bold text-[#0f81fb]">93%</div>
                      <div className="text-sm text-[#888]">Deal Forecast Accuracy</div>
                    </div>
                    <div className="bg-black rounded-lg p-4 border border-[#333]">
                      <div className="text-2xl font-bold text-[#0f81fb]">2.8x</div>
                      <div className="text-sm text-[#888]">Pipeline Velocity</div>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <Link href="https://app.graycommit.com" target="_blank" rel="noopener noreferrer">
                    <Button className="group relative bg-[#0f81fb] text-white hover:bg-[#0f81fb]/90 transition-all duration-300">
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
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Intelligence Section */}
        <section className="py-24 border-t border-[#333]">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-8 mb-16">
              <div className="inline-flex items-center space-x-2 rounded-full bg-[#111] px-4 py-1.5">
                <Eye className="h-5 w-5 text-[#0f81fb]" />
                <span className="text-sm font-medium">Competitive Intelligence</span>
              </div>
              
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Win More Competitive Deals
              </h2>
              
              <p className="text-xl text-[#888] max-w-2xl mx-auto">
                Real-time battle cards and competitive insights that give your team the edge in every deal.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Real-time Battle Cards',
                  description: 'Get instant competitive insights and positioning during live calls',
                  metrics: ['85% Win Rate vs Competitors', '2.3x Faster Responses']
                },
                {
                  title: 'Win-Loss Analysis',
                  description: 'AI-powered analysis of won and lost deals to improve strategy',
                  metrics: ['40% Higher Win Rates', '60% Better Forecasting']
                },
                {
                  title: 'Market Intelligence',
                  description: 'Stay ahead with real-time competitor and market updates',
                  metrics: ['Daily Updates', '95% Accuracy']
                }
              ].map((feature, i) => (
                <div key={i} className="bg-[#111] rounded-xl p-6 border border-[#333] hover:border-[#0f81fb] transition-all">
                  <div className="space-y-4">
                    <div className="h-12 w-12 rounded-full bg-[#0f81fb]/10 flex items-center justify-center">
                      <Eye className="h-6 w-6 text-[#0f81fb]" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-[#888]">{feature.description}</p>
                    <div className="pt-4 space-y-2">
                      {feature.metrics.map((metric, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <Sparkles className="h-4 w-4 text-[#0f81fb]" />
                          <span className="text-sm">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI-Powered Sales Excellence Section - Updated */}
        <section className="py-24 border-t border-[#333] bg-[#0A0A0A] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#0f81fb,_transparent_50%)] opacity-10" />
          </div>
          
          <div className="container mx-auto px-4">
            <div className="grid gap-16 md:grid-cols-2 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center space-x-2 rounded-full bg-[#111] px-4 py-1.5">
                  <Layout className="h-5 w-5 text-[#0f81fb]" />
                  <span className="text-sm font-medium">AI-Powered Sales Excellence</span>
                </div>
                
                <h2 className="text-4xl font-bold tracking-tight">
                  Your AI Sales Coach That Never Sleeps
                </h2>
                
                <p className="text-xl text-[#888]">
                  Transform every rep into a top performer with personalized, real-time guidance powered by advanced AI.
                </p>

                <div className="space-y-6">
                  <Tabs defaultValue="startup" className="w-full">
                    <TabsList className="w-full bg-[#111] border-b border-[#333]">
                      <TabsTrigger value="startup" className="flex-1" onClick={() => setActiveTab('startup')}>
                        Startup
                      </TabsTrigger>
                      <TabsTrigger value="mid-market" className="flex-1" onClick={() => setActiveTab('mid-market')}>
                        Mid-Market
                      </TabsTrigger>
                      <TabsTrigger value="enterprise" className="flex-1" onClick={() => setActiveTab('enterprise')}>
                        Enterprise
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="startup" className="space-y-4 mt-4">
                      <div className="bg-black rounded-lg p-6 border border-[#333] space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="h-12 w-12 rounded-full bg-[#0f81fb]/10 flex items-center justify-center">
                            <Zap className="h-6 w-6 text-[#0f81fb]" />
                          </div>
                          <div>
                            <h4 className="font-medium text-lg">Startup Growth Engine</h4>
                            <p className="text-[#888]">Perfect for fast-moving sales teams</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <div className="text-sm font-medium">Time to Value</div>
                            <div className="h-2 bg-[#222] rounded-full overflow-hidden">
                              <div className="h-full bg-[#0f81fb] rounded-full animate-pulse" style={{ width: '95%' }} />
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="text-sm font-medium">Setup Complexity</div>
                            <div className="h-2 bg-[#222] rounded-full overflow-hidden">
                              <div className="h-full bg-[#0f81fb] rounded-full animate-pulse" style={{ width: '20%' }} />
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          {[
                            {
                              title: 'Quick Wins',
                              items: ['15-min Setup', 'Instant Insights', 'Quick Demos']
                            },
                            {
                              title: 'Growth Focus',
                              items: ['Pipeline Building', 'Quick Follow-ups', 'Lead Scoring']
                            }
                          ].map((category, i) => (
                            <div key={i} className="space-y-2">
                              <div className="font-medium">{category.title}</div>
                              <ul className="space-y-2 text-sm text-[#888]">
                                {category.items.map((item, j) => (
                                  <li key={j} className="flex items-center gap-2">
                                    <Sparkles className="h-4 w-4 text-[#0f81fb]" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        <div className="pt-4 border-t border-[#222]">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-green-500" />
                              <span className="text-sm text-[#888]">Start Free - No Credit Card</span>
                            </div>
                            <Link href="https://app.graycommit.com" target="_blank" rel="noopener noreferrer">
                              <Button variant="ghost" className="group text-[#0f81fb] hover:bg-[#0f81fb]/10 transition-all duration-300">
                                <span className="flex items-center">
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
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="mid-market" className="space-y-4 mt-4">
                      <div className="bg-black rounded-lg p-6 border border-[#333] space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="h-12 w-12 rounded-full bg-[#0f81fb]/10 flex items-center justify-center">
                            <GitBranch className="h-6 w-6 text-[#0f81fb]" />
                          </div>
                          <div>
                            <h4 className="font-medium text-lg">Mid-Market Accelerator</h4>
                            <p className="text-[#888]">Optimized for growing sales organizations</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <div className="text-sm font-medium">Team Collaboration</div>
                            <div className="h-2 bg-[#222] rounded-full overflow-hidden">
                              <div className="h-full bg-[#0f81fb] rounded-full animate-pulse" style={{ width: '85%' }} />
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="text-sm font-medium">Process Automation</div>
                            <div className="h-2 bg-[#222] rounded-full overflow-hidden">
                              <div className="h-full bg-[#0f81fb] rounded-full animate-pulse" style={{ width: '80%' }} />
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          {[
                            {
                              title: 'Team Features',
                              items: ['Team Analytics', 'Shared Playbooks', 'Deal Collaboration']
                            },
                            {
                              title: 'Growth Tools',
                              items: ['Territory Planning', 'Account Mapping', 'Team Coaching']
                            }
                          ].map((category, i) => (
                            <div key={i} className="space-y-2">
                              <div className="font-medium">{category.title}</div>
                              <ul className="space-y-2 text-sm text-[#888]">
                                {category.items.map((item, j) => (
                                  <li key={j} className="flex items-center gap-2">
                                    <Sparkles className="h-4 w-4 text-[#0f81fb]" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        <div className="pt-4 border-t border-[#222]">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-green-500" />
                              <span className="text-sm text-[#888]">14-Day Free Trial</span>
                            </div>
                            <Link href="https://app.graycommit.com" target="_blank" rel="noopener noreferrer">
                              <Button variant="ghost" className="group text-[#0f81fb] hover:bg-[#0f81fb]/10 transition-all duration-300">
                                <span className="flex items-center">
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
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="enterprise" className="space-y-4 mt-4">
                      <div className="bg-black rounded-lg p-6 border border-[#333] space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="h-12 w-12 rounded-full bg-[#0f81fb]/10 flex items-center justify-center">
                            <Shield className="h-6 w-6 text-[#0f81fb]" />
                          </div>
                          <div>
                            <h4 className="font-medium text-lg">Enterprise Playbook</h4>
                            <p className="text-[#888]">Tailored for complex, multi-stakeholder deals</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <div className="text-sm font-medium">Deal Complexity</div>
                            <div className="h-2 bg-[#222] rounded-full overflow-hidden">
                              <div className="h-full bg-[#0f81fb] rounded-full animate-pulse" style={{ width: '90%' }} />
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="text-sm font-medium">AI Assistance Level</div>
                            <div className="h-2 bg-[#222] rounded-full overflow-hidden">
                              <div className="h-full bg-[#0f81fb] rounded-full animate-pulse" style={{ width: '95%' }} />
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          {[
                            {
                              title: 'Security Focus',
                              items: ['SOC 2 Type II', 'HIPAA', 'GDPR']
                            },
                            {
                              title: 'Deal Strategy',
                              items: ['Multi-threading', 'Executive Alignment', 'ROI Analysis']
                            }
                          ].map((category, i) => (
                            <div key={i} className="space-y-2">
                              <div className="font-medium">{category.title}</div>
                              <ul className="space-y-2 text-sm text-[#888]">
                                {category.items.map((item, j) => (
                                  <li key={j} className="flex items-center gap-2">
                                    <Sparkles className="h-4 w-4 text-[#0f81fb]" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        <div className="pt-4 border-t border-[#222]">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-green-500" />
                              <span className="text-sm text-[#888]">Live Demo Available</span>
                            </div>
                            <Link href="https://tidycal.com/sudheer.sandu/problemoverview" target="_blank" rel="noopener noreferrer">
                              <Button variant="ghost" className="text-[#0f81fb] hover:bg-[#0f81fb]/10">
                                See it in action →
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>

                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { metric: '85%', label: 'Win Rate Increase' },
                      { metric: '3.2x', label: 'Revenue Growth' },
                      { metric: '-40%', label: 'Ramp Time' }
                    ].map((stat, i) => (
                      <div key={i} className="bg-black rounded-lg p-4 border border-[#333] text-center group hover:border-[#0f81fb] transition-all">
                        <div className="text-2xl font-bold text-[#0f81fb] group-hover:scale-110 transition-transform">
                          {stat.metric}
                        </div>
                        <div className="text-sm text-[#888]">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-xl overflow-hidden bg-black border border-[#333] p-6">
                  {/* Interactive Playbook Interface */}
                  <div className="absolute inset-6 rounded-lg bg-[#111] overflow-hidden">
                    <div className="h-full flex flex-col">
                      <div className="p-4 border-b border-[#222] flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-3 w-3 rounded-full bg-[#0f81fb] animate-pulse" />
                          <span className="text-sm">AI Sales Coach - Live Session</span>
                        </div>
                        <div className="text-sm text-[#888]">Enterprise Deal</div>
                      </div>

                      <div className="flex-grow p-4 space-y-4 overflow-auto">
                        {[
                          {
                            type: 'insight',
                            icon: <Zap className="h-4 w-4 text-[#0f81fb]" />,
                            title: 'Competitive Edge',
                            content: 'Customer mentioned security concerns. Highlight our SOC 2 certification and zero-breach track record.'
                          },
                          {
                            type: 'action',
                            icon: <Target className="h-4 w-4 text-green-500" />,
                            title: 'Next Best Action',
                            content: 'Schedule technical deep-dive with their security team. Historical success rate: 89%'
                          },
                          {
                            type: 'alert',
                            icon: <Shield className="h-4 w-4 text-yellow-500" />,
                            title: 'Risk Alert',
                            content: 'New stakeholder joined. Recommend executive alignment meeting within 7 days.'
                          }
                        ].map((item, i) => (
                          <div 
                            key={i}
                            className={`bg-[#0A0A0A] rounded-lg p-4 border ${
                              item.type === 'insight' ? 'border-[#0f81fb]/20 bg-[#0f81fb]/5' :
                              item.type === 'action' ? 'border-green-500/20 bg-green-500/5' :
                              'border-yellow-500/20 bg-yellow-500/5'
                            }`}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              {item.icon}
                              <span className={`text-sm font-medium ${
                                item.type === 'insight' ? 'text-[#0f81fb]' :
                                item.type === 'action' ? 'text-green-500' :
                                'text-yellow-500'
                              }`}>{item.title}</span>
                            </div>
                            <p className="text-sm text-[#888]">{item.content}</p>
                          </div>
                        ))}
                      </div>

                      <div className="p-4 border-t border-[#222] bg-black/50">
                        <div className="flex items-center gap-2">
                          <div className="flex-grow">
                            <div className="h-8 w-full rounded bg-[#222] animate-pulse" />
                          </div>
                          <Link href="https://app.graycommit.com" target="_blank" rel="noopener noreferrer">
                            <Button size="sm" className="group bg-[#0f81fb] text-white hover:bg-[#0f81fb]/90 transition-all duration-300">
                              <span className="flex items-center">
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative border-t border-[#333]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center space-y-8">
              <div className="inline-flex items-center space-x-2 rounded-full bg-[#111] px-4 py-1.5">
                <Sparkles className="h-5 w-5 text-[#0f81fb]" />
                <span className="text-sm font-medium">Get Started Today</span>
              </div>
              
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl max-w-3xl">
                Transform Your Sales Team with AI-Powered Intelligence
              </h2>
              
              <p className="text-xl text-[#888] max-w-2xl">
                Join leading sales teams who've achieved <span className="text-white">3.5x revenue growth</span> with 
                Graycommit's AI sales intelligence platform.
              </p>

              <div className="flex flex-col gap-4 min-[400px]:flex-row">
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

              <div className="pt-8 flex items-center gap-8 text-sm text-[#666]">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-green-500" />
                  No credit card required
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-green-500" />
                  14-day free trial
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-green-500" />
                  Cancel anytime
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}