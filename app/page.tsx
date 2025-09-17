"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  Code,
  Shield,
  Zap,
  Cloud,
  Database,
  Cpu,
  Globe,
  Lock,
  ArrowRight,
  Menu,
  X,
  Terminal,
  Play,
} from "lucide-react";

const ElectricityGrid = () => {
  return (
    <div className="enhanced-electricity-grid">
      <div className="absolute inset-0 grid-overlay" />

      {/* Multi-directional energy beams */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`beam-multi-${i}`}
          className={`energy-beam-multi energy-beam-${
            ["blue", "cyan", "purple", "green", "orange"][i % 5]
          }`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${4 + Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Zigzag energy patterns */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`beam-zigzag-${i}`}
          className={`energy-beam-zigzag energy-beam-${
            ["blue", "cyan", "purple", "green"][i % 4]
          }`}
          style={{
            top: `${10 + i * 12}%`,
            animationDelay: `${i * 0.8}s`,
          }}
        />
      ))}

      {/* Original electricity lines with enhanced effects */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`horizontal-${i}`}
          className="electricity-line"
          style={{
            top: `${10 + i * 12}%`,
            height: "3px",
            animationDelay: `${i * 0.3}s`,
            boxShadow: `0 0 10px #3b82f6, 0 0 20px #3b82f6`,
          }}
        />
      ))}

      {/* Enhanced vertical lines */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`vertical-${i}`}
          className="electricity-line-vertical"
          style={{
            left: `${15 + i * 15}%`,
            width: "3px",
            height: "100%",
            animationDelay: `${i * 0.5}s`,
            boxShadow: `0 0 10px #22d3ee, 0 0 20px #22d3ee`,
          }}
        />
      ))}

      {/* Enhanced diagonal lines */}
      {[...Array(4)].map((_, i) => (
        <div
          key={`diagonal-${i}`}
          className="electricity-line-diagonal"
          style={{
            left: `${20 + i * 20}%`,
            top: "0%",
            width: "3px",
            height: "141%",
            transform: "rotate(45deg)",
            transformOrigin: "top left",
            animationDelay: `${i * 0.7}s`,
            boxShadow: `0 0 10px #8b5cf6, 0 0 20px #8b5cf6`,
          }}
        />
      ))}
    </div>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 futuristic-navbar">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="cube-3d">
              <div className="cube-face front"></div>
              <div className="cube-face back"></div>
              <div className="cube-face right"></div>
              <div className="cube-face left"></div>
              <div className="cube-face top"></div>
              <div className="cube-face bottom"></div>
            </div>
            <div className="text-2xl font-bold glow-text">TechFlow</div>
          </div>

          {/* Desktop Navigation with enhanced hover effects */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="nav-item text-muted-foreground hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#what-we-do"
              className="nav-item text-muted-foreground hover:text-primary transition-colors"
            >
              What We Do
            </a>
            <a
              href="#about"
              className="nav-item text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="nav-item text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
            <Button
              variant="outline"
              size="sm"
              className="nav-item bg-transparent"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <a
                href="#services"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Services
              </a>
              <a
                href="#what-we-do"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                What We Do
              </a>
              <a
                href="#about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
              <Button
                variant="outline"
                size="sm"
                className="w-fit bg-transparent"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="/placeholder.mp4?height=1080&width=1920&query=futuristic digital grid with flowing electricity and data streams"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 video-overlay" />

        {/* Additional video overlay for header area */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/80 to-transparent" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8 slide-in-left">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight glow-text text-balance">
                Future-Ready
                <span className="block text-primary">IT Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                Transform your business with cutting-edge technology solutions
                that drive innovation and accelerate growth in the digital age.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 glow-text"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Explore Services
              </Button>
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge
                variant="secondary"
                className="bg-success text-success-foreground border-success/30 data-flow"
              >
                <Zap className="w-3 h-3 mr-1" />
                24/7 Support
              </Badge>
              <Badge
                variant="secondary"
                className="bg-info text-info-foreground border-info/30 data-flow"
              >
                <Shield className="w-3 h-3 mr-1" />
                Enterprise Security
              </Badge>
              <Badge
                variant="secondary"
                className="bg-primary text-primary-foreground border-primary/30 data-flow"
              >
                <Cloud className="w-3 h-3 mr-1" />
                Cloud Native
              </Badge>
            </div>

            {/* Client Trust Logos */}
            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-4">
                Trusted by industry leaders
              </p>
              <div className="flex items-center gap-8 opacity-60">
                <div className="text-lg font-semibold">TechCorp</div>
                <div className="text-lg font-semibold">InnovateLab</div>
                <div className="text-lg font-semibold">DataFlow</div>
                <div className="text-lg font-semibold">CloudSync</div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="slide-in-right">
            <Card className="glassmorphic p-6 float-animation">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
                  <span className="text-sm text-muted-foreground">
                    Live Terminal
                  </span>
                </div>
                <ScrollArea className="h-80 w-full">
                  <div className="font-mono text-sm space-y-2">
                    <div className="text-success">$ initializing_system...</div>
                    <div className="text-primary">
                      ✓ Cloud infrastructure deployed
                    </div>
                    <div className="text-info">
                      ✓ Security protocols activated
                    </div>
                    <div className="text-warning">✓ AI models loaded</div>
                    <div className="text-success">
                      ✓ Database connections established
                    </div>
                    <div className="text-primary">
                      ✓ API endpoints configured
                    </div>
                    <div className="text-muted-foreground">
                      → System ready for deployment
                    </div>
                    <div className="text-success animate-pulse">
                      $ awaiting_commands...
                    </div>
                  </div>
                </ScrollArea>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhatWeDoSection = () => {
  const [currentPhase, setCurrentPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhase((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getTerminalText = () => {
    const phases = [
      {
        command: "deploy legacy system",
        words: ["deploy", "legacy", "system"],
      },
      { command: "deploy", words: ["deploy"] },
      { command: "deploy modern", words: ["deploy", "modern"] },
      {
        command: "deploy modern infrastructure",
        words: ["deploy", "modern", "infrastructure"],
      },
    ];
    return phases[currentPhase];
  };

  return (
    <section id="what-we-do" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 glow-text">
              What We Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Execute powerful commands to transform your business
              infrastructure
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Enhanced Terminal Window with word-by-word deletion */}
            <Card className="terminal-window fade-in-up">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="text-sm text-muted-foreground ml-4">
                  TechFlow Terminal v2.1.0
                </span>
              </div>
              <div className="terminal-content">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-blue-400">user@techflow:~$</span>
                    <span className="ml-2">
                      {getTerminalText().words.map((word, index) => (
                        <span
                          key={`${currentPhase}-${index}`}
                          className={`mr-1 ${
                            currentPhase === 1 && index > 0
                              ? "word-delete"
                              : currentPhase > 1
                              ? "word-rewrite"
                              : ""
                          }`}
                          style={{ animationDelay: `${index * 0.2}s` }}
                        >
                          {word}
                        </span>
                      ))}
                    </span>
                    <span className="terminal-cursor">|</span>
                  </div>
                  <div className="text-green-400">
                    ✓ Deploying cloud infrastructure...
                  </div>

                  <div className="flex items-center mt-4">
                    <span className="text-blue-400">user@techflow:~$</span>
                    <span className="ml-2">secure --enterprise-grade</span>
                  </div>
                  <div className="text-green-400">
                    ✓ Implementing zero-trust architecture
                  </div>
                  <div className="text-cyan-400">
                    ✓ Enabling multi-factor authentication
                  </div>

                  <div className="flex items-center mt-4">
                    <span className="text-blue-400">user@techflow:~$</span>
                    <span className="ml-2">analyze --big-data</span>
                  </div>
                  <div className="text-green-400">
                    ✓ Processing real-time analytics
                  </div>
                  <div className="text-purple-400">✓ Training ML models</div>

                  <div className="flex items-center mt-4">
                    <span className="text-blue-400">user@techflow:~$</span>
                    <span className="ml-2 text-green-400">
                      system_status --enhanced
                    </span>
                  </div>
                  <div className="text-green-400">
                    All systems operational ✓
                  </div>
                  <div className="text-cyan-400">
                    Performance increased by 300% ✓
                  </div>
                  <div className="text-purple-400">
                    Security threats eliminated ✓
                  </div>
                </div>
              </div>
            </Card>

            {/* Command Descriptions */}
            <div className="space-y-6 fade-in-up">
              <div className="glassmorphic p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Cloud className="h-6 w-6 text-blue-400" />
                  <code className="text-blue-400 font-mono">
                    deploy --cloud-infrastructure
                  </code>
                </div>
                <p className="text-muted-foreground">
                  Seamlessly migrate and deploy your applications to scalable
                  cloud platforms with automated DevOps pipelines.
                </p>
              </div>

              <div className="glassmorphic p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="h-6 w-6 text-green-400" />
                  <code className="text-green-400 font-mono">
                    secure --enterprise-grade
                  </code>
                </div>
                <p className="text-muted-foreground">
                  Implement comprehensive cybersecurity measures with advanced
                  threat detection and compliance frameworks.
                </p>
              </div>

              <div className="glassmorphic p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Database className="h-6 w-6 text-purple-400" />
                  <code className="text-purple-400 font-mono">
                    analyze --big-data
                  </code>
                </div>
                <p className="text-muted-foreground">
                  Transform raw data into actionable insights using machine
                  learning and advanced analytics platforms.
                </p>
              </div>

              <div className="glassmorphic p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Terminal className="h-6 w-6 text-cyan-400" />
                  <code className="text-cyan-400 font-mono">
                    automate --workflows
                  </code>
                </div>
                <p className="text-muted-foreground">
                  Streamline business processes with intelligent automation and
                  AI-powered workflow optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Solutions",
      description: "Scalable infrastructure",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Cybersecurity",
      description: "Advanced protection",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Analytics",
      description: "Business insights",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Development",
      description: "Custom solutions",
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "AI & Automation",
      description: "Intelligent systems",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Digital Transform",
      description: "End-to-end consulting",
    },
  ];

  return (
    <section id="services" className="py-40 mt-16 relative">
      <div className="container mx-auto px-6">
        {/* Desktop Rotating Services */}
        <div className=" services-container mx-auto mb-16">
          <h2 className="absolute text-5xl font-bold glow-text  left-50 top-30 text-center z-10">
            <span className="text-white">Our </span>
            <span className="text-primary">Services</span>
          </h2>

          {/* Orbiting Services */}
          <div className="service-orbit">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-item"
                style={{
                  transform: `rotate(${
                    index * 60
                  }deg) translateX(300px) rotate(-${index * 60}deg)`,
                  animationDelay: `${index * -3.33}s`,
                }}
              >
                <Card className="glassmorphic p-4 w-40 moving-shadow-hover">
                  <div className="space-y-2 text-center">
                    <div className="text-primary mx-auto">{service.icon}</div>
                    <h3 className="text-sm font-semibold">{service.title}</h3>
                    <p className="text-xs text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-16 fade-in-up">
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Comprehensive IT solutions designed to accelerate your digital
            transformation journey
          </p>
        </div>

        {/* Mobile Grid Layout */}
        <div className="md:hidden grid grid-cols-1 gap-6">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold glow-text">
              <span className="text-white">Our </span>
              <span className="text-primary">Services</span>
            </h2>
          </div>
          {services.map((service, index) => (
            <Card
              key={index}
              className="glassmorphic p-6 hover:scale-105 transition-transform duration-300 fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="text-primary">{service.icon}</div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section Component
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, InnovateTech",
      avatar: "/professional-woman-glasses.png",
      content:
        "TechFlow transformed our entire infrastructure. Their cloud migration was seamless and our performance improved by 300%. The team's expertise is unmatched.",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "CEO, DataDrive Solutions",
      avatar: "/professional-man-suit.png",
      content:
        "The cybersecurity implementation saved us from multiple threats. Their 24/7 monitoring and rapid response team gives us complete peace of mind.",
      rating: 5,
    },
    {
      name: "Emily Watson",
      role: "VP Engineering, CloudScale",
      avatar: "/professional-woman-short-hair.png",
      content:
        "Outstanding AI automation solutions. They reduced our manual processes by 80% and increased our operational efficiency dramatically.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 glow-text">
            Client Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Hear from industry leaders who've transformed their businesses with
            our solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="glassmorphic p-6 testimonial-card rainbow-shadow-hover"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-yellow-400">
                      ⭐
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full team-avatar"
                  />
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Customers Section Component
const CustomersSection = () => {
  const customers = [
    {
      name: "TechCorp",
      logo: "/abstract-tech-logo.png",
      industry: "Technology",
    },
    { name: "InnovateLab", logo: "/innovation-lab-logo.png", industry: "R&D" },
    {
      name: "DataFlow",
      logo: "/data-analytics-logo.jpg",
      industry: "Analytics",
    },
    {
      name: "CloudSync",
      logo: "/cloud-services-logo.jpg",
      industry: "Cloud Services",
    },
    {
      name: "SecureNet",
      logo: "/cybersecurity-logo.png",
      industry: "Security",
    },
    {
      name: "AIVision",
      logo: "/ai-company-logo.png",
      industry: "Artificial Intelligence",
    },
    {
      name: "QuantumTech",
      logo: "/quantum-computing-logo.jpg",
      industry: "Quantum Computing",
    },
    {
      name: "BlockChain Pro",
      logo: "/blockchain-logo.png",
      industry: "Blockchain",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 glow-text">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Join hundreds of companies that trust us with their digital
            transformation
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {customers.map((customer, index) => (
            <Card
              key={index}
              className="glassmorphic p-6 moving-shadow-hover fade-in-up flex flex-col items-center justify-center text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={customer.logo || "/placeholder.svg"}
                alt={customer.name}
                className="h-12 w-auto mb-3 opacity-70 hover:opacity-100 transition-opacity"
              />
              <h3 className="font-semibold text-foreground">{customer.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">
                {customer.industry}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="glassmorphic p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary glow-text mb-2">
                  500+
                </div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary glow-text mb-2">
                  99.9%
                </div>
                <div className="text-muted-foreground">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent glow-text mb-2">
                  24/7
                </div>
                <div className="text-muted-foreground">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success glow-text mb-2">
                  10+
                </div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Alex Thompson",
      role: "Chief Technology Officer",
      avatar: "/professional-man-with-beard-in-tech-setting.jpg",
      bio: "15+ years in cloud architecture and AI systems",
      skills: ["Cloud Architecture", "AI/ML", "DevOps"],
      status: "Leading Innovation",
    },
    {
      name: "Maria Garcia",
      role: "Head of Cybersecurity",
      avatar: "/cybersecurity-expert-woman.png",
      bio: "Former NSA analyst, cybersecurity specialist",
      skills: ["Penetration Testing", "Zero Trust", "Compliance"],
      status: "Securing Systems",
    },
    {
      name: "David Kim",
      role: "Lead Data Scientist",
      avatar: "/professional-asian-man-data-scientist.jpg",
      bio: "PhD in Machine Learning, 10+ years in big data",
      skills: ["Machine Learning", "Big Data", "Analytics"],
      status: "Analyzing Patterns",
    },
    {
      name: "Sarah Johnson",
      role: "Senior Full-Stack Developer",
      avatar: "/professional-woman-software-developer.jpg",
      bio: "Full-stack expert with modern web technologies",
      skills: ["React", "Node.js", "Microservices"],
      status: "Building Solutions",
    },
    {
      name: "Michael Chen",
      role: "DevOps Engineer",
      avatar: "/professional-devops-engineer.png",
      bio: "Kubernetes certified, automation specialist",
      skills: ["Kubernetes", "Docker", "CI/CD"],
      status: "Automating Workflows",
    },
    {
      name: "Lisa Rodriguez",
      role: "UI/UX Designer",
      avatar: "/professional-woman-ui-ux-designer.jpg",
      bio: "Award-winning designer with 8+ years experience",
      skills: ["UI Design", "UX Research", "Prototyping"],
      status: "Crafting Experiences",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 glow-text">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Passionate technologists dedicated to delivering exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="glassmorphic p-6 team-card fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="text-center space-y-4">
                <div className="relative inline-block">
                  <img
                    src={member.avatar || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto border-2 border-primary/30 relative z-10"
                  />
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-success rounded-full border-2 border-background flex items-center justify-center z-20">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {member.bio}
                  </p>
                  <p className="text-xs text-accent font-medium mt-1">
                    {member.status}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 justify-center relative z-10">
                  {member.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className="text-xs border-primary/30 text-primary"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="pt-4 border-t border-border relative z-10">
                  <div className="flex justify-center gap-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-primary"
                    >
                      <Globe className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-primary"
                    >
                      <Code className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-primary"
                    >
                      <Database className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  const [openItem, setOpenItem] = useState("");

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold glow-text">
              Innovation Meets
              <span className="block text-secondary">Excellence</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over a decade of experience in cutting-edge technology
              solutions, we've helped hundreds of businesses transform their
              operations and achieve unprecedented growth.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary glow-text">
                  500+
                </div>
                <div className="text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary glow-text">
                  99.9%
                </div>
                <div className="text-muted-foreground">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent glow-text">
                  24/7
                </div>
                <div className="text-muted-foreground">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success glow-text">
                  150+
                </div>
                <div className="text-muted-foreground">Expert Engineers</div>
              </div>
            </div>
          </div>

          <div className="fade-in-up">
            <Card className="glassmorphic p-8">
              <h3 className="text-2xl font-semibold mb-6">
                Why Choose TechFlow?
              </h3>
              <Accordion
                type="single"
                collapsible
                className="space-y-4"
                value={openItem}
                onValueChange={setOpenItem}
              >
                <AccordionItem
                  value="expertise"
                  className={openItem === "expertise" ? "faq-item-open" : ""}
                >
                  <AccordionTrigger className="text-left">
                    Deep Technical Expertise
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Our team consists of certified professionals with extensive
                    experience in the latest technologies and industry best
                    practices.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="innovation"
                  className={openItem === "innovation" ? "faq-item-open" : ""}
                >
                  <AccordionTrigger className="text-left">
                    Innovation-First Approach
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We stay ahead of technology trends to deliver solutions that
                    give you a competitive advantage in your market.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="support"
                  className={openItem === "support" ? "faq-item-open" : ""}
                >
                  <AccordionTrigger className="text-left">
                    Comprehensive Support
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    From initial consultation to ongoing maintenance, we provide
                    end-to-end support for all your IT needs.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 glow-text">
            Get Started Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Ready to transform your business? Let's discuss how we can help you
            achieve your technology goals.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glassmorphic p-8 fade-in-up">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Let's Connect</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Visit Our Office</div>
                      <div className="text-muted-foreground">
                        123 Tech Street, Innovation District
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Zap className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <div className="font-medium">Quick Response</div>
                      <div className="text-muted-foreground">
                        We respond within 2 hours
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <Lock className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-medium">Secure Communication</div>
                      <div className="text-muted-foreground">
                        End-to-end encrypted
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <textarea
                    placeholder="Tell us about your project"
                    rows={4}
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 glow-text"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border futuristic-footer">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="cube-3d scale-75">
                <div className="cube-face front"></div>
                <div className="cube-face back"></div>
                <div className="cube-face right"></div>
                <div className="cube-face left"></div>
                <div className="cube-face top"></div>
                <div className="cube-face bottom"></div>
              </div>
              <div className="text-2xl font-bold glow-text">TechFlow</div>
            </div>
            <p className="text-muted-foreground">
              Empowering businesses with cutting-edge technology solutions.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <div  className="space-y-2 text-muted-foreground w-fit">
              <div className="footer-link">Cloud Solutions</div>
              <div className="footer-link">Cybersecurity</div>
              <div className="footer-link">Data Analytics</div>
              <div className="footer-link">Custom Development</div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <div className="space-y-2 text-muted-foreground">
              <div className="footer-link">About Us</div>
              <div className="footer-link">Careers</div>
              <div className="footer-link">Blog</div>
              <div className="footer-link">Contact</div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="space-y-2 text-muted-foreground">
              <div className="footer-link">LinkedIn</div>
              <div className="footer-link">Twitter</div>
              <div className="footer-link">GitHub</div>
              <div className="footer-link">Newsletter</div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground">
            © 2024 TechFlow Solutions. All rights reserved.
          </div>
          <div className="flex gap-6 text-muted-foreground">
            <a href="#" className="footer-link">
              Privacy Policy
            </a>
            <a href="#" className="footer-link">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main Page Component
export default function ITWebsite() {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background text-foreground">
        <ElectricityGrid />
        <Navigation />
        <HeroSection />
        <WhatWeDoSection />
        <ServicesSection />
        <TestimonialsSection />
        <CustomersSection />
        <TeamSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    </TooltipProvider>
  );
}
