import Head from "next/head"

import { PostsList } from "../../components/posts/PostsList/PostsList"
import { HeadingLink } from "../../components/shared/HeadingLink/HeadingLink"

import { getAllPosts, getAllPostsByTag } from "../../lib/api"

export default function Tag({ posts }) {
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

export async function getStaticProps({ params }) {
  const posts = getAllPostsByTag(params.tag, [
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

export async function getStaticPaths() {
  const posts = getAllPosts(["tags", "published"])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          tag: post.tags[0],
        },
      }
    }),
    fallback: false,
  }
}
