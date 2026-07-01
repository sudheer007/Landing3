'use client'

import { useEffect, useRef, useState, type KeyboardEvent } from "react"
import { createPortal } from "react-dom"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, CheckCircle2, Loader2, Mail, Phone, X } from "lucide-react"
import { cn } from "@/lib/utils"

type Status = "idle" | "loading" | "success" | "error"
type Step   = "email" | "phone" | "success"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[+\d][\d\s\-()]{6,18}$/

interface EmailCaptureProps {
  variant?:      "embedded" | "trigger"
  source?:       string
  plan?:         string
  triggerLabel?: string
  className?:    string
}

export function EmailCapture({
  variant      = "embedded",
  source       = "landing_page",
  plan,
  triggerLabel = "Get Early Access",
  className,
}: EmailCaptureProps) {
  const [isOpen,   setIsOpen]   = useState(variant === "embedded")
  const [mounted,  setMounted]  = useState(false)
  const [step,     setStep]     = useState<Step>("email")
  const [email,    setEmail]    = useState("")
  const [phone,    setPhone]    = useState("")
  const [status,   setStatus]   = useState<Status>("idle")
  const [error,    setError]    = useState("")
  const emailRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)

  // Portal target — safe SSR
  useEffect(() => { setMounted(true) }, [])

  // Focus management
  useEffect(() => {
    if (!isOpen) return
    const t = setTimeout(() => {
      if (step === "email") emailRef.current?.focus()
      if (step === "phone") phoneRef.current?.focus()
    }, 60)
    return () => clearTimeout(t)
  }, [isOpen, step])

  // Body scroll lock — only while modal is open
  useEffect(() => {
    if (variant !== "trigger") return
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen, variant])

  function resetAndClose() {
    setIsOpen(false)
    setTimeout(() => {
      setStep("email"); setEmail(""); setPhone("")
      setStatus("idle"); setError("")
    }, 200)
  }

  function goToPhone() {
    if (!EMAIL_RE.test(email.trim())) { setError("That doesn't look like a valid email."); return }
    setError(""); setStep("phone")
  }

  async function submit() {
    if (!PHONE_RE.test(phone.trim())) {
      setError("Enter a valid mobile number (include country code if outside the US).")
      return
    }
    setError(""); setStatus("loading")
    try {
      const res  = await fetch("/api/subscribe", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ email: email.trim(), phone: phone.trim(), source, plan }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data?.error || "Something went wrong. Please try again.")
      setStatus("success"); setStep("success")
    } catch (err) {
      setStatus("error")
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    }
  }

  const handleEmailKey = (e: KeyboardEvent<HTMLInputElement>) => { if (e.key === "Enter") { e.preventDefault(); goToPhone() } }
  const handlePhoneKey = (e: KeyboardEvent<HTMLInputElement>) => { if (e.key === "Enter") { e.preventDefault(); submit() } }

  const progress = step === "email" ? 50 : step === "phone" ? 90 : 100

  /* ── Card ─────────────────────────────────────────── */
  const card = (
    <div className={cn(
      "relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0a0d14] shadow-[0_0_60px_rgba(0,0,0,0.6)]",
      variant === "embedded" ? "max-w-xl" : "max-w-lg"
    )}>
      {/* Progress bar */}
      <div className="h-[2px] w-full bg-white/[0.06]">
        <div
          className="h-full bg-gradient-to-r from-emerald-400 to-cyan-300 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Close (trigger mode only) */}
      {variant === "trigger" && (
        <button
          onClick={resetAndClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 rounded-full p-1.5 text-zinc-500 transition hover:bg-white/10 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>
      )}

      <div className="p-7 sm:p-10">
        {/* Step 1 — email */}
        {step === "email" && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="mb-5 flex items-center gap-2 text-xs font-medium text-emerald-300">
              <Mail className="h-3.5 w-3.5" /> Step 1 of 2
            </div>
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">What&apos;s your email?</h3>
            <p className="mt-1.5 text-sm text-zinc-500">We&apos;ll use this to send your early access invite.</p>
            <input
              ref={emailRef}
              type="email" inputMode="email"
              placeholder="you@company.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={handleEmailKey}
              className="mt-7 w-full border-b-2 border-white/10 bg-transparent pb-3 text-xl text-white outline-none transition placeholder:text-zinc-700 focus:border-emerald-300 sm:text-2xl"
            />
            {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
            <div className="mt-7 flex items-center gap-4">
              <Button onClick={goToPhone} size="lg"
                className="h-11 bg-emerald-400 px-6 text-black transition hover:scale-[1.03] hover:bg-emerald-300">
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <span className="hidden text-xs text-zinc-700 sm:inline">press Enter ↵</span>
            </div>
          </div>
        )}

        {/* Step 2 — phone */}
        {step === "phone" && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="mb-5 flex items-center gap-2 text-xs font-medium text-cyan-300">
              <Phone className="h-3.5 w-3.5" /> Step 2 of 2
            </div>
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">And your mobile number?</h3>
            <p className="mt-1.5 text-sm text-zinc-500">For priority access alerts only — no spam, ever.</p>
            <input
              ref={phoneRef}
              type="tel" inputMode="tel"
              placeholder="+1 (555) 123-4567"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              onKeyDown={handlePhoneKey}
              disabled={status === "loading"}
              className="mt-7 w-full border-b-2 border-white/10 bg-transparent pb-3 text-xl text-white outline-none transition placeholder:text-zinc-700 focus:border-cyan-300 sm:text-2xl"
            />
            {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
            <div className="mt-7 flex items-center gap-3">
              <button
                onClick={() => { setError(""); setStep("email") }}
                className="flex h-11 items-center gap-1.5 rounded-md px-3 text-sm text-zinc-500 transition hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </button>
              <Button onClick={submit} disabled={status === "loading"} size="lg"
                className="h-11 bg-emerald-400 px-6 text-black transition hover:scale-[1.03] hover:bg-emerald-300">
                {status === "loading"
                  ? <Loader2 className="h-4 w-4 animate-spin" />
                  : <>{triggerLabel} <ArrowRight className="ml-2 h-4 w-4" /></>}
              </Button>
            </div>
          </div>
        )}

        {/* Success */}
        {step === "success" && (
          <div className="animate-in fade-in zoom-in-95 flex flex-col items-center py-4 text-center duration-300">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-300/10">
              <CheckCircle2 className="h-7 w-7 text-emerald-300" />
            </div>
            <h3 className="text-xl font-semibold text-white sm:text-2xl">You&apos;re on the list.</h3>
            <p className="mt-2 max-w-xs text-sm text-zinc-500">
              Watch your inbox — we&apos;ll text and email you the moment your spot opens up.
            </p>
            {variant === "trigger" && (
              <Button onClick={resetAndClose} variant="ghost"
                className="mt-6 text-zinc-400 hover:bg-white/10 hover:text-white">
                Close
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  )

  /* ── Embedded variant ─────────────────────────────── */
  if (variant === "embedded") {
    return <div className={className}>{card}</div>
  }

  /* ── Trigger variant ──────────────────────────────── */
  const modal = isOpen && mounted ? createPortal(
    // Backdrop — rendered at document.body so no ancestor transform can break fixed positioning
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={e => { if (e.target === e.currentTarget) resetAndClose() }}
    >
      {card}
    </div>,
    document.body
  ) : null

  return (
    <div className={className}>
      <Button
        onClick={() => setIsOpen(true)}
        size="lg"
        className="bg-emerald-400 px-7 text-black shadow-[0_0_25px_rgba(52,211,153,0.2)] transition hover:scale-[1.03] hover:bg-emerald-300"
      >
        {triggerLabel}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
      {modal}
    </div>
  )
}
