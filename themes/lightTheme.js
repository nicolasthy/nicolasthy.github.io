import { COLORS } from "./constants"
import { hex2rgba } from "./utils"

import { Moon } from "@styled-icons/heroicons-solid/Moon"

export const LIGHT_THEME = {
  text: "#191716",
  textLight: "#191716",
  background: "#F7F7FF",
  backgroundTransition: "#9B5DE5",
  themeIcon: {
    icon: <Moon size="24" />,
    color: COLORS.primary,
  },
  link: "#424140",
  logo: {
    background: COLORS.primary,
    color: COLORS.light,
  },
  menu: {
    activeBackground: hex2rgba(COLORS.primary, 0.1),
    activeColor: COLORS.primary,
  },
  posts: {
    item: "#FCFCFF",
    itemHover: "#FFFFFF",
    itemShadow: "0 1px 2px 0 rgba(5, 7, 26, 0.1)",
    itemHoverShadow: "0 16px 12px -10px rgba(5, 7, 26, 0.1)",
    itemTitleColor: COLORS.primary,
    syntaxHighlightTheme: "githubGist",
    syntaxHighlightBackground: "#FAFAFF",
    imageShadowOpacity: 0.35,
    inlineCodeBackground: hex2rgba(COLORS.dark, 0.05),
    inlineCodeColor: hex2rgba(COLORS.primary, 0.8),
  },
}
