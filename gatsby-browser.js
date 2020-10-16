import React from "react"
import { Global, css } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import sergeTheme from "./src/themes/serge-theme"

const GlobalStyles = css`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }
  html {
    height: 100%;
  }

  body,
  #___gatsby {
    height: 100%;
  }

  body {
    font-family: ${sergeTheme.fonts.body};
    line-height: ${sergeTheme.lineHeights.heading};
    background: ${sergeTheme.colors.white};
    color: ${sergeTheme.colors.black};
  }

  #gatsby-focus-wrapper {
    min-height: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  h1 {
    font-size: ${sergeTheme.fontSizes[4]};
  }

  p {
    font-size: ${sergeTheme.fontSizes[2]};
    font-family: ${sergeTheme.fonts.body};
    line-height: ${sergeTheme.lineHeights.body};
  }

  a {
    color: ${sergeTheme.colors.black};
    transition: color 0.4s ease;
    text-decoration: none;
    &.active {
      color: ${sergeTheme.colors.accentRich};
      font-weight: 700;
    }
    &:hover,
    &:focus {
      color: ${sergeTheme.colors.accent};
      transition: color 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    }
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    cursor: pointer;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
  }
  [data-reach-dialog-overlay] {
    z-index: 100000;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  [data-reach-dialog-content] {
    position: relative;
    padding: ${sergeTheme.space[6]};
    border-radius: ${sergeTheme.borderRadius};
    box-shadow: ${sergeTheme.shadows.container};
    margin: 0 auto;
    width: 100%;
    max-width: 960px;
    opacity: 1;

    h3 {
      font-family: ${sergeTheme.fonts.heading};
      font-size: ${sergeTheme.fontSizes[3]};
      margin-bottom: ${sergeTheme.space[4]};
    }
    ul {
      padding-left: ${sergeTheme.space[4]};
    }
    b {
      color: ${sergeTheme.colors.accentRich};
    }
    ol > li:not(:last-of-type) {
      margin-bottom: ${sergeTheme.space[2]};
    }
    li {
      line-height: ${sergeTheme.lineHeights.body};
    }
    svg {
      position: absolute;
      top: 24px;
      right: 24px;
      cursor: pointer;
    }
  }

  @media ${sergeTheme.mq.mobileM} {
    [data-reach-dialog-content] {
      padding: ${sergeTheme.space[4]};
      height: 100%;
      overflow-y: auto;

      h3 {
        font-size: ${sergeTheme.fontSizes[2]};
      }
      p {
        font-size: ${sergeTheme.fontSizes[1]};
        margin-bottom: ${sergeTheme.space[2]};
      }
      svg {
        top: 12px;
        right: 12px;
      }
      .team__info {
        flex-direction: column;
      }
      .team__item--imageModal {
        margin-left: 0;
        max-height: 300px;
      }
    }
  }
`
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={sergeTheme}>
    <Global styles={GlobalStyles} />
    {element}
  </ThemeProvider>
)
