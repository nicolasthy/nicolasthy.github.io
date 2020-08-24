import { useContext, useEffect } from "react"
import { ThemeContext } from "styled-components"
import Head from "next/head"
import Router from "next/router"

import * as gtag from "../../../lib/gtag"

import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"

import { GlobalStyles } from "./styles/global"
import { Container } from "./styles"

const Layout = ({ toggleDarkMode, children }) => {
  const theme = useContext(ThemeContext)

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    Router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [])

  return (
    <Container>
      <Head>
        <link rel="shortcut icon" href={`/${theme.favicon}`} />
      </Head>
      <GlobalStyles />
      <Header toggleDarkMode={toggleDarkMode} />
      {children}
      <Footer />
    </Container>
  )
}

export default Layout
