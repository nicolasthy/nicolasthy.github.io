import { useEffect, useContext, useState, useRef } from "react"
import { ThemeContext } from "styled-components"
import anime from "animejs"

import { ChevronRight } from "@styled-icons/heroicons-solid/ChevronRight"

import { Container, Mockup, Portraits, IconRight } from "./styles"

const TIMER_MAX = 10

const AboutPortrait = () => {
  const theme = useContext(ThemeContext)
  const portraitsRef = useRef([])
  const [current, setCurrent] = useState(0)
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    const portraits = Array.from(portraitsRef.current.children)
    portraits.forEach((portrait, index) => {
      anime.set(portrait, {
        left: 100 * index + "%",
        opacity: 1,
      })
    })
    const interval = setInterval(() => {
      setTimer(timer + 1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  })

  useEffect(() => {
    if (timer === TIMER_MAX) {
      handleSwipe()
    }
  }, [timer])

  useEffect(() => {
    const portraits = portraitsRef.current.children
    anime({
      targets: portraits,
      translateX: -100 * current + "%",
      easing: "easeOutExpo",
    })
    setTimer(0)
  }, [current])

  const handleSwipe = () => {
    const portraits = portraitsRef.current.children
    setCurrent(current === portraits.length - 1 ? 0 : current + 1)
  }

  return (
    <Container>
      <Mockup src={theme.about.mockup} alt="iPhone with Instagram-like app containing portraits of Nicolas Thiry" />
      <Portraits onClick={handleSwipe} ref={portraitsRef}>
        <img src="/static/portrait-1.png" alt="Portrait of Nicolas Thiry" />
        <img src="/static/portrait-2.png" alt="Portrait of Nicolas Thiry 2" />
        <img src="/static/portrait-3.png" alt="Portrait of Nicolas Thiry 3" />
        <img src="/static/portrait-4.png" alt="Portrait of Nicolas Thiry 4" />
      </Portraits>
      <IconRight onClick={handleSwipe}>
        <ChevronRight size={24} />
      </IconRight>
    </Container>
  )
}

export { AboutPortrait }
