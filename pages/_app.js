import Head from "next/head"
import { PageTransition } from "next-page-transitions"

import { SITE_CONFIG } from "../config/siteConfig"
import { GA_TRACKING_ID } from "../lib/gtag"
import { ThemeProvider } from "../contexts/ThemeProvider"

const MyApp = ({ Component, pageProps, router }) => {
  const { title, description } = SITE_CONFIG
  return (
    <ThemeProvider>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content={title} />
        <meta name="robots" content="index, follow" />

        <link
          href="https://fonts.googleapis.com/css?family=Lora:ital,wght@0,400;0,700;1,400;1,700|Poppins:400,500,600,700&display=swap"
          rel="preload"
          as="style"
          onload="this.onload=null;this.rel='stylesheet'"
        ></link>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <PageTransition
        timeout={800}
        skipInitialTransition={true}
        monkeyPatchScrolling={true}
        classNames="page-transition"
      >
        <Component {...pageProps} key={router.route} />
      </PageTransition>
    </ThemeProvider>
  )
}

export default MyApp
