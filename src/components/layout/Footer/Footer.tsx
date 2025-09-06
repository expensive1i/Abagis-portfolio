import React from 'react'
import Newsletter from '../../Newsletter'
import QuickAction from '../../QuickAction'

const Footer: React.FC = () => {
  return (
    <>
      {/* Newsletter and QuickAction Section */}
      <div className="pattern-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8">
            {/* Newsletter on the left */}
            <div className="lg:col-span-1">
              <Newsletter />
            </div>
            
            {/* QuickAction on the right */}
            <div className="lg:col-span-1">
              <QuickAction />
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-[#023F33] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 lg:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            
            {/* Brand Section */}
            <div className="text-center md:text-left lg:col-span-1">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 lg:mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Lucy James Abagi
              </h3>
              <p className="text-white/80 mb-3 sm:mb-4 text-xs sm:text-sm lg:text-base leading-relaxed">
                A passionate advocate for justice, governance, and citizen empowerment. Leading innovative reforms and digital solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Quick Links
              </h4>
              <div className="space-y-1 sm:space-y-2">
                <a href="#about" className="block text-white/80 hover:text-[#FFE066] transition-colors duration-300 text-xs sm:text-sm lg:text-base">
                  About
                </a>
                <a href="#portfolio" className="block text-white/80 hover:text-[#FFE066] transition-colors duration-300 text-xs sm:text-sm lg:text-base">
                  Portfolio
                </a>
                <a href="#blog" className="block text-white/80 hover:text-[#FFE066] transition-colors duration-300 text-xs sm:text-sm lg:text-base">
                  Blog
                </a>
                <a href="#gallery" className="block text-white/80 hover:text-[#FFE066] transition-colors duration-300 text-xs sm:text-sm lg:text-base">
                  Gallery
                </a>
              </div>
            </div>

            {/* Social Links & Contact */}
            <div className="text-center md:text-left lg:text-right">
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Connect
              </h4>
              <div className="flex justify-center md:justify-start lg:justify-end gap-2 sm:gap-3 mb-3 sm:mb-4">
                <a href="https://x.com/lucydavis2012" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-1.5 sm:p-2 lg:p-3 rounded-full hover:bg-white/20 transition-colors duration-300">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/lucy-abagi-a94a98128/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-1.5 sm:p-2 lg:p-3 rounded-full hover:bg-white/20 transition-colors duration-300">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.856-3.047-1.856 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/lucyjamesabagi" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-1.5 sm:p-2 lg:p-3 rounded-full hover:bg-white/20 transition-colors duration-300">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-white/10 mt-6 sm:mt-8 pt-4 sm:pt-6">
            <div className="text-center">
              <p className="text-white/60 text-xs sm:text-sm">
                © {new Date().getFullYear()} Lucy James Abagi. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
