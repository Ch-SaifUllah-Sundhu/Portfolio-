"use client"

import { motion } from "framer-motion"
import { useProfile } from "@/components/data/use-portfolio"

export default function HeroDynamic() {
  const { data } = useProfile()
  const name = data?.name || "Your Name"
  const role = data?.role || "Full-Stack Developer"
  const summary = data?.summary || "I build modern, animated, and accessible web apps."
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28 grid gap-6">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-balance text-4xl md:text-6xl font-bold tracking-tight"
        >
          {name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl md:text-2xl text-muted-foreground"
        >
          {role}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="max-w-2xl text-pretty"
        >
          {summary}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.26 }}
          className="flex items-center gap-3"
        >
          <a href="#projects" className="px-4 py-2 rounded-md bg-brand text-brand-foreground">
            View Projects
          </a>
          <a href="/cv" className="px-4 py-2 rounded-md border">
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  )
}
