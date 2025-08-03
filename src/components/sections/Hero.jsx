import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Award, Users, Building } from 'lucide-react'
import Button from '../ui/Button'
import siteData from '../../data/siteData'

const Hero = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center gradient-bg overflow-hidden py-3">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{ backgroundImage: "url('/pattern.svg')" }}
      ></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-white"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                🏆 The #1 Tax Consultancy In The UAE
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Talk To The Leading{' '}
                <span className="text-accent-400">Tax Consultant</span>{' '}
                In Dubai
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Get Professional Guidance On All UAE Taxation And Accounting Services.
                Explore affordable packages and custom solutions | First Consultation FREE
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/contact">
                <Button size="lg" className="bg-accent-500 text-black hover:bg-accent-600 hover:text-black">
                  Book Your Free Consultation
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                View Our Services
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="text-accent-400 mr-2" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-wrap">UAE</h3>
                <p className="text-blue-100 text-sm">Tax Agents</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="text-accent-400 mr-2" size={24} />
                </div>
                <h3 className="text-2xl font-bold">{siteData.company.stats.Clients}</h3>
                <p className="text-blue-100 text-sm">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Building className="text-accent-400 mr-2" size={24} />
                </div>
                <h3 className="text-2xl font-bold">{siteData.company.stats.Experience}</h3>
                <p className="text-blue-100 text-sm">Years Experience</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Placeholder for hero image */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center">
                      <Award className="text-black" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Professional Assistance</h3>
                      <p className="text-blue-100 text-sm">Dedicated team ready to help</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center">
                      <Users className="text-black" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Cost-Effective Packages</h3>
                      <p className="text-blue-100 text-sm">Customized solutions for your needs</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center">
                      <Building className="text-black" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Comprehensive Services</h3>
                      <p className="text-blue-100 text-sm">All your tax needs under one roof</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-accent-500 rounded-full opacity-20"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full opacity-10"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </motion.div>
      </motion.div>

    </section>
  )
}

export default Hero
