import { useEffect, useRef } from "react"
import anime from "animejs"

import { ProfilePicture } from "../../shared/ProfilePicture/ProfilePicture"

import { Container, Bio } from "./styles"

const HomeHeader = () => {
  const bioRef = useRef()

  useEffect(() => {
    anime
      .timeline({
        targets: bioRef.current,
        delay: 200,
      })
      .add({
        duration: 1000,
        translateY: [100, 0],
      }, 0)
      .add({
        duration: 300,
        opacity: [0, 1],
        easing: "linear",
      }, 0)
  }, [])

  return (
    <Container ref={bioRef}>
      <ProfilePicture />
      <Bio>
        <p>Hello 👋</p>
        <p>
          I’m <strong>Nicolas</strong>, a passionate front-end developer.
        </p>
      </Bio>
    </Container>
  )
}

export { HomeHeader }
