"use client"
import { useExperience } from "@/components/data/use-portfolio"

export default function ExperienceTimeline() {
  const items = [
    { company: "Company A", role: "Frontend Dev", start: "2023", end: "2024", summary: "Built UI systems." },
    { company: "Company B", role: "Full-Stack Dev", start: "2022", end: "2023", summary: "API + DB + UI." },
        { company: "Company C", role: "Full-Stack Dev", start: "2022", end: "2023", summary: "API + DB + UI." },

  ]
  return (
    <section id="experience" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Experience</h2>
        <ol className="relative border-s pl-6">
          {items.map((e) => (
            <li key={`${e.company}-${e.start}`} className="mb-8">
              <div className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full bg-brand border"></div>
              <div className="rounded-md border bg-card p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">
                    {e.role} • {e.company}
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    {e.start} – {e.end || "Present"}
                  </span>
                </div>
                {e.summary ? <p className="text-sm text-muted-foreground mt-2">{e.summary}</p> : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
