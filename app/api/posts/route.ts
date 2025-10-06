import { NextResponse } from "next/server"
import { getDb } from "@/lib/mongo"

export async function GET() {
  const db = await getDb()
  const posts = await db
    .collection("posts")
    .find({}, { projection: { _id: 0 } })
    .sort({ date: -1 })
    .toArray()
  return NextResponse.json(posts)
}

export async function POST(request: Request) {
  const db = await getDb()
  const body = await request.json()
  const items = Array.isArray(body) ? body : [body]
  await db.collection("posts").deleteMany({})
  await db.collection("posts").insertMany(items)
  return NextResponse.json({ ok: true })
}
