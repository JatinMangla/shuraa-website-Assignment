import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react'
import Card from '../components/ui/Card'
import Input from '../components/ui/Input'
import Select from '../components/ui/Select'
import Button from '../components/ui/Button'
import siteData from '../data/siteData'
import { containerVariants, itemVariants } from '../utils/commonFunctions'

const BlogListing = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  // Get unique categories
  const categories = useMemo(() => {
    const cats = [...new Set(siteData.blogPosts.map(post => post.category))]
    return cats.map(cat => ({ value: cat, label: cat }))
  }, [])

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    return siteData.blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = !selectedCategory || post.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  // Paginate posts
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  )

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 500, behavior: 'smooth' })
  }


  return (
    <>
      <Helmet>
        <title>Tax & Accounting Blog | UAE Tax Updates - Shuraa Tax</title>
        <meta
          name="description"
          content="Stay updated with latest UAE tax regulations, VAT rules, corporate tax updates and accounting insights from Shuraa Tax experts in Dubai."
        />
        <meta
          name="keywords"
          content="uae tax blog, vat updates, corporate tax news, accounting insights, dubai tax regulations, shuraa tax blog"
        />
        <link rel="canonical" href="https://www.shuraatax.com/blog" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <section className="bg-white border-b border-gray-200">
          <div className="container-custom py-10">
            <div className="max-w-3xl">
              <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
                <Link to="/" className="hover:text-primary-600 transition-colors">HOME</Link>
                <span>/</span>
                <span className="text-gray-900 font-medium">Blogs</span>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Blogs
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Stay updated with the latest insights on UAE taxation, VAT regulations,
                  corporate tax updates, and accounting best practices from our expert team.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="bg-white border-b border-gray-200">
          <div className="container-custom py-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <div className="relative w-full sm:w-80">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12"
                  />
                </div>

                <div className="w-full sm:w-48">
                  <Select
                    options={categories}
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    placeholder="All Categories"
                  />
                </div>
              </div>

              <div className="text-sm text-gray-600">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            >
              {currentPosts.map((post) => (
                <motion.div key={post.id} variants={itemVariants}>
                  <Card className="h-full group">
                    {/* Post Image */}
                    <div className="relative mb-6 overflow-hidden rounded-lg">
                      <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                        <div className="text-primary-600 opacity-50">
                          <Calendar size={48} />
                        </div>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-600 text-white">
                          <Tag size={12} className="mr-1" />
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Post Content */}
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar size={14} className="mr-2" />
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <User size={14} className="mr-1" />
                        <span>{post.author}</span>
                      </div>

                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 mb-4 flex-1 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200 group"
                      >
                        Read More
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Pagination */}
            {totalPages > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex justify-center items-center space-x-2"
              >
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  Prev
                </button>

                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    className={`px-4 py-2 rounded-lg transition-colors duration-200 ${currentPage === index + 1
                      ? 'bg-primary-600 text-white'
                      : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  Next
                </button>
              </motion.div>
            )}

            {/* No Results */}
            {filteredPosts.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center py-16"
              >
                <div className="text-gray-400 mb-4">
                  <Search size={64} className="mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search terms or browse all categories.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedCategory('')
                  }}
                  variant="outline"
                >
                  Clear Filters
                </Button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Free Consultation CTA */}
        <section className="bg-primary-900 text-white py-16">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need Expert Tax Advice?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Get professional guidance from our certified tax consultants
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-accent-500 text-black hover:bg-accent-600">
                  Book Free Consultation
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default BlogListing
