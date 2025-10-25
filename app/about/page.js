import React from 'react';
import { Code, TrendingUp, Megaphone, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Nav from '../components/nav';

export const metadata = {
  title: 'About | Illyas Velleri',
  description: 'Learn more about Illyas Velleri, a Full Stack Developer and Digital Strategist from Kerala, India.',
};

export default function AboutPage() {
  const timeline = [
    {
      year: "2020",
      title: "Started Web Development",
      description: "Began learning HTML, CSS, and JavaScript, building small projects and exploring frameworks like React.",
    },
    {
      year: "2021",
      title: "Full Stack Developer",
      description: "Joined a startup to develop scalable e-commerce platforms using Next.js, Node.js, and MongoDB.",
    },
    {
      year: "2022",
      title: "Digital Marketing Specialist",
      description: "Expanded into digital strategy, managing Meta ad campaigns and SEO for clients across industries.",
    },
    {
      year: "2023",
      title: "Freelance Consultant",
      description: "Started freelancing, delivering custom web solutions and growth strategies for global clients.",
    },
    {
      year: "2024",
      title: "Launched Portfolio",
      description: "Built a personal portfolio showcasing full stack projects and digital marketing expertise.",
    },
  ];

  const skills = [
    { name: "React & Next.js", level: 95, icon: <Code className="w-6 h-6 text-blue-400" /> },
    { name: "Node.js & APIs", level: 90, icon: <Code className="w-6 h-6 text-green-400" /> },
    { name: "Digital Marketing", level: 88, icon: <Megaphone className="w-6 h-6 text-purple-400" /> },
    { name: "UI/UX Design", level: 85, icon: <TrendingUp className="w-6 h-6 text-blue-400" /> },
    { name: "Meta Ads", level: 92, icon: <Megaphone className="w-6 h-6 text-green-400" /> },
    { name: "E-commerce", level: 87, icon: <TrendingUp className="w-6 h-6 text-purple-400" /> },
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
            About <span className="bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Me</span>
          </h1>
          <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto">
            I’m Illyas Velleri, a passionate Full Stack Developer and Digital Strategist from Kerala, India, dedicated to building innovative solutions that drive business growth.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 rounded-lg">
            Let’s Collaborate <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Bio Section */}
      <section className="relative py-24 md:py-32 px-4 md:px-8 bg-gradient-to-b from-black to-gray-900/95">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            My <span className="bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Story</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            <div className="space-y-6 text-gray-300 leading-relaxed animate-fade-in-up">
              <p className="text-base md:text-lg">
                I’m a tech enthusiast with a passion for blending code and creativity to solve real-world problems. Based in Kerala, India, I started my journey in web development in 2020, diving deep into modern frameworks like React and Next.js.
              </p>
              <p className="text-base md:text-lg">
                Over the years, I’ve expanded my expertise to include digital marketing, specializing in Meta ad campaigns, SEO, and customer engagement automation. My work focuses on delivering measurable results, whether it’s building a scalable e-commerce platform or optimizing a marketing strategy for maximum ROI.
              </p>
              <p className="text-base md:text-lg">
                My mission is to create seamless, impactful solutions that empower businesses to thrive in the digital age. Let’s build something extraordinary together!
              </p>
            </div>
            <div className="hidden md:flex items-center justify-center relative">
              <div className="w-80 h-80 border-2 border-blue-500/20 rounded-full animate-spin-slow" />
              <div className="absolute w-64 h-64 border-2 border-purple-500/20 rounded-full animate-spin-reverse" />
              <div className="absolute w-48 h-48 border-2 border-white/30 rounded-full animate-pulse-slow" />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-24 md:py-32 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            My <span className="bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Journey</span>
          </h2>
          <div className="relative space-y-8">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-white/10" />
            {timeline.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-6 md:gap-8 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex-1 p-6 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm group hover:border-blue-400/50 transition-all duration-300">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base">{event.description}</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full" />
                <div className="flex-1 text-right md:text-left">
                  <p className="text-lg md:text-xl font-semibold text-blue-400">{event.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-24 md:py-32 px-4 md:px-8 bg-gradient-to-b from-gray-900/95 to-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            My <span className="bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Expertise</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group p-6 bg-white/5 border border-white/10 hover:border-blue-400/50 rounded-lg backdrop-blur-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  {skill.icon}
                  <h3 className="text-lg md:text-xl font-semibold">{skill.name}</h3>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <p className="text-gray-400 text-sm mt-2">{skill.level}% Proficiency</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let’s Build <span className="bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Together</span>
          </h2>
          <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Ready to turn your ideas into reality? Let’s collaborate on innovative solutions that drive growth.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 rounded-lg"
          >
            Get in Touch <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}