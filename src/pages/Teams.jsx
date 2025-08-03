import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import {
  User,
  Mail,
  Linkedin,
  CheckCircle
} from 'lucide-react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { leadership, departments, values } from '../data/commonData'
import { containerVariants, itemVariants } from '../utils/commonFunctions'

const Teams = () => {

  return (
    <>
      <Helmet>
        <title>Our Team - Meet Shuraa Tax Experts | Tax Consultants Dubai</title>
        <meta
          name="description"
          content="Meet the expert team at Shuraa Tax - experienced tax consultants, chartered accountants, and auditors in Dubai, UAE. Learn about our leadership and specialists."
        />
        <meta
          name="keywords"
          content="shuraa tax team, tax consultants dubai team, chartered accountants dubai, sahil mehta ceo, saeed al fuqaei founder"
        />
        <link rel="canonical" href="https://www.shuraatax.com/teams/" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.shuraatax.com/teams/" />
        <meta property="og:title" content="Our Team - Meet Shuraa Tax Experts | Tax Consultants Dubai" />
        <meta property="og:description" content="Meet the expert team at Shuraa Tax - experienced tax consultants, chartered accountants, and auditors in Dubai, UAE." />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.shuraatax.com/teams/" />
        <meta property="twitter:title" content="Our Team - Meet Shuraa Tax Experts | Tax Consultants Dubai" />
        <meta property="twitter:description" content="Meet the expert team at Shuraa Tax - experienced tax consultants, chartered accountants, and auditors in Dubai, UAE." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 gradient-bg overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: "url('/pattern.svg')" }}
        ></div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              👥 Expert Team
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Meet Our{" "}
              <span className="text-accent-400">Expert Team</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Our team of experienced chartered accountants, tax specialists, and advisors
              are dedicated to providing exceptional tax and accounting services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="outline text-primary-600" onClick={() => { }}>
                Contact Our Team
              </Button>
              <Button onClick={() => { }} size="lg" className="outline text-gray-900  hover:bg-gray-100">
                Join Our Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary-600 font-semibold text-lg mb-2 block">LEADERSHIP TEAM</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Our Leadership
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="space-y-12">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        {leader.name}
                      </h3>
                      <p className="text-primary-600 font-semibold text-lg mb-4">
                        {leader.position}
                      </p>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {leader.bio}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Experience</h4>
                          <p className="text-primary-600 font-semibold">{leader.experience}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Specialties</h4>
                          <div className="flex flex-wrap gap-2">
                            {leader.specialties.map((specialty, idx) => (
                              <span
                                key={idx}
                                className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm"
                              >
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {leader.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-gray-600 flex items-start gap-2">
                              <CheckCircle className="text-accent-500 flex-shrink-0 mt-0.5" size={16} />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-4">
                        <Button size="sm" className="flex items-center gap-2">
                          <Mail size={16} />
                          Contact
                        </Button>
                        <Button variant="outline" size="sm" className="flex items-center gap-2">
                          <Linkedin size={16} />
                          LinkedIn
                        </Button>
                      </div>
                    </div>

                    <div className={`bg-gradient-to-br from-primary-100 to-primary-200 p-8 lg:p-12 flex items-center justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      {
                        index == 0 ? (
                          <img
                            src={leader?.image}
                            alt={leader.name}
                            className="w-full rounded transition-transform duration-300 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-64 h-64 rounded-full bg-white shadow-lg flex items-center justify-center">
                            <User className="text-primary-600" size={80} />
                          </div>
                        )
                      }
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary-600 font-semibold text-lg mb-2 block">OUR DEPARTMENTS</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Specialized Teams
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {departments.map((dept, index) => {
              const IconComponent = dept.icon
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="text-primary-600" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {dept.name}
                        </h3>
                        <p className="text-primary-600 font-medium text-sm">
                          {dept.teamSize}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {dept.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Services</h4>
                      <ul className="space-y-2">
                        {dept.services.map((service, idx) => (
                          <li key={idx} className="text-gray-600 flex items-start gap-2">
                            <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></span>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary-600 font-semibold text-lg mb-2 block">OUR VALUES</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              What Drives Us
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="text-center h-full">
                    <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="text-primary-600" size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Work With Our Expert Team
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Ready to benefit from our team's expertise? Get in touch today for a free
              consultation and discover how we can help your business succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => { }} size="lg" className="flex-1 sm:flex-none">
                Schedule Consultation
              </Button>
              <Button onClick={() => { }} size="lg" className="flex-1 sm:flex-none">
                Contact Our Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Teams