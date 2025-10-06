import { NextResponse } from "next/server"
import { getDb } from "@/lib/mongo"

export async function GET() {
  const db = await getDb()
  const testimonials = await db
    .collection("testimonials")
    .find({}, { projection: { _id: 0 } })
    .toArray()
  return NextResponse.json(testimonials)
}

export async function POST(request: Request) {
  const db = await getDb()
  const body = await request.json()
  const items = Array.isArray(body) ? body : [body]
  await db.collection("testimonials").deleteMany({})
  await db.collection("testimonials").insertMany(items)
  return NextResponse.json({ ok: true })
}
