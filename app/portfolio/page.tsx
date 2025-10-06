import MainNav from "@/components/site/main-nav"
import SiteFooter from "@/components/site/site-footer"
import HeroDynamic from "@/components/sections/hero-dynamic"
import AboutSection from "@/components/sections/about"
import SkillsSection from "@/components/sections/skills"
import ProjectsDynamic from "@/components/sections/projects-dynamic"
import ExperienceTimeline from "@/components/sections/experience-timeline"
import Testimonials from "@/components/sections/testimonials"
import BlogList from "@/components/sections/blog-list"
import ContactForm from "@/components/sections/contact-form"

export default function PortfolioPage() {
  return (
    <main>
      <MainNav />
      <HeroDynamic />
      <AboutSection />
      <SkillsSection />
      <ProjectsDynamic />
      <ExperienceTimeline />
      <Testimonials />
      <BlogList />
      <ContactForm />
      <SiteFooter />
    </main>
  )
}
