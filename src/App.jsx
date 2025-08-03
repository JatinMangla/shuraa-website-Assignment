import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import NotFound from './pages/NotFound'
import { HelmetProvider } from 'react-helmet-async'
import { HomeFallback, AboutFallback, ServicesFallback, BlogFallback, BlogDetailsFallback, TeamsFallback, CareerFallback, ContactFallback } from './pages/TabFallback'

function App() {
  const Home = React.lazy(() => import('./pages/Home'))
  const About = React.lazy(() => import('./components/sections/About'))
  const Services = React.lazy(() => import('./components/sections/Services'))
  const BlogListing = React.lazy(() => import('./pages/BlogListing'))
  const BlobDetails = React.lazy(() => import('./pages/BlogDetails'))
  const Teams = React.lazy(() => import('./pages/Teams'))
  const Career = React.lazy(() => import('./pages/Career'))
  const Contact = React.lazy(() => import('./pages/Contact'))

  return (
    <div className="App">
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Suspense fallback={<HomeFallback />}><Home /></Suspense>} />
            <Route path="about" element={<Suspense fallback={<AboutFallback />}><About /></Suspense>} />
            <Route path="services" element={<Suspense fallback={<ServicesFallback />}><Services /></Suspense>} />
            <Route path="blog" element={<Suspense fallback={<BlogFallback />}><BlogListing /></Suspense>} />
            <Route path="blog/:slug" element={<Suspense fallback={<BlogDetailsFallback />}><BlobDetails /></Suspense>} />
            <Route path="team" element={<Suspense fallback={<TeamsFallback />}><Teams /></Suspense>} />
            <Route path="career" element={<Suspense fallback={<CareerFallback />}><Career /></Suspense>} />
            <Route path="contact" element={<Suspense fallback={<ContactFallback />}><Contact /></Suspense>} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HelmetProvider>
    </div>
  )
}

export default App