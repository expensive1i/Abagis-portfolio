import Layout from './components/layout'
import Hero from './components/Hero'
import Stats from './components/Stats'
import AboutInfo from './components/AboutInfo'
import Biography from './components/Biography'
import Lifestyle from './components/Lifestyle'
import Gallery from './components/Gallery'

function App() {
  return (
    <Layout>
      <Hero />
      <Stats />
      <AboutInfo />
      <Biography />
      <Lifestyle />
      <Gallery />
    </Layout>
  )
}

export default App
