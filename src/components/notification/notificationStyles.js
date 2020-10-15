import styled from "@emotion/styled"

export const BannerWrapper = styled.aside`
  grid-column: 1 / span 14;
  background: ${p => p.theme.colors.accent};
  text-align: center;
  font-size: ${p => p.theme.fontSizes[1]};
  padding: ${p => p.theme.space[2]} 0;
  margin-bottom: ${p => p.theme.space[1]};

  button {
    text-decoration: underline;
  }

  @media ${p => p.theme.mq.mobileM} {
    margin-top: 72px;
    margin-bottom: 0;
    font-size: ${p => p.theme.fontSizes[0]};
    padding: ${p => p.theme.space[2]} 16px;
  }
`
