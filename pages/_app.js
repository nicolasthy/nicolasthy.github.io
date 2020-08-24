import Head from "next/head"
import { PageTransition } from "next-page-transitions"

import { GA_TRACKING_ID } from "../lib/gtag"
import { ThemeProvider } from "../contexts/ThemeProvider"

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <ThemeProvider>
      <Head>
        <title>Nicolas Thiry</title>
        <meta name="description" content="Nicolas Thiry" />
        <meta name="robots" content="noindex, nofollow" />
        <link
          href="https://fonts.googleapis.com/css?family=Lora:ital,wght@0,400;0,700;1,400;1,700|Poppins:400,500,600,700&display=swap"
          rel="stylesheet"
        ></link>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
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
