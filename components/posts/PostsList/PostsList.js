import { useEffect, useState, useRef } from "react"
import anime from "animejs"

import { PostsItem } from "../PostsItem/PostsItem"

import { Container } from "./styles"

const PostsList = ({ posts }) => {
  const postsRef = useRef()
  const [postItems, setPostItems] = useState()

  useEffect(() => {
    const wrapperChildren = postsRef.current.children
    setPostItems(wrapperChildren)
  }, [])

  useEffect(() => {
    if (postItems) {
      anime({
        targets: postItems,
        translateY: [100, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: anime.stagger(100, { start: 300 }),
      })
    }
  }, [postItems])

  const renderPosts = () => {
    return posts.map((post) => {
      return <PostsItem ref={postItems} key={post.slug} post={post} />
    })
  }

  return <Container ref={postsRef}>{renderPosts()}</Container>
}

export { PostsList }
