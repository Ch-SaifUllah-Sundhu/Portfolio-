"use client"

import { motion } from "framer-motion"
import { GraduationCap, Code2, Briefcase } from "lucide-react"

const timeline = [
  {
    icon: GraduationCap,
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/10 border-violet-500/30",
    period: "2023 – Present",
    title: "BS Computer Science",
    organization: "Gift University",
    location: "Gujranwala, Pakistan",
    description:
      "Pursuing a Bachelor's degree in Computer Science, building a strong foundation in data structures, algorithms, databases, software engineering, and OOP principles.",
    tags: ["Computer Science", "Algorithms", "OOP", "Databases"],
  },
  {
    icon: Code2,
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10 border-cyan-500/30",
    period: "2024",
    title: "Full-Stack MERN Development",
    organization: "Self-Directed Learning",
    location: "Online",
    description:
      "Completed an intensive self-directed learning program covering the full MERN stack — MongoDB, Express.js, React, and Node.js — building real-world projects including a REST API and a portfolio platform.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Next.js"],
  },
  {
    icon: Briefcase,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10 border-emerald-500/30",
    period: "2025 – Present",
    title: "Freelance Web Developer",
    organization: "Independent",
    location: "Remote",
    description:
      "Delivering custom web solutions for clients including full-stack applications, POS systems, and management dashboards. Focused on clean code, timely delivery, and client satisfaction.",
    tags: ["PHP", "MySQL", "Node.js", "Full-Stack", "Freelance"],
  },
]

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">My Journey</span>
        <h2 className="text-3xl md:text-4xl font-extrabold gradient-text">Experience & Education</h2>
        <div className="mt-3 mx-auto w-16 h-1 rounded-full" style={{ background: "linear-gradient(90deg,#7c3aed,#06b6d4)" }} />
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
          style={{ background: "linear-gradient(to bottom, transparent, #7c3aed88, #06b6d488, transparent)" }}
        />

        <div className="space-y-12">
          {timeline.map((item, i) => {
            const Icon = item.icon
            const isEven = i % 2 === 0
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex items-start gap-8 ${isEven ? "md:flex-row" : "md:flex-row-reverse"} flex-row pl-14 md:pl-0`}
              >
                {/* Dot on timeline */}
                <div className={`absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-2 flex items-center justify-center z-10 ${item.iconBg}`}>
                  <Icon size={18} className={item.iconColor} />
                </div>

                {/* Card */}
                <div className={`md:w-5/12 ${isEven ? "md:ml-auto md:mr-8" : "md:mr-auto md:ml-8"} w-full`}>
                  <div className="p-5 rounded-2xl border border-border bg-card card-glow transition-all duration-300">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="font-bold text-foreground">{item.title}</h3>
                        <p className="text-sm text-primary font-medium">{item.organization}</p>
                        <p className="text-xs text-muted-foreground">{item.location}</p>
                      </div>
                      <span className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full border border-border bg-muted text-muted-foreground">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded-md bg-muted border border-border text-xs text-muted-foreground font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
