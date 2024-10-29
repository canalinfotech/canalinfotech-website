import HeroSection from '@/components/sections/HeroSection'
import AppSection from '@/components/sections/AppSection'
import ContactSection from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AppSection />
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  )
}