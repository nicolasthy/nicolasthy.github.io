import { ThemeProvider as StyledProvider } from "styled-components"

import { useDarkMode } from "../hooks/useDarkMode"

import { LIGHT_THEME } from "../themes/lightTheme"
import { DARK_THEME } from "../themes/darkTheme"

import Layout from "../components/base/Layout/Layout"

const ThemeProvider = ({ children }) => {
  const [isDark, toggleDarkMode, mountedComponent] = useDarkMode()

  const renderBody = () => {
    const body = (
      <Layout toggleDarkMode={toggleDarkMode}>
        {children}
      </Layout>
    )
    if (!mountedComponent) return <div style={{ visibility: "hidden" }}>{body}</div>
    return body
  }

  return <StyledProvider theme={isDark ? DARK_THEME : LIGHT_THEME}>{renderBody()}</StyledProvider>
}

export { ThemeProvider }
