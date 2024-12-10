import { motion } from 'framer-motion'
import Image from 'next/image'


export default function LandingPage() {
  return (


    <section id="home" className="h-auto sm:min-h-screen flex flex-col sm:flex-row  text-white bg-white">
    <div className="left-side w-full sm:w-[350px] sm:min-h-[50vh] md:min-h-screen bg-maincolor bg-opacity-95  relative"
    >
      <motion.div   
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}

      className="p-4 sm:p-6 md:p-8  flex flex-col justify-center  ">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4">Viktor's Liquor</h2>
        <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6">Experience the finest in premium liquor. Our expertly curated selection of spirits is hand-picked for its exceptional quality and unique flavor profiles.</p>
        <button className="bg-gold text-white px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-opacity-80 transition-colors duration-300 w-full sm:w-auto ">
          Explore Our Collection
        </button>
      </motion.div>
    </div>
    <div
      className="right-side flex-1 sm:min-h-[50vh] md:min-h-screen bg-white relative relative"
    >
      <div className="lg:absolute lg:bottom-14 left-11">
        <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="h-[320px] md:w-full lg:w-6/12 text-black p-4 sm:p-6 md:p-8 flex flex-col justify-center ">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">Featured Product</h3>
          <p className="text-base sm:text-lg md:text-xl mb-2 sm:mb-4">Elderflower Fizz</p>
          <p className="text-sm sm:text-base mb-4">Our best-selling cocktail is a refreshing blend of premium vodka, tart cranberry juice, and sweet, fragrant elderflower liqueur.</p>
          <button className="bg-gold text-black px-4 py-2 rounded-full text-xs sm:text-sm font-semibold hover:bg-opacity-80 transition-colors duration-300 w-full sm:w-auto">
            Try Now
          </button>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 md:mt-0 lg:absolute lg:bottom-0 lg:right-8 w-full md:w-auto px-4 md:px-0"
      >

        {/* todo: fix the img positioning with the text div so that they work together and not suck */}
        <Image
          src="/drink-landing-page.png"
          alt="Featured Drink"
          width={600}
          height={800}
          className="w-full sm:w-[300px] md:w-[400px] xl:w-[600px]  h-auto object-contain"
        />
      </motion.div>
    </div>
  </section>
)
    }