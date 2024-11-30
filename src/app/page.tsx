'use client'


import Link from "next/link"

import { Button } from "@/components/ui/button"

import { ArrowRight, CheckCircle2,  Eye } from 'lucide-react'

export default function Component() {
  

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      

      <main className="flex-grow">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#3D3D3D,_transparent_40%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#3D3D3D,_transparent_40%)]" />
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#333] to-transparent"
                  style={{ top: `${(i + 1) * 5}%` }}
                />
              ))}
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#333] to-transparent"
                  style={{ left: `${(i + 1) * 5}%` }}
                />
              ))}
            </div>
          </div>

          <div className="container relative max-w-full px-4">
            <div className="flex flex-col items-center justify-center space-y-4 py-20 text-center md:py-32">
              <div className="rounded-full bg-[#333] px-4 py-1.5 text-sm">
                <span className="text-[#0070F3] font-medium">New</span>
                {" Real-time AI Sales Coach - Your competitive edge "}
                <Link href="#" className="inline-flex items-center font-medium text-white hover:text-[#0070F3]">
                  See it in action
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <h1 className="max-w-4xl text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Close more deals with AI-powered sales intelligence.
              </h1>
              <p className="max-w-[700px] text-xl text-[#888]">
                Graycommit's real-time suggestion engine empowers your sales team with contextual insights, 
                competitive advantages, and personalized talking points during live calls.
              </p>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button size="lg" className="h-12 px-8 bg-white text-black hover:bg-gray-200">
                  Book a Demo
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 border-[#333] text-white hover:bg-[#333]">
                  View Success Stories
                </Button>
              </div>
            </div>

            <div className="relative mx-auto aspect-video w-full max-w-6xl">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF4D4D] via-[#F9CB28] to-[#4ADE80] opacity-20 blur-3xl" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#000,transparent_20%,transparent_80%,#000)]" />
              <div className="absolute inset-0">
                <div className="grid h-full w-full grid-cols-[repeat(auto-fit,minmax(2px,1fr))]">
                  {[...Array(100)].map((_, i) => (
                    <div
                      key={i}
                      className="h-full w-[2px] bg-gradient-to-b from-transparent via-[#333] to-transparent"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 relative border-t border-[#333]">
          {/* Changed from max-w-full to max-w-7xl and centered with mx-auto */}
          <div className="container mx-auto max-w-7xl px-6 sm:px-8">
            {/* Feature 1 - Image on left */}
            <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
              {/* Left: Image/Demo */}
              <div className="relative">
                <div className="aspect-square rounded-xl overflow-hidden bg-[#111] border border-[#333] relative">
                  {/* Video call main frame */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] to-[#111]">
                    {/* Main speaker video frame */}
                    <div className="absolute inset-4 rounded-lg bg-[#222] overflow-hidden">
                      {/* Background gradient for depth */}
                      <div className="absolute inset-0 bg-gradient-to-b from-[#2A2A2A] to-[#1A1A1A]" />
                      
                      {/* Meeting grid layout - you can replace these with actual images */}
                      <div className="absolute inset-4 grid grid-cols-2 grid-rows-2 gap-2">
                        <div className="rounded-lg bg-[#333] overflow-hidden" />
                        <div className="rounded-lg bg-[#333] overflow-hidden" />
                        <div className="rounded-lg bg-[#333] overflow-hidden" />
                        <div className="rounded-lg bg-[#333] overflow-hidden" />
                      </div>

                      {/* Keep your existing suggestion cards */}
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 w-80 space-y-3 z-10">
                        {/* Active suggestion */}
                        <div className="bg-black/95 backdrop-blur rounded-lg border border-[#0070F3] p-4 shadow-lg shadow-[#0070F3]/20 animate-pulse">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="h-2 w-2 rounded-full bg-[#0070F3] animate-pulse" />
                            <span className="text-[#0070F3] text-sm font-medium">Live Intelligence</span>
                          </div>
                          <p className="text-white text-sm font-medium mb-1">Competitive Edge:</p>
                          <p className="text-[#888] text-sm">"Their solution requires manual setup. Highlight our zero-config automation and 60% faster deployment."</p>
                        </div>

                        {/* Previous suggestion (fading out) */}
                        <div className="bg-black/70 backdrop-blur rounded-lg border border-[#333] p-4 opacity-60">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="h-2 w-2 rounded-full bg-green-500" />
                            <span className="text-green-500 text-sm font-medium">ICP Match</span>
                          </div>
                          <p className="text-white text-sm font-medium mb-1">Success Story:</p>
                          <p className="text-[#888] text-sm">"Similar enterprise client achieved 40% higher conversion rates within 3 months"</p>
                        </div>
                      </div>
                    </div>

                    {/* Meeting controls bar */}
                    <div className="absolute bottom-0 inset-x-0 h-16 bg-black/90 backdrop-blur border-t border-[#333]">
                      <div className="h-full px-6 flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <div className="h-8 w-8 rounded-full bg-[#222] border border-[#444] flex items-center justify-center">
                              <div className="h-3 w-3 rounded-full bg-green-500" />
                            </div>
                            <span className="text-sm text-[#888]">AI Assistant</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-[#888]">
                          <span>Meeting Duration:</span>
                          <span className="font-mono">00:15:23</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right: Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center rounded-full bg-[#111] border border-[#333] px-4 py-1.5">
                  <span className="text-sm font-medium text-[#888]">Real-time Intelligence</span>
                </div>
                <h2 className="text-4xl font-bold tracking-tight">
                  Never miss a selling opportunity
                </h2>
                <p className="text-xl text-[#888] leading-relaxed">
                  Get real-time competitive insights, objection handlers, and success stories 
                  tailored to your prospect's industry and pain points.
                </p>
                <div className="space-y-4">
                  {/* Feature points */}
                  {[
                    'Live competitive advantage prompts',
                    'Industry-specific success stories',
                    'Real-time objection handling',
                    'Personalized value propositions'
                  ].map((point, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded-full bg-[#111] border border-[#333] flex items-center justify-center">
                        <CheckCircle2 className="h-4 w-4 text-[#0070F3]" />
                      </div>
                      <span className="text-[#888]">{point}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <Button variant="outline" className="bg-white text-black hover:bg-gray-200">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Feature 2 - Image on right */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left: Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center rounded-full bg-[#111] border border-[#333] px-4 py-1.5">
                  <span className="text-sm font-medium text-[#888]">ICP Intelligence</span>
                </div>
                <h2 className="text-4xl font-bold tracking-tight">
                  Build winning sales pipelines
                </h2>
                <p className="text-xl text-[#888] leading-relaxed">
                  Generate targeted ICP stories and personalized outreach campaigns that resonate 
                  with your ideal customers.
                </p>
                <div className="space-y-6">
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="rounded-lg bg-[#111] border border-[#333] p-4">
                      <div className="text-3xl font-bold">3.5x</div>
                      <div className="text-sm text-[#888]">Higher Response Rate</div>
                    </div>
                    <div className="rounded-lg bg-[#111] border border-[#333] p-4">
                      <div className="text-3xl font-bold">60%</div>
                      <div className="text-sm text-[#888]">Faster Deal Closure</div>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <Button variant="outline" className="bg-white text-black hover:bg-gray-200">
                    View documentation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Right: Image/Demo */}
              <div className="relative">
                <div className="aspect-square rounded-xl overflow-hidden bg-[#111] border border-[#333] relative">
                  {/* Video call main frame */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] to-[#111]">
                    {/* Main speaker video frame */}
                    <div className="absolute inset-4 rounded-lg bg-[#222] overflow-hidden">
                      {/* Speaker silhouette */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[90%] bg-[#333] rounded-t-full" />
                      
                      {/* Live suggestions floating panel */}
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 w-72 bg-black/90 backdrop-blur rounded-lg border border-[#333] p-4 animate-pulse">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                          <span className="text-xs text-[#888]">Live Suggestion</span>
                        </div>
                        
                        <div className="space-y-2 text-sm">
                          <p className="text-white font-medium">Recommended talking point:</p>
                          <p className="text-[#888]">"Mention our 99.9% uptime guarantee and global CDN coverage"</p>
                        </div>
                      </div>

                      {/* Previous suggestion fading out */}
                      <div className="absolute right-4 top-[20%] w-72 bg-black/50 backdrop-blur rounded-lg border border-[#333] p-4 opacity-40">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="h-2 w-2 rounded-full bg-blue-500" />
                          <span className="text-xs text-[#888]">Previous Point</span>
                        </div>
                        
                        <div className="space-y-2 text-sm">
                          <p className="text-white font-medium">Customer objection:</p>
                          <p className="text-[#888]">"Address pricing concerns with enterprise value props"</p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom control bar */}
                    <div className="absolute bottom-0 inset-x-0 h-16 bg-black/50 backdrop-blur border-t border-[#333] flex items-center justify-between px-6">
                      <div className="flex items-center space-x-4">
                        <div className="h-8 w-8 rounded-full bg-[#333] flex items-center justify-center">
                          <div className="h-4 w-4 rounded-full bg-green-500" />
                        </div>
                        <span className="text-sm text-[#888]">AI Assistant Active</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-xs text-[#888]">
                        <span>Meeting Duration:</span>
                        <span className="font-mono">00:15:23</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        
        {/* v1 Section */}
       
        <section className="py-24 relative border-t border-[#333]">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
              {/* Left Column - Pipeline Visualization */}
              <div className="space-y-8">
                <h2 className="text-4xl font-bold">Transform Your Sales Pipeline</h2>
                <p className="text-2xl text-[#888]">AI-powered insights driving predictable revenue growth.</p>
                
                {/* Modern Pipeline Visualization */}
                <div className="relative h-[600px] bg-[#111] rounded-xl border border-[#333] p-8 overflow-hidden">
                  {/* Animated Background Grid */}
                  <div className="absolute inset-0 opacity-10">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0070F3] to-transparent"
                        style={{ top: `${(i + 1) * 5}%`, opacity: 0.5 }}
                      />
                    ))}
                  </div>

                  {/* Pipeline Flow Visualization */}
                  <div className="relative h-full py-8">
                    {[
                      { stage: 'Pipeline Created', count: '180', value: '$15.2M', growth: '+45%', color: '#0070F3', icon: 'GitBranch' },
                      { stage: 'Meetings Booked', count: '125', value: '$12.8M', growth: '+38%', color: '#4ADE80', icon: 'Calendar' },
                      { stage: 'Proposals Sent', count: '85', value: '$8.5M', growth: '+52%', color: '#F9CB28', icon: 'FileText' },
                      { stage: 'Deals Won', count: '42', value: '$4.2M', growth: '+65%', color: '#22C55E', icon: 'CheckCircle' }
                    ].map((stage, index) => (
                      <div
                        key={stage.stage}
                        className="absolute left-0 right-0 bg-black/40 backdrop-blur rounded-lg border border-[#333] p-6 transform transition-all duration-500 hover:scale-105 hover:border-[#0070F3] hover:shadow-lg hover:shadow-[#0070F3]/10"
                        style={{
                          top: `${index * 130}px`,
                          background: `linear-gradient(90deg, ${stage.color}10, transparent)`
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <div className="text-sm text-[#888]">{stage.stage}</div>
                            <div className="text-2xl font-bold">{stage.value}</div>
                            <div className="flex items-center space-x-2">
                              <div className="text-sm">{stage.count} opportunities</div>
                              <div className="text-sm text-green-500">{stage.growth}</div>
                            </div>
                          </div>
                          <div 
                            className={`h-16 w-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                              stage.stage === 'Deals Won' ? 'bg-green-500/10 backdrop-blur' : ''
                            }`}
                            style={{ 
                              background: stage.stage === 'Deals Won' 
                                ? 'none'
                                : `linear-gradient(45deg, ${stage.color}20, transparent)`,
                              border: stage.stage === 'Deals Won' ? `1px solid ${stage.color}` : 'none'
                            }}
                          >
                            <div 
                              className={`h-10 w-10 rounded-full flex items-center justify-center ${
                                stage.stage === 'Deals Won' ? 'bg-green-500' : ''
                              }`}
                              style={{ 
                                background: stage.stage === 'Deals Won' 
                                  ? '#22C55E' 
                                  : `linear-gradient(45deg, ${stage.color}, transparent)`
                              }}
                            >
                              {stage.stage === 'Deals Won' && (
                                <CheckCircle2 className="h-6 w-6 text-white" />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Performance Metrics */}
              <div className="space-y-8">
                <h2 className="text-4xl font-bold">AI-Powered Growth</h2>
                <p className="text-2xl text-[#888]">Real-time insights driving exceptional results.</p>
                
                {/* Performance Dashboard */}
                <div className="space-y-6">
                  {/* Key Metrics Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#111] rounded-xl p-6 border border-[#333] hover:border-[#0070F3] transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-sm text-[#888]">Revenue Impact</div>
                        <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center">
                          <ArrowRight className="h-5 w-5 text-green-500 rotate-45" />
                        </div>
                      </div>
                      <div className="text-3xl font-bold mb-2">$4.2M</div>
                      <div className="text-sm text-green-500">+65% with Graycommit AI</div>
                    </div>
                    <div className="bg-[#111] rounded-xl p-6 border border-[#333] hover:border-[#0070F3] transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-sm text-[#888]">Win Rate</div>
                        <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <CheckCircle2 className="h-5 w-5 text-blue-500" />
                        </div>
                      </div>
                      <div className="text-3xl font-bold mb-2">42%</div>
                      <div className="text-sm text-green-500">+15% improvement</div>
                    </div>
                  </div>

                  {/* AI Impact Metrics */}
                  <div className="bg-[#111] rounded-xl p-6 border border-[#333] hover:border-[#0070F3] transition-all duration-300">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-lg font-medium">AI Performance Impact</div>
                      <div className="text-sm text-[#888]">Last 30 days</div>
                    </div>
                    <div className="space-y-6">
                      {[
                        { label: 'Deal Size Increase', value: '32%', progress: '75%' },
                        { label: 'Sales Cycle Reduction', value: '40%', progress: '85%' },
                        { label: 'Competitive Win Rate', value: '45%', progress: '90%' }
                      ].map((metric, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="text-sm">{metric.label}</div>
                            <div className="text-sm text-green-500">+{metric.value}</div>
                          </div>
                          <div className="h-2 bg-[#222] rounded-full overflow-hidden">
                            <div 
                              className="h-full rounded-full transition-all duration-500"
                              style={{ 
                                width: metric.progress,
                                backgroundColor: '#0f81fb'
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recent Wins */}
                  <div className="bg-[#111] rounded-xl p-6 border border-[#333] hover:border-[#0070F3] transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-lg font-medium">Recent Wins</div>
                      <div className="text-sm text-[#888]">Today</div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                          <div>
                            <div className="text-sm font-medium">Enterprise Deal</div>
                            <div className="text-xs text-[#888]">AI-suggested value props</div>
                          </div>
                        </div>
                        <div className="text-lg font-bold text-green-500">$850K</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Sales Performance Section */}
        <section className="py-24 relative border-t border-[#333]">
            <div className="container mx-auto max-w-7xl px-4">
              <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
                <div className="space-y-8">
                  <h2 className="text-4xl font-bold">Turn every rep into a top performer.</h2>
                  <p className="text-2xl text-[#888]">Real-time coaching that drives consistent success.</p>
                  <div className="space-y-4">
                    <div className="rounded-lg bg-[#111] p-4 border border-[#333]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                          <div>
                            <div className="text-sm">Deal Won - Enterprise</div>
                            <div className="text-xs text-[#888]">Used AI-suggested value props</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="text-sm text-[#888]">2h ago</div>
                          <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-black font-medium">$85K</div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg bg-[#111] p-4 border border-[#333]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <CheckCircle2 className="h-5 w-5 text-blue-500" />
                          <div>
                            <div className="text-sm">Objection Handled</div>
                            <div className="text-xs text-[#888]">AI coach suggested perfect response</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="text-sm text-[#888]">5m ago</div>
                          <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-black font-medium">
                            <ArrowRight className="h-5 w-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-8">
                  <h2 className="text-4xl font-bold">Accelerate ramp time by 70%</h2>
                  <p className="text-2xl text-[#888]">Live coaching turns new hires into closers faster.</p>
                  <div className="rounded-lg bg-[#111] p-6 space-y-6 border border-[#333]">
                    <div className="flex items-center justify-between">
                      <div className="text-lg">Rep Performance</div>
                      <div className="flex items-center space-x-2">
                        <div className="text-[#888]">Outstanding</div>
                        <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-black font-medium">9.2</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="text-sm text-[#888]">Meetings Booked</div>
                        <div className="text-2xl font-bold">28</div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm text-[#888]">Close Rate</div>
                        <div className="text-2xl font-bold">42%</div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="text-sm">Top Performing Talk Tracks</div>
                        <div className="flex -space-x-2">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="h-8 w-8 rounded-full bg-[#333] border-2 border-black flex items-center justify-center text-xs">
                              #{i}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>

        {/* Real-time Coaching Section */}
        <section className="py-24 relative border-t border-[#333]">
            <div className="container mx-auto max-w-7xl px-4">
              <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
              <div className="space-y-8">
                <h2 className="text-4xl font-bold">Never miss a selling moment.</h2>
                <p className="text-2xl text-[#888]">AI-powered suggestions exactly when you need them.</p>
                <div className="space-y-4">
                  <div className="rounded-lg bg-[#111] p-4 border border-[#333]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Eye className="h-5 w-5 text-blue-500" />
                        <div>
                          <div className="text-sm">Live Intelligence</div>
                          <div className="text-xs text-[#888]">Competitor mentioned: Outreach</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="text-sm text-[#888]">Now</div>
                        <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-black font-medium">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <h2 className="text-4xl font-bold">Close with confidence.</h2>
                <p className="text-2xl text-[#888]">Battle-tested talk tracks and objection handlers.</p>
                <div className="rounded-lg bg-[#111] p-6 space-y-6 border border-[#333]">
                  <div className="flex items-center justify-between">
                    <div className="text-lg">Call Intelligence</div>
                    <div className="flex items-center space-x-2">
                      <div className="text-[#888]">Active</div>
                      <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-black font-medium">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm">Talk Time Ratio</div>
                      <div className="text-sm text-[#888]">45:55</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">Questions Asked</div>
                      <div className="text-sm text-[#888]">8</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">Next Best Action</div>
                      <div className="text-sm text-green-500">ROI Discussion</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Reviews Section */}
        <section className="py-24 relative border-t border-[#333] overflow-hidden">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-bold">Loved by Technical Founders & Sales Teams</h2>
              <p className="text-xl text-[#888] max-w-2xl mx-auto">
                See how founders are transforming technical expertise into enterprise sales success with Graycommit.
              </p>
            </div>

            {/* Added pt-2 for top hover effect and pb-2 for bottom shadow */}
            <div className="relative overflow-x-auto pt-2 pb-2 no-scrollbar">
              <div className="flex space-x-6 pl-4" style={{ paddingRight: "calc(100% - 92%)" }}>
                {[
                  {
                    name: "Sarah Lee",
                    role: "Founder & CEO, TechScale AI",
                    review: "As a technical founder, enterprise sales was our biggest challenge. Graycommit's real-time coaching turned our technical depth into compelling business value. We closed a $450K deal in our first month - something I never thought possible.",
                    metric: "3.2X Revenue Growth",
                    initials: "SL"
                  },
                  {
                    name: "David Park",
                    role: "Co-founder, MLOps Pro",
                    review: "From struggling with enterprise objections to confidently handling Fortune 500 calls - Graycommit transformed our sales approach. The AI coach understands both ML technicalities and enterprise needs, making every pitch resonate.",
                    metric: "$2.1M ARR in 6 months",
                    initials: "DP"
                  },
                  {
                    name: "Emma Zhang",
                    role: "Founder, API Scout",
                    review: "We were great at building APIs but struggled with enterprise sales. Graycommit helped us speak the language of CTOs and CIOs. The real-time battle cards and objection handlers are like having a veteran sales leader in your ear.",
                    metric: "5X Enterprise Deals",
                    initials: "EZ"
                  },
                  {
                    name: "Michael Rodriguez",
                    role: "Enterprise AE, DataFlow",
                    review: "The competitive intelligence is mind-blowing. During a call with a major bank, Graycommit surfaced the perfect compliance case study and helped handle their security concerns. Closed a $280K deal that would have slipped away.",
                    metric: "45% Higher Win Rate",
                    initials: "MR"
                  },
                  {
                    name: "Alex Kumar",
                    role: "VP Sales, CloudSecure",
                    review: "Onboarding technical founders to enterprise sales used to be a 6-month process. With Graycommit's real-time coaching, they're closing six-figure deals within weeks. It's like giving every founder a decade of sales experience instantly.",
                    metric: "70% Faster Ramp Time",
                    initials: "AK"
                  },
                  {
                    name: "Rachel Johnson",
                    role: "Sales Manager, DevOps Plus",
                    review: "The personalized talk tracks and real-time battle cards have transformed how we compete. My team of technical founders is now consistently winning against legacy vendors in enterprise deals.",
                    metric: "52% Win Rate vs Enterprise",
                    initials: "RJ"
                  },
                  {
                    name: "James Chen",
                    role: "Founder, SecureScale",
                    review: "Coming from a security background, I could explain our tech but struggled with value selling. Graycommit's AI coach helps translate complex security features into business outcomes in real-time. Just closed our first $1M deal!",
                    metric: "First $1M Enterprise Deal",
                    initials: "JC"
                  },
                  {
                    name: "Lisa Patel",
                    role: "Technical Co-founder, DataSync",
                    review: "The AI understands our technical differentiators and helps position them perfectly for different stakeholders. CFOs, CTOs, CISOs - Graycommit helps us nail every conversation with relevant insights and case studies.",
                    metric: "4X Deal Size Increase",
                    initials: "LP"
                  },
                  {
                    name: "Tom Wilson",
                    role: "CTO & Co-founder, AIScale",
                    review: "As an AI company founder, I was skeptical of sales tools. Graycommit proved me wrong. It actually understands technical nuances and helps translate them into value props. Our sales cycles dropped from 6 months to 6 weeks.",
                    metric: "75% Shorter Sales Cycles",
                    initials: "TW"
                  },
                  {
                    name: "Maria Garcia",
                    role: "Founder, CloudOps Pro",
                    review: "From hesitant technical founder to confident enterprise seller - that's my journey with Graycommit. The real-time coaching helped me handle complex enterprise objections and navigate multi-stakeholder deals effectively.",
                    metric: "8 Enterprise Wins in Q1",
                    initials: "MG"
                  }
                ].map((review, index) => (
                  <div 
                    key={index}
                    className="bg-[#111] rounded-xl p-8 border border-[#333] hover:border-[#0070F3] transition-all duration-300 flex-none w-[350px] group hover:shadow-2xl hover:shadow-[#0070F3]/10 hover:-translate-y-1"
                    style={{ marginTop: '2px', marginBottom: '2px' }}
                  >
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#222] to-[#333] border border-[#444] flex items-center justify-center shadow-lg group-hover:border-[#0070F3]/50">
                          <span className="text-lg font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            {review.initials}
                          </span>
                        </div>
                        <div>
                          <div className="font-medium text-white group-hover:text-[#0070F3] transition-colors">
                            {review.name}
                          </div>
                          <div className="text-sm text-[#888]">{review.role}</div>
                        </div>
                      </div>
                      <p className="text-[#888] leading-relaxed">
                        "{review.review}"
                      </p>
                      <div className="flex items-center space-x-2 text-[#0070F3]">
                        <span className="text-sm font-medium bg-[#0070F3]/10 px-3 py-1 rounded-full">
                          {review.metric}
                        </span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gradient fade on right edge */}
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none" />

            <style jsx global>{`
              .no-scrollbar {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
              .no-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}</style>
          </div>
        </section>



        <section className="relative py-24 border-t border-[#333]">
          <div className="absolute inset-0">
            {/* Vertical lines */}
            {[...Array(40)].map((_, i) => (
              <div
                key={`v-${i}`}
                className="absolute top-0 bottom-0 w-[1px]"
                style={{ 
                  left: `${(i + 1) * 2.5}%`,
                  background: 'linear-gradient(to bottom, transparent, rgba(51, 51, 51, 0.5) 80%, transparent)',
                  opacity: '1'
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
                  background: 'linear-gradient(to right, transparent, rgba(51, 51, 51, 0.5) 50%, transparent)',
                  opacity: '0.5'
                }}
              />
            ))}
          </div>

          <div className="container relative max-w-full px-4">
            <h2 className="text-3xl font-bold text-center mb-16">Trusted by</h2>
            <div className="grid grid-cols-3 gap-12 md:gap-24">
              {/* Row 1 */}
              <div className="flex items-center justify-center">
                <div className="text-2xl font-bold">groq</div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-2xl font-bold">Chroma</div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-2xl font-bold">Pika</div>
              </div>
              
              {/* Row 2 */}
              <div className="flex items-center justify-center">
                <div className="text-2xl font-bold">Suno</div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-2xl font-bold">LangChain</div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-2xl font-bold">Modal</div>
              </div>
              
              {/* Row 3 */}
              <div className="flex items-center justify-center">
                <div className="text-2xl font-bold">cohere</div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-2xl font-bold">Pinecone</div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-2xl font-bold">replicate</div>
              </div>
              
              {/* Row 4 */}
              <div className="flex items-center justify-center">
                <div className="text-2xl font-bold">runway</div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-2xl font-bold">stability.ai</div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-2xl font-bold">OpenAI</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative border-t border-[#333] overflow-hidden">
          {/* Subtle animated background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0f81fb_0%,_transparent_35%)] opacity-10" />
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute h-1 w-1 bg-white rounded-full animate-firefly"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${4 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>

          <div className="container max-w-full px-4 relative">
            <div className="flex flex-col items-center text-center space-y-8">
              <div className="inline-flex items-center space-x-2">
                <span className="text-sm font-semibold text-[#0f81fb]">✨ The Future of Sales is Here</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-3xl text-white">
                Transform Your Sales Game with AI Magic
              </h2>
              
              <p className="max-w-[600px] text-xl text-[#888] leading-relaxed">
                Join the elite group of founders who've unlocked <span className="text-white">3.5x revenue growth</span> with 
                our AI sales intelligence. Your success story begins here.
              </p>

              <div className="flex flex-col gap-6 min-[400px]:flex-row items-center">
                <Button 
                  size="lg" 
                  className="group relative h-14 px-8 bg-[#0f81fb] text-white hover:bg-[#0f81fb]/90 transition-all duration-300"
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

                <div className="flex items-center gap-4 text-sm text-[#888]">
                  <div className="flex -space-x-2">
                    {[
                      '/founders/founder1.jpg',  // Replace with actual founder image paths
                      '/founders/founder2.jpg',
                      '/founders/founder3.jpg'
                    ].map((src, i) => (
                      <div 
                        key={i}
                        className="h-8 w-8 rounded-full border-2 border-black overflow-hidden"
                        style={{
                          backgroundImage: `url(${src})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      >
                        {/* Fallback if image fails to load */}
                        <div className="h-full w-full bg-gradient-to-br from-[#333] to-[#222] flex items-center justify-center text-xs text-white">
                          {String.fromCharCode(65 + i)}
                        </div>
                      </div>
                    ))}
                  </div>
                  <span>Join 100+ startups</span>
                </div>
              </div>

              <div className="pt-8 flex items-center gap-8 text-sm text-[#666]">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  No credit card required
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  Free 14-day trial
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  Cancel anytime
                </div>
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes firefly {
              0% { transform: translate(0, 0); opacity: 0; }
              50% { opacity: 0.3; }
              100% { transform: translate(100px, -100px); opacity: 0; }
            }
            .animate-firefly {
              animation: firefly linear infinite;
            }
          `}</style>
        </section>
      </main>

      
    </div>
  )
}