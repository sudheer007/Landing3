'use client'

import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Activity, BarChart, Eye, Layout, GitBranch, Box, Shield, Zap, Target, Sparkles, CheckCircle2, Rocket, Link2, Building2, Circle, Star } from 'lucide-react'

function ProductsPage() {
  const [activeTab, setActiveTab] = useState('startup')

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f81fb]/10 via-purple-500/5 to-transparent" />
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-2 h-2 bg-[#0f81fb] rounded-full animate-pulse" />
            <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000" />
            <div className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-[#0f81fb] rounded-full animate-pulse delay-2000" />
          </div>

          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px),
                linear-gradient(180deg, hsl(var(--border)) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }} />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="inline-flex items-center space-x-2 rounded-full bg-card border border-border px-4 py-1.5 text-sm">
                <span className="text-[#0f81fb]">New</span>
                <span className="text-muted-foreground">AI-Powered Deal Intelligence</span>
              </div>
              
              <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Transform Your Sales Team with
                <span className="bg-gradient-to-r from-[#0f81fb] to-purple-400 bg-clip-text text-transparent"> AI-Powered Intelligence</span>
              </h1>
              
              <p className="max-w-2xl text-xl text-muted-foreground">
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

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <Shield className="h-5 w-5 text-[#0f81fb]" />
                <span>SOC 2 Type II Certified</span>
                <span className="text-border">|</span>
                <span>GDPR Compliant</span>
                <span className="text-border">|</span>
                <span>HIPAA Compliant</span>
              </div>
            </div>
          </div>
        </section>

        {/* Revenue Intelligence Section */}
        <section className="py-24 border-t border-border relative">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-background" />
          <div className="container mx-auto px-4 relative">
            <div className="grid gap-16 md:grid-cols-2 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center space-x-2 rounded-full bg-card border border-border px-4 py-1.5">
                  <Activity className="h-5 w-5 text-[#0f81fb]" />
                  <span className="text-sm font-medium text-foreground">Revenue Intelligence</span>
                </div>
                
                <h2 className="text-4xl font-bold tracking-tight">Real-time AI Coach</h2>
                
                <p className="text-xl text-muted-foreground">
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
                      <div className="h-6 w-6 rounded-full bg-card border border-border flex items-center justify-center">
                        <Sparkles className="h-4 w-4 text-[#0f81fb]" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#0f81fb]">45%</div>
                    <div className="text-sm text-muted-foreground">Higher Win Rates</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#0f81fb]">2.3x</div>
                    <div className="text-sm text-muted-foreground">Faster Deal Velocity</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#0f81fb]">60%</div>
                    <div className="text-sm text-muted-foreground">Larger Deal Sizes</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-xl overflow-hidden bg-card border border-border p-6 shadow-xl shadow-[#0f81fb]/10">
                  {/* Live Demo Interface */}
                  <div className="absolute inset-6 rounded-lg bg-gradient-to-b from-card to-background overflow-hidden">
                    <div className="h-full flex flex-col">
                      {/* Call Header */}
                      <div className="p-4 border-b border-border flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                          <span className="text-sm text-foreground">Live Call - Enterprise Deal</span>
                        </div>
                        <div className="text-sm text-muted-foreground">00:15:23</div>
                      </div>

                      {/* Live Suggestions */}
                      <div className="flex-grow p-4 space-y-4">
                        <div className="bg-[#0f81fb]/10 rounded-lg p-4 border border-[#0f81fb]/20 hover:border-[#0f81fb]/40 transition-colors">
                          <div className="flex items-center gap-2 mb-2">
                            <Zap className="h-4 w-4 text-[#0f81fb]" />
                            <span className="text-sm font-medium text-[#0f81fb]">Competitive Intelligence</span>
                          </div>
                          <p className="text-sm text-foreground">
                            "Their solution requires manual setup. Highlight our zero-config automation and 60% faster deployment."
                          </p>
                        </div>

                        <div className="bg-card rounded-lg p-4 border border-border hover:border-green-500/40 transition-colors">
                          <div className="flex items-center gap-2 mb-2">
                            <Target className="h-4 w-4 text-green-500" />
                            <span className="text-sm font-medium text-green-500">Success Story</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
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
        <section className="py-24 border-t border-border relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0f81fb]/5 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_rgba(15,129,251,0.1),_transparent_50%)]" />
          <div className="container mx-auto px-4 relative">
            <div className="grid gap-16 md:grid-cols-2 items-center">
              <div className="relative order-2 md:order-1">
                <div className="aspect-square rounded-xl overflow-hidden bg-card border border-border p-6 shadow-xl shadow-[#0f81fb]/10">
                  <div className="absolute inset-6 rounded-lg bg-gradient-to-b from-card to-background overflow-hidden">
                    <div className="h-full flex flex-col">
                      <div className="p-4 border-b border-border">
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
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
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
                <div className="inline-flex items-center space-x-2 rounded-full bg-card border border-border px-4 py-1.5">
                  <BarChart className="h-5 w-5 text-[#0f81fb]" />
                  <span className="text-sm font-medium text-foreground">Deal Intelligence</span>
                </div>
                
                <h2 className="text-4xl font-bold tracking-tight">
                  Predict and Close Deals with Confidence
                </h2>
                
                <p className="text-xl text-muted-foreground">
                  AI-powered deal analytics that help you focus on the right opportunities and take action at the right time.
                </p>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-card rounded-lg p-4 border border-border hover:border-[#0f81fb]/30 transition-all">
                      <div className="text-2xl font-bold text-[#0f81fb]">93%</div>
                      <div className="text-sm text-muted-foreground">Deal Forecast Accuracy</div>
                    </div>
                    <div className="bg-card rounded-lg p-4 border border-border hover:border-[#0f81fb]/30 transition-all">
                      <div className="text-2xl font-bold text-[#0f81fb]">2.8x</div>
                      <div className="text-sm text-muted-foreground">Pipeline Velocity</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="py-24 border-t border-border relative">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-8 mb-16">
              <div className="inline-flex items-center space-x-2 rounded-full bg-card border border-border px-4 py-1.5">
                <Layout className="h-5 w-5 text-[#0f81fb]" />
                <span className="text-sm font-medium text-foreground">Solutions by Stage</span>
              </div>
              
              <h2 className="text-4xl font-bold tracking-tight">
                Tailored for Every Growth Stage
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From early-stage startups to enterprise organizations, our AI adapts to your unique sales challenges and growth objectives.
              </p>
            </div>

            <div className="grid gap-16 md:grid-cols-2 items-center">
              <div className="space-y-8">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="startup" className="text-sm">Startup</TabsTrigger>
                    <TabsTrigger value="midmarket" className="text-sm">Mid-Market</TabsTrigger>
                    <TabsTrigger value="enterprise" className="text-sm">Enterprise</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="startup" className="space-y-4 mt-4">
                    <div className="bg-card/30 rounded-lg p-6 border border-border space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#0f81fb]/20 to-[#0f81fb]/10 flex items-center justify-center">
                          <Rocket className="h-6 w-6 text-[#0f81fb]" />
                        </div>
                        <div>
                          <h4 className="font-medium text-base text-foreground">Startup Accelerator</h4>
                          <p className="text-sm text-muted-foreground">Scale faster with AI-driven sales intelligence</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-base font-medium text-foreground mb-4">Growth Acceleration</h3>
                          <div className="h-2 bg-muted rounded-full overflow-hidden mb-6">
                            <div className="h-full bg-[#0f81fb] rounded-full" style={{ width: '75%' }} />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-base font-medium text-foreground mb-4">Market Penetration</h3>
                          <div className="h-2 bg-muted rounded-full overflow-hidden mb-6">
                            <div className="h-full bg-[#0f81fb] rounded-full" style={{ width: '82%' }} />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-base font-medium text-foreground mb-4">Core Features</h3>
                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <Star className="h-4 w-4 text-[#0f81fb]" />
                              <span className="text-sm text-muted-foreground">Real-time coaching</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Star className="h-4 w-4 text-[#0f81fb]" />
                              <span className="text-sm text-muted-foreground">Deal insights</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Star className="h-4 w-4 text-[#0f81fb]" />
                              <span className="text-sm text-muted-foreground">Pipeline analytics</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-base font-medium text-foreground mb-4">Growth Tools</h3>
                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <Star className="h-4 w-4 text-[#0f81fb]" />
                              <span className="text-sm text-muted-foreground">Lead scoring</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Star className="h-4 w-4 text-[#0f81fb]" />
                              <span className="text-sm text-muted-foreground">Competitive intel</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Star className="h-4 w-4 text-[#0f81fb]" />
                              <span className="text-sm text-muted-foreground">Performance tracking</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-2">
                          <Circle className="h-4 w-4 text-green-500 fill-green-500" />
                          <span className="text-sm text-muted-foreground">14-Day Free Trial</span>
                        </div>
                        <Link href="https://app.graycommit.com/signup" className="text-[#0f81fb] hover:text-[#0f81fb]/90 font-medium text-sm flex items-center gap-1">
                          Get Started Free
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-card/30 rounded-lg p-6 border border-border text-center">
                        <div className="text-2xl font-bold text-[#0f81fb] mb-2">65%</div>
                        <div className="text-sm text-muted-foreground">Win Rate Increase</div>
                      </div>
                      <div className="bg-card/30 rounded-lg p-6 border border-border text-center">
                        <div className="text-2xl font-bold text-[#0f81fb] mb-2">2.1x</div>
                        <div className="text-sm text-muted-foreground">Revenue Growth</div>
                      </div>
                      <div className="bg-card/30 rounded-lg p-6 border border-border text-center">
                        <div className="text-2xl font-bold text-[#0f81fb] mb-2">-25%</div>
                        <div className="text-sm text-muted-foreground">Ramp Time</div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="midmarket" className="space-y-4 mt-4">
                    <div className="bg-card/30 rounded-lg p-6 border border-border space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#0f81fb]/20 to-[#0f81fb]/10 flex items-center justify-center">
                          <Target className="h-6 w-6 text-[#0f81fb]" />
                        </div>
                        <div>
                          <h4 className="font-medium text-base text-foreground">Mid-Market Pro</h4>
                          <p className="text-sm text-muted-foreground">Advanced features for growing sales teams</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-base font-medium text-foreground mb-4">Team Performance</h3>
                          <div className="h-2 bg-muted rounded-full overflow-hidden mb-6">
                            <div className="h-full bg-[#0f81fb] rounded-full" style={{ width: '88%' }} />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-base font-medium text-foreground mb-4">Revenue Optimization</h3>
                          <div className="h-2 bg-muted rounded-full overflow-hidden mb-6">
                            <div className="h-full bg-[#0f81fb] rounded-full" style={{ width: '91%' }} />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-base font-medium text-foreground mb-4">Advanced Features</h3>
                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <Star className="h-4 w-4 text-[#0f81fb]" />
                              <span className="text-sm text-muted-foreground">Team coaching</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Star className="h-4 w-4 text-[#0f81fb]" />
                              <span className="text-sm text-muted-foreground">Advanced analytics</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Star className="h-4 w-4 text-[#0f81fb]" />
                              <span className="text-sm text-muted-foreground">Custom workflows</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-base font-medium text-foreground mb-4">Integration Hub</h3>
                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <Star className="h-4 w-4 text-[#0f81fb]" />
                              <span className="text-sm text-muted-foreground">CRM integration</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Star className="h-4 w-4 text-[#0f81fb]" />
                              <span className="text-sm text-muted-foreground">API access</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Star className="h-4 w-4 text-[#0f81fb]" />
                              <span className="text-sm text-muted-foreground">Data exports</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-2">
                          <Circle className="h-4 w-4 text-green-500 fill-green-500" />
                          <span className="text-sm text-muted-foreground">14-Day Free Trial</span>
                        </div>
                        <Link href="https://app.graycommit.com/signup" className="text-[#0f81fb] hover:text-[#0f81fb]/90 font-medium text-sm flex items-center gap-1">
                          Get Started Free
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-card/30 rounded-lg p-6 border border-border text-center">
                        <div className="text-2xl font-bold text-[#0f81fb] mb-2">85%</div>
                        <div className="text-sm text-muted-foreground">Win Rate Increase</div>
                      </div>
                      <div className="bg-card/30 rounded-lg p-6 border border-border text-center">
                        <div className="text-2xl font-bold text-[#0f81fb] mb-2">3.2x</div>
                        <div className="text-sm text-muted-foreground">Revenue Growth</div>
                      </div>
                      <div className="bg-card/30 rounded-lg p-6 border border-border text-center">
                        <div className="text-2xl font-bold text-[#0f81fb] mb-2">-40%</div>
                        <div className="text-sm text-muted-foreground">Ramp Time</div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="enterprise" className="space-y-4 mt-4">
                    <div className="bg-card/30 rounded-lg p-6 border border-border space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#0f81fb]/20 to-[#0f81fb]/10 flex items-center justify-center">
                          <Building2 className="h-6 w-6 text-[#0f81fb]" />
                        </div>
                        <div>
                          <h4 className="font-medium text-base text-foreground">Enterprise Suite</h4>
                          <p className="text-sm text-muted-foreground">Complete solution for large organizations</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-base font-medium text-foreground mb-4">Enterprise Security</h3>
                          <div className="h-2 bg-muted rounded-full overflow-hidden mb-6">
                            <div className="h-full bg-[#0f81fb] rounded-full" style={{ width: '98%' }} />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-base font-medium text-foreground mb-4">Global Scale</h3>
                          <div className="h-2 bg-muted rounded-full overflow-hidden mb-6">
                            <div className="h-full bg-[#0f81fb] rounded-full" style={{ width: '95%' }} />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-base font-medium text-foreground mb-4">Enterprise Features</h3>
                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <Star className="h-4 w-4 text-[#0f81fb]" />
                              <span className="text-sm text-muted-foreground">Custom AI Models</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Star className="h-4 w-4 text-[#0f81fb]" />
                              <span className="text-sm text-muted-foreground">Advanced Security</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Star className="h-4 w-4 text-[#0f81fb]" />
                              <span className="text-sm text-muted-foreground">Global Deployment</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-base font-medium text-foreground mb-4">Enterprise Tools</h3>
                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <Star className="h-4 w-4 text-[#0f81fb]" />
                              <span className="text-sm text-muted-foreground">Custom Integrations</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Star className="h-4 w-4 text-[#0f81fb]" />
                              <span className="text-sm text-muted-foreground">Advanced Analytics</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Star className="h-4 w-4 text-[#0f81fb]" />
                              <span className="text-sm text-muted-foreground">24/7 Support</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-2">
                          <Circle className="h-4 w-4 text-green-500 fill-green-500" />
                          <span className="text-sm text-muted-foreground">Custom Implementation</span>
                        </div>
                        <Link href="https://tidycal.com/sudheer.sandu/problemoverview" className="text-[#0f81fb] hover:text-[#0f81fb]/90 font-medium text-sm flex items-center gap-1">
                          Schedule Demo
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-card/30 rounded-lg p-6 border border-border text-center">
                        <div className="text-2xl font-bold text-[#0f81fb] mb-2">95%</div>
                        <div className="text-sm text-muted-foreground">Win Rate Increase</div>
                      </div>
                      <div className="bg-card/30 rounded-lg p-6 border border-border text-center">
                        <div className="text-2xl font-bold text-[#0f81fb] mb-2">4.5x</div>
                        <div className="text-sm text-muted-foreground">Revenue Growth</div>
                      </div>
                      <div className="bg-card/30 rounded-lg p-6 border border-border text-center">
                        <div className="text-2xl font-bold text-[#0f81fb] mb-2">-50%</div>
                        <div className="text-sm text-muted-foreground">Ramp Time</div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0f81fb]/5 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,_rgba(15,129,251,0.1),_transparent_50%)]" />
                <div className="relative">
                  <div className="aspect-video rounded-lg bg-black overflow-hidden">
                    <iframe
                      src="https://www.youtube.com/embed/Ycll_la9WS4"
                      title="Graycommit AI Sales Coach Demo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative border-t border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center space-y-8">
              <div className="inline-flex items-center space-x-2 rounded-full bg-card border border-border px-4 py-1.5">
                <Sparkles className="h-5 w-5 text-[#0f81fb]" />
                <span className="text-sm font-medium text-foreground">Get Started Today</span>
              </div>
              
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl max-w-3xl">
                Transform Your Sales Team with AI-Powered Intelligence
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-2xl">
                Join leading sales teams who've achieved <span className="text-foreground">3.5x revenue growth</span> with 
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

              <div className="pt-8 flex items-center gap-8 text-sm text-muted-foreground">
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

export default ProductsPage 