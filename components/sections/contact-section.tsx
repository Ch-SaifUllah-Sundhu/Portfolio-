"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react"
import { ContactForm } from "./contact/form"

const contactInfo = [
  { icon: Mail,    label: "Email",    value: "chsaifullah17517@gmail.com", href: "mailto:chsaifullah17517@gmail.com", color: "text-violet-400" },
  { icon: Phone,   label: "Phone",   value: "+92 306 9727242",             href: "tel:+923069727242",                 color: "text-cyan-400"   },
  { icon: MapPin,  label: "Location", value: "Gujranwala, Pakistan",        href: null,                                color: "text-emerald-400" },
]

const socials = [
  { href: "https://github.com/Ch-SaifUllah-Sundhu",                icon: Github,    label: "GitHub",    bg: "hover:bg-white/10 hover:text-white"          },
  { href: "https://www.linkedin.com/in/saifullah-sundhu-708363357", icon: Linkedin,  label: "LinkedIn",  bg: "hover:bg-blue-500/10 hover:text-blue-400"    },
  { href: "https://www.instagram.com/saif_sundhu",                 icon: Instagram, label: "Instagram", bg: "hover:bg-pink-500/10 hover:text-pink-400"    },
]

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-6xl px-6 py-24 md:py-32 overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-violet-600/8 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-cyan-500/8 blur-[120px] pointer-events-none" />

      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">Get In Touch</span>
        <h2 className="text-3xl md:text-4xl font-extrabold gradient-text">Let&apos;s Work Together</h2>
        <div className="mt-3 mx-auto w-16 h-1 rounded-full" style={{ background: "linear-gradient(90deg,#7c3aed,#06b6d4)" }} />
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Whether you have a project in mind, an opportunity to discuss, or just want to say hello —
          my inbox is always open.
        </p>
      </motion.div>

      {/* Two-column grid */}
      <div className="grid md:grid-cols-2 gap-8 items-start">

        {/* Left — contact info */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-2xl border border-border bg-card card-glow space-y-8"
        >
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for new opportunities
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">Contact Information</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Feel free to reach out for collaborations, freelance work, or any inquiries.
              I typically respond within 24 hours.
            </p>
          </div>

          {/* Info list */}
          <ul className="space-y-4">
            {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
              <li key={label} className="flex items-center gap-4 group">
                <div className={`w-10 h-10 rounded-xl border border-border bg-muted flex items-center justify-center shrink-0 ${color}`}>
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-foreground">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          {/* Social links */}
          <div>
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-3">Find me on</p>
            <div className="flex gap-3">
              {socials.map(({ href, icon: Icon, label, bg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`p-2.5 rounded-xl border border-border text-muted-foreground transition-all duration-200 ${bg}`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-2xl border border-border bg-card card-glow"
        >
          <h3 className="text-xl font-bold text-foreground mb-6">Send a Message</h3>
          <ContactForm />
        </motion.div>

      </div>
    </section>
  )
}
