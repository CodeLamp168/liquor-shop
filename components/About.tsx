import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8">Our Story</h2>
          <p className="text-lg mb-6">
            Established in 1975, Viktor's Liquor has a long history of providing the finest in premium liquor and spirits. Founded by Cunningham Viktor, a seasoned connoisseur with a passion for exceptional quality and taste, Viktor's Liquor quickly gained a reputation as the go-to destination for discerning drinkers.
          </p>
          <p className="text-lg mb-6">
            From its humble beginnings as a small storefront in Seattle, Washington, Viktor's Liquor has grown into a national leader in the industry, with a vast selection of the finest spirits from around the world.
          </p>
          <p className="text-lg">
            Today, we continue to be guided by the same principles of excellence and dedication to customer satisfaction that have made us a beloved destination for so many.
          </p>
        </motion.div>
      </div>
    </section>
  )
}