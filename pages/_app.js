import Head from "next/head"
import { PageTransition } from "next-page-transitions"

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
