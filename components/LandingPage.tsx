import { motion } from 'framer-motion'

export default function LandingPage() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 mb-8 md:mb-0"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Viktor's Liquor</h2>
          <p className="text-xl mb-6">Experience the finest in premium liquor. Our expertly curated selection of spirits is hand-picked for its exceptional quality and unique flavor profiles.</p>
          <button className="bg-gold text-black px-6 py-2 rounded-full text-lg font-semibold hover:bg-opacity-80 transition-colors duration-300">
            Explore Our Collection
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2"
        >
          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Featured Product</h3>
            <p className="text-lg mb-4">Elderflower Fizz</p>
            <p className="mb-4">Our best-selling cocktail is a refreshing blend of premium vodka, tart cranberry juice, and sweet, fragrant elderflower liqueur.</p>
            <button className="bg-gold text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-opacity-80 transition-colors duration-300">
              Try Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}