import { motion } from 'framer-motion'

export default function LandingPage() {
  return (


    <section id="home" className="min-h-screen flex flex-col sm:flex-row  text-white bg-white">
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full sm:w-[350px] sm:min-h-[50vh] md:min-h-screen bg-black relative"
    >
      <div className="p-4 sm:p-6 md:p-8 h-full flex flex-col justify-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4">Viktor's Liquor</h2>
        <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6">Experience the finest in premium liquor. Our expertly curated selection of spirits is hand-picked for its exceptional quality and unique flavor profiles.</p>
        <button className="bg-gold text-white px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-opacity-80 transition-colors duration-300 w-full sm:w-auto">
          Explore Our Collection
        </button>
      </div>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex-1 min-h-[50vh] md:min-h-screen bg-white relative"
    >
      <div className="h-[320px] md:w-1/2  text-black p-4 sm:p-6 md:p-8 flex flex-col justify-center">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">Featured Product</h3>
        <p className="text-base sm:text-lg md:text-xl mb-2 sm:mb-4">Elderflower Fizz</p>
        <p className="text-sm sm:text-base mb-4">Our best-selling cocktail is a refreshing blend of premium vodka, tart cranberry juice, and sweet, fragrant elderflower liqueur.</p>
        <button className="bg-gold text-black px-4 py-2 rounded-full text-xs sm:text-sm font-semibold hover:bg-opacity-80 transition-colors duration-300 w-full sm:w-auto">
          Try Now
        </button>
      </div>
    </motion.div>
  </section>
)
    }