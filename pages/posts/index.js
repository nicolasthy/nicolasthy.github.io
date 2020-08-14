import { PostsList } from "../../components/posts/PostsList/PostsList"
import { HeadingLink } from "../../components/shared/HeadingLink/HeadingLink"

import { getAllPosts } from "../../lib/api"
import { MAX_FEATURED_POSTS } from "../../lib/constants"

export default function Index({ posts }) {
  return (
    <>
      <HeadingLink title="Writings" />
      <PostsList posts={posts} />
    </>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts([
    "title",
    "created_at",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "tags",
    "published",
    "readingTime",
  ])

  return {
    props: { posts },
  }
}
