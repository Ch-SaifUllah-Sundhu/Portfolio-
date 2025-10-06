export default function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </footer>
  )
}
