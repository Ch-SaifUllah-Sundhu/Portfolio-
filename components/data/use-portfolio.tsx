"use client"

import useSWR from "swr"

const fetcher = async (url: string) => {
  const r = await fetch(url)
  if (!r.ok) throw new Error("Network error")
  return r.json()
}

export type Social = { label: string; url: string }
export type Profile = {
  _id?: string
  name: string
  title: string
  tagline?: string
  avatarUrl?: string
  location?: string
  socials?: Social[]
}
export type Project = {
  _id?: string
  title: string
  description: string
  imageUrl?: string
  tech?: string[]
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
  createdAt?: string
}

export type Skill = { name: string }

export type ExperienceItem = {
  company: string
  role: string
  start: string
  end?: string
  summary?: string
}

export type Testimonial = {
  name: string
  role?: string
  quote: string
  avatarUrl?: string
}

export type Post = {
  title: string
  slug: string
  date: string
  excerpt: string
}

export function useProfile() {
  const { data, error, isLoading } = useSWR<{ profile: Profile | null }>("/api/profile", fetcher, {
    revalidateOnFocus: false,
  })
  return { profile: data?.profile ?? null, isLoading, isError: !!error }
}

export function useProjects() {
  const { data, error, isLoading } = useSWR<{ projects: Project[] }>("/api/projects", fetcher, {
    revalidateOnFocus: false,
  })
  return { projects: data?.projects ?? [], isLoading, isError: !!error }
}

export function useSkills() {
  const { data, error, isLoading } = useSWR<Skill[]>("/api/skills", fetcher, { revalidateOnFocus: false })
  return { data: data ?? [], isLoading, isError: !!error }
}

export function useExperience() {
  const { data, error, isLoading } = useSWR<ExperienceItem[]>("/api/experience", fetcher, {
    revalidateOnFocus: false,
  })
  return { data: data ?? [], isLoading, isError: !!error }
}

export function useTestimonials() {
  const { data, error, isLoading } = useSWR<Testimonial[]>("/api/testimonials", fetcher, {
    revalidateOnFocus: false,
  })
  return { data: data ?? [], isLoading, isError: !!error }
}

export function usePosts() {
  const { data, error, isLoading } = useSWR<Post[]>("/api/posts", fetcher, {
    revalidateOnFocus: false,
  })
  return { data: data ?? [], isLoading, isError: !!error }
}
