'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('')

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
  }

  return (
    <nav className="flex justify-center space-x-6">
      {['Home', 'Menu', 'About', 'Contact'].map((item) => (
        <Link
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={(e) => {
            e.preventDefault()
            scrollToSection(item.toLowerCase())
          }}
          className={`text-lg font-semibold transition-colors duration-300 ${
            activeSection === item.toLowerCase()
              ? 'text-white border-b-2 border-personalflair'
              : 'text-gray-300 hover:text-gold'
          }`}
        >
          {item}
        </Link>
      ))}
    </nav>
  )
}