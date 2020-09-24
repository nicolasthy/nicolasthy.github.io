import Head from "next/head"

import { PostsList } from "../../components/posts/PostsList/PostsList"
import { HeadingLink } from "../../components/shared/HeadingLink/HeadingLink"

import { getAllPosts } from "../../lib/api"

export default function Index({ posts }) {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
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
