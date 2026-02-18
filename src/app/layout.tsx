import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CryptoWalletBalance',
  description: 'I need a simple web app to track all my crypto wallet balances across
Base and Ethereum mainnet. I h',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
