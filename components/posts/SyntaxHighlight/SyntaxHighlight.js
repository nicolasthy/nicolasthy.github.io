import { useState, useContext } from "react"
import { ThemeContext } from "styled-components"
import * as themes from "react-syntax-highlighter/dist/cjs/styles/hljs"
import * as copy from "copy-to-clipboard"

import { ClipboardCopy } from "@styled-icons/heroicons-outline/ClipboardCopy"
import { Check } from "@styled-icons/heroicons-outline/Check"

import { Container, CopyLink, CodeLanguage, CopyLinkChecked, StyledSyntaxHighlight } from "./styles"

const SyntaxHighlight = ({ value, language = "shell" }) => {
  const theme = useContext(ThemeContext)
  const [copied, setCopied] = useState(false)

  const lines = language.match(/{([^}]+)}/)
  const highlights = lines && lines[1].split(",").map((highlight) => Number.parseInt(highlight))
  const codeLanguage = lines ? language.replace(language.match(/{([^}]+)}/)[0], "") : language

  const handleCopyToClipboard = () => {
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
        <CopyLink onClick={handleCopyToClipboard}>{renderCopyLink()}</CopyLink>
        <CodeLanguage>{codeLanguage}</CodeLanguage>
      </div>
      <StyledSyntaxHighlight
        language={codeLanguage.toLowerCase()}
        style={themes[theme.posts.syntaxHighlightTheme]}
        wrapLines={true}
      >
        {value}
      </StyledSyntaxHighlight>
    </Container>
  )
}

export { SyntaxHighlight }
