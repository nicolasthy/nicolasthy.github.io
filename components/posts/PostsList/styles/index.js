import styled from "styled-components"

export const Container = styled.ul`
  list-style: none;
  padding: 0;
  cursor: pointer;

  > a {
    text-decoration: none;

    > li {

      p {
        &:first-of-type {
          font-size: 12px;
          margin: 0 0 5px;
          opacity: 0.7;
        }

        color: ${({ theme }) => theme.textLight};
        margin: 0;
      }
    }
  }
`
