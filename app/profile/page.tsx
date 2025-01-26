"use client"

import { useState } from "react"
import { ResponsiveLayout } from "@/components/layout/responsive-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Profile() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 8900",
  })

  const [isEditing, setIsEditing] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsEditing(false)
    // Here you would typically send the updated user data to your backend
    alert("Profile updated successfully!")
  }

  return (
    <ResponsiveLayout>
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[#1A1D26]">My Profile</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#6E7489]">
              Name
            </label>
            <Input
              id="name"
              type="text"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              disabled={!isEditing}
              className="mt-1"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#6E7489]">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              disabled={!isEditing}
              className="mt-1"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-[#6E7489]">
              Phone
            </label>
            <Input
              id="phone"
              type="tel"
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
              disabled={!isEditing}
              className="mt-1"
            />
          </div>
          {isEditing ? (
            <Button type="submit" className="w-full bg-[#FE724C] hover:bg-[#FE724C]/90 text-white">
              Save Changes
            </Button>
          ) : (
            <Button
              type="button"
              onClick={() => setIsEditing(true)}
              className="w-full bg-[#FE724C] hover:bg-[#FE724C]/90 text-white"
            >
              Edit Profile
            </Button>
          )}
        </form>
      </div>
    </ResponsiveLayout>
  )
}

