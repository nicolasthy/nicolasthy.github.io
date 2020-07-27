import { PostsItem } from "../PostsItem/PostsItem"

import { Container } from "./styles"

const PostsList = ({ posts }) => {
  const renderPosts = () => {
    return posts.map((post) => {
      return <PostsItem key={post.slug} post={post} />
    })
  }

  return <Container>{renderPosts()}</Container>
}

export { PostsList }
