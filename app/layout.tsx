import type { Metadata } from 'next'
import Script from 'next/script'
import './global.css'

export const metadata: Metadata = {
  title: 'Missed Steak - Vegetarian Recipes',
  description: 'Vegetarian recipes that will show you that becoming a vegetarian is not a missed steak',
  icons: {
    icon: '/assets/img/salad.png',
  },
}

export const viewport = 'width=device-width, initial-scale=1, shrink-to-fit=no'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        {/* Google fonts */}
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css" />
        {/* Core theme CSS (includes Bootstrap) */}
        <link href="/css/styles.css" rel="stylesheet" />
      </head>
      <body id="page-top">
        {children}
        
        {/* Font Awesome icons (free version) */}
        <Script 
          src="https://use.fontawesome.com/releases/v5.15.3/js/all.js" 
          strategy="beforeInteractive"
          crossOrigin="anonymous"
        />
        
        {/* Bootstrap core JS */}
        <Script 
          src="https://code.jquery.com/jquery-3.5.1.min.js"
          strategy="beforeInteractive"
        />
        
        <Script 
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
        
        {/* Third party plugin JS */}
        <Script 
          src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"
          strategy="afterInteractive"
        />
        
        {/* Contact form JS */}
        <Script 
          src="/assets/mail/jqBootstrapValidation.js"
          strategy="afterInteractive"
        />
        
        <Script 
          src="/assets/mail/contact_me.js"
          strategy="afterInteractive"
        />
        
        {/* Core theme JS */}
        <Script 
          src="/js/scripts.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}