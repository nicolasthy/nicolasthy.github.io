import { ProfilePicture } from "../../shared/ProfilePicture/ProfilePicture"

import { Container, Bio } from "./styles"

const HomeHeader = () => {
  return (
    <Container>
      <ProfilePicture />
      <Bio>
        <p>Hello 👋</p>
        <p>I’m <strong>Nicolas</strong>, a passionate front-end developer.</p>
      </Bio>
    </Container>
  )
}

export { HomeHeader }
