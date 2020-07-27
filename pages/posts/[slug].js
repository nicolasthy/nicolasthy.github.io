import { useRouter } from "next/router"
import ErrorPage from "next/error"
import Head from "next/head"

import { Markdown } from "../../components/posts/Markdown/Markdown"

import { getPostBySlug, getAllPosts } from "../../lib/api"

export default function Post({ post }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
      <Head>
        <title>{post.title} - Nicolas Thiry</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <h1>{post.title}</h1>
      <Markdown source={post.content} />
    </>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, ["title", "created_at", "slug", "content", "excerpt"])

  return {
    props: {
      post,
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug", "published"])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
