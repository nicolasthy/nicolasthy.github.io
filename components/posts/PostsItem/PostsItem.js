import Link from "next/link"

import { Container, StyledLink, PostTitle, TagsList, TagsItem } from "./styles"

const PostsItem = ({ post }) => {
  return (
    <StyledLink>
      <Link href={`/posts/[slug]`} as={`/posts/${post.slug}`}>
        <a>
          <Container>
            <PostTitle>{post.title}</PostTitle>
            <p>
              <time>
                {new Date(post.created_at).toLocaleDateString("en", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              <small> - </small>
              <span>
                {post.readingTime} min read <small>☕️</small>
              </span>
            </p>
            <p>{post.excerpt}</p>
            <TagsList>
              {post.tags &&
                post.tags.map((tag, index) => (
                  <TagsItem key={index} tag={tag}>
                    {tag}
                  </TagsItem>
                ))}
            </TagsList>
          </Container>
        </a>
      </Link>
    </StyledLink>
  )
}

export { PostsItem }