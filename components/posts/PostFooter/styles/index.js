import styled from "styled-components"

import { FONTS } from "../../../../themes/constants"

export const Footer = styled.div`
  border-top: 1px solid rgba(5, 7, 26, 0.05);
  margin: 30px 0 10px;
  padding: 20px 0 10px;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const Bio = styled.div`
  span {
    display: block;
    text-transform: uppercase;
    font-family: ${FONTS.sansSerif};
    font-size: 12px;
    opacity: 0.3;
  }

  strong {
    font-weight: 400;
    font-size: 20px;
  }

  p {
    font-family: ${FONTS.sansSerif};
    font-size: 14px;
    opacity: 0.5;
  }
`

export const RelatedPost = styled.div`
  margin: 35px 0 15px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  > span {
    display: block;
    font-family: ${FONTS.sansSerif};
    font-size: 16px;
    color: rgba(25, 23, 22, 0.5);
    text-align: center;
  }

  > ul {
    width: 100%;
    margin: 0;

    > div > a {
      > li {
        margin: 20px 0;
      }
    }
  }
`
