"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Airline Management System",
    description:
      "A full web-based system to manage flights, bookings, routes, and customers. Features secure login, ticket generation, and an admin control panel built with PHP & MySQL.",
    image: "/Screenshot 2025-10-06 123040.png",
    tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    category: "Web",
    github: "https://github.com/Ch-SaifUllah-Sundhu",
    live: null,
  },
  {
    title: "Point of Sale (POS) System",
    description:
      "Complete retail POS system with product & category management, barcode-based lookup, shopping cart, automatic invoice generation, stock tracking, sales reports, and role-based access (Admin/Cashier).",
    image: "/pos-system.png",
    tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    category: "Web",
    github: "https://github.com/Ch-SaifUllah-Sundhu",
    live: null,
  },
  {
    title: "Restaurant Ordering System",
    description:
      "A Java OOP project for managing restaurant orders efficiently. Covers customer, menu, and order management using inheritance, composition, and abstraction.",
    image: "/Screenshot 2025-10-06 123435.png",
    tags: ["Java", "OOP"],
    category: "Java",
    github: "https://github.com/Ch-SaifUllah-Sundhu",
    live: null,
  },
  {
    title: "To-Do Management System",
    description:
      "A Node.js + MongoDB backend with full CRUD operations. Users can Create, Read, Update, and Delete tasks with a clean RESTful API structure.",
    image: "/Screenshot_6-10-2025_124029_localhost.jpeg",
    tags: ["Node.js", "MongoDB", "Express", "REST API"],
    category: "Backend",
    github: "https://github.com/Ch-SaifUllah-Sundhu",
    live: null,
  },
  {
    title: "Portfolio Website",
    description:
      "This very portfolio — a full-stack Next.js 15 application with MongoDB integration, dark/light themes, Framer Motion animations, and Vercel deployment.",
    image: "/dashboard-app.png",
    tags: ["Next.js", "React", "MongoDB", "Tailwind", "TypeScript"],
    category: "Web",
    github: "https://github.com/Ch-SaifUllah-Sundhu",
    live: "#",
  },
  {
    title: "Real-Time Chat App",
    description:
      "A live messaging application built with Node.js and Socket.io. Supports chat rooms, typing indicators, and real-time message broadcasting with MongoDB persistence.",
    image: "/modern-data-dashboard.png",
    tags: ["Node.js", "Socket.io", "Express", "MongoDB"],
    category: "Backend",
    github: "https://github.com/Ch-SaifUllah-Sundhu",
    live: null,
  },
]

const filters = ["All", "Web", "Backend", "Java"]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const cardVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
      {/* Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-violet-600/5 blur-[140px]" />
      </div>

      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">My Work</span>
        <h2 className="text-3xl md:text-4xl font-extrabold gradient-text">Featured Projects</h2>
        <div className="mt-3 mx-auto w-16 h-1 rounded-full" style={{ background: "linear-gradient(90deg,#7c3aed,#06b6d4)" }} />
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          A curated selection of real-world projects that demonstrate my skills across full-stack web development,
          backend engineering, and OOP design.
        </p>
      </motion.div>

      {/* Filter tabs */}
      <div className="flex justify-center gap-2 mb-10 flex-wrap">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
              activeFilter === f
                ? "text-white border-transparent shadow-md shadow-violet-500/30"
                : "border-border text-muted-foreground hover:text-foreground hover:border-primary/40 bg-transparent"
            }`}
            style={
              activeFilter === f
                ? { background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }
                : {}
            }
          >
            {f}
          </button>
        ))}
      </div>

      {/* Cards grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
        >
          {filtered.map((project) => (
            <motion.article
              key={project.title}
              variants={cardVariants}
              className="group relative flex flex-col rounded-2xl border border-border bg-card overflow-hidden card-glow transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-medium hover:bg-white/20 transition-colors"
                    >
                      <Github size={13} /> GitHub
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-white text-xs font-medium hover:opacity-90 transition-opacity"
                        style={{ background: "linear-gradient(135deg,#7c3aed,#06b6d4)" }}
                      >
                        <ExternalLink size={13} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold text-white"
                  style={{ background: "linear-gradient(135deg,#7c3aed88,#06b6d488)", backdropFilter: "blur(8px)" }}
                >
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <h3 className="font-bold text-base text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{project.description}</p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-muted/80 border border-border text-xs text-muted-foreground font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
