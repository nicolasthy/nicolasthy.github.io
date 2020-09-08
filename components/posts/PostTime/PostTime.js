import { Container } from "./styles"

const PostTime = ({ post }) => {
  return (
    <Container>
      <time>
        {new Date(post.created_at).toLocaleDateString("en", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </time>
      <small> - </small>
      <span>
        {post.readingTime} min read <small>☕️</small>
      </span>
    </Container>
  )
}

export { PostTime }
