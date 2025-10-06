"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-gradient-to-b from-background to-muted/30">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Left Section */}
        <motion.p
          className="text-sm text-muted-foreground"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          © {new Date().getFullYear()} <span className="font-semibold text-foreground">Ch Saifullah Sundhu</span> — All
          Rights Reserved.
        </motion.p>

        {/* Right Section (Social Links) */}
        <motion.div
          className="flex items-center gap-6 text-muted-foreground"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link
            href="https://github.com/Ch-SaifUllah-Sundhu"
            target="_blank"
            aria-label="GitHub Profile"
            className="hover:text-foreground transition-colors duration-200"
          >
            <FaGithub size={22} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/saifullah-sundhu-708363357"
            target="_blank"
            aria-label="LinkedIn Profile"
            className="hover:text-blue-500 transition-colors duration-200"
          >
            <FaLinkedin size={22} />
          </Link>
          <Link
            href="https://www.instagram.com/saif_sundhu"
            target="_blank"
            aria-label="Instagram Profile"
            className="hover:text-pink-500 transition-colors duration-200"
          >
            <FaInstagram size={22} />
          </Link>
        </motion.div>
      </div>

      {/* Gradient Accent Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary via-accent to-secondary" />
    </footer>
  )
}

export default Footer

