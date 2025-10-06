import { NextResponse } from "next/server"
import { getDb } from "@/lib/mongo"

export async function GET() {
  const db = await getDb()
  const skills = await db
    .collection("skills")
    .find({}, { projection: { _id: 0 } })
    .toArray()
  return NextResponse.json(skills)
}

export async function POST(request: Request) {
  const db = await getDb()
  const body = await request.json()
  const items = Array.isArray(body) ? body : [body]
  await db.collection("skills").deleteMany({})
  await db.collection("skills").insertMany(items)
  return NextResponse.json({ ok: true })
}
