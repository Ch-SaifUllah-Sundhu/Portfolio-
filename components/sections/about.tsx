"use client"

import { motion } from "framer-motion"
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaReact, FaDatabase,
  FaPhp, FaGitAlt, FaGithub, FaNpm,
} from "react-icons/fa"
import { SiMongodb, SiMysql, SiExpress, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si"

const categories = [
  {
    title: "Frontend",
    color: "from-blue-500/10 to-cyan-500/10 border-blue-500/20",
    dot: "bg-blue-400",
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-foreground" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
  },
  {
    title: "Backend",
    color: "from-green-500/10 to-emerald-500/10 border-green-500/20",
    dot: "bg-green-400",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-foreground" /> },
      { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
    ],
  },
  {
    title: "Database",
    color: "from-emerald-500/10 to-teal-500/10 border-emerald-500/20",
    dot: "bg-emerald-400",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-emerald-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-sky-400" /> },
    ],
  },
  {
    title: "Tools",
    color: "from-violet-500/10 to-purple-500/10 border-violet-500/20",
    dot: "bg-violet-400",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-foreground" /> },
      { name: "npm", icon: <FaNpm className="text-red-500" /> },
    ],
  },
]

const stats = [
  { value: "2+", label: "Years Learning" },
  { value: "6", label: "Projects Built" },
  { value: "10+", label: "Technologies" },
  { value: "100%", label: "Passion" },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
      {/* Section header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">About Me</span>
        <h2 className="text-3xl md:text-4xl font-extrabold gradient-text">Skills & Expertise</h2>
        <div className="mt-3 mx-auto w-16 h-1 rounded-full" style={{ background: "linear-gradient(90deg,#7c3aed,#06b6d4)" }} />
      </motion.div>

      {/* Bio + stats */}
      <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold mb-4 text-foreground">Who I Am</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I&apos;m <strong className="text-foreground">Ch Saifullah Sundhu</strong>, a passionate Full-Stack
            Developer from <strong className="text-violet-400">Gujranwala, Pakistan</strong>, currently pursuing
            a BS in Computer Science at the <strong className="text-violet-400">Gift University, Gujranwala</strong>.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I love turning ideas into real, functional applications — from PHP-based retail systems to
            full MERN stack web apps. I believe in writing clean, efficient code and continuously levelling
            up my skills through real-world projects.
          </p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          className="grid grid-cols-2 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={itemVariants}
              className="p-5 rounded-2xl border border-border bg-card card-glow text-center"
            >
              <div className="text-3xl font-extrabold gradient-text">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1 font-medium">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Tech stack categories */}
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {categories.map((cat) => (
          <motion.div
            key={cat.title}
            variants={itemVariants}
            className={`p-5 rounded-2xl border bg-gradient-to-br ${cat.color} card-glow transition-all duration-300`}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className={`w-2.5 h-2.5 rounded-full ${cat.dot}`} />
              <h4 className="font-semibold text-sm tracking-wide uppercase text-muted-foreground">{cat.title}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-background/60 border border-border/50 text-xs font-medium text-foreground backdrop-blur-sm hover:border-primary/40 transition-colors"
                >
                  <span className="text-base">{skill.icon}</span>
                  {skill.name}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default function SkillsSection() {
  return <About />
}
