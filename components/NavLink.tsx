'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export default function NavLink({ href, children, className }: NavLinkProps) {
  const pathname = usePathname()
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('/#') && pathname === '/') {
      e.preventDefault()
      const element = document.getElementById(href.substring(2))
      element?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  )
} 