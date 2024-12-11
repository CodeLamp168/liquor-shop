'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'menu', 'about', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="relative">
      <button
        className="lg:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <Menu size={32} />
      </button>
      <div className={`lg:flex ${isMenuOpen ? 'flex' : 'hidden'} flex-col lg:flex-row absolute lg:relative top-full right-0 lg:top-auto lg:right-auto bg-maincolor lg:bg-transparent p-4 lg:p-0 rounded-lg shadow-lg lg:shadow-none`}>
        {['Home', 'Menu', 'About', 'Contact'].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={(e) => {
              e.preventDefault()
              scrollToSection(item.toLowerCase())
            }}
            className={`text-lg font-semibold transition-colors duration-300 px-4 py-2 lg:py-0 ${
              activeSection === item.toLowerCase()
                ? 'text-white border-b-2 border-gold'
                : 'text-gray-300 hover:text-gold'
            }`}
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  )
}

