import React from 'react'
import { Link } from 'react-router-dom'
import { useIntersectionObserver } from '../../hooks'
import { blogPosts } from '../../data/blogData'

const Blog: React.FC = () => {
  const { isVisible, ref: sectionRef } = useIntersectionObserver(0.2);

  return (
    <section id="blog" ref={sectionRef} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-left mb-12 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.1s' }}>
            <div className={`inline-flex items-center gap-3 mb-4 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ transitionDelay: '0.2s' }}>
              <div className={`w-8 h-px bg-[#023F33] transition-all duration-500 ease-out ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transitionDelay: '0.15s' }}></div>
              <span className="text-[#023F33] font-semibold tracking-widest uppercase text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Latest Insights</span>
              <div className={`w-8 h-px bg-[#023F33] transition-all duration-500 ease-out ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transitionDelay: '0.25s' }}></div>
            </div>
          
          <h2 className={`text-2xl lg:text-3xl xl:text-4xl font-bold text-[#023F33] mb-4 leading-tight transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ fontFamily: 'Space Grotesk, sans-serif', transitionDelay: '0.3s' }}>
            Thoughts & Perspectives
          </h2>
          
          <p className={`text-base text-gray-600 max-w-2xl leading-relaxed transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ fontFamily: 'Poppins, sans-serif', transitionDelay: '0.5s' }}>
            Sharing insights on governance, technology, and the future of civic engagement in Africa and beyond.
          </p>
        </div>

        {/* Blog Posts Grid - News Website Layout */}
        <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.0s' }}>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content - 3 Cards in a Row */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {blogPosts.map((post, index) => (
                  <Link 
                    key={post.id} 
                    to={`/blog/${post.id}`}
                    className={`bg-gray-100 rounded-2xl transition-all duration-500 ease-out overflow-hidden group cursor-pointer block ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${1.2 + (index * 0.2)}s` }}
                  >
                    {/* Blog Image */}
                    <div className="h-48 relative overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute top-3 left-3">
                        <span className="bg-[#FFE066] text-[#023F33] px-2 py-1 rounded-full text-xs font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                          {post.category}
                        </span>
                      </div>
                      <div className="absolute bottom-3 right-3 text-white/80 text-xs" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {post.readTime}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-1.5 h-1.5 bg-[#FFE066] rounded-full"></div>
                        <span className="text-xs text-gray-500" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          {post.date}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-[#023F33] mb-2 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-3 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {post.excerpt}
                      </p>
                      
                      <span className="text-[#023F33] font-semibold hover:text-[#FFE066] transition-colors duration-300 flex items-center gap-1 group text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        Read More
                        <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar - Small Blog Previews */}
            <div className="lg:col-span-1">
              <div className={`bg-gray-100 rounded-2xl p-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.8s' }}>
                <h3 className="text-lg font-bold text-[#023F33] mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  More Articles
                </h3>
                
                <div className="space-y-4">
                  {blogPosts.map((post) => (
                    <Link 
                      key={`sidebar-${post.id}`} 
                      to={`/blog/${post.id}`}
                      className="flex gap-3 pb-4 border-b border-gray-200 last:border-b-0 last:pb-0 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200"
                    >
                      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-[#023F33] leading-tight mb-1 hover:text-gray-600 transition-colors duration-300" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          {post.date}
                        </p>
                        <span className="text-xs text-[#FFE066] font-medium" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                          {post.category}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
                
                <button className="w-full mt-4 text-[#023F33] font-semibold hover:text-[#FFE066] transition-colors duration-300 text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  View All Articles →
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Blog
