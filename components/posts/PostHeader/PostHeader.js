import { PostTime } from "../PostTime/PostTime"
import { SharePost } from "../SharePost/SharePost"

import { Container, Title, About, PostDetails, AuthorImage } from "./styles"

const PostHeader = ({ post }) => {
  return (
    <Container>
      <Title>{post.title}</Title>
      <About>
        <PostDetails>
          <AuthorImage>
            <img src="/nicolas_thiry.png" alt="Nicolas Thiry" />
          </AuthorImage>
          <div>
            Nicolas Thiry
            <PostTime post={post} />
          </div>
        </PostDetails>
        <SharePost />
      </About>
    </Container>
  )
}

export { PostHeader }
