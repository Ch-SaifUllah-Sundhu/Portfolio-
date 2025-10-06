"use client"
import { useSkills } from "@/components/data/use-portfolio"

export default function SkillsSection() {
  const { data } = useSkills()
  const skills = [
    { name: "HTML" },
    { name: "CSS" },
    { name: "JavaScript" },
    { name: "Node.js" },
    { name: "MongoDB" },
  ]
  return (
    <section id="skills" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {skills.map((s) => (
            <li key={s.name} className="rounded-md border px-3 py-2 bg-card">
              {s.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
