import { ArrowLink } from "../../shared/ArrowLink/ArrowLink"

import { Container, Image, Message } from "./styles"

const Error404 = ({ error }) => {
  const { image, title, message } = error

  return (
    <Container>
      <Image src={image} alt={title} />
      <Message>
        <h1>{title}</h1>
        <p>{message}</p>
        <ArrowLink href="/posts" as="/posts" label="Return home" />
      </Message>
    </Container>
  )
}

export { Error404 }
