import styled from "@emotion/styled"

export const AboutWrapper = styled.section`
  grid-column: 2 / span 12;
  display: flex;
  align-items: center;
  padding: ${p => p.theme.space[8]} 0;

  .img-wrapper {
    width: 33%;
    height: 0;
    overflow: hidden;
    padding-bottom: 46%;
    position: relative;
    flex-shrink: 0;
    margin-right: ${p => p.theme.space[6]};
    box-shadow: ${p => p.theme.shadows.button};
  }

  .gatsby-image-wrapper {
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  p {
    font-size: ${p => p.theme.fontSizes[3]};
    line-height: 200%;
    color: ${p => p.theme.colors.grayDark};
    margin-bottom: ${p => p.theme.space[4]};
  }
  b {
    color: ${p => p.theme.colors.accentDark};
  }

  .flex {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .about__card {
    display: flex;
    flex-direction: column;
    h3 {
      font-size: ${p => p.theme.fontSizes[3]};
      font-weight: bold;
      text-transform: uppercase;
      color: ${p => p.theme.colors.accentDark};
      margin-bottom: ${p => p.theme.space[0]};
    }
    span {
      font-weight: 700;
      font-size: ${p => p.theme.fontSizes[1]};
      line-height: 100%;
      color: ${p => p.theme.colors.grayDark};
      margin-bottom: ${p => p.theme.space[0]};
    }
    .about__card-footer {
      font-weight: 400;
      font-size: ${p => p.theme.fontSizes[1]};
      line-height: 100%;
      color: ${p => p.theme.colors.grayDark};
      margin-bottom: ${p => p.theme.space[0]};
    }
    a {
      text-decoration: underline;
      transition: color 0.3s ease-out;
      &:hover {
        color: ${p => p.theme.colors.accent};
      }
    }
  }

  @media ${p => p.theme.mq.mobileM} {
    flex-wrap: wrap;
    padding: ${p => p.theme.space[5]} 0;
    .img-wrapper {
      width: 100%;
      padding-bottom: 100%;
      margin-right: 0;
      margin-bottom: ${p => p.theme.space[5]};
    }
    .flex {
      flex-wrap: wrap;
      justify-content: flex-start;
    }
    p {
      line-height: 160%;
      &:last-of-type {
        margin-bottom: ${p => p.theme.space[5]};
      }
    }
    .about__card {
      margin-bottom: ${p => p.theme.space[5]};
    }
  }
`
