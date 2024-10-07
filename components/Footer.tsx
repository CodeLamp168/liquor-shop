export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 md:h-[400px]">
      <div className="container mx-auto px-4 md:h-[320px] flex align-items-center justify-center flex-col">
        <div className="flex flex-wrap justify-center ">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Viktor's Liquor</h3>
            <p>Providing premium spirits since 1975</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>123 Main St, Seattle, WA 98101</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@viktorsliquor.com</p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <p className="text-sm">
              By using this website, you acknowledge that you are of legal drinking age in your country of residence. 
              The purchase and possession of alcohol is subject to local laws and regulations.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2023 Viktor's Liquor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}