import styled from "styled-components"
import { FONTS } from "../../../../themes/constants"

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0;
  font-family: ${FONTS.sansSerif};
`

export const Bio = styled.div`
  p {
    margin: 0;

    strong {
      font-weight: 500;
      color: ${({ theme }) => theme.textStrong};
    }
  }
`
