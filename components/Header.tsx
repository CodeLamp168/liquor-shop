import Image from 'next/image'
import Navigation from './Navigation'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Viktor's Liquor" width={40} height={40} />
          <h1 className="ml-2 text-2xl font-bold">Viktor's Liquor</h1>
        </div>
        <Navigation />
      </div>
    </header>
  )
}