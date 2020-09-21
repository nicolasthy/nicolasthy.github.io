import styled from "styled-components"

export const Container = styled.div`
  opacity: 0;
  transform: translateY(40px);
`

export const Title = styled.h1`
  font-size: 52px;
  line-height: 1.1;
`

export const About = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const PostDetails = styled.div`
  display: flex;
  align-items: center;
`

export const AuthorImage = styled.div`
  background: ${({ theme }) => theme.profile.background};
  border-radius: 100px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px 0 0;

  img {
    width: 18px;
  }
`
