import Head from "next/head"
import { ThemeProvider } from "../contexts/ThemeProvider"

const MyApp = ({ Component, pageProps }) => {
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
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
