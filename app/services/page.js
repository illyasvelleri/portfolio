import React from 'react';
import { Code, Megaphone, TrendingUp, Mail, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Nav from '../components/nav';

export default function ServicesPage() {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-blue-400" />,
      title: "Full Stack Development",
      shortDescription: "Crafting robust, scalable web applications using modern frameworks.",
      details: [
        "Develop end-to-end web applications with React, Next.js, and Node.js.",
        "Integrate secure APIs, databases (MongoDB, PostgreSQL), and cloud services (AWS, Vercel).",
        "Optimize for performance, scalability, and SEO with server-side rendering and static generation."
      ],
      cta: { text: "Start Your Project", link: "/contact" }
    },
    {
      icon: <Megaphone className="w-12 h-12 text-green-400" />,
      title: "Digital Strategy",
      shortDescription: "Data-driven marketing strategies and Meta ad campaigns for growth.",
      details: [
        "Design targeted Meta ad campaigns with A/B testing and analytics.",
        "Develop SEO and content strategies to boost online visibility.",
        "Leverage data insights to maximize ROI and audience engagement."
      ],
      cta: { text: "Plan Your Strategy", link: "/contact" }
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-purple-400" />,
      title: "Growth Solutions",
      shortDescription: "Custom e-commerce platforms and automation for customer engagement.",
      details: [
        "Build tailored e-commerce solutions with Stripe and Shopify integrations.",
        "Automate customer interactions via WhatsApp and email workflows.",
        "Implement analytics dashboards for real-time business insights."
      ],
      cta: { text: "Grow Your Business", link: "/contact" }
    }
  ];

  const testimonials = [
    {
      quote: "Illyas transformed our online presence with a scalable e-commerce platform that doubled our sales.",
      author: "Jane Doe, CEO of ShopEasy",
      image: "/testimonials/jane.jpg" // Replace with actual image path
    },
    {
      quote: "The digital strategy crafted by Illyas boosted our ad performance by 150% in just two months.",
      author: "John Smith, Marketing Director",
      image: "/testimonials/john.jpg" // Replace with actual image path
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden relative font-sans">
      {/* Navigation */}
      <Nav />

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 animate-gradient-shift" />
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ left: "20%", top: "10%" }} />
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ right: "15%", bottom: "20%", animationDelay: "2s" }} />
      </div>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 px-4 md:px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
          <div className="w-full h-full bg-gradient-to-br from-blue-900/30 to-purple-900/30 opacity-50" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            My <span className="bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
          </h1>
          <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto">
            From cutting-edge web development to strategic digital marketing, I offer tailored solutions to drive your business forward.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 rounded-lg">
            Get Started <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-24 md:py-32 px-4 md:px-8 bg-gradient-to-b from-black to-gray-900/95">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center">
            What I <span className="bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Offer</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 md:p-8 bg-white/5 border border-white/10 hover:border-blue-400/50 transition-all duration-500 hover:-translate-y-2 rounded-lg backdrop-blur-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">{service.shortDescription}</p>
                <ul className="text-gray-300 text-sm md:text-base list-disc list-inside mb-6">
                  {service.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
                <Link
                  href={service.cta.link}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-400/50 text-blue-400 hover:bg-blue-500/30 hover:border-blue-400 transition-all duration-300 rounded-lg"
                >
                  {service.cta.text} <ArrowUpRight className="w-4 h-4" />
                </Link>
                <div className="mt-6 w-12 h-px bg-blue-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-24 md:py-32 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center">
            Client <span className="bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Feedback</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  {/* Placeholder for testimonial image */}
                  <div className="w-12 h-12 rounded-full bg-gray-700" /> {/* Replace with <Image> if available */}
                  <div>
                    <p className="text-white font-semibold">{testimonial.author}</p>
                    <p className="text-gray-400 text-sm">Client</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="relative py-24 md:py-32 px-4 md:px-8 bg-gradient-to-b from-gray-900/95 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to <span className="bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Grow?</span>
          </h2>
          <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Let’s collaborate to build innovative solutions that drive your business forward. Contact me today!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 rounded-lg"
          >
            Get in Touch <Mail className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}