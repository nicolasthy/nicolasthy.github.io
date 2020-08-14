import { useContext } from "react"
import { ThemeContext } from "styled-components"
import Head from "next/head"

import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"

import { GlobalStyles } from "./styles/global"
import { Container } from "./styles"

const Layout = ({ toggleDarkMode, children }) => {
  const theme = useContext(ThemeContext)
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
