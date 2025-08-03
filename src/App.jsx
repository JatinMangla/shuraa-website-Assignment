import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import BlogListing from './pages/BlogListing'
import BlogDetails from './pages/BlogDetails'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Career from './pages/Career'
import Teams from './pages/Teams'
import { HelmetProvider } from 'react-helmet-async'

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="blog" element={<BlogListing />} />
            <Route path="blog/:slug" element={<BlogDetails />} />
            <Route path="team" element={<Teams />} />
            <Route path="career" element={<Career />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HelmetProvider>
    </div>
  )
}

export default App