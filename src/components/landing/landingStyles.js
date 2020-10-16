import styled from "@emotion/styled"
import Biker from "../../assets/images/biker.jpg"

export const LandingWrapper = styled.section`
  grid-column: 1 / span 14;
  width: 100%;
  height: 600px;
  background: ${p => p.theme.colors.black};
  display: grid;
  grid-template-columns: minmax(16px, 1fr) repeat(12, minmax(24px, 95px)) minmax(
      16px,
      1fr
    );
`

export const InnerLanding = styled.div`
  grid-column: 4 / span 8;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-bottom: ${p => p.theme.space[7]};
  h1 {
    font-family: Montserrat;
    font-weight: bold;
    font-size: ${p => p.theme.fontSizes[4]};
    line-height: 100%;
    color: ${p => p.theme.colors.accentLight};
    margin-bottom: ${p => p.theme.space[4]};
  }
  p {
    color: ${p => p.theme.colors.accentLighter};
    max-width: 650px;
    margin-bottom: ${p => p.theme.space[4]};
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${p => p.theme.space[3]};
    background: ${p => p.theme.colors.white};
    font-weight: bold;
    font-size: ${p => p.theme.fontSizes[2]};
    text-decoration-line: underline;
    text-transform: uppercase;
    color: ${p => p.theme.colors.grayDark};
    transition: background-color 0.3s ease-out, padding 0.3s ease;
    &:hover {
      padding: ${p => p.theme.space[3]} ${p => p.theme.space[4]};
      background-color: ${p => p.theme.colors.accentLight};
      transition: background-color 0.3s ease-out, padding 0.1s 0.3s ease-out;
    }
  }
`

export const LandingImage = styled.figure`
  grid-column: 1 / span 14;
  height: 265px;
  background: url(${Biker});
  background-size: cover;
  background-position: center;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #191919 0%, rgba(25, 25, 26, 0) 76.56%);
    z-index: 0;
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 48px;
    height: 48px;
    background: ${p => p.theme.colors.whiteNeutral};
  }

  blockquote {
    position: relative;
    z-index: 1;
    text-align: right;
    width: 100%;
    padding: 0 16px;
    max-width: 570px;
    margin-left: 25vw;
    p {
      color: ${p => p.theme.colors.white};
      font-weight: 300;
      font-style: italic;
      font-size: ${p => p.theme.fontSizes[1]};
      margin-bottom: ${p => p.theme.space[2]};
      &:before {
        content: open-quote;
        font-size: ${p => p.theme.fontSizes[4]};
      }
      &:after {
        content: close-quote;
        font-size: ${p => p.theme.fontSizes[4]};
      }
    }
    footer {
      font-weight: bold;
      font-size: ${p => p.theme.fontSizes[1]};
      color: ${p => p.theme.colors.white};
    }
  }
`
