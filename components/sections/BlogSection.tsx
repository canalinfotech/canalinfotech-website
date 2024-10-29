import Image from 'next/image'
import { Button } from "@/components/ui/button"

export function BlogSection() {
  return (
    <div className="container mx-auto mt-12">
      <h2 className="text-4xl font-bold mb-8 text-white text-center">Latest Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Blog post cards - you might want to extract these to a BlogCard component */}
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden">
            <Image 
              src="/placeholder.svg?height=200&width=400" 
              alt="Blog post thumbnail" 
              width={400} 
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <span className="text-purple-400 text-sm">March {15 - index * 5}, 2024</span>
              <h3 className="text-xl font-semibold text-white mt-2">
                {index === 0 && "Top Hidden Gems in Europe"}
                {index === 1 && "Travel Photography Tips"}
                {index === 2 && "Local Cuisine Adventures"}
              </h3>
              <p className="text-gray-300 mt-2">
                {index === 0 && "Discover the lesser-known destinations that will take your breath away..."}
                {index === 1 && "Master the art of capturing stunning travel moments with these pro tips..."}
                {index === 2 && "Explore the world through its flavors with our foodie travel guide..."}
              </p>
              <Button variant="ghost" className="text-purple-400 mt-4 p-0 hover:text-purple-300">
                Read More →
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 