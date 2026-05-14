"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const stats = [
  { value: 6,    suffix: "",  label: "Projects Completed",     icon: "🚀" },
  { value: 10,   suffix: "+", label: "Technologies Mastered",  icon: "⚡" },
  { value: 2,    suffix: "+", label: "Years of Learning",      icon: "📚" },
  { value: 100,  suffix: "%", label: "Passion & Dedication",   icon: "🔥" },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref      = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.3 }}
    >
      <motion.span
        initial={{ innerText: 0 } as never}
        animate={isInView ? { innerText: target } as never : {}}
        transition={{ duration: 1.8, ease: "easeOut" }}
        onUpdate={(latest: Record<string, number>) => {
          if (ref.current) {
            ref.current.textContent = `${Math.round(latest.innerText ?? 0)}${suffix}`
          }
        }}
      >
        {0}{suffix}
      </motion.span>
    </motion.span>
  )
}

export function StatsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10"
        style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.06) 0%, rgba(6,182,212,0.04) 100%)" }}
      />
      <div className="absolute inset-0 -z-10 dot-grid text-primary/5" />

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">By The Numbers</span>
          <h2 className="text-3xl md:text-4xl font-extrabold gradient-text">My Progress</h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full" style={{ background: "linear-gradient(90deg,#7c3aed,#06b6d4)" }} />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-6 rounded-2xl border border-border bg-card text-center card-glow group overflow-hidden"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: "linear-gradient(135deg,rgba(124,58,237,0.06),rgba(6,182,212,0.04))" }}
              />
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-4xl font-extrabold gradient-text">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
