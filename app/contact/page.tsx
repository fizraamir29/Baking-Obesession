"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function Contact() {
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setLoading(false)
    alert("Message sent successfully!")
  }

  return (
    <div className="min-h-screen p-6">
      <Link href="/" className="inline-block mb-6">
        <ArrowLeft className="h-6 w-6" />
      </Link>

      <div className="max-w-sm mx-auto space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold text-[#1A1D26]">Contact Us</h1>
          <p className="text-[#6E7489]">Have a question? We'd love to hear from you.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#1A1D26]">Name</label>
            <Input required className="h-12" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#1A1D26]">Email</label>
            <Input type="email" required className="h-12" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#1A1D26]">Message</label>
            <Textarea required className="min-h-[120px]" />
          </div>
          <Button type="submit" className="w-full h-12 bg-[#FE724C] hover:bg-[#FE724C]/90" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </div>
  )
}

