import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react'
import siteData from '../../data/siteData'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const isActiveLink = (path) => {
    return location.pathname === path
  }

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-primary-900 text-white py-2 text-sm">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-6">
              <div className="flex items-center space-x-2">
                <Mail size={14} />
                <span>{siteData.company.contact.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={14} />
                <span className="text-center md:text-left">{siteData.company.contact.address}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>{siteData.company.contact.phone}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Alert Banner */}
      <div className="bg-accent-500 text-black py-3 text-center text-sm font-medium">
        <div className="container-custom">
          <p>
            FTA announces Corporate Tax Registration Deadline - 90 days from Date of Incorporation/MOA. AED 10k penalty for late registration.
            <Link to="/contact" className="ml-2 underline font-semibold hover:no-underline">
              Connect Now
            </Link>
          </p>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white'
      }`}>
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">{siteData.company.name}</h1>
                <p className="text-xs text-gray-600">Accounting & Auditing</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {siteData.navigation.slice(0, 7).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-primary-600 ${
                    isActiveLink(item.href)
                      ? 'text-primary-600 border-b-2 border-primary-600 pb-1'
                      : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                to="/contact"
                className="btn btn-primary text-sm"
              >
                Free Consultation
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-200"
            >
              <div className="container-custom py-4">
                <nav className="flex flex-col space-y-4">
                  {siteData.navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={closeMenu}
                      className={`text-base font-medium py-2 transition-colors duration-200 hover:text-primary-600 ${
                        isActiveLink(item.href)
                          ? 'text-primary-600 border-l-4 border-primary-600 pl-4'
                          : 'text-gray-700'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    to="/contact"
                    onClick={closeMenu}
                    className="btn btn-primary w-full mt-4"
                  >
                    Free Consultation
                  </Link>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}

export default Header
