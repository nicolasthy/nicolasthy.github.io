import styled from "styled-components"

export const StyledArrowLink = styled.div`
  display: flex;
  font-family: "Poppins", sans-serif;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.link};
  }

  svg {
    margin-left: 15px;
    opacity: 0.3;
    transform: translateX(0) scale(0.9);
    transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  }

  &:hover {
    a {
      color: ${({ theme }) => theme.link};
    }
    svg {
      transform: translateX(10px) scale(1);
    }
  }
`
