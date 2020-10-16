import styled from "@emotion/styled"

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${p => p.theme.colors.accentLight};
  color: ${p => p.theme.colors.grayDark};
  padding: ${p => p.theme.space[3]};
  margin-top: auto;

  b {
    color: ${p => p.theme.colors.accentDark};
  }
`
