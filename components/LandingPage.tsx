import { motion } from 'framer-motion'
import Image from 'next/image'

export default function LandingPage() {
  return (
    <section id="home" className="min-h-screen flex flex-col lg:flex-row text-white bg-gradient-to-br from-gray-900 to-black">
      <motion.div 
        className="left-side w-full lg:w-1/2 xl:w-[700px] min-h-[30vh] lg:min-h-screen bg-gradient-gold bg-opacity-95 relative content-center"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="p-8 md:p-12 flex flex-col justify-center h-full">
          <motion.h2 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-white drop-shadow "
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          >
            Viktor's Liquor
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 drop-shadow"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Experience the finest in premium liquor. Our expertly curated selection of spirits is hand-picked for its exceptional quality and unique flavor profiles.
          </motion.p>
          <motion.button 
            className="bg-white text-black px-6 py-3 rounded-full text-lg md:text-xl font-semibold hover:bg-opacity-80 transition-colors duration-300 w-full md:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Collection
          </motion.button>
        </div>
      </motion.div>
      <motion.div 
        className="right-side flex-1 min-h-[50vh] lg:min-h-screen bg-black relative flex flex-col items-center justify-between xl:flex-row xl:items-end p-8 md:pl-12 md:pt-12 md:pb-12 md:pr-0"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="text-white mb-8 xl:mb-0 w-full max-w-md xl:max-w-lg 2xl:mr-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gradient-gold">Featured Product</h3>
          <p className="text-xl md:text-2xl mb-4">Elderflower Fizz</p>
          <p className="text-base md:text-lg mb-6">Our best-selling cocktail is a refreshing blend of premium vodka, tart cranberry juice, and sweet, fragrant elderflower liqueur.</p>
          <motion.button 
            className="bg-gradient-gold text-black px-6 py-3 rounded-full text-base md:text-lg font-semibold hover:bg-opacity-80 transition-colors duration-300 w-full md:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Try Now
          </motion.button>
        </motion.div>
        <motion.div
          className="w-full max-w-md xl:max-w-xl flex justify-center lg:justify-end"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Image
            src="/drink-landing-page.png"
            alt="Featured Drink"
            width={700}
            height={1000}
            className="w-full max-w-[350px] sm:max-w-[450px] lg:max-w-[550px] xl:max-w-[700px] xl:h-full 2xl:w-[800px] object-contain xl:object-cover float-right animate-float"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}


