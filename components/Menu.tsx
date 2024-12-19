import { motion } from 'framer-motion'
import Image from 'next/image'


const drinks = [
  { name: 'Premium Vodka', image: '/vodka.jpg' },
  { name: 'Aged Whiskey', image: '/whiskey.jpg' },
  { name: 'Craft Gin', image: '/gin.jpg' },
  { name: 'Exotic Rum', image: '/rum.jpg' },
]

export default function Menu() {
  return (
    <section id="menu" className="py-20 text-white bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-5xl font-bold mb-16 text-center text-gradient-gold"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Our Selection
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {drinks.map((drink, index) => (
            <motion.div
              key={drink.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800 to-black p-6 rounded-lg shadow-sm shadow-white hover:shadow-lg hover:shadow-gold transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 mb-4">
                <Image src={drink.image} alt={drink.name} layout="fill" sizes='auto' objectFit="cover" className="rounded-lg" />
              </div>
              <div className="flex flex-col text-center">
                <h3 className="text-2xl font-semibold mb-2 text-gradient-gold">{drink.name}</h3>
                <p className="text-gray-300 mb-4 h-[80px]">Discover our exquisite {drink.name.toLowerCase()} collection</p>
                <motion.button 
                  className="mt-auto w-full bg-gradient-gold text-black py-2 rounded-full font-semibold hover:opacity-90 transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

