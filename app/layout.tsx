import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Canal Infotech',
  description: 'Discover innovative mobile applications by Canal Infotech',
  icons: {
    icon: '/logo.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Canal Infotech',
  },
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL('https://canalinfotech.com'),
  openGraph: {
    title: 'Canal Infotech',
    description: 'Discover innovative mobile applications by Canal Infotech',
    url: 'https://canalinfotech.com',
    siteName: 'Canal Infotech',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Canal Infotech',
    description: 'Discover innovative mobile applications by Canal Infotech',
    images: ['/logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col relative bg-gray-900">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          <Header />
          <main className="flex-grow relative">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}