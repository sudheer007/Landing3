'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Shield, 
  Lock, 
  Eye, 
  Server, 
  FileText, 
  Users, 
  Globe, 
  CheckCircle, 
  AlertTriangle,
  Download,
  ExternalLink,
  Key,
  Database,
  Monitor,
  ArrowRight
} from 'lucide-react'

export default function SecurityPage() {
  const certifications = [
    {
      name: "SOC 2 Type II",
      status: "Certified",
      description: "Independently audited for security, availability, processing integrity, confidentiality, and privacy.",
      icon: Shield,
      link: "/compliance/soc2.pdf"
    },
    {
      name: "GDPR Compliant",
      status: "Compliant",
      description: "Full compliance with European Union General Data Protection Regulation.",
      icon: Globe,
      link: "/compliance/gdpr.pdf"
    },
    {
      name: "HIPAA Ready",
      status: "Ready",
      description: "Healthcare-grade security controls for handling sensitive health information.",
      icon: FileText,
      link: "/compliance/hipaa.pdf"
    },
    {
      name: "ISO 27001",
      status: "In Progress",
      description: "International standard for information security management systems.",
      icon: CheckCircle,
      link: "#"
    }
  ]

  const securityFeatures = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "AES-256 encryption in transit and at rest",
      details: [
        "TLS 1.3 for all data in transit",
        "AES-256 encryption for data at rest",
        "Key rotation every 90 days",
        "Hardware security modules (HSMs)"
      ]
    },
    {
      icon: Eye,
      title: "Zero Trust Architecture",
      description: "Never trust, always verify approach",
      details: [
        "Multi-factor authentication required",
        "Principle of least privilege access",
        "Continuous identity verification",
        "Network micro-segmentation"
      ]
    },
    {
      icon: Monitor,
      title: "24/7 Security Monitoring",
      description: "Real-time threat detection and response",
      details: [
        "SIEM with AI-powered anomaly detection",
        "Real-time security incident response",
        "Automated threat mitigation",
        "Security operations center (SOC)"
      ]
    },
    {
      icon: Database,
      title: "Data Residency Control",
      description: "Your data stays where you need it",
      details: [
        "Regional data centers worldwide",
        "Configurable data residency",
        "No cross-border data transfer",
        "Local compliance adherence"
      ]
    }
  ]

  const infrastructureSecurity = [
    {
      title: "Cloud Infrastructure",
      description: "Built on enterprise-grade cloud providers",
      metrics: [
        { label: "Uptime SLA", value: "99.99%" },
        { label: "Data Centers", value: "15+" },
        { label: "Regions", value: "Global" }
      ]
    },
    {
      title: "Network Security",
      description: "Multi-layered network protection",
      metrics: [
        { label: "DDoS Protection", value: "Layer 3-7" },
        { label: "WAF Rules", value: "1000+" },
        { label: "CDN Nodes", value: "200+" }
      ]
    },
    {
      title: "Access Control",
      description: "Granular permissions and audit trails",
      metrics: [
        { label: "Permission Levels", value: "50+" },
        { label: "Audit Retention", value: "7 Years" },
        { label: "Session Timeout", value: "15 mins" }
      ]
    }
  ]

  const securityPractices = [
    {
      category: "Development Security",
      practices: [
        "Secure development lifecycle (SDLC)",
        "Automated security testing in CI/CD",
        "Code review and static analysis",
        "Dependency vulnerability scanning",
        "Penetration testing quarterly"
      ]
    },
    {
      category: "Operational Security",
      practices: [
        "24/7 security operations center",
        "Incident response procedures",
        "Regular security assessments",
        "Employee security training",
        "Third-party security audits"
      ]
    },
    {
      category: "Data Protection",
      practices: [
        "Data loss prevention (DLP)",
        "Automated data classification",
        "Secure data backup and recovery",
        "Data retention policy enforcement",
        "Right to erasure compliance"
      ]
    }
  ]

  const trustMetrics = [
    { metric: "99.99%", label: "Service Uptime", description: "Industry-leading reliability" },
    { metric: "< 100ms", label: "Response Time", description: "Real-time performance" },
    { metric: "0", label: "Data Breaches", description: "Perfect security record" },
    { metric: "1000+", label: "Enterprise Customers", description: "Trusted by leading companies" }
  ]

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <div className="absolute top-40 right-32 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000" />
          <div className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse delay-2000" />
        </div>
        
        <div className="container max-w-6xl mx-auto px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Shield className="h-6 w-6 text-green-400" />
              <Badge className="bg-green-400/10 text-green-400 border-green-400/20">
                Enterprise Security
              </Badge>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Security That
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"> Never Sleeps</span>
            </h1>
            <p className="text-xl text-[#888] leading-relaxed mb-8 max-w-3xl mx-auto">
              Enterprise-grade security architecture designed by former security leaders from Stripe, 
              Google, and other Silicon Valley giants. Your data is protected by the same standards 
              that safeguard the world's most sensitive information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#compliance">
                <Button className="group bg-green-500 text-black hover:bg-green-400 transition-all duration-300 font-medium">
                  <span className="relative z-10 flex items-center">
                    View Compliance Reports
                    <Download className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                  </span>
                </Button>
              </Link>
              <Link href="/blog">
                <Button variant="outline" className="border-[#333] text-[#888] hover:text-white hover:border-green-400">
                  Security Updates
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="py-16 border-t border-[#333] bg-[#0A0A0A]">
        <div className="container max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {trustMetrics.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">{item.metric}</div>
                <div className="text-white font-medium mb-1">{item.label}</div>
                <div className="text-sm text-[#888]">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Military-Grade Security Architecture</h2>
            <p className="text-lg text-[#888] max-w-2xl mx-auto">
              Built with security-first principles that exceed industry standards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-[#111] rounded-2xl p-8 border border-[#333] hover:border-green-400/30 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="bg-green-400/10 rounded-lg p-3 group-hover:bg-green-400/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-[#888] mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-[#888]">
                          <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Security */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Infrastructure Built for Scale & Security</h2>
            <p className="text-lg text-[#888] max-w-2xl mx-auto">
              Global infrastructure designed to handle enterprise workloads with zero compromise on security.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {infrastructureSecurity.map((item, index) => (
              <div key={index} className="bg-[#111] rounded-2xl p-6 border border-[#333] text-center">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-[#888] mb-6">{item.description}</p>
                <div className="space-y-4">
                  {item.metrics.map((metric, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-sm text-[#888]">{metric.label}</span>
                      <span className="text-green-400 font-medium">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Certifications */}
      <section id="compliance" className="py-20">
        <div className="container max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Compliance & Certifications</h2>
            <p className="text-lg text-[#888] max-w-2xl mx-auto">
              Independently verified security controls and compliance with global standards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-[#111] rounded-2xl p-6 border border-[#333] text-center hover:border-green-400/30 transition-all group">
                <div className="bg-green-400/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-400/20 transition-colors">
                  <cert.icon className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                  cert.status === 'Certified' || cert.status === 'Compliant' || cert.status === 'Ready'
                    ? 'bg-green-400/10 text-green-400'
                    : 'bg-yellow-400/10 text-yellow-400'
                }`}>
                  {cert.status}
                </div>
                <p className="text-[#888] text-sm mb-4">{cert.description}</p>
                {cert.link !== '#' && (
                  <Link href={cert.link} className="inline-flex items-center text-green-400 text-sm hover:text-green-300">
                    Download Report
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Security Best Practices</h2>
            <p className="text-lg text-[#888] max-w-2xl mx-auto">
              Comprehensive security practices across development, operations, and data protection.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityPractices.map((category, index) => (
              <div key={index} className="bg-[#111] rounded-2xl p-6 border border-[#333]">
                <h3 className="text-xl font-semibold mb-4 text-green-400">{category.category}</h3>
                <ul className="space-y-3">
                  {category.practices.map((practice, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-[#888]">{practice}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Team */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-8">
          <div className="bg-gradient-to-r from-[#111] to-[#0A0A0A] rounded-3xl p-12 border border-[#333] text-center">
            <Shield className="h-16 w-16 text-green-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Led by Security Veterans</h2>
            <p className="text-lg text-[#888] mb-6 max-w-2xl mx-auto">
              Our security team includes former security architects from Stripe, Google, and other industry leaders. 
              We've secured systems handling billions of dollars in transactions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-green-400/10 text-green-400 border-green-400/20">Ex-Stripe Security</Badge>
              <Badge className="bg-blue-400/10 text-blue-400 border-blue-400/20">Ex-Google Cloud</Badge>
              <Badge className="bg-purple-400/10 text-purple-400 border-purple-400/20">Ex-AWS Security</Badge>
            </div>
            <Link href="/about">
              <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black">
                Meet Our Security Team
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Security Contact */}
      <section className="py-20 border-t border-[#333]">
        <div className="container max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Questions About Our Security?</h2>
          <p className="text-lg text-[#888] mb-8 max-w-2xl mx-auto">
            Our security team is available to answer any questions about our practices, 
            compliance, or to provide additional documentation for your security review.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="mailto:security@graycommit.com">
              <Button className="group bg-green-500 text-black hover:bg-green-400 transition-all duration-300">
                <span className="relative z-10 flex items-center">
                  Contact Security Team
                  <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
            <Link href="/blog">
              <Button variant="outline" className="border-[#333] text-[#888] hover:text-white hover:border-green-400">
                View Security Updates
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 