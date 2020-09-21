import { TwitterTweet } from "../TwitterTweet/TwitterTweet"
import { SyntaxHighlight } from "../SyntaxHighlight/SyntaxHighlight"
import { InlineCode } from "../InlineCode/InlineCode"
import { PostImage } from "../PostImage/PostImage"

import demos from "../../demos"

import { StyledMarkdown } from "./styles"

const Markdown = ({ source, slug }) => {
  const SyntaxHighlightWrapper = (props) => {
    const { children, className } = props.children.props
    return <SyntaxHighlight value={children} language={className.slice(5)} slug={slug} />
  }

  return (
    <StyledMarkdown
      options={{
        overrides: {
          ...demos,
          TwitterTweet: TwitterTweet,
          pre: SyntaxHighlightWrapper,
          code: InlineCode,
          img: PostImage,
        },
      }}
    >
      {source}
    </StyledMarkdown>
  )
}

export { Markdown }
