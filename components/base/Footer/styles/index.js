import styled from "styled-components"
import { FONTS } from "../../../../themes/constants"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-content: center;
  text-align: center;
  width: 75%;
  margin: 45px auto;
  font-family: ${FONTS.sansSerif};

  @media only screen and (max-device-width: 812px) {
    width: 95%;
  }
`

export const FooterText = styled.p`
  color: ${({ theme }) => theme.footer.text};
  line-height: 1.6;
  font-size: 12px;
  margin: 0;
  padding: 0;
`

export const FooterSocials = styled.div`
  margin: 10px 0;
  
  a {
    color: ${({ theme }) => theme.footer.text};
    margin: 0 7px;
  }
`
