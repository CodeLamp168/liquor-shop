import { motion } from 'framer-motion'
import Image from 'next/image'

const drinks = [
  { name: 'Premium Vodka', image: '/vodka.png' },
  { name: 'Aged Whiskey', image: '/whiskey.png' },
  { name: 'Craft Gin', image: '/gin.png' },
  { name: 'Exotic Rum', image: '/rum.png' },
]

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Selection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {drinks.map((drink, index) => (
            <motion.div
              key={drink.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black p-6 rounded-lg shadow-lg hover:shadow-gold transition-shadow duration-300"
            >
              <Image src={drink.image} alt={drink.name} width={200} height={200} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-center">{drink.name}</h3>
              <p className="text-center mt-2 text-gray-400">Discover our exquisite {drink.name.toLowerCase()} collection</p>
              <button className="mt-4 w-full bg-gold text-black py-2 rounded-full font-semibold hover:bg-opacity-80 transition-colors duration-300">
                View Details
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}