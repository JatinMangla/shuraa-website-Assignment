import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Clock,
  CheckCircle,
  AlertCircle,
  Send
} from 'lucide-react'
import Card from '../components/ui/Card'
import Input from '../components/ui/Input'
import Select from '../components/ui/Select'
import Textarea from '../components/ui/Textarea'
import Button from '../components/ui/Button'
import siteData from '../data/siteData'
import { serviceOptions, contactInfo } from '../data/commonData'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))

      // In a real application, you would send the data to your backend
      console.log('Form submitted:', data)

      setSubmitStatus('success')
      reset()
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact Us - Free Tax Consultation | Shuraa Tax Dubai</title>
        <meta
          name="description"
          content="Contact Shuraa Tax for expert tax consultation in Dubai, UAE. Get professional VAT, corporate tax, and accounting services. Free consultation available."
        />
        <meta
          name="keywords"
          content="contact shuraa tax, dubai tax consultant contact, uae tax advice, free tax consultation dubai"
        />
        <link rel="canonical" href="https://www.shuraatax.com/contact" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <section className="bg-white border-b border-gray-200">
          <div className="container-custom py-16">
            {/* <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
              <span>HOME</span>
              <span>/</span>
              <span className="text-gray-900 font-medium">Contact</span>
            </nav> */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Contact
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Send us a message or call us for more information. Our expert team is ready to help you with all your tax and accounting needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Send us a message
                  </h2>

                  {/* Success Message */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3"
                    >
                      <CheckCircle className="text-green-600" size={20} />
                      <div>
                        <p className="text-green-800 font-medium">Message sent successfully!</p>
                        <p className="text-green-700 text-sm">We'll get back to you within 24 hours.</p>
                      </div>
                    </motion.div>
                  )}

                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3"
                    >
                      <AlertCircle className="text-red-600" size={20} />
                      <div>
                        <p className="text-red-800 font-medium">Something went wrong</p>
                        <p className="text-red-700 text-sm">Please try again or contact us directly.</p>
                      </div>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Name"
                        required
                        {...register('name', {
                          required: 'Name is required',
                          minLength: { value: 2, message: 'Name must be at least 2 characters' }
                        })}
                        error={errors.name?.message}
                      />

                      <Input
                        label="Phone Number"
                        type="tel"
                        required
                        {...register('phone', {
                          required: 'Phone number is required',
                          pattern: {
                            value: /^[+]?[0-9\s-()]+$/,
                            message: 'Please enter a valid phone number'
                          }
                        })}
                        error={errors.phone?.message}
                      />
                    </div>

                    <Input
                      label="Email"
                      type="email"
                      required
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Please enter a valid email address'
                        }
                      })}
                      error={errors.email?.message}
                    />

                    <Select
                      label="Service Required"
                      required
                      options={serviceOptions}
                      {...register('service', { required: 'Please select a service' })}
                      error={errors.service?.message}
                    />

                    <Textarea
                      label="Message"
                      required
                      rows={6}
                      {...register('message', {
                        required: 'Message is required',
                        minLength: { value: 10, message: 'Message must be at least 10 characters' }
                      })}
                      error={errors.message?.message}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      loading={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? 'Sending...' : (
                        <>
                          Send Message
                          <Send size={20} className="ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </Card>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-1 space-y-6"
              >
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="text-primary-600" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {info.title}
                        </h3>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.content}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}

                {/* Business Hours */}
                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="text-primary-600" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Business Hours
                      </h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Monday - Friday: 10:00 AM - 6:00 PM</p>
                        <p>Saturday: 10:00 AM - 2:00 PM</p>
                        <p className="text-red-600">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Emergency Contact */}
                <Card className="p-6 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
                  <h3 className="font-semibold mb-4">
                    Need Immediate Assistance?
                  </h3>
                  <p className="text-primary-100 mb-4 text-sm">
                    For urgent tax matters, contact us directly via WhatsApp or phone.
                  </p>
                  <div className="space-y-2">
                    <a
                      href={`https://wa.me/${siteData.company.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-accent-400 hover:text-accent-300 transition-colors duration-200"
                    >
                      <MessageSquare size={16} />
                      <span className="text-sm">WhatsApp: {siteData.company.contact.whatsapp}</span>
                    </a>
                    <a
                      href={`tel:${siteData.company.contact.phone}`}
                      className="flex items-center space-x-2 text-accent-400 hover:text-accent-300 transition-colors duration-200"
                    >
                      <Phone size={16} />
                      <span className="text-sm">Call: {siteData.company.contact.phone}</span>
                    </a>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-white py-16">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Visit Our Office
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Located in the heart of Dubai on Sheikh Zayed Road, our office is easily accessible
                and equipped with modern facilities to serve you better.
              </p>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-200 rounded-xl h-96 flex items-center justify-center"
            >
              <div className="text-center">
                <MapPin className="text-gray-400 mx-auto mb-4" size={48} />
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Interactive Map</h3>
                <p className="text-gray-600">
                  {siteData.company.contact.address}
                </p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(siteData.company.contact.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-primary-600 hover:text-primary-700 font-medium"
                >
                  View on Google Maps →
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Contact
