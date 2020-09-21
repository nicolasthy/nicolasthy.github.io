import { format } from "date-fns"

import { Container } from "./styles"

const PostTime = ({ className, post }) => {
  const formattedDate = format(new Date(post.created_at), "MMMM io yyy")
  
  return (
    <Container className={className}>
      <time>{formattedDate}</time>
      <small> - </small>
      <span>
        {post.readingTime} min read <small>☕️</small>
      </span>
    </Container>
  )
}

export { PostTime }
