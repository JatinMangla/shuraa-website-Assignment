import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import {
  Calendar,
  User,
  ArrowRight,
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Tag,
  Clock
} from 'lucide-react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import siteData from '../data/siteData'

const BlogDetails = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState([])
  const [showShareMenu, setShowShareMenu] = useState(false)

  useEffect(() => {
    // Find the post by slug
    const foundPost = siteData.blogPosts.find(p => p.slug === slug)

    if (!foundPost) {
      navigate('/blog')
      return
    }

    setPost(foundPost)

    // Get related posts (same category, excluding current post)
    const related = siteData.blogPosts
      .filter(p => p.category === foundPost.category && p.id !== foundPost.id)
      .slice(0, 3)

    setRelatedPosts(related)
  }, [slug, navigate])

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareTitle = post ? post.title : ''

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
  }


  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600 mx-auto mb-8"></div>
          <p className="text-gray-600">Loading article...</p>
        </div>
      </div>
    )
  }

  // Mock article content - in real app this would come from CMS or API
  const articleContent = `
    <div class="prose prose-lg max-w-none">
      <p class="lead">
        ${post.excerpt}
      </p>

      <h2>Understanding the Current Tax Landscape</h2>
      <p>
        The UAE has undergone significant changes in its tax system over the past few years. With the introduction of VAT in 2018 and Corporate Tax in 2023, businesses need to stay informed about their obligations and opportunities.
      </p>

      <h3>Key Considerations for Businesses</h3>
      <ul>
        <li>Proper registration and compliance procedures</li>
        <li>Understanding exemptions and special provisions</li>
        <li>Maintaining accurate records and documentation</li>
        <li>Regular review of tax positions and strategies</li>
      </ul>

      <h2>Best Practices and Recommendations</h2>
      <p>
        To ensure compliance and optimize your tax position, we recommend working with qualified tax professionals who understand the nuances of UAE tax law. Our team at Shuraa Tax has extensive experience helping businesses navigate these requirements.
      </p>

      <blockquote>
        "Staying compliant with UAE tax regulations is not just about avoiding penalties – it's about building a strong foundation for sustainable business growth." - Shuraa Tax Expert Team
      </blockquote>

      <h3>Next Steps</h3>
      <p>
        If you need assistance with tax compliance, planning, or have questions about your specific situation, don't hesitate to reach out to our team for a free consultation.
      </p>
    </div>
  `

  return (
    <>
      <Helmet>
        <title>{post.title} - Shuraa Tax Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={`${post.category.toLowerCase()}, uae tax, dubai tax consultant, ${post.title.toLowerCase()}`} />
        <link rel="canonical" href={`https://www.shuraatax.com/blog/${post.slug}`} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={shareUrl} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />
        <meta property="article:section" content={post.category} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Article Header */}
        <section className="bg-white border-b border-gray-200">
          <div className="container-custom py-8">
            <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
              <Link to="/" className="hover:text-primary-600 transition-colors">HOME</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-primary-600 transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-gray-900 font-medium">{post.title}</span>
            </nav>

            <div className='flex justify-between content-center flex-wrap'>
              {/* Category Tag */}
              <div className="mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-600 text-white">
                  <Tag size={14} className="mr-1" />
                  {post.category}
                </span>

              </div>


              {/* Share Buttons */}
              <div className="flex items-center space-x-4 mb-8">
                <span className="text-sm font-medium text-gray-700">Share:</span>
                <div className="flex items-center space-x-2">
                  <a
                    href={shareLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    aria-label="Share on Facebook"
                  >
                    <Facebook size={16} />
                  </a>
                  <a
                    href={shareLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors duration-200"
                    aria-label="Share on Twitter"
                  >
                    <Twitter size={16} />
                  </a>
                  <a
                    href={shareLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >


              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  <span>5 min read</span>
                </div>
              </div>


            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-3"
              >
                <Card className="p-8 md:p-12">
                  {/* Featured Image Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl mb-8 flex items-center justify-center">
                    <div className="text-primary-600 opacity-50">
                      <Calendar size={64} />
                    </div>
                  </div>

                  {/* Article Content */}
                  <div
                    className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-semibold prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-blockquote:border-primary-600 prose-blockquote:bg-primary-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-lg prose-blockquote:not-italic prose-ul:text-gray-700 prose-ol:text-gray-700"
                    dangerouslySetInnerHTML={{ __html: articleContent }}
                  />

                  {/* Article Footer */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                      <div>
                        <p className="text-sm font-medium text-gray-900 mb-1">Written by</p>
                        <p className="text-gray-600">{post.author}</p>
                      </div>

                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-600">Share this article:</span>
                        <div className="flex items-center space-x-2">
                          <a
                            href={shareLinks.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200"
                          >
                            <Facebook size={16} />
                          </a>
                          <a
                            href={shareLinks.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-sky-500 hover:text-white transition-colors duration-200"
                          >
                            <Twitter size={16} />
                          </a>
                          <a
                            href={shareLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-blue-700 hover:text-white transition-colors duration-200"
                          >
                            <Linkedin size={16} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="lg:col-span-1 space-y-8"
              >
                {/* Free Consultation CTA */}
                <Card className="p-6 text-center bg-gradient-to-br from-primary-600 to-primary-700 text-white">
                  <h3 className="text-xl font-semibold mb-4">
                    Get Expert Tax Advice
                  </h3>
                  <p className="text-primary-100 mb-6 text-sm">
                    Need personalized guidance for your business? Book a free consultation with our tax experts.
                  </p>
                  <Link to="/contact">
                    <Button size="sm" className="bg-accent-500 text-black hover:bg-accent-600 w-full">
                      Book Free Consultation
                    </Button>
                  </Link>
                </Card>

                {/* Categories */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {[...new Set(siteData.blogPosts.map(p => p.category))].map(category => (
                      <Link
                        key={category}
                        to={`/blog?category=${encodeURIComponent(category)}`}
                        className="block text-gray-600 hover:text-primary-600 transition-colors duration-200 text-sm py-1"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </Card>

                {/* Trending Posts */}
                {relatedPosts.length > 0 && (
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Articles</h3>
                    <div className="space-y-4">
                      {relatedPosts.map(relatedPost => (
                        <Link
                          key={relatedPost.id}
                          to={`/blog/${relatedPost.slug}`}
                          className="block group"
                        >
                          <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary-600 transition-colors duration-200 mb-2 line-clamp-2">
                            {relatedPost.title}
                          </h4>
                          <p className="text-xs text-gray-500">{relatedPost.date}</p>
                        </Link>
                      ))}
                    </div>
                  </Card>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="bg-white border-t border-gray-200 py-8">
          <div className="container-custom">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <Link
                to="/blog"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-200"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to Blog
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-200"
              >
                Get Consultation
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default BlogDetails
