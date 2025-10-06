"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import ExperienceTimeline from "./experience-timeline"
import Testimonials from "./testimonials"
import BlogList from "./blog-list"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background/80 to-background py-20 md:py-28">
      {/* Glowing background */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div
          className="absolute -top-20 -right-16 w-[400px] h-[400px] rounded-full bg-primary blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -bottom-24 -left-16 w-[360px] h-[360px] rounded-full bg-accent blur-3xl"
          aria-hidden
        />
      </div>

      {/* Hero Content */}
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <motion.div
          className="relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full p-1 bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 shadow-xl">
            <motion.img
              src="IMG_20240125_203937.jpg"
              alt="Profile photo"
              className="w-full h-full object-cover rounded-full border-4 border-background"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
          <div className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 rounded-full -z-10" />
        </motion.div>

        {/* Intro Text */}
        <div>
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-foreground"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hi, I’m <span className="text-primary">Ch Saifullah Sundhu</span>
          </motion.h1>

          <motion.p
            className="mt-4 text-lg text-muted-foreground max-w-lg"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            A passionate full-stack developer crafting modern, responsive, and interactive web applications using
            <span className="text-primary font-medium"> HTML, CSS, JavaScript, Node.js,</span> and
            <span className="text-primary font-medium"> MongoDB.</span>
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button asChild size="lg">
              <a href="/cv/cv.pdf" download="Saifullah_Sundhu_CV.pdf">
                Download CV
              </a>
            </Button>

            <Button variant="secondary" asChild size="lg">
              <a href="#contact">Get in Touch</a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Organized Two-Column Layout */}

      {/* Right: Testimonials + BlogList */}
      <motion.div
        className="flex flex-col md:flex-row gap-10 mt-28 md:mt-32 items-start justify-between"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Testimonials Card */}
        <div className="flex-1 w-full bg-gradient-to-br from-background/60 to-background/30 backdrop-blur-xl border border-border rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl md:text-2xl font-semibold mb-4 border-b border-border pb-2">
            Testimonials
          </h2>
          <Testimonials />
        </div>

        {/* Blog List Card */}
        <div className="flex-1 w-full bg-gradient-to-br from-background/60 to-background/30 backdrop-blur-xl border border-border rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl md:text-2xl font-semibold mb-4 border-b border-border pb-2">
            Latest Blog
          </h2>
          <BlogList />
        </div>
      </motion.div>

    </section>
  )
}
