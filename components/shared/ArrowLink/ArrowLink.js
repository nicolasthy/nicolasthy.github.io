import Link from "next/link"

import { StyledArrowLink } from "./styles"

const ArrowLink = ({ href, as, label, internal = true }) => {
  const renderArrowLink = (label) => (
    <>
      <span>{label}</span>
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
    </>
  )
  return (
    <StyledArrowLink>
      {internal ? (
        <Link href={href} as={as}>
          <a title={label}>{renderArrowLink(label)}</a>
        </Link>
      ) : (
        <a href={href} title={label}>
          {renderArrowLink(label)}
        </a>
      )}
    </StyledArrowLink>
  )
}

export { ArrowLink }
