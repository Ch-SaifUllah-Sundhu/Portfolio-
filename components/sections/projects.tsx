"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const projects = [
  {
    title: "Airline Management System",
    description: "✈️ Airline Management System A web-based project built using PHP, MySQL, HTML, CSS, and JavaScript to manage flights, bookings, routes, and customers efficiently. It features secure login, ticket generation, and admin control, showcasing strong skills in backend development and database integration.",
    image: "Screenshot 2025-10-06 123040.png",
  },
  {
    title: "Restaurant Ordering System",
    description: "A Java-based Object-Oriented Programming (OOP) project designed to manage restaurant orders efficiently. It includes customer, menu, and order management using key OOP concepts such as inheritance, composition, and abstraction, demonstrating strong problem-solving and class design skills. ",
    image: "Screenshot 2025-10-06 123435.png",
  },
  {
    title: "To-Do Management System",
    description: "📝 A backend project built using Node.js and MongoDB, implementing full CRUD operations — users can Create, Read, Update, and Delete tasks efficiently with a simple and clean structure.",
    image: "Screenshot_6-10-2025_124029_localhost.jpeg",
  },
]

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Projects</h2>
        <p className="text-sm text-muted-foreground">Selected work</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
          >
            <Card className="overflow-hidden h-full group">
              <CardHeader>
                <CardTitle className="text-lg">{p.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-border">
                  <Image
                    src={p.image || "/placeholder.svg"}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{p.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
