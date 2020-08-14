import styled from "styled-components"
import ReactMarkdown from "react-markdown"

export const StyledMarkdown = styled(ReactMarkdown)`
  font-size: 18px;
  line-height: 2.125;

  p {
    color: ${({ theme }) => theme.textLight};
  }

  .alert {
    border-radius: 14px;
    padding: 15px 30px;
    line-height: 1.4;
    margin: 0;
  }
  .alert.alert-warning {
    background: #f4e7be;
    color: #8e3d1a;
  }
`