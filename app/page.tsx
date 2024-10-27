'use client'

import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from "@nextui-org/react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-600 to-blue-500">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white hover:opacity-90 transition-all">
          Canal InfoTech
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/apps" className="text-white hover:text-purple-200 transition-all">
            Apps
          </Link>
          <Link href="/contact" className="text-white hover:text-purple-200 transition-all">
            Contact
          </Link>
        </nav>
        <Button 
          isIconOnly 
          className="md:hidden text-white bg-transparent hover:bg-white/10 transition-all"
          aria-label="Menu"
        >
          <Menu size={24} />
        </Button>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="max-w-2xl text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Innovative Tech Solutions
          </h1>
          <p className="text-xl text-purple-100 leading-relaxed">
            Empowering businesses with cutting-edge technology and custom applications.
          </p>
          <Button
            as={Link}
            href="/apps"
            className="bg-white text-purple-600 font-semibold px-8 py-4 rounded-lg 
                     hover:bg-purple-100 transition-all button-glow shadow-soft"
          >
            Explore Our Apps
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-purple-100">&copy; {new Date().getFullYear()} Canal InfoTech. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}