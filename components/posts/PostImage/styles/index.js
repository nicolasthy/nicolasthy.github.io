import styled from "styled-components"

export const StyledImage = styled.span`
  max-width: 105%;
  margin: 40px 0 20px;
  display: block;
  position: relative;

  @media only screen and (min-device-width: 1200px) {
    max-width: 120%;
    margin: 40px -10% 20px;
  }

  img {
    opacity: 0;
    display: block;
    width: 100%;
    position: relative;
    z-index: 2;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: inherit;
    background-size: cover;
    background-position: center center;
  }

  &::before {
    top: 10px;
    filter: blur(25px);
    backface-visibility: visible;
    transform: scale(1.03) translate3d(0, 0, 0);
    z-index: 0;
    opacity: ${({ theme }) => theme.posts.imageShadowOpacity};
    transition: opacity 0.2 linear;
  }

  &::after {
    z-index: 1;
  }
`

export const StyledAlt = styled.span`
  display: block;
  text-align: center;
  margin: 0 0 40px;
  font-size: 12px;
  opacity: 0.5;
  font-family: "Poppins", sans-serif;
`
