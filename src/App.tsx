import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout'
import Hero from './components/Hero'
import Stats from './components/Stats'
import AboutInfo from './components/AboutInfo'
import Biography from './components/Biography'
import Message from './components/Message'
import Lifestyle from './components/Lifestyle'
import Portfolio from './components/Portfolio'
import Gallery from './components/Gallery'
import Blog from './components/Blog'
import BlogDetail from './components/BlogDetail'
import Contact from './components/Contact'
import Error404 from './components/Error404'

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <Layout>
          <Hero />
          <Stats />
          <AboutInfo />
          <Biography />
          <Message />
          <Lifestyle />
          <Portfolio />
          <Gallery />
          <Blog />
        </Layout>
      } />
      <Route path="/blog/:id" element={<BlogDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}

export default App
