import { PostsList } from "../components/posts/PostsList/PostsList"

import { getAllPosts } from "../lib/api"
import { MAX_FEATURED_POSTS } from "../lib/constants"

export default function Index({ posts }) {
  return <PostsList posts={posts} />
}

export async function getStaticProps() {
  const posts = getAllPosts(
    ["title", "created_at", "slug", "author", "coverImage", "excerpt", "tags", "published", "readingTime"],
    MAX_FEATURED_POSTS
  )

  return {
    props: { posts },
  }
}
