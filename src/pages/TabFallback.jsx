import { motion } from 'framer-motion'

const TabFallback = ({ tabName = 'Page' }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-20 h-20 mx-auto mb-6 relative">
            {/* Animated loading rings */}
            <motion.div
              className="absolute inset-0 border-4 border-primary-200 border-t-primary-600 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-2 border-4 border-primary-100 border-b-primary-500 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            />

            {/* ShuraaTax Logo placeholder */}
            <div className="absolute inset-4 bg-primary-600 rounded-full flex items-center justify-center">
              {/* <span className="text-white font-bold text-lg">S</span> */}
               <img
                src='./shuraatax_icon.webp'
                className=" object-cover transition-transform group-hover:scale-105"
                alt="Loading..."
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Loading {tabName}
          </h2>
          <p className="text-gray-600 mb-6">
            Please wait while we prepare the content for you...
          </p>

          {/* Progress bar animation */}
          <div className="w-64 h-2 bg-gray-200 rounded-full mx-auto overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>

        {/* Floating elements for visual appeal */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-300 rounded-full"
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent-400 rounded-full"
            animate={{
              y: [10, -10, 10],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary-400 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          />
        </div>
      </div>
    </div>
  )
}

// Specific fallback components for different tabs
export const HomeFallback = () => <TabFallback tabName="Home" />
export const AboutFallback = () => <TabFallback tabName="About" />
export const ServicesFallback = () => <TabFallback tabName="Services" />
export const CareerFallback = () => <TabFallback tabName="Career" />
export const BlogFallback = () => <TabFallback tabName="Blog" />
export const TeamsFallback = () => <TabFallback tabName="Teams" />
export const BlogDetailsFallback = () => <TabFallback tabName="Blog Details" />
export const ContactFallback = () => <TabFallback tabName="Contact" />

export default TabFallback