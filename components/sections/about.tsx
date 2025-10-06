"use client"

import { motion } from "framer-motion"
import { FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaReact, FaDatabase } from "react-icons/fa"

export function About() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, level: 95, color: "from-orange-500/10 to-orange-500/30" },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, level: 90, color: "from-blue-500/10 to-blue-500/30" },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" />, level: 80, color: "from-yellow-400/10 to-yellow-400/30" },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 85, color: "from-green-500/10 to-green-500/30" },
    { name: "React / Next.js", icon: <FaReact className="text-cyan-400" />, level: 50, color: "from-cyan-400/10 to-cyan-400/30" },
    { name: "MongoDB", icon: <FaDatabase className="text-emerald-500" />, level: 80, color: "from-emerald-500/10 to-emerald-500/30" },
  ]

  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 md:px-6 py-20 md:py-28">
      <motion.h2
        className="text-center text-3xl md:text-4xl font-bold mb-12"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        My Skills
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            className={`p-5 rounded-xl bg-gradient-to-br ${skill.color} border border-border backdrop-blur-sm shadow-md hover:shadow-lg transition`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="text-3xl">{skill.icon}</div>
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </div>

            <div className="w-full bg-border/40 rounded-full h-3 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-accent"
                style={{ width: `${skill.level}%` }}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{skill.level}% proficiency</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default function SkillsSection() {
  return <About />
}
