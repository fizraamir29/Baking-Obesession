import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Baking Obsession',
  description: 'Created  Fizra Amir',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
