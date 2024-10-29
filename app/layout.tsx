import { Providers } from "./providers";
import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Canal InfoTech',
  description: 'We are a team of experienced developers who specialize in creating consumer apps for iOS and Android.',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  other: {
    'msapplication-TileColor': '#ffffff',
    'msapplication-config': 'none'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='light'>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}