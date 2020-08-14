import styled from "styled-components"

export const Code = styled.code`
  padding: 3px 8px;
  background-color: ${({ theme }) => theme.posts.inlineCodeBackground};
  color: ${({ theme }) => theme.posts.inlineCodeColor};
  border-radius: 6px;
`
