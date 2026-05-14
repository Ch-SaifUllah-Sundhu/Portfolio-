import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ToasterClient } from "@/components/ui/toaster-client"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Ch Saifullah Sundhu | Full-Stack Developer",
  description:
    "Portfolio of Ch Saifullah Sundhu — a passionate Full-Stack Developer specialising in MERN Stack, PHP, MySQL, and modern web technologies. Based in Gujranwala, Pakistan.",
  keywords: [
    "Ch Saifullah Sundhu",
    "Full-Stack Developer",
    "MERN Stack",
    "Next.js Developer",
    "Node.js",
    "MongoDB",
    "PHP Developer",
    "Web Developer Pakistan",
    "Portfolio",
  ],
  authors: [{ name: "Ch Saifullah Sundhu" }],
  creator: "Ch Saifullah Sundhu",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Ch Saifullah Sundhu | Full-Stack Developer",
    description:
      "Passionate Full-Stack Developer crafting modern, responsive web applications using MERN Stack, PHP, and MySQL.",
    siteName: "Ch Saifullah Sundhu Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ch Saifullah Sundhu | Full-Stack Developer",
    description: "Passionate Full-Stack Developer — MERN Stack, PHP, MySQL.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          <Suspense fallback={null}>
            {children}
            <ToasterClient />
          </Suspense>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
