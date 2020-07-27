import { useContext } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { ThemeContext } from "styled-components"

import { Container, Logo, Menu, MenuItem, ToggleIcon } from "./styles"

const Header = ({ toggleDarkMode }) => {
  const router = useRouter()
  const theme = useContext(ThemeContext)

  const isPostsPathname = () => {
    return router.pathname === "/" || router.pathname.includes("/posts")
  }

  return (
    <Container>
      <Link href="/" as={`/`}>
        <a>
          <Logo>nt</Logo>
        </a>
      </Link>
      <Menu>
        <MenuItem active={isPostsPathname()}>Stories</MenuItem>
        <MenuItem active={false}>About me</MenuItem>
      </Menu>
      <ToggleIcon onClick={toggleDarkMode}>{theme.themeIcon.icon}</ToggleIcon>
    </Container>
  )
}

export { Header }
