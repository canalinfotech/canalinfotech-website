import Image from 'next/image'
import Link from 'next/link'
import { Menu, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBkPSJNMCAwaDMwdjMwSDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIiBmaWxsPSJub25lIj48cGF0aCBkPSJNMzAgMEgwdjMwaDMwVjB6TTI5LjUuNUguNXYyOWgyOVYuNXoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjE1Ii8+PGNpcmNsZSBjeD0iMTUiIGN5PSIxNSIgcj0iMSIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMyIvPjwvZz48L3N2Zz4=')] bg-[size:30px_30px]" />
      </div>
      
      <header className="relative p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Canal InfoTech Logo"
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
          />
          <span className="text-white text-xl font-semibold">Canal Infotech</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="/apps" className="text-white hover:text-purple-300 transition-colors">
            Apps
          </Link>
          <Link href="/contact" className="text-white hover:text-purple-300 transition-colors">
            Contact
          </Link>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden text-white">
          <Menu className="h-6 w-6" />
        </Button>
      </header>

      <main className="relative flex-grow flex flex-col items-center p-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-20">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-white">Guess The Place</h1>
            <p className="text-xl mb-6 text-gray-300">
              Discover new destinations by challenging your knowledge of placed around the world.
            </p>
            <Button className="bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-semibold py-2 px-6 rounded-full text-lg">
              Read more
            </Button>
          </div>
          <div className="bg-gray-700/50 backdrop-blur-lg rounded-lg overflow-hidden">
            <Image 
              src="/hero_image.png" 
              alt="Collage of underrated travel destinations" 
              width={600} 
              height={400} 
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-20">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-white">Contact Us</h1>
            <p className="text-xl mb-6 text-gray-300">
              Have questions about our tech solutions or want to discuss a project? We&apos;d love to hear from you!
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-6 h-6" />
                <span>info@canalinfotech.com</span>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-white">Send us a message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-200">Name</label>
                <Input id="name" type="text" placeholder="Your name" className="mt-1" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200">Email</label>
                <Input id="email" type="email" placeholder="Your email" className="mt-1" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-200">Message</label>
                <Textarea id="message" placeholder="Your message" className="mt-1" rows={4} />
              </div>
              <Button className="w-full bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-semibold py-2 px-6 rounded-full text-lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </main>

      <footer className="relative bg-slate-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Guess The Place. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}