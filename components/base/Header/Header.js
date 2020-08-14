import { useContext } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { ThemeContext } from "styled-components"

import { Container, LogoLink, Logo, Menu, MenuItem, ToggleIcon } from "./styles"

const Header = ({ toggleDarkMode }) => {
  const router = useRouter()
  const theme = useContext(ThemeContext)

  const isMenuItemActive = (item) => {
    if (item === "posts") {
      return router.pathname === "/" || router.pathname.includes("/posts")
    } else if (item === "about") {
      return router.pathname === "/about"
    }
  }

  return (
    <Container>
      <Link href="/" as={`/`}>
        <LogoLink>
          <Logo>nt</Logo>
        </LogoLink>
      </Link>
      <Menu>
        <MenuItem active={isMenuItemActive("posts")}>
          <Link href="/" as="/">
            <a>Stories</a>
          </Link>
        </MenuItem>
        <MenuItem active={isMenuItemActive("about")}>
          <Link href="/about" as="/about">
            <a>About me</a>
          </Link>
        </MenuItem>
      </Menu>
      <ToggleIcon onClick={toggleDarkMode}>{theme.themeIcon.icon}</ToggleIcon>
    </Container>
  )
}

export { Header }
