import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import Button from '../ui/Button'
import siteData from '../../data/siteData'
import { achievements, features } from '../../data/commonData'

const About = () => {

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-600 font-semibold text-lg mb-2 block">ABOUT OUR COMPANY</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About {siteData.company.name}
            </h2>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Consultants & Accountants
            </h3>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {siteData.company.description}
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Shuraa Tax and Accounting Services L.L.C, or simply Shuraa Tax, is a prominent name in tax management and consultation in the UAE. Constantly working towards excellence since {siteData.company.founded}, Shuraa Tax has been instrumental in navigating UAE based business entities through the country's tax laws and regulations.
            </p>

            <Button size="lg" className="mb-8">
              Book Free Consultation
            </Button>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual/Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Placeholder for about image */}
            <div className="relative bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-3xl font-bold mb-2">Since {siteData.company.founded}</h3>
                  <p className="text-primary-100">Years of Excellence</p>
                </div>

                <div className="grid grid-cols-2 gap-6 text-center">
                  {
                    Object.entries(siteData.company.stats).map(([key, val], index) => (
                      <div key={key + val}>
                        <div className="text-2xl font-bold">{val}</div>
                        <div className="text-primary-100 text-sm">{key}</div>
                      </div>
                    ))
                  }
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h4 className="text-lg font-semibold mb-4">Why Choose Us?</h4>
                  <div className="space-y-3">
                    {
                      achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle size={16} className="text-accent-400" />
                          <span className="text-sm">{achievement}</span>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full opacity-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
