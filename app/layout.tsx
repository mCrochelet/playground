'use client';

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

import ThemeToggler from './components/theme-toggler';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children, }: { children: React.ReactNode }) {

  const [theme, setTheme] = useState('light');

  return (
    <html lang="en" className={`min-h-screen ${theme}`}>
      <Analytics />
      <body className={inter.className + ' min-h-screen bg-lightBackground dark:bg-darkBackground text-darkBackground dark:text-lightBackground'}>
        <div className="flex justify-center place-items-center absolute bottom-4 right-4 h-10 w-10 cursor-pointer group"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          <ThemeToggler theme={theme} />
        </div>
        {children}
      </body>
    </html>
  )
}
