import styled from "styled-components"

import { hex2rgba } from "../../../../themes/utils"

export const Container = styled.div`
  position: relative;
  width: 250px;
  margin: 0 auto;
`

export const Mockup = styled.img`
  margin-left: 50px;
  width: 250px;
  filter: drop-shadow(15px 25px 25px rgba(0, 0, 0, 0.2));
  transform: rotate(5deg);
  transition: filter 3s cubic-bezier(0.19, 1, 0.22, 1);

  @media only screen and (max-device-width: 765px) {
    margin-left: -15px;
    transform: rotate(0);
  }

  @media only screen and (max-device-width: 812px) {
    margin-left: -5px;
  }

  &:hover {
    filter: drop-shadow(15px 35px 25px rgba(0, 0, 0, 0.2));
  }
`

export const Portraits = styled.div`
  position: absolute;
  width: 181px;
  left: 98px;
  top: 125px;
  height: 240px;
  overflow: hidden;
  transform: rotate(5deg);

  @media only screen and (max-device-width: 765px) {
    left: 34px;
    transform: rotate(0);
  }

  @media only screen and (max-device-width: 812px) {
    left: 44px;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0;
  }
`

export const IconRight = styled.div`
  position: absolute;
  top: 55%;
  right: -100px;
  transform: translateY(-50%) rotate(5deg);
  background: ${({ theme }) => hex2rgba(theme.textStrong, 0.03)};
  color: ${({ theme }) => hex2rgba(theme.textStrong, 0.4)};
  border-radius: 100px;
  padding: 10px;
  transition: 0.4s ease-out;

  @media only screen and (max-device-width: 765px) {
    transform: translateY(-50%) rotate(0);
  }

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => hex2rgba(theme.textStrong, 0.05)};
    color: ${({ theme }) => theme.textStrong};
  }
`
