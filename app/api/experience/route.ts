import { NextResponse } from "next/server"
import { getDb } from "@/lib/mongo"

export async function GET() {
  const db = await getDb()
  const exp = await db
    .collection("experience")
    .find({}, { projection: { _id: 0 } })
    .toArray()
  return NextResponse.json(exp)
}

export async function POST(request: Request) {
  const db = await getDb()
  const body = await request.json()
  const items = Array.isArray(body) ? body : [body]
  await db.collection("experience").deleteMany({})
  await db.collection("experience").insertMany(items)
  return NextResponse.json({ ok: true })
}
