import { Providers } from "./providers";
import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Canal Infotech',
  icons: {
    icon: '/logo.png'
  },
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