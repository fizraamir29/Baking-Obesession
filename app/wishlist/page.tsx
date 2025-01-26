"use client"

import { useState } from "react"
import { ResponsiveLayout } from "@/components/layout/responsive-layout"
import { ProductCard } from "@/components/ui/product-card"

const initialWishlist = [
  { id: 1, name: "Chocolate Cake", price: 35, image: "/placeholder.svg" },
  { id: 2, name: "Strawberry Cheesecake", price: 40, image: "/placeholder.svg" },
  { id: 3, name: "Vanilla Cupcakes", price: 20, image: "/placeholder.svg" },
]

export default function Wishlist() {
  const [wishlist, setWishlist] = useState(initialWishlist)

  const removeFromWishlist = (id: number) => {
    setWishlist(wishlist.filter((item) => item.id !== id))
  }

  return (
    <ResponsiveLayout>
      <div className="space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[#1A1D26]">My Wishlist</h1>
        {wishlist.length === 0 ? (
          <p className="text-[#6E7489]">Your wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {wishlist.map((product) => (
              <ProductCard key={product.id} {...product} onRemove={() => removeFromWishlist(product.id)} />
            ))}
          </div>
        )}
      </div>
    </ResponsiveLayout>
  )
}

