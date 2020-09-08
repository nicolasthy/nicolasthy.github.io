import { PostTime } from "../PostTime/PostTime"

import { Title } from "./styles"

const PostHeader = ({ post }) => {
  return (
    <>
      <Title>{post.title}</Title>
      <PostTime post={post} />
    </>
  )
}

export { PostHeader }
