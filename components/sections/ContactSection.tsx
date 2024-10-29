'use client'

import { Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  return (
    <section id="contact" className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start py-12">
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
    </section>
  )
}