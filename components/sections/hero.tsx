"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Download, ArrowRight, Github, Linkedin, Instagram, ChevronDown } from "lucide-react"

const roles = ["Full-Stack Developer", "MERN Stack Engineer", "PHP Developer", "Problem Solver"]

const techBadges = [
  { name: "HTML5", style: "from-orange-500/20 to-orange-600/10 border-orange-500/40 text-orange-400", delay: "animate-float" },
  { name: "CSS3", style: "from-blue-500/20 to-blue-600/10 border-blue-500/40 text-blue-400", delay: "animate-float-delay-1" },
  { name: "JS", style: "from-yellow-400/20 to-yellow-500/10 border-yellow-400/40 text-yellow-300", delay: "animate-float-delay-2" },
  { name: "React", style: "from-cyan-400/20 to-cyan-500/10 border-cyan-400/40 text-cyan-400", delay: "animate-float-delay-3" },
  { name: "Node.js", style: "from-green-500/20 to-green-600/10 border-green-500/40 text-green-400", delay: "animate-float" },
  { name: "MongoDB", style: "from-emerald-500/20 to-emerald-600/10 border-emerald-500/40 text-emerald-400", delay: "animate-float-delay-1" },
  { name: "PHP", style: "from-indigo-400/20 to-indigo-500/10 border-indigo-400/40 text-indigo-300", delay: "animate-float-delay-2" },
  { name: "MySQL", style: "from-sky-400/20 to-sky-500/10 border-sky-400/40 text-sky-300", delay: "animate-float-delay-3" },
]

const socials = [
  { href: "https://github.com/Ch-SaifUllah-Sundhu", icon: Github, label: "GitHub", color: "hover:text-white hover:bg-white/10" },
  { href: "https://www.linkedin.com/in/saifullah-sundhu-708363357", icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-400 hover:bg-blue-400/10" },
  { href: "https://www.instagram.com/saif_sundhu", icon: Instagram, label: "Instagram", color: "hover:text-pink-400 hover:bg-pink-400/10" },
]

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    const speed = isDeleting ? 45 : 95

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, displayText.length + 1))
        if (displayText.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800)
        }
      } else {
        setDisplayText(current.slice(0, displayText.length - 1))
        if (displayText.length === 0) {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, roleIndex])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20"
    >
      {/* Background glow orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[120px] animate-glow" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px] animate-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-purple-500/5 blur-[160px]" />
      </div>

      {/* Dot grid */}
      <div className="absolute inset-0 -z-10 dot-grid text-foreground/5" />

      {/* Content */}
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center py-16">
        {/* Left — text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for freelance work
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text block mt-1">Ch Saifullah</span>
            <span className="gradient-text block">Sundhu</span>
          </motion.h1>

          {/* Typing role */}
          <motion.div
            className="mt-4 flex items-center gap-2 text-xl md:text-2xl font-semibold text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-primary">&lt;</span>
            <span className="text-foreground min-h-[1.5em]">{displayText}</span>
            <span className="w-[2px] h-6 bg-primary animate-typing-cursor rounded-full" />
            <span className="text-primary">/&gt;</span>
          </motion.div>

          <motion.p
            className="mt-5 text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            A passionate developer crafting modern, responsive, and interactive
            web applications. Skilled in{" "}
            <span className="text-violet-400 font-medium">MERN Stack</span>,{" "}
            <span className="text-cyan-400 font-medium">PHP & MySQL</span>, and
            building real-world systems from scratch.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-8 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="/cv/Ch%20Saifullah%20Sundhu.pdf"
              download="Ch Saifullah Sundhu.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105 transition-all duration-300"
              style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
            >
              <Download size={16} />
              Download CV
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-300 group"
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            className="mt-6 flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {socials.map(({ href, icon: Icon, label, color }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                aria-label={label}
                className={`p-2.5 rounded-lg border border-border text-muted-foreground transition-all duration-200 ${color}`}
              >
                <Icon size={18} />
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Right — photo + floating badges */}
        <motion.div
          className="relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Rotating ring */}
          <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-dashed border-violet-500/30 animate-spin-slow" />

          {/* Photo */}
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full p-[3px] shadow-2xl shadow-violet-500/30"
            style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7, #06b6d4)" }}
          >
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-background">
              <Image
                src="/Gemini_Generated_Image_r09mlrr09mlrr09m.png"
                alt="Ch Saifullah Sundhu"
                width={256}
                height={256}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>

          {/* Glow behind photo */}
          <div className="absolute w-56 h-56 sm:w-64 sm:h-64 rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-violet-600 to-cyan-400 -z-10" />

          {/* Floating tech badges */}
          {techBadges.map((badge, i) => {
            const positions = [
              "top-0 left-2",         // HTML
              "top-4 right-0",        // CSS
              "bottom-4 right-0",     // JS
              "bottom-0 right-12",    // React
              "bottom-0 left-12",     // Node
              "bottom-4 left-0",      // MongoDB
              "top-4 left-0",         // PHP
              "top-16 -left-8",       // MySQL
            ]
            return (
              <div
                key={badge.name}
                className={`absolute ${positions[i]} ${badge.delay} px-3 py-1.5 rounded-full border text-xs font-semibold backdrop-blur-sm bg-gradient-to-r ${badge.style}`}
              >
                {badge.name}
              </div>
            )
          })}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </motion.div>
    </section>
  )
}
