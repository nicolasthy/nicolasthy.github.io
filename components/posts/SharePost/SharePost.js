import { useRouter } from "next/router"

import { Twitter } from "@styled-icons/boxicons-logos/Twitter"
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare"

import { Container, Label, Actions, Link } from "./styles"

const WINDOW_WIDTH = 570
const WINDOW_HEIGHT = 570
const SOCIAL_URLS = {
  linkedin: {
    url: "https://www.linkedin.com/shareArticle?mini=true&url=",
  },
  twitter: {
    url: "https://twitter.com/intent/tweet?url=",
  },
}

const SharePost = () => {
  const router = useRouter()

  const openInWindow = (url) => {
    var left = (screen.width - WINDOW_WIDTH) / 2
    var top = (screen.height - WINDOW_HEIGHT) / 2
    var params = `menubar=no,toolbar=no,status=no,width=${WINDOW_WIDTH},height=${WINDOW_HEIGHT},top=${top},left=${left}`
    window.open(url, "NewWindow", params)
  }

  const handleSharePost = (social) => {
    openInWindow(`${SOCIAL_URLS[social].url}https://www.nicolasthy.xyz${router.asPath}`)
  }

  return (
    <Container>
      <Label>Share this post</Label>
      <Actions>
        <Link onClick={() => handleSharePost("linkedin")} title="Share on LinkedIn">
          <LinkedinSquare size={24} />
        </Link>
        <Link onClick={() => handleSharePost("twitter")} title="Share on Twitter">
          <Twitter size={24} />
        </Link>
      </Actions>
    </Container>
  )
}

export { SharePost }
