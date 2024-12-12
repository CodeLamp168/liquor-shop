import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4  md:min-h-[200px] md:max-h-[320px] flex flex-col justify-between">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center ">
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-semibold mb-2">Viktor's Liquor</h3>
            <p className="text-sm md:text-base">Providing premium spirits since 1975</p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <address className="not-italic text-sm">
              <p>123 Main St, Seattle, WA 98101</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@viktorsliquor.com</p>
            </address>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <nav className="flex flex-col space-y-1">
              <Link href="/about" className="text-sm hover:underline">About Us</Link>
              <Link href="/products" className="text-sm hover:underline">Our Products</Link>
              <Link href="/contact" className="text-sm hover:underline">Contact</Link>
              <Link href="/terms" className="text-sm hover:underline">Terms of Service</Link>
            </nav>
          </div>
        </div>
        <div className="mt-8 text-center text-xs border-t border-gray-700 pt-4">
          <p>&copy; 2023 Viktor's Liquor. All rights reserved.</p>
          <p className="mt-2">
            By using this website, you acknowledge that you are of legal drinking age in your country of residence. 
            The purchase and possession of alcohol is subject to local laws and regulations.
          </p>
        </div>
      </div>
    </footer>
  )
}

