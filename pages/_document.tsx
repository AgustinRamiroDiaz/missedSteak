import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/assets/img/salad.png" />
        {/* Font Awesome icons (free version) */}
        <script src="https://use.fontawesome.com/releases/v5.15.3/js/all.js" crossOrigin="anonymous"></script>
        {/* Google fonts */}
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css" />
        {/* Core theme CSS (includes Bootstrap) */}
        <link href="/css/styles.css" rel="stylesheet" />
      </Head>
      <body id="page-top" suppressHydrationWarning>
        <Main />
        <NextScript />
        {/* Bootstrap core JS */}
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"></script>
        {/* Third party plugin JS */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
        {/* Contact form JS */}
        <script src="/assets/mail/jqBootstrapValidation.js"></script>
        <script src="/assets/mail/contact_me.js"></script>
        {/* Core theme JS */}
        <script src="/js/scripts.js"></script>
      </body>
    </Html>
  )
}