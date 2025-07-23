'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Target, Lightbulb, Shield, Zap, Globe, Award, MapPin, Clock, DollarSign, Heart, Coffee, Zap as Lightning } from 'lucide-react'

export default function CareersPage() {
  const openPositions = [
    {
      title: "GTM Sales Exec - AI",
      department: "Sales",
      location: "Bangalore",
      type: "Full-time",
      description: "Drive revenue growth by selling our AI-powered sales platform to enterprise customers and building strategic partnerships.",
      requirements: [
        "B2B enterprise sales experience, preferably in AI/SaaS",
        "Experience selling to sales leaders, VPs, and C-level executives",
        "Track record of exceeding quota and managing complex sales cycles",
        "Strong understanding of AI/ML technologies and their business applications",
        "Excellent consultative selling and relationship-building skills"
      ]
    },
    {
      title: "Agentic Systems Engineer",
      department: "Engineering",
      location: "San Francisco",
      type: "Full-time",
      description: "Build and scale autonomous AI systems that power our real-time sales coaching platform and agentic workflows.",
      requirements: [
        "Experience with distributed systems and real-time architectures",
        "Experience with AI/ML systems, autonomous agents, and multi-agent coordination",
        "Strong background in Python, Go, or Rust with cloud platforms (AWS/GCP)",
        "Experience with message queues, event streaming, and microservices",
        "Knowledge of LLM integration, RAG systems, and autonomous decision-making"
      ]
    },
    {
      title: "Product Engineer - AI",
      department: "Engineering",
      location: "San Francisco",
      type: "Full-time",
      description: "Build AI-powered product features that directly impact sales team performance and customer success.",
      requirements: [
        "Experience with React, TypeScript, and modern web technologies",
        "Experience integrating AI/ML models into production applications",
        "Strong understanding of user experience and product development",
        "Background in real-time applications, WebSockets, and API design",
        "Experience with AI tools, prompt engineering, and LLM integration"
      ]
    }
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Top-of-market salaries with equity packages and performance bonuses."
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision coverage for you and your family."
    },
    {
      icon: Coffee,
      title: "Flexible Work",
      description: "Remote-first culture with flexible hours and unlimited PTO."
    },
    {
      icon: Lightning,
      title: "Growth & Learning",
      description: "Professional development budget, conference attendance, and learning resources."
    },
    {
      icon: Users,
      title: "Team Events",
      description: "Regular team gatherings, offsites, and virtual social events."
    },
    {
      icon: Award,
      title: "Impact",
      description: "Work on cutting-edge AI technology that transforms how sales teams operate."
    }
  ]

  const values = [
    {
      icon: Target,
      title: "Customer Obsession",
      description: "Every decision starts with our customers' success in mind."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We push boundaries and embrace bold, creative solutions."
    },
    {
      icon: Shield,
      title: "Speed & Execution",
      description: "We move fast, ship quickly, and learn from every iteration."
    },
    {
      icon: Users,
      title: "Transparent Culture",
      description: "Open communication, radical transparency, and collaborative decision-making."
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
              Join Our Team
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Build the Future of
              <span className="bg-gradient-to-r from-[#0f81fb] to-[#40a9ff] bg-clip-text text-transparent"> Sales Technology</span>
            </h1>
            <p className="text-xl text-[#888] leading-relaxed mb-8 max-w-3xl mx-auto">
              Join a team of engineers, sales veterans, and AI researchers who are transforming how sales teams operate. 
              Help us democratize sales excellence through cutting-edge AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#open-positions">
                <Button className="group bg-[#0f81fb] text-white hover:bg-[#0f81fb]/90 transition-all duration-300">
                  <span className="relative z-10 flex items-center">
                    View Open Positions
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </a>
              <Link href="mailto:sudheer@graycommit.com">
                <Button variant="outline" className="border-[#333] text-[#888] hover:text-white hover:border-[#0f81fb]">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 border-t border-[#333]">
        <div className="container max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Join Graycommit?</h2>
            <p className="text-lg text-[#888] max-w-2xl mx-auto">
              We're building something that has never been done before. Here's what makes us special.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Transform an Industry</h3>
              <p className="text-lg text-[#888] leading-relaxed mb-6">
                Sales is a $2 trillion industry that's still largely manual and inefficient. We're building the first 
                real-time AI platform that actually helps salespeople close more deals.
              </p>
              <p className="text-lg text-[#888] leading-relaxed mb-8">
                You'll work on cutting-edge AI technology that's already helping thousands of sales professionals 
                perform at their peak potential. Every feature you build has an immediate, measurable impact.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#0f81fb] mb-2">1000+</div>
                  <div className="text-sm text-[#888]">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#0f81fb] mb-2">45%</div>
                  <div className="text-sm text-[#888]">Win Rate Increase</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#111] to-[#000] rounded-2xl p-6 border border-[#333]">
                <h4 className="text-xl font-semibold mb-3">Small Team, Big Impact</h4>
                <p className="text-[#888] leading-relaxed">
                  We're a small, focused team where every person has a direct impact on our product and customers. 
                  No bureaucracy, no politics—just building great things together.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-[#111] to-[#000] rounded-2xl p-6 border border-[#333]">
                <h4 className="text-xl font-semibold mb-3">Remote-First Culture</h4>
                <p className="text-[#888] leading-relaxed">
                  Work from anywhere in the world. We bring the team together for periodic gatherings to build 
                  relationships and align on strategy.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-[#111] to-[#000] rounded-2xl p-6 border border-[#333]">
                <h4 className="text-xl font-semibold mb-3">Continuous Learning</h4>
                <p className="text-[#888] leading-relaxed">
                  We're constantly pushing the boundaries of what's possible with AI. You'll learn from world-class 
                  engineers and researchers while building the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Benefits & Perks</h2>
            <p className="text-lg text-[#888] max-w-2xl mx-auto">
              We take care of our team so you can focus on doing your best work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#111] rounded-2xl p-6 border border-[#333] hover:border-[#0f81fb]/50 transition-all group">
                  <div className="bg-[#0f81fb]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0f81fb]/20 transition-colors">
                    <benefit.icon className="h-8 w-8 text-[#0f81fb]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-[#888] text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-lg text-[#888] max-w-2xl mx-auto">
              These principles guide how we work together and build our products.
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

      {/* Open Positions Section */}
      <section id="open-positions" className="py-20 bg-[#0A0A0A]">
        <div className="container max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Open Positions</h2>
            <p className="text-lg text-[#888] max-w-2xl mx-auto">
              Ready to join our mission? Check out our current openings below.
            </p>
          </div>
          
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-[#111] rounded-2xl p-8 border border-[#333] hover:border-[#0f81fb]/50 transition-all">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-[#888]">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        {position.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {position.type}
                      </div>

                    </div>
                  </div>
                  <Link href="https://forms.gle/JRRyEqayaV32F3xC7" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-[#0f81fb] text-white hover:bg-[#0f81fb]/90 mt-4 lg:mt-0">
                      Apply Now
                    </Button>
                  </Link>
                </div>
                
                <p className="text-[#888] mb-6">{position.description}</p>
                
                <div>
                  <h4 className="font-semibold mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="text-[#888] text-sm flex items-start">
                        <span className="text-[#0f81fb] mr-2">•</span>
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-[#888] mb-6">
              Don't see a position that fits? We're always looking for talented people to join our team.
            </p>
            <Link href="https://forms.gle/JRRyEqayaV32F3xC7" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-[#0f81fb] text-[#0f81fb] hover:bg-[#0f81fb] hover:text-white">
                Send Us Your Resume
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-[#333]">
        <div className="container max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build the Future?</h2>
          <p className="text-lg text-[#888] mb-8 max-w-2xl mx-auto">
            Join a team that's transforming how sales teams operate. Every line of code you write, 
            every feature you build, will help thousands of sales professionals succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="mailto:sudheer@graycommit.com">
              <Button className="group bg-[#0f81fb] text-white hover:bg-[#0f81fb]/90 transition-all duration-300">
                <span className="relative z-10 flex items-center">
                  Get in Touch
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" className="border-[#0f81fb] text-[#0f81fb] hover:bg-[#0f81fb] hover:text-white">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 