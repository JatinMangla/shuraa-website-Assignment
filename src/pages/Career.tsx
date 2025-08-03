import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import {
  User,
  MapPin,
  Clock,
  GraduationCap,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Building,
} from 'lucide-react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { benefits, jobOpenings } from '../data/commonData'
import { containerVariants, itemVariants } from '../utils/commonFunctions'

const Career = () => {
  const [expandedJob, setExpandedJob] = useState(null)

  const toggleJob = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId)
  }

  return (
    <>
      <Helmet>
        <title>Careers - Join Our Tax Consulting Team | Shuraa Tax</title>
        <meta
          name="description"
          content="Explore career opportunities at Shuraa Tax. Join our team of tax consultants, accountants, and auditors in Dubai, UAE. Competitive packages and growth opportunities available."
        />
        <meta
          name="keywords"
          content="tax consultant jobs dubai, accounting careers uae, shuraa tax careers, tax advisor jobs, chartered accountant jobs dubai"
        />
        <link rel="canonical" href="https://www.shuraatax.com/career/" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.shuraatax.com/career/" />
        <meta property="og:title" content="Careers - Join Our Tax Consulting Team | Shuraa Tax" />
        <meta property="og:description" content="Explore career opportunities at Shuraa Tax. Join our team of tax consultants, accountants, and auditors in Dubai, UAE." />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.shuraatax.com/career/" />
        <meta property="twitter:title" content="Careers - Join Our Tax Consulting Team | Shuraa Tax" />
        <meta property="twitter:description" content="Explore career opportunities at Shuraa Tax. Join our team of tax consultants, accountants, and auditors in Dubai, UAE." />
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
              🚀 Growing Team - Join Us!
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Build Your Career with{" "}
              <span className="text-accent-400">Shuraa Tax</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join Dubai's leading tax consultancy firm and grow your career with experienced
              professionals in a dynamic, collaborative environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="outline text-primary-600" onClick={() => { }}>
                View Open Positions
              </Button>
              <Button onClick={() => { }} size="lg" className="outline text-gray-900  hover:bg-gray-100">
                Learn About Our Culture
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary-600 font-semibold text-lg mb-2 block">WHY CHOOSE SHURAA TAX</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Why Work With Us?
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
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="text-center h-full">
                    <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="text-primary-600" size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary-600 font-semibold text-lg mb-2 block">CURRENT OPENINGS</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Available Positions
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {jobOpenings.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="overflow-hidden">
                  <div
                    className="p-6 cursor-pointer"
                    onClick={() => toggleJob(job.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <Building size={16} />
                              {job.department}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin size={16} />
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock size={16} />
                              {job.type}
                            </span>
                            <span className="flex items-center gap-1">
                              <Briefcase size={16} />
                              {job.experience}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="ml-4">
                        {expandedJob === job.id ? (
                          <ChevronUp className="text-primary-600" size={24} />
                        ) : (
                          <ChevronDown className="text-primary-600" size={24} />
                        )}
                      </div>
                    </div>

                    {expandedJob === job.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 pt-6 border-t border-gray-200"
                      >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                              <GraduationCap size={20} />
                              Requirements
                            </h4>
                            <ul className="space-y-2">
                              {job.requirements.map((req, index) => (
                                <li key={index} className="text-gray-600 flex items-start gap-2">
                                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                              <User size={20} />
                              Responsibilities
                            </h4>
                            <ul className="space-y-2">
                              {job.responsibilities.map((resp, index) => (
                                <li key={index} className="text-gray-600 flex items-start gap-2">
                                  <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></span>
                                  {resp}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
                          <Button onClick={() => { }} size="lg" className="flex-1 sm:flex-none">
                            Apply Now
                          </Button>
                          <Button onClick={() => { }} size="lg" className="flex-1 sm:flex-none">
                            Save Job
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
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
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Don't see a position that matches your skills? We're always looking for talented
              professionals to join our growing team. Send us your resume and let's talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => { }} size="lg" className=" text-primary-600 hover:bg-gray-100">
                Send Your Resume
              </Button>
              <Button onClick={() => { }} size="lg" className="text-primary-600 hover:bg-gray-100">
                Contact HR Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Career