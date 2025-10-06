"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/70 border-b border-border/50 shadow-sm">
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 shadow-md" />
          <span className="text-lg font-bold tracking-tight text-foreground">
            Ch Saifullah
          </span>
        </motion.div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {[
            { href: "#about", label: "About" },
            { href: "#projects", label: "Projects" },
            { href: "#skills", label: "Skills" },
            { href: "#contact", label: "Contact" },
          ].map((item) => (
            <motion.li
              key={item.href}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={item.href}
                className="relative text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 transition-all duration-300 hover:w-full rounded-full"></span>
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Call-to-Action Button */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button
            asChild
            size="sm"
            variant="default"
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-300"
          >
            <Link href="#contact">Hire Me</Link>
          </Button>
        </motion.div>
      </nav>
    </header>
  )
}
