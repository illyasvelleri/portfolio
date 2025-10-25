"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Code, Megaphone, TrendingUp, Mail, Linkedin, Github, ExternalLink, ChevronDown, Instagram, Twitter, ArrowUpRight } from 'lucide-react';
import Nav from './components/nav';
//
export default function Portfolio() { 
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const contactSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projects = [
    {
      title: "Fest Automation",
      description: "A modern e-commerce platform built with Next.js, styled with Tailwind CSS, and powered by MongoDB for scalable product management.",
      tech: ["Next.js", "Tailwind CSS", "MongoDB"],
      link: "https://noorilnoor.vercel.app/",
      image: "✏️" // pen for Fest Automation
    },
    {
      title: "Gas Mocion Distribution",
      description: "An analytics dashboard for real-time insights, developed using Next.js, Tailwind CSS, and MongoDB for seamless data handling.",
      tech: ["Next.js", "Tailwind CSS", "MongoDB"],
      link: "https://gas-mocion.vercel.app/",
      image: "📈" // chart for analytics dashboard
    },
    {
      title: "Laundry Booking",
      description: "An AI-powered customer engagement and booking system built with Next.js, styled with Tailwind CSS, and MongoDB as the database.",
      tech: ["Next.js", "Tailwind CSS", "MongoDB"],
      link: "https://laundry-web-app-fawn.vercel.app/",
      image: "🧺" // laundry basket for booking app
    },
    {
      title: "Carpenter Creative Web",
      description: "A multi-tenant business management platform using Next.js for front-end, Tailwind CSS for styling, and MongoDB for data storage.",
      tech: ["Next.js", "Tailwind CSS", "MongoDB"],
      link: "https://carpenter-web-beta.vercel.app/",
      image: "🪚" // saw for carpenter/business app
    }
  ];

  const services = [
    { icon: <Code className="w-12 h-12 text-blue-400" />, title: "Full Stack Development", description: "Crafting robust web applications." },
    { icon: <Megaphone className="w-12 h-12 text-green-400" />, title: "Digital Strategy", description: "Data-driven marketing strategies." },
    { icon: <TrendingUp className="w-12 h-12 text-purple-400" />, title: "Growth Solutions", description: "Custom e-commerce and automation." }
  ];

  const skills = [
    { name: "React & Next.js", level: 95 },
    { name: "Node.js & APIs", level: 90 },
    { name: "Digital Marketing", level: 88 },
    { name: "UI/UX Design", level: 85 },
    { name: "Meta Ads", level: 92 },
    { name: "E-commerce", level: 87 }
  ];

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Sending...');
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFormStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus(''), 3000);
    } catch (error) {
      setFormStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden relative font-sans">
      {/* Navigation */}
      <Nav />

      {/* Cursor Follower */}
      <div
        className="hidden md:block fixed w-8 h-8 border-2 border-white/50 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px`, transform: 'translate(-50%, -50%) scale(1)' }}
      />

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 animate-gradient-shift" />
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ left: `${20 + scrollY * 0.05}%`, top: `${10 + scrollY * 0.03}%` }} />
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ right: `${15 + scrollY * 0.04}%`, bottom: `${20 + scrollY * 0.02}%`, animationDelay: '2s' }} />
      </div>

      {/* Social Media Sidebar */}
      <div className="fixed left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-40 flex md:flex-col gap-4 md:gap-6">
        {[
          { icon: <Github className="w-5 h-5" />, link: "https://github.com/illyasvelleri", name: "GitHub" },
          { icon: <Linkedin className="w-5 h-5" />, link: "https://linkedin.com/in/illyasvelleri", name: "LinkedIn" },
          { icon: <Twitter className="w-5 h-5" />, link: "https://twitter.com/illyasvelleri", name: "Twitter" },
          { icon: <Instagram className="w-5 h-5" />, link: "https://instagram.com/illyasvelleri", name: "Instagram" }
        ].map((social, index) => (
          <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className="group relative">
            <div className="hover:scale-125 transition-transform duration-300 text-gray-400 hover:text-blue-400">{social.icon}</div>
            <span className="absolute left-full ml-4 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm bg-black/80 px-2 py-1 rounded hidden md:block">{social.name}</span>
          </a>
        ))}
        <div className="hidden md:block w-px h-24 bg-white/30 mx-auto mt-4" />
      </div>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 md:px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
          <div className="w-full h-full bg-gradient-to-br from-blue-900/30 to-purple-900/30 opacity-50" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8 animate-fade-in-up">
              <p className="text-sm tracking-[0.3em] uppercase text-gray-400">Full Stack Developer & Digital Strategist</p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                ILLYAS<br />
                <span className="bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">VELLERI</span>
              </h1>
              <p className="text-gray-300 text-base md:text-lg max-w-lg">Building bridges between technology and growth from Kerala, India.</p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 group flex items-center gap-2 rounded-lg">
                  Let's Talk <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })} className="px-6 md:px-8 py-3 md:py-4 border-2 border-white/50 hover:bg-white/10 hover:border-white transition-all duration-300 rounded-lg">View Work</button>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center relative">
              <div className="w-80 h-80 md:w-96 md:h-96 border-2 border-blue-500/20 rounded-full animate-spin-slow" />
              <div className="absolute w-64 h-64 md:w-80 md:h-80 border-2 border-purple-500/20 rounded-full animate-spin-reverse" />
              <div className="absolute w-48 h-48 md:w-64 md:h-64 border-2 border-white/30 rounded-full animate-pulse-slow" />
            </div>
          </div>
        </div>
        <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <ChevronDown className="w-8 h-8 text-blue-400" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 md:py-32 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">About <span className="bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Me</span></h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400" />
            </div>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-base md:text-lg">I'm a passionate developer and strategist with a knack for blending technology with business growth.</p>
              <p className="text-base md:text-lg">From crafting scalable web applications to designing data-driven marketing campaigns, my work focuses on delivering measurable impact.</p>
              <p className="text-base md:text-lg">My mission is to create solutions that drive tangible results for businesses, combining technical precision with strategic insight.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-24 md:py-32 px-4 md:px-8 bg-gradient-to-b from-black to-gray-900/95">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center">What I <span className="bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Do</span></h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div key={index} className="group p-6 md:p-8 bg-white/5 border border-white/10 hover:border-blue-400/50 transition-all duration-500 hover:-translate-y-2 rounded-lg backdrop-blur-sm" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">{service.description}</p>
                <div className="mt-6 w-12 h-px bg-blue-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-24 md:py-32 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Projects</span></h2>
            <p className="text-gray-400 text-base md:text-lg">Real-world solutions driving business success</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden bg-white/5 border border-white/10 hover:border-blue-400/50 transition-all duration-500 rounded-lg" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="p-6 md:p-8 space-y-4">
                  <div className="text-5xl md:text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">{project.image}</div>
                  <h3 className="text-xl md:text-2xl font-bold flex items-center gap-2">{project.title}<ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" /></h3>
                  <p className="text-gray-400 text-sm md:text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-400/30 rounded-full">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-24 md:py-32 px-4 md:px-8 bg-gradient-to-b from-gray-900/95 to-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center">Skills & <span className="bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Expertise</span></h2>
          <div className="space-y-6 md:space-y-8">
            {skills.map((skill, index) => (
              <div key={index} className="group" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between mb-2 md:mb-3">
                  <span className="text-base md:text-lg font-semibold tracking-wide">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-1000 ease-out" style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 md:py-32 px-4 md:px-8" ref={contactSectionRef}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold">Let's Create<br /><span className="bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Something Amazing</span></h2>
            <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto">Ready to transform your ideas into reality? Let's collaborate.</p>
          </div>
          <form onSubmit={handleFormSubmit} className="mt-8 md:mt-12 space-y-6 max-w-lg mx-auto">
            <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-400" required />
            <input type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-400" required />
            <textarea placeholder="Your Message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-400 h-32" required />
            <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 rounded-lg flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" /> Send Message
            </button>
            {formStatus && <p className={`text-sm ${formStatus.includes('success') ? 'text-green-400' : 'text-red-400'}`}>{formStatus}</p>}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 md:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm md:text-base">© 2025 Illyas Velleri. Crafted with 💻 in Kerala, India.</p>
            <div className="flex gap-4 md:gap-6">
              {[
                { icon: <Github className="w-5 h-5" />, link: "https://github.com/illyasvelleri" },
                { icon: <Linkedin className="w-5 h-5" />, link: "https://linkedin.com/in/illyasvelleri" },
                { icon: <Twitter className="w-5 h-5" />, link: "https://twitter.com/illyasvelleri" },
                { icon: <Instagram className="w-5 h-5" />, link: "https://instagram.com/illyasvelleri" }
              ].map((social, index) => (
                <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">{social.icon}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}