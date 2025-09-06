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

function App() {
  return (
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
  )
}

export default App
