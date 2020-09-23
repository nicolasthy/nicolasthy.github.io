import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    margin: 0;
    transition: background 0.2s linear, color 0.2s linear;
  }
  pre {
    transition: background 0.2s linear;
  }
  code {
    font-family: "Operator Mono", "Menlo", monospace;
  }
  code > span {
    padding: 5px 25px;
    display: block;
  }
  a {
    position: relative;
    color: ${({ theme }) => theme.link};
    text-decoration: underline wavy;
    opacity: 1;
    transition: opacity 0.2s linear;

    &:hover {
      opacity: 0.7;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: "Poppins", sans-serif;
  }
  .medium-zoom-overlay {
    z-index: 10;
    background: ${({ theme }) => theme.posts.imageBackgroundOverlay} !important;
  }
  .medium-zoom-image.medium-zoom-image--opened {
    z-index: 15;
  }
  .page-transition-enter:after {
    content: "";
    background: ${({ theme }) => theme.backgroundTransition};
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 10;
    transform: translateX(0);
    transition: transform 0.6s cubic-bezier(1, 0, 0, 1);
  }
  .page-transition-enter-active:after {
    content: "";
    background: ${({ theme }) => theme.backgroundTransition};
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 10;
    transform: translateX(-100%);
    transition: transform 0.6s cubic-bezier(1, 0, 0, 1);
  }
  .page-transition-exit:after {
    content: "";
    background: ${({ theme }) => theme.backgroundTransition};
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 10;
    transform: translateX(100%);
    transition: transform 0.6s cubic-bezier(1, 0, 0, 1);
  }
  .page-transition-exit-active:after {
    content: "";
    background: ${({ theme }) => theme.backgroundTransition};
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 10;
    transform: translateX(0);
    transition: transform 0.6s cubic-bezier(1, 0, 0, 1);
  }
`
