import { ProfilePicture } from "../../shared/ProfilePicture/ProfilePicture"
import { PostsList } from "../PostsList/PostsList"
import { ArrowLink } from "../../shared/ArrowLink/ArrowLink"

import { Footer, Container, Bio, RelatedPost } from "./styles"

const PostFooter = ({ post }) => {
  return (
    <Footer>
      <Container>
        <ProfilePicture />
        <Bio>
          <span>Written by</span>
          <strong>Nicolas Thiry</strong>
          <p>
            This site is my personal space where I write and share things that I enjoy working with. If you liked it and
            want to share some feedback, send me a message on Twitter!
          </p>
        </Bio>
      </Container>
      {post.relatedPost && (
        <RelatedPost>
          <span>You may be interested in reading this</span>
          <PostsList posts={[post.relatedPost]} />
          <ArrowLink href={"/posts"} as={"/posts"} label="View all writings" />
        </RelatedPost>
      )}
    </Footer>
  )
}

export { PostFooter }
