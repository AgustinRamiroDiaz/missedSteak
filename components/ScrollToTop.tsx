'use client'

import { useScroll } from '../hooks/useScroll'
import { smoothScrollTo } from '../utils/scrollUtils'

export default function ScrollToTop() {
  const { isScrolled } = useScroll()

  const scrollToTop = () => {
    smoothScrollTo('page-top')
  }

  return (
    <div 
      className={`scroll-to-top d-lg-none position-fixed ${isScrolled ? 'd-block' : 'd-none'}`}
      style={{
        opacity: isScrolled ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out'
      }}
    >
      <button 
        className="d-block text-center text-white rounded border-0 w-100 h-100"
        onClick={scrollToTop}
        style={{
          background: 'rgba(26, 188, 156, 0.8)',
          width: '2.5rem',
          height: '2.5rem',
          position: 'fixed',
          bottom: '1rem',
          right: '1rem',
          borderRadius: '50%',
          cursor: 'pointer'
        }}
        aria-label="Scroll to top"
      >
        <i className="fa fa-chevron-up"></i>
      </button>
    </div>
  )
}