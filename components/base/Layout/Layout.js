import { Header } from "../Header/Header"

import { GlobalStyles } from "./styles/global"
import { Container } from "./styles"

const Layout = ({ toggleDarkMode, children }) => {
  return (
    <Container>
      <GlobalStyles />
      <Header toggleDarkMode={toggleDarkMode} />
      {children}
    </Container>
  )
}

export default Layout
