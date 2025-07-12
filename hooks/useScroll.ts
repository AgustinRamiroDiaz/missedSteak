'use client'

import { useState, useEffect } from 'react'

interface ScrollPosition {
  x: number
  y: number
}

export function useScroll() {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({ x: 0, y: 0 })
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const currentScrollX = window.scrollX
      
      setScrollPosition({
        x: currentScrollX,
        y: currentScrollY
      })
      
      setIsScrolled(currentScrollY > 100)
    }

    // Set initial scroll position
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return {
    scrollPosition,
    isScrolled,
    isNavbarShrunk: scrollPosition.y > 100
  }
}