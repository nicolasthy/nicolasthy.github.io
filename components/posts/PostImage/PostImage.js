import { useRef, useEffect, useState } from "react"
import mediumZoom from "medium-zoom"

import { StyledImage, StyledAlt } from "./styles"

const PostImage = ({ alt, src }) => {
  const imagePreloader = src.replace(src.match(/(?:\.([^.]+))?$/)[0], `.min${src.match(/(?:\.([^.]+))?$/)[0]}`)

  const imageRef = useRef()
  const [image, setImage] = useState(imagePreloader)

  useEffect(() => {
    mediumZoom(imageRef.current)

    const imageFull = new Image()
    imageFull.onload = () => {
      setImage(imageFull)
    }
    imageFull.src = src

    return () => {
      imageFull.onload = null
    }
  }, [])

  return (
    <>
      <StyledImage
        style={{
          backgroundImage: `url(${image.src || image})`,
          transition: "0.5s filter linear",
          filter: `${image.src ? "" : "blur(25px)"}`,
        }}
      >
        <img ref={imageRef} alt={alt} src={image.src || image} />
      </StyledImage>
      <StyledAlt>{alt}</StyledAlt>
    </>
  )
}

export { PostImage }
