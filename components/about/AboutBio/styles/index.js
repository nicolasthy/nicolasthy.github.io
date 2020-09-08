import styled from "styled-components"
import { FONTS } from "../../../../themes/constants"

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
`

export const Bio = styled.div`
  font-family: ${FONTS.sansSerif};

  h2 {
    font-size: 24px;
    font-weight: 400;

    strong {
      color: ${({ theme }) => theme.textStrong};
      font-weight: 500;
    }
  }

  p {
    line-height: 1.8;
  }
`
