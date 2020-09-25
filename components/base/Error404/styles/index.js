import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65vh;
`

export const Image = styled.img`
  margin: 0 80px 0 0;
  width: 135px;
`

export const Message = styled.div`
  width: 50%;

  h1 {
    margin: 0;
    padding: 0;
    font-size: 54px;
  }

  p {
    margin: 0;
    padding: 0 0 30px 0;
    line-height: 1.8;
  }
`
