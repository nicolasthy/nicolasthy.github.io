import { useEffect, useRef } from "react"
import anime from "animejs"

import { AboutBio } from "../components/about/AboutBio/AboutBio"
import { AboutPlaylists } from "../components/about/AboutPlaylists/AboutPlaylists"

const About = () => {
  const contentRef = useRef()

  useEffect(() => {
    anime({
      targets: contentRef.current.children,
      translateY: [40, 0],
      opacity: [0, 1],
      duration: 800,
      delay: anime.stagger(100, { start: 300 }),
    })
  }, [contentRef])

  return (
    <div ref={contentRef}>
      <AboutBio />
      <AboutPlaylists />
    </div>
  )
}

export default About
