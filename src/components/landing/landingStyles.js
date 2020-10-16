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
  justify-content: center;
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
  background: linear-gradient(180deg, #191919 0%, rgba(25, 25, 26, 0) 76.56%),
    url(${Biker});
  background-size: cover;
  background-position: center;
  position: relative;
`
