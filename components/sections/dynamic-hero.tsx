"use client"

import { motion } from "framer-motion"
import { useProfile } from "@/components/data/use-portfolio"

export default function DynamicHero() {
  const { profile, isLoading, isError } = useProfile()

  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <p className="text-sm tracking-widest text-muted-foreground uppercase">Portfolio</p>
          <h1 className="mt-3 text-balance text-3xl font-semibold md:text-5xl">
            {isLoading ? "Loading..." : isError ? "Error loading profile" : profile?.name || "Your Name"}
          </h1>
          <p className="mt-2 text-pretty text-lg text-muted-foreground md:text-xl">
            {isLoading ? "Please wait..." : profile?.title || "Full‑Stack Developer"}
          </p>
          <p className="mt-4 text-pretty text-base text-muted-foreground">
            {profile?.tagline || "I build modern, high‑performance web apps with delightful animations."}
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            {(profile?.socials ?? []).map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-md bg-primary px-4 py-2 text-primary-foreground transition hover:opacity-90"
              >
                {s.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -z-10 top-0 h-[320px] opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.2 }}
        style={{
          background: "radial-gradient(600px 200px at 50% 0%, var(--primary)/0.3, transparent 70%)",
        }}
      />
    </section>
  )
}
