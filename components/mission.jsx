
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Vision() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 min-w-full min-h-full object-cover z-0"
      >
        <source src="https://videos.pexels.com/video-files/854233/854233-sd_640_360_29fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6"
        >
          Our Vision for the Future
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl text-center mb-8 max-w-3xl"
        >
          Empowering Nigeria and Africa with cutting-edge satellite data technology for sustainable development and informed decision-making.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" className="bg-green-600 text-white hover:bg-green-700 transition-colors duration-300">
            Explore Our Roadmap <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-green-800 transition-colors duration-300">
            Join Our Mission
          </Button>
        </motion.div>
      </div>

      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-4 z-20">
        {[0, 1, 2].map((_, index) => (
          <motion.div
            key={index}
            className="w-3 h-3 bg-white rounded-full"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.5 }}
          />
        ))}
      </div>
    </section>
  )
} 