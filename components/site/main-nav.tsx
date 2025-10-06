"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function MainNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const isPortfolio = pathname?.startsWith("/portfolio")

  const Item = ({ href, label }: { href: string; label: string }) => (
    <a href={href} className="text-sm md:text-base hover:opacity-80 transition-opacity">
      {label}
    </a>
  )

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          MyPortfolio
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {isPortfolio ? (
            <>
              <Item href="#about" label="About" />
              <Item href="#skills" label="Skills" />
              <Item href="#projects" label="Projects" />
              <Item href="#experience" label="Experience" />
              <Item href="#testimonials" label="Testimonials" />
              <Item href="#blog" label="Blog" />
              <Item href="#contact" label="Contact" />
              <Link className="px-3 py-1.5 rounded-md bg-brand text-brand-foreground" href="/cv">
                CV
              </Link>
            </>
          ) : (
            <>
              <Link href="/portfolio">Portfolio</Link>
              <Link className="px-3 py-1.5 rounded-md bg-brand text-brand-foreground" href="/cv">
                CV
              </Link>
            </>
          )}
        </nav>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-md border px-2 py-1"
        >
          Menu
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border">
          <div className="mx-auto max-w-6xl px-4 py-3 grid gap-3">
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/cv">CV</Link>
          </div>
        </div>
      )}
    </header>
  )
}
