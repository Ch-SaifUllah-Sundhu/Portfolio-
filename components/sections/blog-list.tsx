"use client"
import { usePosts } from "@/components/data/use-portfolio"
import Link from "next/link"

export default function BlogList() {
  const posts = [
    {
      title: "Getting Started with React Animation",
      slug: "react-animation",
      date: "2025-01-12",
      excerpt: "A quick intro to smooth, accessible motion.",
    },
    {
      title: "Understanding TypeScript Generics",
      slug: "typescript-generics",
      date: "2024-12-05",
      excerpt: "How generics can make your code more flexible.",
    },
    {
      title: "CSS Grid vs. Flexbox",
      slug: "css-grid-vs-flexbox",
      date: "2024-11-20",
      excerpt: "When to use each layout system effectively.",
    },
  ]
  return (
    <section id="blog" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.slug} className="rounded-md border bg-card p-4">
              <h3 className="font-semibold">{p.title}</h3>
              <div className="text-xs text-muted-foreground">{new Date(p.date).toLocaleDateString()}</div>
              <p className="text-sm text-muted-foreground mt-2">{p.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
