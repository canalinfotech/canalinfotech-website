import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBkPSJNMCAwaDMwdjMwSDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIiBmaWxsPSJub25lIj48cGF0aCBkPSJNMzAgMEgwdjMwaDMwVjB6TTI5LjUuNUguNXYyOWgyOVYuNXoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjE1Ii8+PGNpcmNsZSBjeD0iMTUiIGN5PSIxNSIgcj0iMSIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMyIvPjwvZz48L3N2Zz4=')] bg-[size:30px_30px]" />
      </div>
      
      <header className="relative container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Canal Infotech Logo"
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
          />
          <span className="text-2xl font-bold text-white">Canal Infotech</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/apps" className="text-white hover:text-indigo-200 transition-colors">
            Apps
          </Link>
          <Link href="/contact" className="text-white hover:text-indigo-200 transition-colors">
            Contact
          </Link>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden text-white">
          <Menu className="h-6 w-6" />
        </Button>
      </header>

      <main className="relative flex-grow container mx-auto px-4 py-12 flex items-center justify-center">
        <Card className="w-full max-w-2xl bg-white/10 backdrop-blur-lg border-none shadow-2xl">
          <CardContent className="p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4 text-center">
              Innovative Tech Solutions
            </h1>
            <p className="text-xl text-indigo-100 mb-8 text-center">
              Empowering businesses with cutting-edge technology and custom applications.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center pb-8">
            <Button asChild size="lg" className="bg-white text-indigo-700 hover:bg-indigo-100 hover:text-indigo-800 transition-colors font-semibold text-lg px-8 py-6">
              <Link href="/apps">
                Explore Our Apps
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </main>

      <footer className="relative bg-indigo-800/30 backdrop-blur-md text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Canal Infotech. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}