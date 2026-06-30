import { NextRequest, NextResponse } from "next/server"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: NextRequest) {
  let body: { email?: string; source?: string }

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }

  const email = body?.email?.trim().toLowerCase()
  const source = body?.source || "landing_page"

  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 })
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
        source,
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
