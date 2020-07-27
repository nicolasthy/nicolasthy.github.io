import fs from "fs"
import { join } from "path"
import matter from "gray-matter"

const postsDirectory = join(process.cwd(), "_posts")

const getExcerpt = (file, options) => {
  file.excerpt =
    file.data.excerpt || file.content.substr(0, file.content.lastIndexOf(" ", options.excerptLimit)) + "..."
}

const readingTime = (text = "") => {
  return Math.ceil(text.split(/s/g).length / 200)
}

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, "")
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents, {
    excerpt: getExcerpt,
    excerptLimit: 150,
  })

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug
    }
    if (field === "content") {
      items[field] = content
    }

    if (field === "readingTime") {
      items[field] = readingTime(content)
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields = [], count = null) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, count || slugs.length)
  return posts
}
