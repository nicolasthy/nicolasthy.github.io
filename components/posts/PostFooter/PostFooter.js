import { PostsList } from "../PostsList/PostsList"
import { ArrowLink } from "../../shared/ArrowLink/ArrowLink"
import { SharePost } from "../../posts/SharePost/SharePost"

import { Footer, Container, Bio, RelatedPost, AuthorLabel, StyledProfilePicture } from "./styles"

const PostFooter = ({ post }) => {
  return (
    <Footer>
      <Container>
        <StyledProfilePicture />
        <Bio>
          <div>
            <div>
              <AuthorLabel>Written by</AuthorLabel>
              <strong>Nicolas Thiry</strong>
            </div>
            <SharePost />
          </div>
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
