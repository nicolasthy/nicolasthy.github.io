import { SyntaxHighlight } from "../SyntaxHighlight/SyntaxHighlight"
import { InlineCode } from "../InlineCode/InlineCode"
import { PostImage } from "../PostImage/PostImage"

import { StyledMarkdown } from "./styles"

const Markdown = ({ source }) => {
  return (
    <StyledMarkdown
      source={source}
      escapeHtml={false}
      renderers={{
        code: SyntaxHighlight,
        inlineCode: InlineCode,
        image: PostImage,
      }}
    />
  )
}

export { Markdown }
