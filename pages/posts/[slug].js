import { useRouter } from "next/router"
import ErrorPage from "next/error"
import Head from "next/head"

import { PostHeader } from "../../components/posts/PostHeader/PostHeader"
import { PostFooter } from "../../components/posts/PostFooter/PostFooter"
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
      <PostHeader title={post.title} />
      <Markdown source={post.content} slug={post.slug} />
      <PostFooter post={post} />
    </>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, ["title", "created_at", "slug", "content", "readingTime", "related"])

  if (post.related) {
    post.relatedPost = getPostBySlug(post.related, [
      "title",
      "created_at",
      "slug",
      "excerpt",
      "tags",
      "published",
      "readingTime",
    ])
  }

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
