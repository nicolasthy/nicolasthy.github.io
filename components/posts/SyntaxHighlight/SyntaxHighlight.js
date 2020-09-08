import { useState, useContext } from "react"
import { ThemeContext } from "styled-components"
import * as themes from "react-syntax-highlighter/dist/cjs/styles/hljs"
import * as copy from "copy-to-clipboard"

import { ClipboardCopy } from "@styled-icons/heroicons-outline/ClipboardCopy"
import { Check } from "@styled-icons/heroicons-outline/Check"

import { LANGUAGES_COLORS } from "../../../themes/constants"
import { hex2rgba } from "../../../themes/utils"
import * as gtag from "../../../lib/gtag"

import { Container, CopyLink, CodeLanguage, CopyLinkChecked, StyledSyntaxHighlight } from "./styles"

const SyntaxHighlight = ({ value, language = "shell", slug }) => {
  const theme = useContext(ThemeContext)
  const [copied, setCopied] = useState(false)

  const lines = language.match(/{([^}]+)}/)
  const highlights = lines && lines[1].split(",").map((highlight) => Number.parseInt(highlight))
  const codeLanguage = lines ? language.replace(language.match(/{([^}]+)}/)[0], "") : language
  const formattedCodeLanguage = codeLanguage.toLowerCase()
  const languageColor = LANGUAGES_COLORS[formattedCodeLanguage] || "#000000"

  const handleCopyToClipboard = () => {
    gtag.event({ action: "post_syntax_copy", category: "click", label: `Copy code from ${slug}` })
    copy(value)
    if (!copied) setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }

  const renderCopyLink = () => {
    if (!copied)
      return (
        <span>
          <ClipboardCopy size="24" />
          Copy to clipboard
        </span>
      )

    return (
      <CopyLinkChecked>
        <Check size="24" />
        Copied!
      </CopyLinkChecked>
    )
  }

  return (
    <Container>
      <div>
        <CopyLink onClick={handleCopyToClipboard} className="syntaxHighlight_copyLink">
          {renderCopyLink()}
        </CopyLink>
        <CodeLanguage language={formattedCodeLanguage} className="syntaxHighlight_language">
          {codeLanguage}
        </CodeLanguage>
      </div>
      <StyledSyntaxHighlight
        className="syntaxHighlight_snippet"
        language={formattedCodeLanguage}
        style={themes[theme.posts.syntaxHighlightTheme]}
        wrapLines={true}
        lineProps={(lineNumber) => {
          let style = {}
          if (highlights && highlights.includes(lineNumber)) {
            style.backgroundColor = hex2rgba(languageColor, 0.1)
            style.borderLeft = `3px solid ${languageColor}`
          }
          return { style }
        }}
      >
        {value}
      </StyledSyntaxHighlight>
    </Container>
  )
}

export { SyntaxHighlight }
