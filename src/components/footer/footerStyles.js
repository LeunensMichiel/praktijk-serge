import styled from "@emotion/styled"

export const FooterWrapper = styled.footer`
  display: grid;
  grid-template-columns: minmax(16px, 1fr) repeat(12, minmax(24px, 95px)) minmax(
      16px,
      1fr
    );
  width: 100%;
  background: ${p => p.theme.colors.accentLight};
  padding: ${p => p.theme.space[6]} 0;
  margin-top: auto;
  position: relative;
  &:before {
    content: " ";
    position: absolute;
    background: ${p => p.theme.colors.accentRich};
    width: 260px;
    height: 34px;
    top: -17px;
    right: 0;
    opacity: 0.33;
  }
`

export const UpperFooter = styled.div`
  grid-column: 2 / span 12;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  &:before {
    content: " ";
    position: absolute;
    width: 100%;
    height: 180px;
    top: -25px;
    z-index: 1;
    background-repeat: no-repeat;
    background-size: 180px;
    background-position: left center;
  }
  h3 {
    font-size: ${p => p.theme.fontSizes[3]};
    font-family: ${p => p.theme.fonts.heading};
    margin-bottom: ${p => p.theme.space[0]};
  }

  span {
    font-size: ${p => p.theme.fontSizes[0]};
  }
`

export const BottomFooter = styled.div`
  grid-column: 2 / span 12;
  display: flex;
  justify-content: flex-start;
  margin-top: ${p => p.theme.space[5]};

  .footer__block {
    display: flex;
    flex-direction: column;
    margin-right: ${p => p.theme.space[7]};
    span {
      margin-bottom: ${p => p.theme.space[0]};
    }
  }

  @media ${p => p.theme.mq.tablet} {
    .footer__block {
      margin-right: ${p => p.theme.space[4]};
    }
  }
  @media ${p => p.theme.mq.mobileM} {
    flex-direction: column;
    .footer__block {
      margin-right: 0;
      margin-bottom: ${p => p.theme.space[2]};

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
`
