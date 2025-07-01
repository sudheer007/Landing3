'use client'

import Link from "next/link"
import { useState } from 'react'

import { Button } from "@/components/ui/button"

import { ArrowRight, CheckCircle2,  Eye } from 'lucide-react'

export default function Component() {
  const [activeStage, setActiveStage] = useState<number | null>(null)

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      

      <main className="flex-grow">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#3D3D3D,_transparent_40%)] dark:bg-[radial-gradient(circle_at_bottom_left,_#3D3D3D,_transparent_40%)] light:bg-[radial-gradient(circle_at_bottom_left,_#E5E5E5,_transparent_40%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#3D3D3D,_transparent_40%)] dark:bg-[radial-gradient(circle_at_top_right,_#3D3D3D,_transparent_40%)] light:bg-[radial-gradient(circle_at_top_right,_#E5E5E5,_transparent_40%)]" />
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
                  style={{ top: `${(i + 1) * 5}%` }}
                />
              ))}
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent"
                  style={{ left: `${(i + 1) * 5}%` }}
                />
              ))}
            </div>
          </div>

          <div className="container relative max-w-full px-4 sm:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 py-16 sm:py-20 text-center md:py-32">
              <div className="rounded-full bg-card border border-border px-3 sm:px-4 py-1.5 text-xs sm:text-sm">
                <span className="text-[#0070F3] font-medium">New</span>
                <span className="hidden sm:inline">{" Real-time AI Sales Coach - Your competitive edge "}</span>
                <span className="sm:hidden">{" AI Sales Coach "}</span>
                <Link href="https://app.graycommit.com" className="inline-flex items-center font-medium text-foreground hover:text-[#0070F3]">
                  See it in action
                  <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
              </div>
              <h1 className="max-w-4xl text-3xl sm:text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl xl:text-7xl">
                Close more deals with AI-powered sales intelligence.
              </h1>
              <p className="max-w-[700px] text-base sm:text-lg md:text-xl text-muted-foreground px-4">
                Graycommit's real-time playbook engine empowers your sales team with the right playbook for every deal, 
                create talk tracks and analyze every sales conversation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md sm:max-w-none justify-center">
                <Link href="https://tidycal.com/sudheer.sandu/problemoverview" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto h-11 sm:h-12 px-6 sm:px-8 bg-primary text-primary-foreground hover:bg-primary/90">
                    Book a Demo
                  </Button>
                </Link>
                <Link href="https://app.graycommit.com" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button 
                    size="lg" 
                    className="group relative w-full sm:w-auto h-11 sm:h-12 px-6 sm:px-8 bg-[#0f81fb] text-white hover:bg-[#0f81fb]/90 transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Get Started Free
                      <svg 
                        className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" 
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

            <div className="relative mx-auto aspect-video w-full max-w-6xl mb-8 sm:mb-0">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF4D4D] via-[#F9CB28] to-[#4ADE80] opacity-20 blur-3xl" />
              <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden border border-border bg-card">
                <iframe
                  src="https://www.youtube.com/embed/kn8zgAbxa94?si=ol0ZpqbaVExXz6Wm&rel=0&modestbranding=1&showinfo=0"
                  title="Graycommit Demo Video"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24 relative border-t border-border">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Feature 1 - Image on left */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-24 items-center mb-20 sm:mb-24 lg:mb-32">
              {/* Left: Image/Demo */}
              <div className="relative order-2 lg:order-1">
                {/* Active Playbook Card */}
                <div className="bg-card/95 backdrop-blur rounded-lg border border-[#0070F3] p-3 sm:p-4 shadow-lg shadow-[#0070F3]/20 animate-pulse mb-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="h-2 w-2 rounded-full bg-[#0070F3] animate-pulse" />
                    <span className="text-[#0070F3] text-sm font-medium">Active Playbook</span>
                  </div>
                  <p className="text-foreground text-sm font-medium mb-1">Enterprise Demo Track:</p>
                  <p className="text-muted-foreground text-sm">"Start with ROI discussion, then showcase security features. Next: address integration concerns."</p>
                </div>

                {/* Simple Image */}
                <iframe 
                  loading="lazy" 
                  className="w-full h-96 border-none block mt-0 pointer-events-none"
                  style={{ margin: 0, padding: 0, display: 'block' }}
                  src="https://www.canva.com/design/DAGq42i25wk/pYnEoK4m2bbyPkJFPWuJKw/view?embed" 
                  allow="">
                </iframe>
              </div>
              
              {/* Right: Content */}
              <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
                <div className="inline-flex items-center rounded-full bg-card border border-border px-3 sm:px-4 py-1.5">
                  <span className="text-xs sm:text-sm font-medium text-muted-foreground">Realtime Playbook</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                  Never miss a selling opportunity
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  Transform your meetings into guided experiences with intelligent playbooks. 
                  Switch between custom talk tracks tailored to each prospect and meeting goal.
                </p>
                <div className="space-y-3 sm:space-y-4">
                  {/* Feature points */}
                  {[
                    'Custom playbooks for each company & team',
                    'Intelligent talk track switching during calls',
                    'Goal-oriented meeting guidance',
                    'Post-meeting conversation analysis & deepdive'
                  ].map((point, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-card border border-border flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-[#0070F3]" />
                      </div>
                      <span className="text-sm sm:text-base text-muted-foreground">{point}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2 sm:pt-4">
                  <Link href="/products">
                    <Button variant="outline" className="border-border text-foreground hover:bg-accent hover:text-foreground">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Feature 2 - Image on right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              {/* Left: Content */}
              <div className="space-y-6 sm:space-y-8">
                <div className="inline-flex items-center rounded-full bg-card border border-border px-3 sm:px-4 py-1.5">
                  <span className="text-xs sm:text-sm font-medium text-muted-foreground">Talk Track Creation</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                  Build winning sales pipelines
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  Create dynamic playbooks that adapt to every prospect. Design custom talk tracks 
                  for different companies, teams, and meeting objectives with intelligent guidance.
                </p>
                <div className="space-y-4 sm:space-y-6">
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    <div className="rounded-lg bg-card border border-border p-3 sm:p-4">
                      <div className="text-2xl sm:text-3xl font-bold">12+</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Custom Playbooks</div>
                    </div>
                    <div className="rounded-lg bg-card border border-border p-3 sm:p-4">
                      <div className="text-2xl sm:text-3xl font-bold">85%</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Meeting Goals Achieved</div>
                    </div>
                  </div>
                </div>
                <div className="pt-2 sm:pt-4">
                  <Link href="https://app.graycommit.com" target="_blank" rel="noopener noreferrer">
                    <Button className="group relative bg-[#0f81fb] text-white hover:bg-[#0f81fb]/90 transition-all duration-300">
                      <span className="relative z-10 flex items-center">
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
              
              {/* Right: Pipeline Management Dashboard */}
              <div className="relative">
                <div className="aspect-square rounded-xl overflow-hidden bg-card border border-border relative">
                  {/* Pipeline Management Interface */}
                  <div className="absolute inset-0 bg-gradient-to-b from-card to-background p-4 sm:p-6">
                    
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div>
                        <h3 className="text-white font-semibold text-sm sm:text-base">Q4 Sales Pipeline</h3>
                        <p className="text-[#888] text-xs sm:text-sm">Target: $2.5M</p>
                      </div>
                      <div className="bg-green-500/20 rounded-full px-2 sm:px-3 py-1">
                        <span className="text-green-500 text-xs sm:text-sm font-medium">On Track</span>
                      </div>
                    </div>

                    {/* Pipeline Stages with Progress */}
                    <div className="space-y-3 sm:space-y-4">
                      {[
                        { stage: 'Prospecting', target: 50, current: 48, status: 'completed', color: '#22C55E' },
                        { stage: 'Qualification', target: 35, current: 32, status: 'completed', color: '#22C55E' },
                        { stage: 'Proposal', target: 20, current: 18, status: 'active', color: '#0070F3' },
                        { stage: 'Negotiation', target: 12, current: 8, status: 'pending', color: '#F59E0B' },
                        { stage: 'Closing', target: 8, current: 3, status: 'pending', color: '#6B7280' }
                      ].map((item, index) => (
                        <div key={item.stage} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 sm:gap-3">
                              {/* Status Icon */}
                              <div className={`h-5 w-5 sm:h-6 sm:w-6 rounded-full border-2 flex items-center justify-center ${
                                item.status === 'completed' 
                                  ? 'bg-green-500 border-green-500' 
                                  : item.status === 'active'
                                  ? 'bg-[#0070F3] border-[#0070F3] animate-pulse'
                                  : 'border-[#444] bg-transparent'
                              }`}>
                                {item.status === 'completed' && (
                                  <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                                )}
                                {item.status === 'active' && (
                                  <div className="h-2 w-2 sm:h-3 sm:w-3 bg-white rounded-full" />
                                )}
                              </div>
                              
                              <div>
                                <div className="text-white text-xs sm:text-sm font-medium">{item.stage}</div>
                                <div className="text-[#888] text-xs">{item.current}/{item.target} deals</div>
                              </div>
                            </div>
                            
                            <div className="text-right">
                              <div className="text-xs sm:text-sm font-medium" style={{ color: item.color }}>
                                {Math.round((item.current / item.target) * 100)}%
                              </div>
                            </div>
                          </div>
                          
                          {/* Progress Bar */}
                          <div className="h-2 bg-[#222] rounded-full overflow-hidden">
                            <div 
                              className="h-full rounded-full transition-all duration-1000 ease-out"
                              style={{ 
                                width: `${(item.current / item.target) * 100}%`,
                                backgroundColor: item.color,
                                boxShadow: `0 0 10px ${item.color}40`
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Recent Activity */}
                    <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-black/40 rounded-lg border border-[#333]">
                      <div className="flex items-center gap-2 mb-2 sm:mb-3">
                        <div className="h-2 w-2 bg-[#0070F3] rounded-full animate-pulse" />
                        <span className="text-[#888] text-xs sm:text-sm">Recent Activity</span>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
                          <span className="text-white text-xs sm:text-sm">Enterprise Corp moved to Negotiation</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 sm:h-4 sm:w-4 bg-[#0070F3] rounded-full flex-shrink-0" />
                          <span className="text-white text-xs sm:text-sm">TechStart Inc proposal sent</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 sm:h-4 sm:w-4 bg-yellow-500 rounded-full flex-shrink-0" />
                          <span className="text-white text-xs sm:text-sm">DataCorp demo scheduled</span>
                        </div>
                      </div>
                    </div>

                    {/* AI Insights Panel */}
                    <div className="absolute bottom-4 right-4 bg-black/90 backdrop-blur border border-[#0070F3] rounded-lg p-3 w-40 sm:w-48">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-2 w-2 bg-[#0070F3] rounded-full animate-pulse" />
                        <span className="text-[#0070F3] text-xs font-medium">AI Insight</span>
                      </div>
                      <p className="text-white text-xs mb-1">Pipeline Health:</p>
                      <p className="text-[#888] text-xs">"Focus on qualification stage. 3 high-value prospects ready for acceleration."</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        
        {/* Interactive Funnel Section - Mobile Optimized */}
       
        <section className="py-16 sm:py-20 lg:py-24 relative border-t border-border">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 overflow-visible">
              {/* Left Column - Interactive Funnel */}
              <div className="space-y-6 sm:space-y-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Transform Your Sales Pipeline</h2>
                <p className="text-base sm:text-lg lg:text-2xl text-muted-foreground">AI-powered playbooks guiding every deal to close.</p>
                
                {/* Interactive Sales Funnel - Mobile Optimized */}
                <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] bg-card rounded-xl border border-border p-4 sm:p-6 lg:p-8 overflow-visible">
                  {/* Animated Background Grid - Reduced on mobile */}
                  <div className="absolute inset-0 opacity-10">
                    {[...Array(10)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0070F3] to-transparent"
                        style={{ top: `${(i + 1) * 10}%`, opacity: 0.5 }}
                      />
                    ))}
                  </div>

                  {/* Sales Funnel */}
                  <div className="relative h-full flex flex-col justify-center items-center space-y-2 sm:space-y-3">
                    {[
                      { 
                        stage: 'Leads', 
                        count: '180', 
                        value: '$15.2M', 
                        color: '#0070F3',
                        width: '100%',
                        playbook: {
                          title: 'Lead Qualification Playbook',
                          items: ['BANT qualification framework', 'Competitor landscape mapping', 'Initial pain point discovery', 'Budget range validation']
                        }
                      },
                      { 
                        stage: 'Discovery', 
                        count: '125', 
                        value: '$12.8M', 
                        color: '#4ADE80',
                        width: '95%',
                        playbook: {
                          title: 'Discovery Deep Dive Playbook',
                          items: ['Technical requirements gathering', 'Stakeholder mapping workshop', 'Current solution audit', 'Decision timeline establishment']
                        }
                      },
                      { 
                        stage: 'Demo', 
                        count: '85', 
                        value: '$8.5M', 
                        color: '#F9CB28',
                        width: '65%',
                        playbook: {
                          title: 'Demo Excellence Playbook',
                          items: ['Personalized demo script', 'Technical objection handling', 'ROI calculator walkthrough', 'Next steps commitment']
                        }
                      },
                      { 
                        stage: 'Proposal', 
                        count: '65', 
                        value: '$6.2M', 
                        color: '#FF6B6B',
                        width: '45%',
                        playbook: {
                          title: 'Proposal Winning Playbook',
                          items: ['Competitive differentiation strategy', 'Pricing justification framework', 'Risk mitigation plan', 'Implementation timeline']
                        }
                      },
                      { 
                        stage: 'Closed Won', 
                        count: '42', 
                        value: '$4.2M', 
                        color: '#22C55E',
                        width: '30%',
                        playbook: {
                          title: 'Closing Mastery Playbook',
                          items: ['Urgency creation techniques', 'Final objection resolution', 'Contract negotiation tactics', 'Onboarding kickoff']
                        }
                      }
                    ].map((stage, index) => (
                      <div key={stage.stage} className="group relative w-full flex justify-center">
                        {/* Funnel Stage - Mobile Optimized */}
                        <div 
                          className="relative transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:scale-105 hover:z-20 lg:group-hover:-translate-y-4 lg:group-hover:scale-110"
                          style={{ width: stage.width }}
                          onClick={() => setActiveStage(activeStage === index ? null : index)}
                        >
                          {/* Trapezoid shape */}
                          <div 
                            className={`h-12 sm:h-16 lg:h-20 border-2 transition-all duration-500 relative overflow-hidden shadow-lg ${
                              activeStage === index 
                                ? 'border-[#0070F3] shadow-[#0070F3]/30' 
                                : 'border-border hover:border-[#0070F3] hover:shadow-[#0070F3]/30'
                            }`}
                            style={{
                              background: `linear-gradient(135deg, ${stage.color}25, ${stage.color}15, ${stage.color}05)`,
                              clipPath: index === 0 
                                ? 'polygon(5% 0, 95% 0, 85% 100%, 15% 100%)'
                                : index === 4
                                ? 'polygon(15% 0, 85% 0, 95% 100%, 5% 100%)'
                                : 'polygon(15% 0, 85% 0, 75% 100%, 25% 100%)'
                            }}
                          >
                            {/* Content */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className={`text-center transform transition-transform duration-300 ${
                                activeStage === index ? 'scale-105' : ''
                              }`}>
                                <div className={`text-sm sm:text-lg lg:text-xl font-bold transition-colors duration-300 ${
                                  activeStage === index ? 'text-[#0070F3]' : 'text-foreground hover:text-[#0070F3]'
                                }`}>
                                  {stage.stage}
                                </div>
                                <div className={`text-xs sm:text-sm transition-colors duration-300 ${
                                  activeStage === index ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                                }`}>
                                  {stage.count} deals • {stage.value}
                                </div>
                              </div>
                            </div>
                            
                            {/* Hover glow effect */}
                            <div 
                              className={`absolute inset-0 transition-all duration-500 ${
                                activeStage === index ? 'opacity-40' : 'opacity-0 hover:opacity-40'
                              }`}
                              style={{ 
                                background: `radial-gradient(circle at center, ${stage.color}80, ${stage.color}40, transparent)`,
                                filter: 'blur(1px)'
                              }}
                            />
                          </div>
                        </div>

                        {/* Desktop Playbook Popup - Hover */}
                        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-full ml-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50">
                          <div className="bg-card/95 backdrop-blur-xl border-2 border-[#0070F3] rounded-xl p-6 w-96 shadow-2xl shadow-[#0070F3]/20">
                            <div className="flex items-center space-x-3 mb-4">
                              <div 
                                className="h-4 w-4 rounded-full animate-pulse shadow-lg"
                                style={{ 
                                  backgroundColor: stage.color,
                                  boxShadow: `0 0 10px ${stage.color}80`
                                }}
                              />
                              <span className="text-[#0070F3] text-sm font-semibold bg-gradient-to-r from-[#0070F3] to-[#4ADE80] bg-clip-text text-transparent">
                                AI Playbook Active
                              </span>
                            </div>
                            <h4 className="text-foreground font-bold text-lg mb-4 group-hover:text-[#0070F3] transition-colors duration-300">
                              {stage.playbook.title}
                            </h4>
                            <ul className="space-y-3">
                              {stage.playbook.items.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-foreground hover:text-foreground transition-colors duration-200">
                                  <CheckCircle2 className="h-5 w-5 text-[#0070F3] mt-0.5 flex-shrink-0 animate-pulse" />
                                  <span className="leading-relaxed">{item}</span>
                                </li>
                              ))}
                            </ul>
                            
                            {/* Progress indicator */}
                            <div className="mt-4 pt-4 border-t border-border">
                              <div className="flex items-center justify-between text-xs text-muted-foreground">
                                <span>Stage Progress</span>
                                <span>{Math.round((5 - index) / 5 * 100)}% Complete</span>
                              </div>
                              <div className="mt-2 h-1 bg-muted rounded-full overflow-hidden">
                                <div 
                                  className="h-full rounded-full transition-all duration-1000 ease-out"
                                  style={{ 
                                    width: `${(5 - index) / 5 * 100}%`,
                                    background: `linear-gradient(90deg, ${stage.color}, #0070F3)`
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                          
                          {/* Arrow pointing to funnel */}
                          <div 
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-4 h-4 bg-[#0070F3] transform rotate-45 border border-[#0070F3]"
                          />
                        </div>

                        {/* Stage connection lines */}
                        {index < 4 && (
                          <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-2 sm:h-3 bg-gradient-to-b from-border to-transparent opacity-50 hover:opacity-100 transition-opacity duration-300" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Playbook Display - Below Funnel */}
                {activeStage !== null && (
                  <div className="lg:hidden bg-card/95 backdrop-blur-xl border-2 border-[#0070F3] rounded-xl p-4 sm:p-6 shadow-2xl shadow-[#0070F3]/20 animate-in slide-in-from-bottom duration-300">
                    <div className="flex items-center space-x-3 mb-4">
                      <div 
                        className="h-4 w-4 rounded-full animate-pulse shadow-lg"
                        style={{ 
                          backgroundColor: [
                            { stage: 'Leads', color: '#0070F3' },
                            { stage: 'Discovery', color: '#4ADE80' },
                            { stage: 'Demo', color: '#F9CB28' },
                            { stage: 'Proposal', color: '#FF6B6B' },
                            { stage: 'Closed Won', color: '#22C55E' }
                          ][activeStage].color,
                          boxShadow: `0 0 10px ${[
                            { stage: 'Leads', color: '#0070F3' },
                            { stage: 'Discovery', color: '#4ADE80' },
                            { stage: 'Demo', color: '#F9CB28' },
                            { stage: 'Proposal', color: '#FF6B6B' },
                            { stage: 'Closed Won', color: '#22C55E' }
                          ][activeStage].color}80`
                        }}
                      />
                      <span className="text-[#0070F3] text-sm font-semibold">
                        AI Playbook Active
                      </span>
                    </div>
                    <h4 className="text-foreground font-bold text-lg mb-4">
                      {[
                        { stage: 'Leads', playbook: { title: 'Lead Qualification Playbook', items: ['BANT qualification framework', 'Competitor landscape mapping', 'Initial pain point discovery', 'Budget range validation'] } },
                        { stage: 'Discovery', playbook: { title: 'Discovery Deep Dive Playbook', items: ['Technical requirements gathering', 'Stakeholder mapping workshop', 'Current solution audit', 'Decision timeline establishment'] } },
                        { stage: 'Demo', playbook: { title: 'Demo Excellence Playbook', items: ['Personalized demo script', 'Technical objection handling', 'ROI calculator walkthrough', 'Next steps commitment'] } },
                        { stage: 'Proposal', playbook: { title: 'Proposal Winning Playbook', items: ['Competitive differentiation strategy', 'Pricing justification framework', 'Risk mitigation plan', 'Implementation timeline'] } },
                        { stage: 'Closed Won', playbook: { title: 'Closing Mastery Playbook', items: ['Urgency creation techniques', 'Final objection resolution', 'Contract negotiation tactics', 'Onboarding kickoff'] } }
                      ][activeStage].playbook.title}
                    </h4>
                    <ul className="space-y-3">
                      {[
                        { stage: 'Leads', playbook: { title: 'Lead Qualification Playbook', items: ['BANT qualification framework', 'Competitor landscape mapping', 'Initial pain point discovery', 'Budget range validation'] } },
                        { stage: 'Discovery', playbook: { title: 'Discovery Deep Dive Playbook', items: ['Technical requirements gathering', 'Stakeholder mapping workshop', 'Current solution audit', 'Decision timeline establishment'] } },
                        { stage: 'Demo', playbook: { title: 'Demo Excellence Playbook', items: ['Personalized demo script', 'Technical objection handling', 'ROI calculator walkthrough', 'Next steps commitment'] } },
                        { stage: 'Proposal', playbook: { title: 'Proposal Winning Playbook', items: ['Competitive differentiation strategy', 'Pricing justification framework', 'Risk mitigation plan', 'Implementation timeline'] } },
                        { stage: 'Closed Won', playbook: { title: 'Closing Mastery Playbook', items: ['Urgency creation techniques', 'Final objection resolution', 'Contract negotiation tactics', 'Onboarding kickoff'] } }
                      ][activeStage].playbook.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                          <CheckCircle2 className="h-5 w-5 text-[#0070F3] mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Progress indicator */}
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>Stage Progress</span>
                        <span>{Math.round((5 - activeStage) / 5 * 100)}% Complete</span>
                      </div>
                      <div className="mt-2 h-1 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${(5 - activeStage) / 5 * 100}%`,
                            background: `linear-gradient(90deg, ${[
                              '#0070F3', '#4ADE80', '#F9CB28', '#FF6B6B', '#22C55E'
                            ][activeStage]}, #0070F3)`
                          }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column - Performance Metrics */}
              <div className="space-y-6 sm:space-y-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">AI-Powered Growth</h2>
                <p className="text-base sm:text-lg lg:text-2xl text-muted-foreground">Real-time insights driving exceptional results.</p>
                
                {/* Performance Dashboard */}
                <div className="space-y-6">
                  {/* Key Metrics Cards */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-card rounded-xl p-4 sm:p-6 border border-border hover:border-[#0070F3] transition-all duration-300">
                                              <div className="flex items-center justify-between mb-3 sm:mb-4">
                          <div className="text-xs sm:text-sm text-muted-foreground">Revenue Impact</div>
                          <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-green-500/20 flex items-center justify-center">
                            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 rotate-45" />
                          </div>
                        </div>
                        <div className="text-2xl sm:text-3xl font-bold mb-2">$4.2M</div>
                        <div className="text-xs sm:text-sm text-green-500">+65% with Graycommit AI</div>
                    </div>
                    <div className="bg-card rounded-xl p-4 sm:p-6 border border-border hover:border-[#0070F3] transition-all duration-300">
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <div className="text-xs sm:text-sm text-muted-foreground">Win Rate</div>
                        <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                        </div>
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold mb-2">42%</div>
                      <div className="text-xs sm:text-sm text-green-500">+15% improvement</div>
                    </div>
                  </div>

                  {/* AI Impact Metrics */}
                  <div className="bg-card rounded-xl p-4 sm:p-6 border border-border hover:border-[#0070F3] transition-all duration-300">
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div className="text-base sm:text-lg font-medium">AI Performance Impact</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Last 30 days</div>
                    </div>
                    <div className="space-y-4 sm:space-y-6">
                      {[
                        { label: 'Deal Size Increase', value: '32%', progress: '75%' },
                        { label: 'Sales Cycle Reduction', value: '40%', progress: '85%' },
                        { label: 'Competitive Win Rate', value: '45%', progress: '90%' }
                      ].map((metric, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="text-xs sm:text-sm">{metric.label}</div>
                            <div className="text-xs sm:text-sm text-green-500">+{metric.value}</div>
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
                  <div className="bg-card rounded-xl p-6 border border-border hover:border-[#0070F3] transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-lg font-medium">Recent Wins</div>
                      <div className="text-sm text-muted-foreground">Today</div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                          <div>
                            <div className="text-sm font-medium">Enterprise Deal</div>
                            <div className="text-xs text-muted-foreground">AI-suggested value props</div>
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
        <section className="py-24 relative border-t border-border">
            <div className="container mx-auto max-w-7xl px-4">
              <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
                <div className="space-y-8">
                  <h2 className="text-4xl font-bold">Turn every rep into a top performer.</h2>
                  <p className="text-2xl text-muted-foreground">Real-time coaching that drives consistent success.</p>
                  <div className="space-y-4">
                    <div className="rounded-lg bg-card p-4 border border-border">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                          <div>
                            <div className="text-sm">Deal Won - Enterprise</div>
                            <div className="text-xs text-muted-foreground">Used AI-suggested value props</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="text-sm text-muted-foreground">2h ago</div>
                          <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-black font-medium text-xs">$85K</div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg bg-card p-4 border border-border">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <CheckCircle2 className="h-5 w-5 text-blue-500" />
                          <div>
                            <div className="text-sm">Objection Handled</div>
                            <div className="text-xs text-muted-foreground">AI coach suggested perfect response</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="text-sm text-muted-foreground">5m ago</div>
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
                  <p className="text-2xl text-muted-foreground">Live coaching turns new hires into closers faster.</p>
                  <div className="rounded-lg bg-card p-6 space-y-6 border border-border">
                    <div className="flex items-center justify-between">
                      <div className="text-lg">Rep Performance</div>
                      <div className="flex items-center space-x-2">
                        <div className="text-muted-foreground">Outstanding</div>
                        <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-black font-medium">9.2</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="text-sm text-muted-foreground">Meetings Booked</div>
                        <div className="text-2xl font-bold">28</div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm text-muted-foreground">Close Rate</div>
                        <div className="text-2xl font-bold">42%</div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="text-sm">Top Performing Talk Tracks</div>
                        <div className="flex -space-x-2">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="h-8 w-8 rounded-full bg-card border-2 border-black flex items-center justify-center text-xs">
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
        <section className="py-24 relative border-t border-border">
            <div className="container mx-auto max-w-7xl px-4">
              <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
              <div className="space-y-8">
                <h2 className="text-4xl font-bold">Never miss a selling moment.</h2>
                <p className="text-2xl text-muted-foreground">AI-powered suggestions exactly when you need them.</p>
                <div className="space-y-4">
                  <div className="rounded-lg bg-card p-4 border border-border">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Eye className="h-5 w-5 text-blue-500" />
                        <div>
                          <div className="text-sm">Live Intelligence</div>
                          <div className="text-xs text-muted-foreground">Competitor mentioned: Outreach</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="text-sm text-muted-foreground">Now</div>
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
                <p className="text-2xl text-muted-foreground">Battle-tested talk tracks and objection handlers.</p>
                <div className="rounded-lg bg-card p-6 space-y-6 border border-border">
                  <div className="flex items-center justify-between">
                    <div className="text-lg">Call Intelligence</div>
                    <div className="flex items-center space-x-2">
                      <div className="text-muted-foreground">Active</div>
                      <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-black font-medium">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm">Talk Time Ratio</div>
                      <div className="text-sm text-muted-foreground">45:55</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">Questions Asked</div>
                      <div className="text-sm text-muted-foreground">8</div>
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
        <section className="py-24 relative border-t border-border overflow-hidden">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-bold">Loved by Technical Founders & Sales Teams</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                See how founders are transforming technical expertise into enterprise sales success with Graycommit.
              </p>
            </div>

            {/* Added pt-2 for top hover effect and pb-2 for bottom shadow */}
            <div className="relative overflow-x-auto pt-2 pb-2 no-scrollbar">
              <div className="flex space-x-6 pl-4" style={{ paddingRight: "calc(100% - 92%)" }}>
                {[
                  {
                    name: "Joey Grassia",
                    role: "Founder & CEO, Shef",
                    review: "As a marketplace founder, enterprise sales was our biggest challenge. Graycommit's real-time coaching turned our technical depth into compelling business value. We closed a $450K deal with major food distributors in our first month - something I never thought possible.",
                    metric: "3.2X Revenue Growth",
                    initials: "JG"
                  },
                  {
                    name: "George Deglin",
                    role: "Founder & CEO, OneSignal",
                    review: "From struggling with enterprise objections to confidently handling Fortune 500 calls - Graycommit transformed our sales approach. The AI coach understands both our messaging platform and enterprise needs, making every pitch resonate.",
                    metric: "$150M ARR Growth",
                    initials: "GD"
                  },
                  {
                    name: "Tyler Maran",
                    role: "Co-founder & CEO, OmniAI",
                    review: "We were great at building AI infrastructure but struggled with enterprise sales. Graycommit helped us speak the language of CTOs and CIOs. The real-time battle cards and objection handlers are like having a veteran sales leader in your ear.",
                    metric: "5X Enterprise Deals",
                    initials: "TM"
                  },
                  {
                    name: "Suchintan Singh",
                    role: "Founder, Skyvern",
                    review: "The competitive intelligence is mind-blowing. During a call with a major automation client, Graycommit surfaced the perfect AI case study and helped handle their integration concerns. Closed a $280K deal that would have slipped away.",
                    metric: "45% Higher Win Rate",
                    initials: "SS"
                  },
                  {
                    name: "Long Vo",
                    role: "Founder & COO, OneSignal",
                    review: "Onboarding technical founders to enterprise sales used to be a 6-month process. With Graycommit's real-time coaching, they're closing six-figure deals within weeks. It's like giving every founder a decade of sales experience instantly.",
                    metric: "70% Faster Ramp Time",
                    initials: "LV"
                  },
                  {
                    name: "Anna Pojawis",
                    role: "Co-founder & CTO, OmniAI",
                    review: "The personalized talk tracks and real-time battle cards have transformed how we compete. My team of technical founders is now consistently winning against legacy vendors in enterprise deals.",
                    metric: "52% Win Rate vs Enterprise",
                    initials: "AP"
                  },
                  {
                    name: "Yash Kadadi",
                    role: "Founder, Forerunner AI",
                    review: "Coming from an aerospace background, I could explain our tech but struggled with value selling. Graycommit's AI coach helps translate complex aerospace features into business outcomes in real-time. Just closed our first $1M deal!",
                    metric: "First $1M Enterprise Deal",
                    initials: "YK"
                  },
                  {
                    name: "Tony Kam",
                    role: "Co-founder & CEO, Lilac Labs",
                    review: "The AI understands our technical differentiators and helps position them perfectly for different stakeholders. CFOs, CTOs, CISOs - Graycommit helps us nail every conversation with relevant insights and case studies.",
                    metric: "4X Deal Size Increase",
                    initials: "TK"
                  },
                  {
                    name: "William Zeng",
                    role: "Founder, Sweep",
                    review: "As an AI company founder, I was skeptical of sales tools. Graycommit proved me wrong. It actually understands technical nuances and helps translate them into value props. Our sales cycles dropped from 6 months to 6 weeks.",
                    metric: "75% Shorter Sales Cycles",
                    initials: "WZ"
                  },
                  {
                    name: "Daniel Francis",
                    role: "Founder, Abel Police",
                    review: "From hesitant technical founder to confident enterprise seller - that's my journey with Graycommit. The real-time coaching helped me handle complex enterprise objections and navigate multi-stakeholder deals effectively.",
                    metric: "8 Enterprise Wins in Q1",
                    initials: "DF"
                  }
                ].map((review, index) => (
                  <div 
                    key={index}
                    className="bg-card rounded-xl p-8 border border-border hover:border-[#0070F3] transition-all duration-300 flex-none w-[350px] group hover:shadow-2xl hover:shadow-[#0070F3]/10 hover:-translate-y-1"
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
                          <div className="font-medium text-foreground group-hover:text-[#0070F3] transition-colors">
                            {review.name}
                          </div>
                          <div className="text-sm text-muted-foreground">{review.role}</div>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
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



        <section className="relative py-24 border-t border-border">
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
                  background: 'linear-gradient(to right, transparent, rgba(51, 51, 51, 0.2) 50%, transparent)',
                  opacity: '0.25'
                }}
              />
            ))}
          </div>

          <div className="container relative max-w-full px-4">
            <h2 className="text-3xl font-bold text-center mb-16">Trusted by</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-12 gap-x-8 md:gap-24">
              {/* Company Names */}
              {[
                "Shef", "OneSignal", "OmniAI", "Skyvern",
                "Stripe", "OpenAI", "Forerunner AI", "Lilac Labs",
                "Sweep", "Abel Police", "Olive", "Bunkerhill Health"
              ].map((name) => (
                <div key={name} className="flex items-center justify-center text-center">
                  <div className="text-xl sm:text-2xl font-bold text-muted-foreground">{name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative border-t border-border overflow-hidden">
          {/* Theme gradient background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0f81fb_0%,_transparent_35%)] opacity-20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#0f81fb_0%,_transparent_40%)] opacity-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#0f81fb_0%,_transparent_40%)] opacity-10" />
            {/* Grid overlay for consistency with other sections */}
            {[...Array(20)].map((_, i) => (
              <div
                key={`v-${i}`}
                className="absolute top-0 bottom-0 w-[1px]"
                style={{ 
                  left: `${(i + 1) * 5}%`,
                  background: 'linear-gradient(to bottom, transparent, rgba(15, 129, 251, 0.1) 50%, transparent)',
                  opacity: '0.3'
                }}
              />
            ))}
            {[...Array(15)].map((_, i) => (
              <div
                key={`h-${i}`}
                className="absolute left-0 right-0 h-px"
                style={{ 
                  top: `${(i + 1) * 6.67}%`,
                  background: 'linear-gradient(to right, transparent, rgba(15, 129, 251, 0.1) 50%, transparent)',
                  opacity: '0.2'
                }}
              />
            ))}
          </div>

          <div className="container max-w-full px-4 relative">
            <div className="flex flex-col items-center text-center space-y-8">
              <div className="inline-flex items-center space-x-2">
                <span className="text-sm font-semibold text-[#0f81fb]">✨ The Future of Sales is Here</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-3xl text-foreground">
                Transform Your Sales Game with AI Magic
              </h2>
              
              <p className="max-w-[600px] text-xl text-muted-foreground leading-relaxed">
                Join the elite group of founders who've unlocked <span className="text-foreground">3.5x revenue growth</span> with 
                our AI sales intelligence. Your success story begins here.
              </p>

              <div className="flex flex-col gap-6 min-[400px]:flex-row items-center">
                <Link href="https://app.graycommit.com" target="_blank" rel="noopener noreferrer">
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
                </Link>

                <div className="flex items-center text-sm text-muted-foreground">
                  
                  <span>Join 100+ startups</span>
                </div>
              </div>

              <div className="pt-8 flex items-center gap-8 text-sm text-muted-foreground">
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

        </section>
      </main>

      
    </div>
  )
}