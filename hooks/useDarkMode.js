import { useEffect, useState } from "react"

let prefersDarkMode

if (process.browser) {
  const localPreference = JSON.parse(localStorage.getItem("nicolasthyPrefersDarkMode"))
  prefersDarkMode =
    typeof localPreference !== "undefined" ? localPreference : window.matchMedia("(prefers-color-scheme: dark)").matches
}

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState()
  const [mountedComponent, setMountedComponent] = useState(false)

  const toggleDarkMode = () => {
    window.localStorage.setItem("nicolasthyPrefersDarkMode", !isDark)
    setIsDark(!isDark)
  }

  useEffect(() => {
    setIsDark(prefersDarkMode)
    setMountedComponent(true)
  }, [])

  return [isDark, toggleDarkMode, mountedComponent]
}
