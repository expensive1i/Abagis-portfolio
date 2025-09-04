import React from 'react'
import Footer from './Footer/Footer'
import { ScrollToTop } from '../common'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <main className="flex-grow bg-transparent">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Layout
