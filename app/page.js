'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Globe, Database, Search, BarChart3, Satellite, Download, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Nav from "@/components/nav"
import Vision from '@/components/mission'
import Link from 'next/link'


const BackgroundIllustration = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    viewBox="0 0 1000 1000"
    preserveAspectRatio="xMidYMid slice"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <radialGradient id="bg-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" stopColor="#0F172A" stopOpacity="1" />
        <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.6" />
      </radialGradient>
      <linearGradient id="satellite-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </linearGradient>
    </defs>
    
    {/* Background */}
    <rect width="100%" height="100%" fill="url(#bg-gradient)" />
    
    {/* Stars */}
    {[...Array(100)].map((_, i) => (
      <circle
        key={`star-${i}`}
        cx={Math.random() * 1000}
        cy={Math.random() * 1000}
        r={Math.random() * 1 + 0.5}
        fill="#FFFFFF"
        fillOpacity={Math.random() * 0.5 + 0.5}
      />
    ))}
    
    {/* Earth */}
    <circle cx="500" cy="1100" r="800" fill="#1E40AF" fillOpacity="0.3" />
    <circle cx="500" cy="1100" r="650" fill="#2563EB" fillOpacity="0.3" />
    
    {/* Grid lines */}
    {[...Array(10)].map((_, i) => (
      <path
        key={`grid-${i}`}
        d={`M0 ${i * 100} L1000 ${i * 100} M${i * 100} 0 L${i * 100} 1000`}
        stroke="#60A5FA"
        strokeOpacity="0.15"
        strokeWidth="1"
      />
    ))}
    
    {/* Satellites */}
    {[...Array(5)].map((_, i) => (
      <g key={`satellite-${i}`} transform={`translate(${200 + i * 150}, ${150 + i * 100}) rotate(${45 + i * 30})`}>
        <rect x="-20" y="-10" width="40" height="20" fill="url(#satellite-gradient)" />
        <rect x="-30" y="-2" width="60" height="4" fill="url(#satellite-gradient)" />
      </g>
    ))}
    
    {/* Data points */}
    {[...Array(50)].map((_, i) => (
      <circle
        key={`data-${i}`}
        cx={Math.random() * 1000}
        cy={Math.random() * 1000}
        r={Math.random() * 3 + 1}
        fill="#60A5FA"
        fillOpacity={Math.random() * 0.7 + 0.3}
      />
    ))}
    
    {/* Connection lines */}
    {[...Array(20)].map((_, i) => {
      const x1 = Math.random() * 1000;
      const y1 = Math.random() * 1000;
      const x2 = Math.random() * 1000;
      const y2 = Math.random() * 1000;
      return (
        <line
          key={`connection-${i}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#60A5FA"
          strokeOpacity="0.3"
          strokeWidth="1"
        />
      );
    })}
  </svg>
);

export  function LandingPage() {
  const [email, setEmail] = useState('')
  const [hoveredFeature, setHoveredFeature] = useState(null)

  const features = [
    { icon: Globe, title: "Comprehensive Coverage", description: "Access satellite data for Nigeria and surrounding regions", color: "from-blue-400 to-cyan-300" },
    { icon: Database, title: "Diverse Data Sources", description: "Integrate Nigerian satellite data with NASA and other global sources", color: "from-indigo-400 to-purple-300" },
    { icon: Search, title: "Advanced Search", description: "Find specific data sets with our powerful search tools", color: "from-green-400 to-emerald-300" },
    { icon: BarChart3, title: "Data Visualization", description: "Create stunning visualizations with our built-in tools", color: "from-red-400 to-pink-300" },
    { icon: Satellite, title: "Real-time Updates", description: "Get the latest satellite imagery as soon as it's available", color: "from-yellow-400 to-amber-300" },
    { icon: Download, title: "Easy Export", description: "Download data in various formats for your analysis", color: "from-purple-400 to-fuchsia-300" },
  ]

  return (
    <div className="min-h-screen bg-[#0F172A] text-gray-100">
      <Nav />
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0F172A]"></div>
          <div className="absolute inset-0">
            <div className="stars"></div>
            <div className="twinkling"></div>
            <div className="clouds"></div>
          </div>
        </div>
        <div className="relative z-10 text-center px-4 mt-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
          >
            Nigerian Satellite Data Platform
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-300 drop-shadow-lg"
          >
            Visualize and access serene satellite data for Nigeria and beyond
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href={"/map"}>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Explore Data <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <BackgroundIllustration />
        <div className="container relative z-10 mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Platform Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <feature.icon className="h-12 w-12 text-blue-300 mb-4 transform group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: hoveredFeature === index ? 1 : 0, y: hoveredFeature === index ? 0 : 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <a href="#" className="inline-flex items-center text-blue-300 hover:text-blue-200 transition-colors duration-300">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </motion.div>
                </div>
                <div className="absolute top-2 right-2">
                  <span className="bg-blue-600 text-white text-xs font-medium px-2.5 py-0.5 rounded-full">New</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Vision />

      <section className="py-20 bg-[#1E293B]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Data Sources</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-[#0F172A] p-6 rounded-lg shadow-lg flex-1 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-300">Nigerian Satellite Data</h3>
              <ul className="list-disc list-inside text-gray-300">
                <li>NigeriaSat-1</li>
                <li>NigeriaSat-2</li>
                <li>NigeriaSat-X</li>
                <li>NigComSat-1R</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-[#0F172A] p-6 rounded-lg shadow-lg flex-1 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-300">Additional Data Sources</h3>
              <ul className="list-disc list-inside text-gray-300">
                <li>NASA Earth Observing System</li>
                <li>European Space Agency (ESA) Copernicus</li>
                <li>JAXA Global Change Observation Mission</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Ready to Explore?</h2>
          <p className="text-xl mb-8 text-gray-300">Sign up for early access to our platform and start discovering valuable insights today.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-64 bg-white bg-opacity-10 text-white placeholder-gray-400 border-blue-500 focus:border-blue-400 focus:ring-blue-400"
            />
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">
              Get Early Access
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-[#0F172A] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">Nigerian Satellite Data Platform</h3>
              <p className="text-gray-400">Empowering research and decision-making with comprehensive satellite data.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Data Catalog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">API Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Nigerian Satellite Data Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const styles = `
  @keyframes move-background {
    from {
      transform: translate3d(0px, 0px, 0px);
    }
    to { 
      transform: translate3d(1000px, 0px, 0px);
    }
  }
  @keyframes twinkle {
    from {opacity: 0;}
    to {opacity: 1;}
  }
  .stars, .twinkling, .clouds {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: block;
  }
  .stars {
    background: #000 url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png) repeat top center;
    z-index: 0;
  }
  .twinkling {
    background: transparent url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/twinkling.png) repeat top center;
    z-index: 1;
    animation: move-background 70s linear infinite;
  }
  .clouds {
    background: transparent url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/clouds_repeat.png) repeat top center;
    z-index: 2;
    opacity: .4;
    animation: move-background 150s linear infinite;
  }
`

export default function App() {
  return (
    <>
      <style jsx global>{styles}</style>
      <LandingPage />
    </>
  )
}

