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
      className={`top-0 left-0 right-0 z-50 bg-opacity-90 text-white p-2 transition-all duration-300 py-4 bg-maincolor ${
        isSticky ? 'fixed shadow-md' : 'relative'
      }`}
    >
      <div className="container mx-2 px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image className="bg-white rounded-3xl" src="/logo.png" alt="404" width={40} height={40} />
          <h1 className="ml-2 text-xl lg:text-2xl font-bold">Viktor's Liquor</h1>
        </div>
        <Navigation />
      </div>
    </header>
  )
}

