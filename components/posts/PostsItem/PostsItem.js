import Link from "next/link"

import { PostTime } from "../PostTime/PostTime"

import { Container, StyledLink, PostTitle, TagsList, TagsItem } from "./styles"

const PostsItem = ({ post }) => {
  return (
    <StyledLink>
      <Link href={`/posts/[slug]`} as={`/posts/${post.slug}`}>
        <a>
          <Container>
            <PostTitle>{post.title}</PostTitle>
            <PostTime post={post} />
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
