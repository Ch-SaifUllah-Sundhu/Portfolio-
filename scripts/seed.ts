// Run this from the v0 Scripts runner
import { MongoClient } from "mongodb"

async function main() {
  
  const uri = process.env.MONGODB_URI
  const dbName = process.env.MONGODB_DB
  if (!uri || !dbName) {
    console.log("[v0] Missing MONGODB_URI or MONGODB_DB env var")
    return
  }

  const client = new MongoClient(uri)
  await client.connect()
  const db = client.db(dbName)

  console.log("[v0] Seeding profile...")
  await db.collection("profile").deleteMany({})
  await db.collection("profile").insertOne({
    name: "CH SaifUllah Sundhu",
    title: "Full‑Stack Developer",
    tagline: "I craft modern web apps with React, Node.js, and MongoDB — with smooth, delightful animations.",
    avatarUrl: "/developer-avatar.png",
    location: "Your City",
    socials: [
      { label: "GitHub", url: "https://github.com/Ch-SaifUllah-Sundhu" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/saifullah-sundhu-708363357?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " },
      { label: "Twitter", url: "https://twitter.com/yourhandle" },
    ],
  })

  console.log("[v0] Seeding projects...")
  await db.collection("projects").deleteMany({})
  await db.collection("projects").insertMany([
    {
      title: "Animated Landing Page",
      description: "A modern landing page with Framer Motion animations, optimized images, and accessible components.",
      imageUrl: "/animated-landing.jpg",
      tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
      liveUrl: "https://example.com/landing",
      githubUrl: "https://github.com/Ch-SaifUllah-Sundhu",
      featured: true,
      createdAt: new Date().toISOString(),
    },
    {
      title: "Full‑Stack App",
      description: "End‑to‑end app with authentication, REST APIs, and a responsive dashboard.",
      imageUrl: "/dashboard-app.png",
      tech: ["React", "Node", "MongoDB"],
      githubUrl: "https://github.com/Ch-SaifUllah-Sundhu",
      featured: true,
      createdAt: new Date().toISOString(),
    },
    {
      title: "Component Library",
      description: "Reusable, accessible UI components built with Tailwind and Radix primitives.",
      imageUrl: "/diverse-avatars.png",
      tech: ["TypeScript", "Tailwind", "Radix"],
      githubUrl: "https://github.com/Ch-SaifUllah-Sundhu",
      createdAt: new Date().toISOString(),
    },
  ])

  await client.close()
  console.log("[v0] Seed complete.")
}

main().catch((e) => {
  console.log("[v0] Error:", e?.message)
})
