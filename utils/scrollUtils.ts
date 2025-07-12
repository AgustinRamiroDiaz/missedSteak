'use client'

export function smoothScrollTo(targetId: string) {
  const target = document.getElementById(targetId)
  if (!target) return

  const targetPosition = target.offsetTop - 72 // 72px offset like the original script
  
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  })
}

export function handleSmoothScroll(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
  // Only handle anchor links on the same page
  if (href.startsWith('#')) {
    event.preventDefault()
    const targetId = href.substring(1)
    smoothScrollTo(targetId)
    
    // Close navbar collapse on mobile
    const navbarCollapse = document.querySelector('.navbar-collapse')
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      // Use Bootstrap's collapse method if available
      const bsCollapse = (window as any).bootstrap?.Collapse
      if (bsCollapse) {
        const collapse = bsCollapse.getInstance(navbarCollapse) || new bsCollapse(navbarCollapse)
        collapse.hide()
      }
    }
  }
}