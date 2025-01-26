"use client"

import { useState } from "react"
import { ResponsiveLayout } from "@/components/layout/responsive-layout"
import { CartItem } from "@/components/cart/cart-item"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Cart() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Chocolate Cake",
      price: 22,
      quantity: 1,
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Vanilla Cake",
      price: 12,
      quantity: 2,
      image: "/placeholder.svg",
    },
  ])

  const updateQuantity = (id: number, quantity: number) => {
    setItems(
      items
        .map((item) => (item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const delivery = 5
  const total = subtotal + delivery

  return (
    <ResponsiveLayout>
      <div className="space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[#1A1D26]">Shopping Cart</h1>
        {items.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-[#6E7489] mb-4">Your cart is empty.</p>
            <Link href="/">
              <Button className="bg-[#FE724C] hover:bg-[#FE724C]/90 text-white">Continue Shopping</Button>
            </Link>
          </div>
        ) : (
          <>
            <div className="divide-y">
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  {...item}
                  onUpdateQuantity={(quantity) => updateQuantity(item.id, quantity)}
                  onRemove={() => removeItem(item.id)}
                />
              ))}
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex justify-between text-[#6E7489]">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[#6E7489]">
                <span>Delivery</span>
                <span>${delivery.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-[#1A1D26]">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <Button
              className="w-full h-12 bg-[#FE724C] hover:bg-[#FE724C]/90 text-white"
              onClick={() => alert("Proceeding to checkout...")}
            >
              Proceed to Checkout
            </Button>
          </>
        )}
      </div>
    </ResponsiveLayout>
  )
}

