"use client"

import Image from "next/image"
import { useProjects } from "@/components/data/use-portfolio"

export default function ProjectsDynamic() {
  const { data } = useProjects()
  const projects = [
    {
      title: "Animated Landing",
      description: "Modern, fast, accessible.",
      image: "/animated-landing.jpg",
      tags: ["Next.js", "Motion"],
      link: "#",
    },
    {
      title: "Full-stack App",
      description: "API + DB + UI.",
      image: "/dashboard-app.png",
      tags: ["Node", "MongoDB"],
      link: "#",
    },
  ]

  return (
    <section id="projects" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link || "#"} className="group rounded-lg border overflow-hidden bg-card">
              <div className="relative aspect-[16/10]">
                <Image
                  src={p.image || "/placeholder.svg?height=600&width=800&query=project%20preview"}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.description}</p>
                {p.tags?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 rounded bg-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
