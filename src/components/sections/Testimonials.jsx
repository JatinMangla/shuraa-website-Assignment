import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import Card from '../ui/Card'
import siteData from '../../data/siteData'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const testimonials = siteData.testimonials

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

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
          <span className="text-primary-600 font-semibold text-lg mb-2 block">TESTIMONIALS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            About Company
          </p>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 md:p-12 text-center mx-5">
                <div className="mb-8">
                  <Quote className="text-primary-600 mx-auto mb-6" size={48} />
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-accent-500 fill-current" size={20} />
                    ))}
                  </div>
                </div>

                <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                <div className="border-t border-gray-200 pt-6">
                  <p className="font-semibold text-gray-900 text-lg mb-1">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          {testimonials.length > 1 && (
            <>
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white hover:bg-primary-600 hover:text-white p-3 rounded-full shadow-lg border border-gray-200 transition-all duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white hover:bg-primary-600 hover:text-white p-3 rounded-full shadow-lg border border-gray-200 transition-all duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Dots Indicator */}
          {testimonials.length > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? 'bg-primary-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Additional Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16"
        >
          <span className="text-primary-600 font-semibold text-lg mb-2 block">Voices Of Approval</span>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Clients Say It Best!
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it! See why businesses trust Shuraa Tax for their tax and accounting needs. 
            Read our verified Google Reviews to see what satisfied clients say about their experience with our expert team.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
