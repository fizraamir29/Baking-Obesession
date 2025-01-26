import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function AdminDashboard() {
  const stats = [
    {
      name: "Total Orders",
      value: "156",
    },
    {
      name: "Total Revenue",
      value: "$2,345",
    },
    {
      name: "Active Users",
      value: "89",
    },
  ]

  const recentOrders = [
    {
      id: "1",
      customer: "John Doe",
      items: "2x Chocolate Cake",
      total: "$44",
      status: "Delivered",
    },
    {
      id: "2",
      customer: "Jane Smith",
      items: "1x Vanilla Cake",
      total: "$12",
      status: "Processing",
    },
  ]

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-[#1A1D26]">Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.name}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#6E7489]">{stat.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#1A1D26]">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>#{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.items}</TableCell>
                  <TableCell>{order.total}</TableCell>
                  <TableCell>{order.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

