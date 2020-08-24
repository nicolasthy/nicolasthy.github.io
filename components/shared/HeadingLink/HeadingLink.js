import { ArrowLink } from "../ArrowLink/ArrowLink"

import { Container, Heading } from "./styles"

const HeadingLink = ({ href, as, title }) => {
  const hasLink = href && as

  return (
    <Container>
      <Heading>{title}</Heading>
      {hasLink && <ArrowLink href={href} as={as} label="View all" />}
    </Container>
  )
}

export { HeadingLink }
