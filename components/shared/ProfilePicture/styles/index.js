import styled from "styled-components"

export const Container = styled.div`
  position: relative;
  width: 115px;
  color: ${({ theme }) => theme.profile.background};
  margin: 0 50px 0 0;
`

export const Picture = styled.img`
  position: absolute;
  width: 50px;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  margin: auto;
`
