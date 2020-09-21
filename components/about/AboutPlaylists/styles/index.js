import styled from "styled-components"
import { FONTS } from "../../../../themes/constants"
import { hex2rgba } from "../../../../themes/utils"

export const Container = styled.div`
  margin: 60px 0 15px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  > span {
    display: block;
    font-family: ${FONTS.sansSerif};
    font-size: 16px;
    color: ${({ theme }) => hex2rgba(theme.textLight, 0.5)};
    text-align: center;
  }
`
