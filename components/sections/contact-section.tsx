"use client"

import { ContactForm } from "./contact/form"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-7xl px-4 md:px-8 py-24 md:py-32 overflow-hidden"
    >
      {/* Aesthetic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl" />

      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Let’s collaborate and bring your ideas to life!
        </p>
      </motion.div>

      {/* Main content split layout */}
      <div className="relative grid md:grid-cols-2 gap-12 items-center">
        {/* Contact Info Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/70 dark:bg-gray-900/60 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200/60 dark:border-gray-700/60 p-8 md:p-10"
        >
          <h3 className="text-2xl font-semibold mb-6 text-indigo-700 dark:text-indigo-400">
            Contact Information
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Feel free to reach out for collaborations, opportunities, or any inquiries. I’d love to hear from you.
          </p>

          <ul className="space-y-5 text-gray-700 dark:text-gray-300">
            <li className="flex items-center gap-3">
              <Mail className="text-indigo-500" size={20} />
              <span>chsaifullah17517@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-purple-500" size={20} />
              <span>+92 306 9727242</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="text-indigo-500" size={20} />
              <span>Gujranwala, Pakistan</span>
            </li>
          </ul>

          <div className="mt-10 flex gap-4">
            <a
              href="https://github.com/Ch-SaifUllah-Sundhu"
              target="_blank"
              className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/saifullah-sundhu-708363357"
              target="_blank"
              className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/70 dark:bg-gray-900/60 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200/60 dark:border-gray-700/60 p-8 md:p-10"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  )
}
