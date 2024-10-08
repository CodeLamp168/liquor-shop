"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Navigation from './Navigation'

export default function Header() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 100) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`top-0 left-0 right-0 z-50 bg-black bg-opacity-90 text-white p-2 transition-all duration-300 ${
        isSticky ? 'fixed shadow-md' : 'relative'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/logo.png" alt=".." width={40} height={40} />
          <h1 className="ml-2 text-2xl font-bold">Viktor's Liquor</h1>
        </div>
        <Navigation />
      </div>
    </header>
  )
}