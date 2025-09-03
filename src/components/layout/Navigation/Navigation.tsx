import React from 'react'

const Navigation: React.FC = () => {
  return (
    <nav className="w-full py-6 relative z-50">
      {/* Content with curved edges and professional styling */}
      <div className="container mx-auto px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Curved navbar container with reduced curvature */}
          <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl px-8 py-4">
            <div className="flex justify-between items-center">
              {/* Logo/Name - Cleaner styling */}
              <div className="flex-shrink-0">
                <h1 className="text-3xl font-black text-white tracking-widest hover:text-[#FFDE59] transition-all duration-300 cursor-pointer">
                  LA
                </h1>
              </div>

              {/* Navigation Menu - Professional spacing */}
              <div className="hidden lg:flex items-center space-x-12">
                
               
                <a href="#experience" className="text-white/90 hover:text-[#FFDE59] font-medium text-base transition-all duration-300 hover:scale-105 relative group">
                  Experience
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFDE59] transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#contact" className="text-white/90 hover:text-[#FFDE59] font-medium text-base transition-all duration-300 hover:scale-105 relative group">
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFDE59] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>

              {/* Social Links - Refined styling */}
              <div className="flex items-center space-x-6">
                {/* Twitter */}
                <a href="#" className="text-white/80 hover:text-[#FFDE59] transition-all duration-300 hover:scale-110 p-2.5 rounded-full hover:bg-white/5">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                
                {/* LinkedIn */}
                <a href="#" className="text-white/80 hover:text-[#FFDE59] transition-all duration-300 hover:scale-110 p-2.5 rounded-full hover:bg-white/5">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.856-3.047-1.856 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                
                {/* TikTok */}
                <a href="#" className="text-white/80 hover:text-[#FFDE59] transition-all duration-300 hover:scale-110 p-2.5 rounded-full hover:bg-white/5">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
                
                {/* YouTube */}
                <a href="#" className="text-white/80 hover:text-[#FFDE59] transition-all duration-300 hover:scale-110 p-2.5 rounded-full hover:bg-white/5">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                
                {/* Facebook */}
                <a href="#" className="text-white/80 hover:text-[#FFDE59] transition-all duration-300 hover:scale-110 p-2.5 rounded-full hover:bg-white/5">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
