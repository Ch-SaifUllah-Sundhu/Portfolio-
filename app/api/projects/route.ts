import { NextResponse } from "next/server"
import { getDb } from "@/lib/mongodb"

export async function GET() {
  try {
    const db = await getDb()
    const projects = await db.collection("projects").find({}).sort({ featured: -1, createdAt: -1 }).toArray()

    return NextResponse.json({ projects })
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "Unknown error" }, { status: 500 })
  }
}
