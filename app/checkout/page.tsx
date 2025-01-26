"use client"

import { useState } from "react"
import { ArrowLeft, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Checkout() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))
    router.push("/checkout/success")
  }

  return (
    <div className="min-h-screen pb-6">
      <div className="sticky top-0 bg-white z-10">
        <div className="p-6 flex items-center gap-4 border-b">
          <Link href="/cart">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-xl font-bold text-[#1A1D26]">Checkout</h1>
        </div>
      </div>

      <div className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-[#1A1D26]">Delivery Address</h2>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#1A1D26]">Full Name</label>
              <Input required className="h-12" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#1A1D26]">Address</label>
              <Input required className="h-12" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#1A1D26]">Phone Number</label>
              <Input type="tel" required className="h-12" />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-[#1A1D26]">Payment Details</h2>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#1A1D26]">Card Number</label>
              <div className="relative">
                <Input required className="h-12 pl-12" placeholder="1234 5678 9012 3456" />
                <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#6E7489]" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#1A1D26]">Expiry Date</label>
                <Input required className="h-12" placeholder="MM/YY" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#1A1D26]">CVV</label>
                <Input required className="h-12" placeholder="123" />
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full h-12 bg-[#FE724C] hover:bg-[#FE724C]/90" disabled={loading}>
            {loading ? "Processing payment..." : "Pay Now"}
          </Button>
        </form>
      </div>
    </div>
  )
}

