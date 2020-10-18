import styled from "@emotion/styled"

export const InfoWrapper = styled.section`
  grid-column: 3 / span 10;
  display: flex;
  flex-wrap: wrap;
  padding: ${p => p.theme.space[7]} 0;

  .contact__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    padding: ${p => p.theme.space[4]};
    background-color: ${p => p.theme.colors.white};
    box-shadow: ${p => p.theme.shadows.button};
  }
  .contact__info--section:not(:last-of-type) {
    margin-bottom: ${p => p.theme.space[2]};
  }

  h5 {
    font-weight: bold;
    font-size: ${p => p.theme.fontSizes[2]};
    line-height: 120%;
    text-transform: uppercase;
    color: ${p => p.theme.colors.accentDark};
  }
  p {
    font-size: ${p => p.theme.fontSizes[2]};
    letter-spacing: -0.01em;
    color: ${p => p.theme.colors.grayDark};
  }

  b {
    color: ${p => p.theme.colors.accentDark};
  }

  .contact__aside {
    flex: 1;
    background: linear-gradient(
      0deg,
      rgba(240, 239, 242, 0.33),
      rgba(240, 239, 242, 0.33)
    );
    position: relative;

    .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      position: absolute !important;
    }

    p {
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: ${p => p.theme.space[3]};
      font-size: 10px;
      color: ${p => p.theme.colors.accent};
      background-color: ${p => p.theme.colors.accentLight};
    }
  }

  @media ${p => p.theme.mq.mobileM} {
    grid-column: 2 / span 12;
    flex-direction: column;
    padding: ${p => p.theme.space[5]} 0;
    .contact__info {
      padding: ${p => p.theme.space[3]};
    }
    p {
      font-size: ${p => p.theme.fontSizes[1]};
    }
    .contact__aside {
      height: 0;
      overflow: hidden;
      padding-bottom: 100%;
      position: relative;
      flex-shrink: 0;
      p {
        padding: ${p => p.theme.space[2]};
      }
    }
  }
`

export const MapWrapper = styled.section`
  grid-column: 1 / span 14;
  position: relative;
  height: 550px;

  > div {
    width: 100% !important;
  }

  .map__marker {
    content: "";
    width: 77px;
    height: 77px;
    display: block;
    background-color: rgba(161, 169, 179, 0.33);
    border-radius: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    &:after {
      z-index: 2;
      content: "";
      width: 28px;
      height: 28px;
      display: block;
      background-color: ${p => p.theme.colors.accentDark};
      border-radius: 100%;
    }
  }

  @media ${p => p.theme.mq.mobileM} {
    grid-column: 2 / span 12;
  }
`
