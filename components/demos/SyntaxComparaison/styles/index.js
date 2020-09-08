import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  width: 140%;
  margin: 0 0 0 -20%;

  > div {
    width: 50%;
    margin: 0 5px;
  }

  .syntaxHighlight {
    &_snippet {
      width: 100%;
      margin: 25px 0;
    }

    &_copyLink {
      top: 25px;
      left: 0;
    }

    &_language {
      top: 25px;
      right: 0;
    }
  }
`
