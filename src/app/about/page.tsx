'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Target, Lightbulb, Shield, Zap, Globe, Award } from 'lucide-react'

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sudheer Sandu",
      role: "CEO & Co-founder",
      bio: "Former Sales VP at Salesforce. Led enterprise sales teams to $100M+ ARR. Passionate about democratizing sales excellence through AI.",
      image: "/team/sudheer-sandu.jpg"
    },
    {
      name: "Alex Chen",
      role: "VP of Engineering",
      bio: "Ex-Google AI researcher. Built machine learning systems at scale. Expert in real-time AI and distributed systems.",
      image: "/team/alex-chen.jpg"
    },
    {
      name: "Sarah Kim",
      role: "VP of Product",
      bio: "Former Product Lead at HubSpot. Designed sales tools used by 50,000+ sales professionals. UX evangelist.",
      image: "/team/sarah-kim.jpg"
    },
    {
      name: "Marcus Rodriguez",
      role: "VP of Security",
      bio: "Former Security Architect at Stripe. Expert in enterprise security, compliance, and data protection at scale.",
      image: "/team/marcus-rodriguez.jpg"
    }
  ]

  const values = [
    {
      icon: Target,
      title: "Customer Obsession",
      description: "Every feature we build starts with a real customer problem. We obsess over making sales teams more successful."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We push the boundaries of what's possible with AI, always staying ahead of the curve in sales technology."
    },
    {
      icon: Shield,
      title: "Security by Design",
      description: "Enterprise-grade security isn't an afterthought—it's built into every line of code we write."
    },
    {
      icon: Users,
      title: "Transparent Culture",
      description: "We believe in radical transparency, open communication, and empowering every team member to lead."
    }
  ]

  const milestones = [
    {
      year: "2022",
      title: "Company Founded",
      description: "Started with a simple vision: make every sales rep perform like a top 1% closer."
    },
    {
      year: "2023",
      title: "First Enterprise Customers",
      description: "Signed our first Fortune 500 customers and achieved product-market fit."
    },
    {
      year: "2024",
      title: "AI Breakthrough",
      description: "Launched real-time AI coaching with sub-100ms response times at scale."
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Serving 1000+ enterprise customers across 50+ countries."
    }
  ]

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f81fb]/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(15,129,251,0.1),transparent_50%)]" />
        
        <div className="container max-w-6xl mx-auto px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-[#0f81fb]/10 text-[#0f81fb] border-[#0f81fb]/20 mb-6">
              About Graycommit
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Transforming Sales Through
              <span className="bg-gradient-to-r from-[#0f81fb] to-[#40a9ff] bg-clip-text text-transparent"> AI Innovation</span>
            </h1>
            <p className="text-xl text-[#888] leading-relaxed mb-8 max-w-3xl mx-auto">
              We're building the future of B2B sales—where every conversation is optimized, every insight is actionable, 
              and every sales professional performs at their peak potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button className="group bg-[#0f81fb] text-white hover:bg-[#0f81fb]/90 transition-all duration-300">
                  <span className="relative z-10 flex items-center">
                    Explore Our Platform
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
              <Link href="/blog">
                <Button variant="outline" className="border-[#333] text-[#888] hover:text-white hover:border-[#0f81fb]">
                  View Latest Updates
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 border-t border-[#333]">
        <div className="container max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-[#888] leading-relaxed mb-6">
                Every year, $2 trillion in B2B sales opportunities are lost due to poor execution, missed signals, 
                and inadequate coaching. We believe every sales professional deserves access to world-class guidance 
                in real-time.
              </p>
              <p className="text-lg text-[#888] leading-relaxed mb-8">
                Graycommit democratizes sales excellence by putting an AI sales coach in every conversation, 
                helping teams close more deals, faster, while building authentic relationships with their customers.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#0f81fb] mb-2">1000+</div>
                  <div className="text-sm text-[#888]">Enterprise Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#0f81fb] mb-2">45%</div>
                  <div className="text-sm text-[#888]">Average Win Rate Increase</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#111] to-[#000] rounded-2xl p-8 border border-[#333]">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#0f81fb]/10 rounded-lg p-4 text-center">
                    <Zap className="h-8 w-8 text-[#0f81fb] mx-auto mb-2" />
                    <div className="text-sm font-medium">Real-time AI</div>
                  </div>
                  <div className="bg-[#0f81fb]/10 rounded-lg p-4 text-center">
                    <Globe className="h-8 w-8 text-[#0f81fb] mx-auto mb-2" />
                    <div className="text-sm font-medium">Global Scale</div>
                  </div>
                  <div className="bg-[#0f81fb]/10 rounded-lg p-4 text-center">
                    <Shield className="h-8 w-8 text-[#0f81fb] mx-auto mb-2" />
                    <div className="text-sm font-medium">Enterprise Security</div>
                  </div>
                  <div className="bg-[#0f81fb]/10 rounded-lg p-4 text-center">
                    <Award className="h-8 w-8 text-[#0f81fb] mx-auto mb-2" />
                    <div className="text-sm font-medium">Industry Leading</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-lg text-[#888] max-w-2xl mx-auto">
              These principles guide every decision we make and every product we build.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#111] rounded-2xl p-6 border border-[#333] hover:border-[#0f81fb]/50 transition-all group">
                  <div className="bg-[#0f81fb]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0f81fb]/20 transition-colors">
                    <value.icon className="h-8 w-8 text-[#0f81fb]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-[#888] text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Journey</h2>
            <p className="text-lg text-[#888] max-w-2xl mx-auto">
              From a bold idea to transforming how the world sells.
            </p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-[#333]" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-[#0f81fb] rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {milestone.year}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="ml-8 bg-[#111] rounded-lg p-6 border border-[#333] flex-1">
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-[#888]">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Leadership Team</h2>
            <p className="text-lg text-[#888] max-w-2xl mx-auto">
              World-class leaders from top technology and sales organizations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#111] rounded-2xl p-6 border border-[#333] hover:border-[#0f81fb]/50 transition-all group">
                  <div className="w-20 h-20 bg-[#333] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-[#888]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-[#0f81fb] text-sm mb-3">{member.role}</p>
                  <p className="text-[#888] text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-[#333]">
        <div className="container max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-lg text-[#888] mb-8 max-w-2xl mx-auto">
            Ready to transform your sales process with AI? Join thousands of sales professionals 
            who are already closing more deals with Graycommit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://app.graycommit.com">
              <Button className="group bg-[#0f81fb] text-white hover:bg-[#0f81fb]/90 transition-all duration-300">
                <span className="relative z-10 flex items-center">
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
            <Link href="https://tidycal.com/sudheer.sandu/problemoverview">
              <Button variant="outline" className="border-[#0f81fb] text-[#0f81fb] hover:bg-[#0f81fb] hover:text-white">
                Book a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 