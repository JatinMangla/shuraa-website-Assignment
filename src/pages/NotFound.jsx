import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Home, Search } from 'lucide-react'
import Button from '../components/ui/Button'

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found - Shuraa Tax</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Shuraa Tax homepage for tax consultancy services in Dubai, UAE." />
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-md mx-auto"
          >
            {/* 404 Illustration */}
            <div className="mb-8">
              <div className="text-8xl font-bold text-primary-600 mb-4">404</div>
              <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
            </div>

            {/* Content */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Sorry, the page you are looking for doesn't exist or has been moved. 
              Let's get you back on track.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button size="lg" className="w-full sm:w-auto">
                  <Home size={20} className="mr-2" />
                  Go Home
                </Button>
              </Link>

              <Link to="/blog">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Search size={20} className="mr-2" />
                  Browse Blog
                </Button>
              </Link>
            </div>

            {/* Quick Links */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Links
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                <Link 
                  to="/contact" 
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                >
                  Contact Us
                </Link>
                <Link 
                  to="/blog" 
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                >
                  Blog
                </Link>
                <a 
                  href="tel:+97144081900" 
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                >
                  Call Us
                </a>
                <a 
                  href="mailto:info@shuraatax.com" 
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                >
                  Email Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default NotFound
