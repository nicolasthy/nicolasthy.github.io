import { ProfilePicture } from "../../shared/ProfilePicture/ProfilePicture"
import { PostsList } from "../PostsList/PostsList"
import { ArrowLink } from "../../shared/ArrowLink/ArrowLink"

import { Footer, RelatedPost } from "./styles"

const PostFooter = ({ post }) => {
  return (
    <Footer>
      <div>
        <ProfilePicture />
      </div>
      {post.relatedPost && (
        <RelatedPost>
          <span>You may be interested in reading this</span>
          <PostsList posts={[post.relatedPost]} />
          <ArrowLink href={"/posts"} as={"/posts"} label="View all writings" />
        </RelatedPost>
      )}
    </Footer>
  )
}

export { PostFooter }
