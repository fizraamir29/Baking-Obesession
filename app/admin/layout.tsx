import { LayoutDashboard, ShoppingBag, Users } from "lucide-react"
import Link from "next/link"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const navigation = [
    {
      name: "Dashboard",
      href: "/admin",
      icon: LayoutDashboard,
    },
    {
      name: "Orders",
      href: "/admin/orders",
      icon: ShoppingBag,
    },
    {
      name: "Users",
      href: "/admin/users",
      icon: Users,
    },
  ]

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[240px,1fr]">
      <aside className="hidden lg:block border-r">
        <div className="p-6">
          <h1 className="text-xl font-bold text-[#1A1D26]">Admin Dashboard</h1>
        </div>
        <nav className="px-3">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 text-[#6E7489] rounded-lg hover:bg-gray-100"
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
      <main>{children}</main>
    </div>
  )
}

