"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Login() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    // Simulate login
    await new Promise((resolve) => setTimeout(resolve, 1000))
    router.push("/")
  }

  return (
    <div className="min-h-screen p-6">
      <Link href="/" className="inline-block mb-6">
        <ArrowLeft className="h-6 w-6" />
      </Link>

      <div className="max-w-sm mx-auto space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold text-[#1A1D26]">Welcome back!</h1>
          <p className="text-[#6E7489]">Sign in to continue shopping</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#1A1D26]">Email</label>
            <Input type="email" required className="h-12" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#1A1D26]">Password</label>
            <Input type="password" required className="h-12" />
          </div>
          <Button type="submit" className="w-full h-12 bg-[#FE724C] hover:bg-[#FE724C]/90" disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </Button>
        </form>

        <div className="text-center">
          <Link href="/auth/register" className="text-[#FE724C]">
            Don't have an account? Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}

