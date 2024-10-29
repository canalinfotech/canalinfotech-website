export default function AppsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          Guess The Place
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Challenge yourself with our geography quiz app! Guess locations from around the world, 
          learn about different cultures and places, and compete with friends. Perfect for travel 
          enthusiasts and geography lovers who want to test and expand their knowledge of global destinations.
        </p>
        <div className="flex justify-center gap-4">
          <a 
            href="https://play.google.com/store" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-semibold py-3 px-8 rounded-full text-lg transition-colors"
          >
            Download for Android
          </a>
          <a 
            href="https://apps.apple.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-semibold py-3 px-8 rounded-full text-lg transition-colors"
          >
            Download for iOS
          </a>
        </div>
      </div>
    </div>
  )
} 