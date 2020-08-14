import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0 0;
`

export const Heading = styled.h2`
  margin: 0 25px 0 0;
`

export const ArrowLink = styled.div`
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
