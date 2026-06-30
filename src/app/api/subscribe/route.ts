import { NextRequest, NextResponse } from "next/server"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_REGEX = /^[+\d][\d\s\-()]{6,18}$/

export async function POST(req: NextRequest) {
  let body: { email?: string; phone?: string; source?: string; plan?: string }

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }

  const email = body?.email?.trim().toLowerCase()
  const phone = body?.phone?.trim()
  const source = body?.source || "landing_page"
  const plan = body?.plan || ""

  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 })
  }

  if (!phone || !PHONE_REGEX.test(phone)) {
    return NextResponse.json({ error: "Please enter a valid mobile number." }, { status: 400 })
  }

  const scriptUrl = process.env.GOOGLE_SCRIPT_URL

  if (!scriptUrl) {
    console.error("GOOGLE_SCRIPT_URL is not configured.")
    return NextResponse.json(
      { error: "Signups are temporarily unavailable. Please try again later." },
      { status: 500 }
    )
  }

  try {
    const upstream = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        phone,
        source,
        plan,
        userAgent: req.headers.get("user-agent") || "",
        submittedAt: new Date().toISOString(),
      }),
      // Apps Script web apps can be slow to cold-start; give it a moment.
      signal: AbortSignal.timeout(10_000),
    })

    if (!upstream.ok) {
      const text = await upstream.text().catch(() => "")
      console.error("Google Apps Script error:", upstream.status, text)
      throw new Error("Upstream sheet write failed.")
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Failed to forward signup to Google Sheets:", err)
    return NextResponse.json(
      { error: "Something went wrong saving your signup. Please try again." },
      { status: 502 }
    )
  }
}
