import { SyntaxHighlight } from "../SyntaxHighlight/SyntaxHighlight"
import { InlineCode } from "../InlineCode/InlineCode"
import { PostImage } from "../PostImage/PostImage"

import { StyledMarkdown } from "./styles"

const Markdown = ({ source, slug }) => {
  const SyntaxHighlightWrapper = ({ value, language }) => (
    <SyntaxHighlight value={value} language={language} slug={slug} />
  )

  return (
    <StyledMarkdown
      source={source}
      escapeHtml={false}
      renderers={{
        code: SyntaxHighlightWrapper,
        inlineCode: InlineCode,
        image: PostImage,
      }}
    />
  )
}

export { Markdown }
