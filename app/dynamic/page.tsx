import DynamicHero from "@/components/sections/dynamic-hero"
import DynamicProjects from "@/components/sections/dynamic-projects"

export default function DynamicPortfolioPage() {
  return (
    <main className="min-h-dvh">
      <DynamicHero />
      <DynamicProjects />
      <footer className="border-t py-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </main>
  )
}
