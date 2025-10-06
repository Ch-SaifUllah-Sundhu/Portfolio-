"use client"

import type React from "react"
import { useState } from "react"

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    }
    try {
      const res = await fetch("/api/contact", { method: "POST", body: JSON.stringify(payload) })
      if (!res.ok) throw new Error("Failed")
      setStatus("success")
      e.currentTarget.reset()
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact">
      <div className="mx-auto max-w-2xl">
        <form onSubmit={onSubmit} className="grid gap-5">
          <input
            name="name"
            required
            placeholder="Your name"
            className="rounded-xl border border-gray-300 dark:border-gray-700 px-4 py-3 bg-white/80 dark:bg-gray-800/70 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
          />
          <input
            name="email"
            required
            type="email"
            placeholder="Your email"
            className="rounded-xl border border-gray-300 dark:border-gray-700 px-4 py-3 bg-white/80 dark:bg-gray-800/70 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
          />
          <textarea
            name="message"
            required
            placeholder="Your message"
            className="rounded-xl border border-gray-300 dark:border-gray-700 px-4 py-3 bg-white/80 dark:bg-gray-800/70 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-200 min-h-[140px] focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
          />
          <button
            disabled={status === "loading"}
            className="px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition duration-300 shadow-lg hover:shadow-purple-300/30 disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" ? (
            <p className="text-sm text-green-600 text-center">Message sent successfully!</p>
          ) : null}
          {status === "error" ? (
            <p className="text-sm text-red-600 text-center">Something went wrong. Try again.</p>
          ) : null}
        </form>
      </div>
    </section>
  )
}
