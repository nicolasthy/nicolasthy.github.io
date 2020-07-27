import { SyntaxHighlight } from "../SyntaxHighlight/SyntaxHighlight"

import { StyledMarkdown } from "./styles"

const Markdown = ({ source }) => {
  return (
    <StyledMarkdown
      source={source}
      escapeHtml={false}
      renderers={{
        code: SyntaxHighlight,
      }}
    />
  )
}

export { Markdown }
