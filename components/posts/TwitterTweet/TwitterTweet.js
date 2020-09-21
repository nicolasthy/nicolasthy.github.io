import { TwitterTweetEmbed } from "react-twitter-embed"

import { Container } from "./styles"

const TwitterTweet = ({ tweetId }) => {
  return (
    <Container>
      <TwitterTweetEmbed tweetId={tweetId} />
    </Container>
  )
}

export { TwitterTweet }
