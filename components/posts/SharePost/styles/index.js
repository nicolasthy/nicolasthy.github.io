import styled from "styled-components"

import { FONTS } from "../../../../themes/constants"

export const Container = styled.div`
  text-align: right;
`

export const Label = styled.span`
  font-size: 9px;
  font-family: ${FONTS.sansSerif};
  text-transform: uppercase;
  margin: 0 0 10px 0;
  opacity: 0.45;
`

export const Actions = styled.div``

export const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
  margin: 0 0 0 15px;
`
