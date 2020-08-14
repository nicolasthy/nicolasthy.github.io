import Link from "next/link"

import { Container, Heading, ArrowLink } from "./styles"

const HeadingLink = ({ href, as, title }) => {
  const hasLink = href && as

  return (
    <Container>
      <Heading>{title}</Heading>
      {hasLink && (
        <ArrowLink>
          <Link href={href} as={as}>
            <a>
              <span>View all</span>
              <svg width="19" height="12" xmlns="http://www.w3.org/2000/svg">
                {" "}
                <g
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path d="M1 6h16.429M12.429 1l5 5-5 5" />{" "}
                </g>{" "}
              </svg>
            </a>
          </Link>
        </ArrowLink>
      )}
    </Container>
  )
}

export { HeadingLink }
