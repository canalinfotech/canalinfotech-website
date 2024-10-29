import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-20">
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
    </section>
  )
} 