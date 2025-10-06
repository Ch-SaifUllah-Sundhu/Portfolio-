import { type NextRequest, NextResponse } from "next/server"
import { getDb } from "@/lib/mongodb"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}))
    const { name, email, message } = body || {}

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 })
    }

    // Basic email check
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!emailOk) {
      return NextResponse.json({ error: "Please provide a valid email" }, { status: 400 })
    }

    const db = await getDb()
    const collection = db.collection("messages")
    await collection.insertOne({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      createdAt: new Date(),
      source: "portfolio-site",
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[v0] Contact API error:", err)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
