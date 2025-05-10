'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Menu, X } from 'lucide-react'
import logoBlack from "../../public/logoBlack.png"
import logoWhite from "../../public/logowhite.png"
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [language, setLanguage] = useState('en')
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkScreenSize() // Initial check
    window.addEventListener('resize', checkScreenSize)

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'home', href: '/' },
    { label: 'about us', href: '/about' },
    { label: 'how we work', href: '/howWeWork' },
    { label: 'gallery', href: '/gallery' },
    { label: 'blog', href: '/blog' },
    { label: 'contact', href: '/contact' },
  ]

  const isActive = (href) => {
    // Special case for home page
    if (href === '/') return pathname === href
    // For other pages, check if pathname starts with href
    return pathname.startsWith(href)
  }

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 px-4 sm:px-6 py-4 flex items-center justify-between 
      ${isScrolled && 'bg-white sm:bg-transparent'}`}>
      
      {/* Logo */}
      <Link href="/" className="text-white text-3xl font-serif font-bold">
        <Image
          src={isScrolled ? logoBlack : logoWhite}
          alt="Logo"
          className="sm:w-30 w-25 h-25 sm:h-30 transition-all duration-300"
        />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center space-x-4">
        <div className={`${isScrolled ? 'bg-neutral-800 text-white' : 'bg-white text-black'} font-cor rounded-full px-6 py-2 flex items-center space-x-4 text-sm shadow-lg`}>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`capitalize relative group transition-colors duration-200
                ${isActive(link.href) ? 'text-green-600 font-medium' : 'hover:text-green-500'}`}
            >
              {link.label}
              <span className={`absolute left-0 -bottom-1 h-0.5 bg-green-600 transition-all duration-300 
                ${isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className={`lg:hidden ${isScrolled ? 'text-black' : 'text-white'}`}
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md lg:hidden flex flex-col items-start px-6 py-4 space-y-4">
          {navLinks.map(link => (
            <Link 
              key={link.href} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className={`w-full py-2 capitalize relative
                ${isActive(link.href) ? 'text-green-600 font-medium' : 'text-gray-700 hover:text-green-500'}`}
            >
              {link.label}
              <span className={`absolute left-0 bottom-0 h-0.5 bg-green-600 transition-all duration-300 
                ${isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>
          ))}
          <button onClick={() => setLanguage(l => (l === 'en' ? 'fr' : 'en'))}>
            {language}
          </button>
          <div className="flex items-center space-x-2 pt-2">
            <Link href="/contact">
              <button className="bg-sky-200 text-black px-4 py-2 rounded">let's talk</button>
            </Link>
            <div className="bg-black w-8 h-8 flex items-center justify-center rounded-sm">
              <ChevronRight size={16} className="text-white" />
            </div>
          </div>
        </div>
      )}

      {/* Desktop CTA */}
      <div className='hidden md:block'>
        <div className="flex items-center space-x-2 ml-4">
          <Link href="/contact">
            <button className="bg-sky-200 text-black px-4 py-2 rounded hover:bg-sky-300 transition-colors">
              let's talk
            </button>
          </Link>
          <div className="bg-black w-8 h-8 flex items-center justify-center rounded-sm hover:bg-gray-800 transition-colors">
            <ChevronRight size={16} className="text-white" />
          </div>
        </div>
      </div>
    </nav>
  )
}