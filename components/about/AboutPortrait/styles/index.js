import styled from "styled-components"

export const Picture = styled.img`
  margin-left: 50px;
  width: 35%;
  min-width: 250px;
  border-radius: 15px;
  box-shadow: 10px 10px 0 0 ${({ theme }) => theme.profile.background};
`
