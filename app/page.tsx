import Image from 'next/image'
import Link from 'next/link'
import { Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <main className="flex-grow flex flex-col items-center p-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-20">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-white">Guess The Place</h1>
            <p className="text-xl mb-6 text-gray-300">
              Discover new destinations by challenging your knowledge of places around the world.
            </p>
            <Link href="/apps">
              <Button className="bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-semibold py-2 px-6 rounded-full text-lg">
                Read more
              </Button>
            </Link>
          </div>
          <div className="bg-gray-700/50 backdrop-blur-lg rounded-lg overflow-hidden max-w-md mx-auto">
            <Image 
              src="/hero_image.png" 
              alt="App preview" 
              width={400}
              height={300}
              className="w-full h-auto object-cover"
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
    </div>
  )
}