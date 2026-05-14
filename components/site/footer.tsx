"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import { ArrowUp } from "lucide-react"

const socials = [
  { href: "https://github.com/Ch-SaifUllah-Sundhu",                icon: FaGithub,    label: "GitHub",    hover: "hover:text-white" },
  { href: "https://www.linkedin.com/in/saifullah-sundhu-708363357", icon: FaLinkedin,  label: "LinkedIn",  hover: "hover:text-blue-400" },
  { href: "https://www.instagram.com/saif_sundhu",                 icon: FaInstagram, label: "Instagram", hover: "hover:text-pink-400" },
]

const navLinks = [
  { href: "#hero",       label: "Home" },
  { href: "#about",      label: "About" },
  { href: "#projects",   label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact",    label: "Contact" },
]

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <footer className="relative border-t border-border/40 bg-card/30 backdrop-blur-sm">
      {/* Gradient accent line at top */}
      <div
        className="absolute top-0 left-0 w-full h-[2px]"
        style={{ background: "linear-gradient(90deg, transparent, #7c3aed, #06b6d4, transparent)" }}
      />

      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="#hero" className="flex items-center gap-3 mb-3 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 via-purple-500 to-cyan-400 shadow-md group-hover:scale-110 transition-transform" />
              <span className="font-bold text-lg">
                <span className="text-foreground">Ch.</span>
                <span className="gradient-text">Saifullah</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Passionate Full-Stack Developer building modern, scalable, and real-world web applications.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              {socials.map(({ href, icon: Icon, label, hover }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  aria-label={label}
                  className={`p-2.5 rounded-xl border border-border text-muted-foreground transition-all duration-200 hover:border-primary/40 hover:scale-110 ${hover}`}
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="text-green-400 font-medium">●</span>{" "}
              Open to work &amp; collaborations
            </p>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border/40">
          <motion.p
            className="text-xs text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-foreground">Ch Saifullah Sundhu</span>
            {" "}— All rights reserved.
          </motion.p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-xs font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-muted/50 transition-all duration-200 group"
          >
            Back to top
            <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
