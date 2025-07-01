'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Search, 
  Brain, 
  Zap, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Code,
  FileText,
  BarChart,
  Users,
  Shield,
  Globe,
  Sparkles,
  Database,
  Clock,
  Target
} from 'lucide-react'

export default function DeepSearchPage() {
  const llmProviders = [
    { name: "OpenAI GPT-4", logo: "🤖", status: "Available" },
    { name: "Claude 3.5 Sonnet", logo: "🧠", status: "Available" },
    { name: "Gemini Pro", logo: "💎", status: "Available" },
    { name: "Llama 3", logo: "🦙", status: "Available" },
    { name: "Mistral AI", logo: "💨", status: "Available" },
    { name: "Cohere", logo: "🔮", status: "Available" }
  ]

  const useCases = [
    {
      icon: FileText,
      title: "Content Creation",
      description: "Generate marketing copy, proposals, and documentation",
      examples: ["Write compelling sales emails", "Create product descriptions", "Draft technical documentation"]
    },
    {
      icon: Code,
      title: "Code Analysis",
      description: "Debug, optimize, and explain code across languages",
      examples: ["Debug JavaScript errors", "Optimize SQL queries", "Explain complex algorithms"]
    },
    {
      icon: BarChart,
      title: "Data Analysis",
      description: "Analyze datasets and generate insights",
      examples: ["Interpret sales metrics", "Analyze customer feedback", "Generate reports"]
    },
    {
      icon: Brain,
      title: "Strategic Planning",
      description: "Get strategic advice and planning assistance",
      examples: ["Market entry strategies", "Competitive analysis", "Product roadmaps"]
    }
  ]

  const features = [
    {
      icon: MessageSquare,
      title: "Multi-LLM Access",
      description: "Access to 15+ leading AI models in one platform",
      benefit: "Compare responses and get the best answer"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Sub-second response times across all models",
      benefit: "No waiting, instant AI assistance"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 compliant with data encryption",
      benefit: "Your conversations stay private and secure"
    },
    {
      icon: Database,
      title: "Context Memory",
      description: "Maintains conversation context across sessions",
      benefit: "Build on previous conversations naturally"
    },
    {
      icon: Target,
      title: "Custom Prompts",
      description: "Save and share optimized prompts with your team",
      benefit: "Consistent, high-quality outputs"
    },
    {
      icon: Globe,
      title: "Multi-Language",
      description: "Ask questions in 50+ languages",
      benefit: "Global team collaboration made easy"
    }
  ]

  const testimonials = [
    {
      quote: "DeepSearch has revolutionized how our sales team handles objections. We can instantly get responses from multiple AI models and choose the best approach.",
      author: "Sarah Chen",
      role: "VP of Sales",
      company: "TechFlow Inc"
    },
    {
      quote: "The ability to compare GPT-4, Claude, and Gemini responses side-by-side has improved our content quality by 40%.",
      author: "Marcus Johnson",
      role: "Content Director",
      company: "Digital Dynamics"
    }
  ]

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
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
        
        <div className="container max-w-6xl mx-auto px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Search className="h-6 w-6 text-[#0f81fb]" />
              <Badge className="bg-[#0f81fb]/10 text-[#0f81fb] border-[#0f81fb]/20">
                DeepSearch AI
              </Badge>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Ask Any Question to
              <span className="bg-gradient-to-r from-[#0f81fb] to-purple-400 bg-clip-text text-transparent"> Any AI Model</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
              Access 15+ leading AI models including GPT-4, Claude, Gemini, and more in one unified platform. 
              Compare responses, get better answers, and accelerate your workflow. Available as part of Graycommit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://app.graycommit.com">
                <Button className="group bg-[#0f81fb] text-white hover:bg-[#0f81fb]/90 transition-all duration-300">
                  <span className="relative z-10 flex items-center">
                    Get Started with Graycommit
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
        </div>
      </section>

      {/* LLM Providers */}
      <section className="py-16 border-t border-border relative">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-background" />
        <div className="container max-w-6xl mx-auto px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Access All Leading AI Models</h2>
            <p className="text-lg text-muted-foreground">Compare responses from the world's most advanced AI systems</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {llmProviders.map((provider, index) => (
              <div key={index} className="bg-card rounded-lg p-4 border border-border text-center hover:border-[#0f81fb]/50 transition-all hover:shadow-lg hover:shadow-[#0f81fb]/10">
                <div className="text-3xl mb-3">{provider.logo}</div>
                <div className="font-medium text-foreground text-sm mb-2">{provider.name}</div>
                <div className="text-xs text-green-500">{provider.status}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0f81fb]/5 to-transparent" />
        <div className="container max-w-6xl mx-auto px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Supercharge Your AI Workflow</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to harness the power of multiple AI models in one platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border border-border hover:border-[#0f81fb]/30 transition-all group hover:shadow-xl hover:shadow-[#0f81fb]/10">
                <div className="bg-gradient-to-br from-[#0f81fb]/10 to-[#0f81fb]/5 rounded-lg p-3 w-fit mb-4 group-hover:from-[#0f81fb]/20 group-hover:to-[#0f81fb]/10 transition-colors">
                  <feature.icon className="h-6 w-6 text-[#0f81fb]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-3">{feature.description}</p>
                <p className="text-sm text-[#0f81fb] font-medium">{feature.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 relative border-t border-border">
        {/* Radial gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent/30 via-background to-accent/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_rgba(15,129,251,0.1),_transparent_50%)]" />
        <div className="container max-w-6xl mx-auto px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Endless Possibilities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From content creation to code analysis, DeepSearch handles it all.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg hover:shadow-[#0f81fb]/5 transition-all hover:border-[#0f81fb]/20">
                <div className="bg-gradient-to-br from-[#0f81fb]/10 to-[#0f81fb]/5 rounded-lg p-3 w-fit mb-4">
                  <useCase.icon className="h-6 w-6 text-[#0f81fb]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                <p className="text-muted-foreground mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.examples.map((example, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-[#0f81fb] flex-shrink-0" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 relative">
        {/* Diagonal gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#0f81fb]/5 to-transparent" />
        <div className="container max-w-6xl mx-auto px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Trusted by Leading Teams</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 border border-border hover:shadow-xl hover:shadow-[#0f81fb]/10 transition-all">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-foreground mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0f81fb]/20 to-[#0f81fb]/10 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-[#0f81fb]" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration with Graycommit */}
      <section className="py-20 relative border-t border-border">
        {/* Multi-layer gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent/40 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,_rgba(15,129,251,0.1),_transparent_50%)]" />
        <div className="container max-w-6xl mx-auto px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Part of the Graycommit Platform</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              DeepSearch is included with your Graycommit subscription. Access it alongside our other powerful sales tools.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 border border-border text-center hover:shadow-lg hover:shadow-[#0f81fb]/5 transition-all">
              <div className="bg-gradient-to-br from-[#0f81fb]/10 to-[#0f81fb]/5 rounded-lg p-4 w-fit mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-[#0f81fb]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">DeepSearch</h3>
              <p className="text-muted-foreground mb-4">Ask questions to any LLM and get intelligent responses</p>
              <div className="text-sm text-[#0f81fb]">Available in all plans</div>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border text-center hover:shadow-lg hover:shadow-[#0f81fb]/5 transition-all">
              <div className="bg-gradient-to-br from-[#0f81fb]/10 to-[#0f81fb]/5 rounded-lg p-4 w-fit mx-auto mb-4">
                <Brain className="h-8 w-8 text-[#0f81fb]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Realtime Playbook</h3>
              <p className="text-muted-foreground mb-4">Live deal guidance and coaching during meetings</p>
              <div className="text-sm text-[#0f81fb]">Available in all plans</div>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border text-center hover:shadow-lg hover:shadow-[#0f81fb]/5 transition-all">
              <div className="bg-gradient-to-br from-[#0f81fb]/10 to-[#0f81fb]/5 rounded-lg p-4 w-fit mx-auto mb-4">
                <BarChart className="h-8 w-8 text-[#0f81fb]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Deal Intelligence</h3>
              <p className="text-muted-foreground mb-4">AI-powered insights and competitive intelligence</p>
              <div className="text-sm text-[#0f81fb]">Available in all plans</div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/pricing">
              <Button className="bg-[#0f81fb] text-white hover:bg-[#0f81fb]/90">
                View Graycommit Pricing →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border relative">
        {/* Radial gradient for final CTA */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(15,129,251,0.1),_transparent_70%)]" />
        <div className="container max-w-4xl mx-auto px-8 text-center relative">
          <div className="bg-gradient-to-br from-card via-card to-accent/20 rounded-3xl p-12 border border-border shadow-2xl">
            <Sparkles className="h-16 w-16 text-[#0f81fb] mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Ready to Unlock AI's Full Potential?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of sales professionals using Graycommit to get better answers, faster insights, 
              and superior results from AI - including our powerful DeepSearch feature.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://app.graycommit.com">
                <Button className="group bg-[#0f81fb] text-white hover:bg-[#0f81fb]/90 transition-all duration-300">
                  <span className="relative z-10 flex items-center">
                    Get Started with Graycommit
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
        </div>
      </section>
    </div>
  )
} 