import HeroSection from '@/components/sections/HeroSection'
import ContactSection from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  )
}