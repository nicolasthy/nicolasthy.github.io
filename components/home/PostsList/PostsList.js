import { useEffect, useRef } from "react"
import anime from "animejs"

import { HeadingLink } from "../../shared/HeadingLink/HeadingLink"
import { PostsList as List } from "../../posts/PostsList/PostsList"

import { HeadingContainer } from "./styles"

const PostsList = ({ posts }) => {
  const headingRef = useRef()

  useEffect(() => {
    anime({
      targets: headingRef.current,
      delay: 300,
      duration: 1000,
      translateY: [100, 0],
      opacity: [0, 1],
    })
  }, [])

  return (
    <>
      <HeadingContainer ref={headingRef}>
        <HeadingLink href="/posts" as="/posts" title="Writings" />
      </HeadingContainer>
      <List posts={posts} />
    </>
  )
}

export { PostsList }
