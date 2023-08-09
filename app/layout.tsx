import './globals.css'
import type { Metadata } from 'next'
import { poppins } from './styles/fonts'

export const metadata: Metadata = {
  title: "Cirion's Wares",
  description: 'Generated for Enstack',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
