"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useProjects } from "@/components/data/use-portfolio"

export default function DynamicProjects() {
  const { projects, isLoading, isError } = useProjects()

  if (isError) {
    return <p className="text-center text-destructive">Failed to load projects.</p>
  }

  const items = isLoading ? Array.from({ length: 6 }) : projects

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">Projects</h2>
          <p className="mt-2 text-muted-foreground">Things I’ve been building lately.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p: any, i: number) => (
            <motion.article
              key={p?._id || i}
              className="group overflow-hidden rounded-lg border bg-card text-card-foreground"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={p?.imageUrl || "/placeholder.svg?height=480&width=640&query=project+preview"}
                  alt={p?.title || "Project preview"}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium">{p?.title || "Untitled Project"}</h3>
                <p className="mt-1 line-clamp-3 text-sm text-muted-foreground">
                  {p?.description || "Project description coming soon."}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {(p?.tech ?? ["React", "Node", "MongoDB"]).map((t: string) => (
                    <span key={t} className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-3">
                  {p?.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary underline underline-offset-4"
                    >
                      Live
                    </a>
                  )}
                  {p?.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary underline underline-offset-4"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
