import { motion } from 'framer-motion'
import { stats } from '../../data/commonData'
import { containerVariants, itemVariants } from '../../utils/commonFunctions'
const Stats = () => {

  return (
    <section className="section-padding bg-primary-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{ backgroundImage: "url('/pattern.svg')" }}
      ></div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simplifying & Assisting Commercial Entities With
          </h2>
          <p className="text-2xl text-blue-100 font-semibold">
            Taxation In The United Arab Emirates
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats?.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center group"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-500 transition-colors duration-300">
                  <stat.icon className="text-accent-400 group-hover:text-black transition-colors duration-300" size={32} />
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="text-4xl md:text-5xl font-bold mb-2 text-accent-400"
                >
                  {stat.number}
                </motion.div>
                <p className="text-blue-100 font-medium uppercase tracking-wide text-sm">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn bg-accent-500 text-black hover:bg-accent-600 font-semibold"
            >
              Get Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-900"
            >
              View Our Services
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Stats
