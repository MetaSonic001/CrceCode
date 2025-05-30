import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CRCECode',
  description: 'Competitive programming platform for learning and contests',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar>
        {children}
        </Navbar>
      </body>
    </html>
  )
}
