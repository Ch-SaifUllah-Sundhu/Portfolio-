"use client"
import Image from "next/image"
import { useTestimonials } from "@/components/data/use-portfolio"

export default function Testimonials() {
  const items =  [
    {
      name: "Happy Client",
      role: "CEO",
      quote: "Fantastic work and communication.",
      avatarUrl: "/diverse-avatars.png",
    },
    {
      name: "Satisfied Customer",
      role: "CTO",
      quote: "Exceeded our expectations in every way.",
      avatarUrl: "/diverse-avatars.png",
    },
    {
      name: "Valued Partner",
      role: "Manager",
      quote: "Professional and reliable service.",
      avatarUrl: "/diverse-avatars.png",
    },
  ]
  return (
    <section id="testimonials" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <figure key={t.name} className="rounded-md border p-4 bg-card">
              <div className="flex items-center gap-3">
                <Image
                  src={t.avatarUrl || "/placeholder.svg?height=80&width=80&query=avatar"}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <figcaption>
                  <div className="font-medium">{t.name}</div>
                  {t.role ? <div className="text-xs text-muted-foreground">{t.role}</div> : null}
                </figcaption>
              </div>
              <blockquote className="mt-3 text-sm text-muted-foreground">“{t.quote}”</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
