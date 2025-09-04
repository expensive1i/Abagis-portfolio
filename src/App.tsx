import Layout from './components/layout'
import Hero from './components/Hero'
import Stats from './components/Stats'
import AboutInfo from './components/AboutInfo'
import Biography from './components/Biography'
import Message from './components/Message'
import Lifestyle from './components/Lifestyle'
import QuickAction from './components/QuickAction'
import Gallery from './components/Gallery'

function App() {
  return (
    <Layout>
      <Hero />
      <Stats />
      <AboutInfo />
      <Biography />
      <Message />
      <Lifestyle />
     
      <Gallery />
      <QuickAction />
    </Layout>
  )
}

export default App
