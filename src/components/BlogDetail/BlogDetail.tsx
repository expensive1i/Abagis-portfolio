import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useIntersectionObserver } from '../../hooks'
import Navigation from '../layout/Navigation'
import Footer from '../layout/Footer/Footer'
import { blogPosts } from '../../data/blogData'

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { isVisible, ref: sectionRef } = useIntersectionObserver<HTMLElement>(0.2)
  const [showShareMenu, setShowShareMenu] = useState(false)

  const currentPost = blogPosts.find(post => post.id === parseInt(id || '1'))
  const otherPosts = blogPosts.filter(post => post.id !== parseInt(id || '1'))

  // Scroll to top when blog ID changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [id])

  const handleShare = (platform: string) => {
    const url = window.location.href
    const title = currentPost?.title || ''
    const description = currentPost?.excerpt || ''
    
    switch (platform) {
      case 'twitter': {
        const twitterText = `${title} - ${description}`
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterText)}&url=${encodeURIComponent(url)}&hashtags=Blog,Article`, '_blank')
        break
      }
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(title)}`, '_blank')
        break
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(description)}`, '_blank')
        break
      case 'copy':
        navigator.clipboard.writeText(url).then(() => {
          // Show a brief success message
          const button = document.querySelector('[data-copy-button]') as HTMLElement
          if (button) {
            const originalText = button.textContent
            button.textContent = 'Copied!'
            button.style.color = '#28a745'
            setTimeout(() => {
              button.textContent = originalText
              button.style.color = ''
            }, 2000)
          }
          setShowShareMenu(false)
        }).catch(() => {
          // Fallback for older browsers
          const textArea = document.createElement('textarea')
          textArea.value = url
          document.body.appendChild(textArea)
          textArea.select()
          document.execCommand('copy')
          document.body.removeChild(textArea)
          setShowShareMenu(false)
        })
        break
    }
  }

  if (!currentPost) {
    return <div>Post not found</div>
  }

  return (
    <div className="min-h-screen pattern-bg">
      <Navigation />
      
      <main ref={sectionRef}>
        {/* Hero Banner */}
        <section className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url("${currentPost.image}")` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          </div>
          
          <div className="relative z-10 h-full flex items-end">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16 w-full">
              <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
                <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
                  <span className="bg-[#FFE066] text-[#023F33] px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {currentPost.category}
                  </span>
                  <span className="text-white/80 text-xs sm:text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {currentPost.readTime}
                  </span>
                </div>
                
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {currentPost.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-white/80 text-sm sm:text-base">
                  <span style={{ fontFamily: 'Poppins, sans-serif' }}>By {currentPost.author}</span>
                  <span className="hidden sm:inline" style={{ fontFamily: 'Poppins, sans-serif' }}>•</span>
                  <span style={{ fontFamily: 'Poppins, sans-serif' }}>{currentPost.date}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Article Content */}
              <div className="lg:col-span-3">
                <article className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.4s' }}>
                  <div 
                    className="text-gray-700 leading-relaxed text-justify max-w-none prose prose-lg prose-headings:text-[#023F33] prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-p:text-justify prose-a:text-[#023F33] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#023F33]"
                    style={{ 
                      fontFamily: 'Poppins, sans-serif',
                      textAlign: 'justify',
                      hyphens: 'auto',
                      wordSpacing: '0.05em'
                    }}
                    dangerouslySetInnerHTML={{ __html: currentPost.content }}
                  />
                </article>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-8">
                  {/* Share Button */}
                  <div className={`bg-white rounded-2xl p-4 sm:p-6 shadow-lg transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.6s' }}>
                    <h3 className="text-base sm:text-lg font-bold text-[#023F33] mb-3 sm:mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      Share Article
                    </h3>
                    
                    <div className="relative">
                      <button
                        onClick={() => setShowShareMenu(!showShareMenu)}
                        className="w-full bg-[#023F33] hover:bg-[#035a4a] text-white font-semibold py-2 sm:py-3 px-3 sm:px-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                        </svg>
                        Share
                      </button>
                      
                      {showShareMenu && (
                        <div className="absolute bottom-full left-0 right-0 mb-2 bg-white rounded-lg shadow-xl border border-gray-200 p-2 z-[9999] min-w-max">
                          <button
                            onClick={() => handleShare('twitter')}
                            className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm flex items-center gap-3 whitespace-nowrap"
                          >
                            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>
                            Twitter
                          </button>
                          <button
                            onClick={() => handleShare('facebook')}
                            className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm flex items-center gap-3 whitespace-nowrap"
                          >
                            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                            Facebook
                          </button>
                          <button
                            onClick={() => handleShare('linkedin')}
                            className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm flex items-center gap-3 whitespace-nowrap"
                          >
                            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                            LinkedIn
                          </button>
                          <button
                            onClick={() => handleShare('copy')}
                            data-copy-button
                            className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm flex items-center gap-3 whitespace-nowrap"
                          >
                            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            Copy Link
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* More Articles - Horizontal Layout */}
        <section className="py-8 sm:py-12 lg:py-16 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.8s' }}>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#023F33] mb-3 sm:mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                More Articles
              </h3>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#FFE066] to-[#FFD700] mx-auto rounded-full"></div>
            </div>
            
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1.0s' }}>
              {otherPosts.map((post, index) => (
                <Link 
                  key={post.id} 
                  to={`/blog/${post.id}`}
                  className={`bg-gray-100 rounded-2xl transition-all duration-500 ease-out overflow-hidden group cursor-pointer block ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${1.2 + (index * 0.2)}s` }}
                >
                  {/* Blog Image */}
                  <div className="h-40 sm:h-48 relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                      <span className="bg-[#FFE066] text-[#023F33] px-2 py-1 rounded-full text-xs font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 text-white/80 text-xs" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {post.readTime}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-1.5 bg-[#FFE066] rounded-full"></div>
                      <span className="text-xs text-gray-500" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {post.date}
                      </span>
                    </div>
                    
                    <h3 className="text-base sm:text-lg font-bold text-[#023F33] mb-2 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
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
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default BlogDetail
