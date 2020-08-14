import styled from "styled-components"
import SyntaxHighlighter from "react-syntax-highlighter"

import { FONTS, LANGUAGES_COLORS } from "../../../../themes/constants"

export const Container = styled.div`
  position: relative;
`

export const CopyLink = styled.span`
  position: absolute;
  top: 0;
  left: -10%;
  margin: 10px 0 0 25px;
  font-family: ${FONTS.sansSerif};
  font-size: 12px;
  opacity: 0.3;
  cursor: pointer;
  transition: opacity 0.2s linear;

  > span {
    display: flex;
    align-items: center;
  }

  svg {
    width: 16px;
    margin-right: 10px;
  }

  &:hover {
    opacity: 0.6;
  }
`

export const CopyLinkChecked = styled.span`
  animation: pop 0.4s ease-out;

  @keyframes pop {
    from {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    to {
      transform: scale(1);
    }
  }
`

export const CodeLanguage = styled.span`
  position: absolute;
  top: 0;
  right: -10%;
  margin: 10px 10px 0 0;
  padding: 3px 10px;
  border-radius: 50px;
  min-width: 45px;
  font-family: ${FONTS.sansSerif};
  font-size: 12px;
  opacity: 1;
  color: #fff;
  text-align: center;
  background: ${({ language }) => LANGUAGES_COLORS[language] || "#000000"};
`

export const StyledSyntaxHighlight = styled(SyntaxHighlighter)`
  background: ${({ theme }) => theme.posts.syntaxHighlightBackground} !important;
  box-shadow: ${({ theme }) => theme.posts.itemHoverShadow};
  font-size: 16px;
  line-height: 1;
  font-family: ${FONTS.code};
  padding: 50px 0 15px !important;
  margin: 25px 0 25px -10%;
  border-radius: 4px;
  width: 120%;
`
