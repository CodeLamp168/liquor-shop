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
    <section id="menu" className="py-20 text-white bg-maincolor bg-gray-900">
      <div className="container mx-auto px-4 ">
        <h2 className="text-4xl font-bold mb-12 text-center ">Our Selection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {drinks.map((drink, index) => (
            <motion.div
              key={drink.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black p-4 rounded-lg  hover:!scale-105 shadow shadow-white hover:shadow-centerShadow hover:shadow-gold transition-transform  transition-shadow duration-300"
            >
              <Image src={drink.image} alt={drink.name} width={320} height={250} className="mx-auto mb-4 bg-white rounded" />
              <div className="flex flex-col text-center">
                <h3 className="text-2xl font-semibold text-center">{drink.name}</h3>
                <p className="text-center mt-2 text-gray-400 h-[100px]">Discover our exquisite {drink.name.toLowerCase()} collection</p>
                <button className="mt-4 w-full bg-gold text-black py-2 rounded-full font-semibold hover:bg-opacity-80 transition-colors duration-300">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
