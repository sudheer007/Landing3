'use client'

import { useState, type FormEvent } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

type Status = "idle" | "loading" | "success" | "error"

interface EmailCaptureProps {
  variant?: "hero" | "footer"
  source?: string
  className?: string
}

export function EmailCapture({ variant = "hero", source = "landing_page", className }: EmailCaptureProps) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<Status>("idle")
  const [message, setMessage] = useState("")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === "loading") return

    setStatus("loading")
    setMessage("")

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong. Please try again.")
      }

      setStatus("success")
      setMessage("You're on the list. Watch your inbox.")
      setEmail("")
    } catch (err) {
      setStatus("error")
      setMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    }
  }

  if (status === "success") {
    return (
      <div
        className={cn(
          "flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-5 py-3 text-sm font-medium text-emerald-200",
          className
        )}
      >
        <CheckCircle2 className="h-4 w-4 shrink-0" />
        {message}
      </div>
    )
  }

  const isFooter = variant === "footer"

  return (
    <div className={className}>
      <form
        onSubmit={handleSubmit}
        className={cn(
          "flex flex-col gap-3 sm:flex-row",
          isFooter ? "sm:max-w-md" : "sm:max-w-lg"
        )}
      >
        <Input
          type="email"
          required
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          className={cn(
            isFooter
              ? "h-11 focus-visible:ring-emerald-400/60"
              : "h-12 border-white/15 bg-white/[0.04] text-white placeholder:text-slate-500 focus-visible:ring-emerald-300/60"
          )}
        />
        <Button
          type="submit"
          disabled={status === "loading"}
          size="lg"
          className={cn(
            "h-12 shrink-0 bg-emerald-400 px-6 text-black transition hover:scale-[1.03] hover:bg-emerald-300",
            isFooter && "h-11"
          )}
        >
          {status === "loading" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <>
              Get Early Access
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>
      {status === "error" && (
        <p className="mt-2 text-sm text-red-300">{message}</p>
      )}
    </div>
  )
}
