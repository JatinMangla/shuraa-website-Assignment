import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react'
import siteData from '../../data/siteData'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const servicesLinks = [
    { name: 'Accounting And Bookkeeping', href: '/services/accounting' },
    { name: 'VAT Consultancy Services', href: '/services/vat' },
    { name: 'UAE Corporate Tax', href: '/services/corporate-tax' },
    { name: 'Payroll Services', href: '/services/payroll' },
    { name: 'Add-On Services', href: '/services/add-on' }
  ]

  return (
    <footer className="bg-secondary-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">{siteData.company.name}</h3>
                <p className="text-sm text-gray-300">Accounting & Auditing</p>
              </div>
            </Link>

            <p className="text-gray-300 mb-6 leading-relaxed">
              {siteData.company.description}
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-primary-400" />
                <span className="text-sm">{siteData.company.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-primary-400" />
                <span className="text-sm">{siteData.company.contact.email}</span>
              </div>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Explore</h4>
            <ul className="space-y-3">
              {siteData.navigation.slice(1, 5).map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Useful Links</h4>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>

            <div className="space-y-4 mb-6">
              <div>
                <h5 className="font-medium mb-2">Contacts</h5>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Phone size={14} className="text-primary-400" />
                    <span className="text-sm">{siteData.company.contact.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail size={14} className="text-primary-400" />
                    <span className="text-sm">{siteData.company.contact.email}</span>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium mb-2">Locations</h5>
                <div className="flex items-start space-x-2">
                  <MapPin size={14} className="text-primary-400 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">{siteData.company.contact.address}</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 btn btn-primary text-sm"
            >
              <span>Get Free Consultation</span>
              <ExternalLink size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-secondary-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400 text-center md:text-left">
              <p>
                Copyright © {currentYear} {siteData.company.fullName}. All Rights Reserved.
                <span className="ml-2">Designed By Shuraa Digital</span>
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <Link
                to="/privacy"
                className="text-sm text-gray-400 hover:text-primary-400 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
