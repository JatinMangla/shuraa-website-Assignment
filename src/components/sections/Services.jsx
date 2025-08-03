import { motion } from 'framer-motion'
import {
  Calculator,
  FileText,
  Building,
  Search,
  Package,
  Plus,
  ArrowRight
} from 'lucide-react'
import Card from '../ui/Card'
import Button from '../ui/Button'
import siteData from '../../data/siteData'
import { containerVariants, itemVariants } from '../../utils/commonFunctions'

const iconMap = {
  Calculator,
  FileText,
  Building,
  Search,
  Package,
  Plus
}

const Services = () => {

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 font-semibold text-lg mb-2 block">OUR SERVICES</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Most Popular Services
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            That We Stand Behind
          </p>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {siteData.services.map((service) => {
            const IconComponent = iconMap[service.icon]

            return (
              <motion.div key={service.id} variants={itemVariants}>
                <Card className="h-full group cursor-pointer">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary-600 transition-colors duration-300">
                      <IconComponent className="text-primary-600 group-hover:text-white transition-colors duration-300" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary-600 hover:bg-primary-50 p-0 font-semibold group-hover:translate-x-1 transition-transform duration-300"
                    >
                      Learn More
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              To Know more about our services
            </h3>
            <Button size="lg" className="mx-auto">
              Click Here
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
