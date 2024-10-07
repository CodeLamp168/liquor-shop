'use client'

import Header from '../components/Header'
import LandingPage from '../components/LandingPage'
import Menu from '../components/Menu'
import About from '../components/About'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main>
        <LandingPage />
        <Menu />
        <About />
      </main>
      <Footer />
    </div>
  )
}