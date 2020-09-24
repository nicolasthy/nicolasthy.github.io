import Head from "next/head"

import { HomeHeader } from "../components/home/HomeHeader/HomeHeader"
import { PostsList } from "../components/home/PostsList/PostsList"

import { SITE_CONFIG } from "../config/siteConfig"
import { getAllPosts } from "../lib/api"
import { MAX_FEATURED_POSTS } from "../lib/constants"

export default function Index({ posts }) {
  const { title, description, image } = SITE_CONFIG

  return (
    <>
      <Head>
        <meta property="og:url" content="http://www.nicolasthy.xyz/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@nicolasthy" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>
      <HomeHeader />
      <PostsList posts={posts} />
    </>
  )
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
