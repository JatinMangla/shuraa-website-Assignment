// SEO utilities

export const generatePageTitle = (title, siteName = 'Shuraa Tax') => {
  return title ? `${title} - ${siteName}` : siteName
}

export const generateMetaDescription = (description, maxLength = 160) => {
  if (!description) return ''
  return description.length > maxLength 
    ? description.substring(0, maxLength - 3) + '...'
    : description
}

export const generateCanonicalUrl = (path, baseUrl = 'https://www.shuraatax.com') => {
  return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`
}

export const generateBreadcrumbSchema = (breadcrumbs) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  }
}

export const generateArticleSchema = (article) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "datePublished": new Date(article.date).toISOString(),
    "dateModified": new Date(article.date).toISOString(),
    "publisher": {
      "@type": "Organization",
      "name": "Shuraa Tax Accounting & Auditing",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.shuraatax.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.shuraatax.com/blog/${article.slug}`
    }
  }
}

export const generateOrganizationSchema = (company) => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": company.fullName,
    "alternateName": company.name,
    "url": "https://www.shuraatax.com/",
    "logo": "https://www.shuraatax.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": company.contact.phone,
      "contactType": "customer service",
      "email": company.contact.email,
      "areaServed": "AE",
      "availableLanguage": "en"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": company.contact.address,
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    "description": company.description,
    "foundingDate": company.founded,
    "serviceArea": {
      "@type": "Country",
      "name": "United Arab Emirates"
    }
  }
}

// export default {
//   generatePageTitle,
//   generateMetaDescription,
//   generateCanonicalUrl,
//   generateBreadcrumbSchema,
//   generateArticleSchema,
//   generateOrganizationSchema
// }
