import React from 'react'
import { Helmet } from 'react-helmet-async'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import Stats from '../components/sections/Stats'
import Testimonials from '../components/sections/Testimonials'
import FAQ from '../components/sections/FAQ'
import siteData from '../data/siteData'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Tax Consultants in Dubai | UAE Tax Accounting Agents - Shuraa Tax</title>
        <meta 
          name="description" 
          content="Leading tax consultants in Dubai, UAE. Professional VAT registration, corporate tax, accounting & auditing services. Free consultation available. FTA certified agents." 
        />
        <meta 
          name="keywords" 
          content="tax consultants dubai, uae tax agents, vat registration, corporate tax uae, accounting services dubai, auditing services, shuraa tax" 
        />
        <link rel="canonical" href="https://www.shuraatax.com/" />

       
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.shuraatax.com/" />
        <meta property="og:title" content="Tax Consultants in Dubai | UAE Tax Accounting Agents - Shuraa Tax" />
        <meta property="og:description" content="Leading tax consultants in Dubai, UAE. Professional VAT registration, corporate tax, accounting & auditing services." />


        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.shuraatax.com/" />
        <meta property="twitter:title" content="Tax Consultants in Dubai | UAE Tax Accounting Agents - Shuraa Tax" />
        <meta property="twitter:description" content="Leading tax consultants in Dubai, UAE. Professional VAT registration, corporate tax, accounting & auditing services." />

      
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": siteData.company.fullName,
            "alternateName": siteData.company.name,
            "url": "https://www.shuraatax.com/",
            "logo": "https://www.shuraatax.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": siteData.company.contact.phone,
              "contactType": "customer service",
              "email": siteData.company.contact.email,
              "areaServed": "AE",
              "availableLanguage": "en"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": siteData.company.contact.address,
              "addressLocality": "Dubai",
              "addressCountry": "AE"
            },
            "sameAs": [
              "https://www.linkedin.com/company/shuraatax",
              "https://www.facebook.com/shuraatax"
            ],
            "description": siteData.company.description,
            "foundingDate": siteData.company.founded,
            "serviceArea": {
              "@type": "Country",
              "name": "United Arab Emirates"
            }
          })}
        </script>
      </Helmet>

      <div className="overflow-hidden">
        <Hero />
        <About />
        <Services />
        <Stats />
        <Testimonials />
        <FAQ />
      </div>
    </>
  )
}

export default Home
