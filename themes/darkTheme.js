import { COLORS } from "./constants"
import { hex2rgba } from "./utils"

import { Sun } from "@styled-icons/heroicons-solid/Sun"

export const DARK_THEME = {
  name: "dark",
  favicon: "favicon-dark.ico",
  text: "#F7F7FF",
  textLight: "#B1B0B6",
  textStrong: COLORS.secondary,
  background: "#0E0C0C",
  backgroundTransition: "#CFF7B9",
  themeIcon: {
    icon: <Sun size="24" />,
    color: COLORS.secondary,
  },
  link: COLORS.secondary,
  logo: {
    background: COLORS.secondary,
    color: COLORS.dark,
  },
  profile: {
    background: COLORS.primary,
  },
  about: {
    mockup: "/static/mockup-portrait-dark.png",
  },
  header: {
    background: "#161413",
  },
  menu: {
    activeBackground: hex2rgba(COLORS.secondary, 0.1),
    activeColor: COLORS.secondary,
  },
  footer: {
    text: hex2rgba("#F7F7FF", 0.4),
  },
  posts: {
    item: "#161413",
    itemHover: "#1E1B1A",
    itemShadow: "0 1px 2px 0 rgba(5, 7, 26, 0.2)",
    itemHoverShadow: "0 16px 12px -10px rgba(5, 7, 26, 0.2)",
    itemTitleColor: COLORS.secondary,
    syntaxHighlightTheme: "atomOneDark",
    syntaxHighlightBackground: "#191716",
    imageShadowOpacity: 0.05,
    imageBackgroundOverlay: "#0E0C0C",
    inlineCodeBackground: hex2rgba(COLORS.light, 0.1),
    inlineCodeColor: hex2rgba(COLORS.secondary, 0.8),
  },
  playlists: {
    itemBackground: "#1E1B1A",
    itemShadow: "0 1px 2px 0 rgba(5, 7, 26, 0.2)",
    itemHoverShadow: "0 16px 12px -10px rgba(5, 7, 26, 0.2)",
    itemOpacity: 1,
    itemHoverOpacity: 0.7,
  },
}
