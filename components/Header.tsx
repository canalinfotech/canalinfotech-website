import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import NavLink from './NavLink'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gray-900/50 backdrop-blur-lg">
      <div className="relative p-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <Image
            src="/logo.png"
            alt="Canal InfoTech Logo"
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
          />
          <span className="text-white text-xl font-semibold">Canal Infotech</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <NavLink href="/apps" className="text-white hover:text-purple-300 transition-colors">
            Apps
          </NavLink>
          <NavLink href="/#contact" className="text-white hover:text-purple-300 transition-colors">
            Contact
          </NavLink>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden text-white">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  )
} 