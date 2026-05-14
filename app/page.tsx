import { Nav }              from "@/components/site/nav"
import { Footer }           from "@/components/site/footer"
import { Hero }             from "@/components/sections/hero"
import { About }            from "@/components/sections/about"
import { Projects }         from "@/components/sections/projects"
import { StatsSection }     from "@/components/sections/stats-section"
import ExperienceTimeline   from "@/components/sections/experience-timeline"
import { ContactSection }   from "@/components/sections/contact-section"

export default function HomePage() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <StatsSection />
        <Projects />
        <ExperienceTimeline />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
