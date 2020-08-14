import { ProfilePicture } from "../../shared/ProfilePicture/ProfilePicture"
import { PostsList } from "../PostsList/PostsList"

import { Footer } from "./styles"

const PostFooter = ({ post }) => {
  return (
    <Footer>
      <div>
        <ProfilePicture />
      </div>
      {post.relatedPost && (
        <div>
          <span>You may be interested in reading this</span>
          <PostsList posts={[post.relatedPost]} />
        </div>
      )}
    </Footer>
  )
}

export { PostFooter }
