import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Crochelet\'s personal websites',
  description: 'Personal website for Pierre & Martin Crochelet',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className="min-h-screen">
      <body className={inter.className + ' min-h-screen bg-zinc-200 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-200'}>{children}</body>
    </html>
  )
}
