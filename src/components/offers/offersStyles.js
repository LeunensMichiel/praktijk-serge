import styled from "@emotion/styled"
import Jumping from "../../assets/images/jumping.jpg"

export const OfferWrapper = styled.section`
  grid-column: 1 / span 14;
  background: linear-gradient(
      0deg,
      rgba(235, 237, 240, 0.85),
      rgba(235, 237, 240, 0.85)
    ),
    url(${Jumping});
  background-size: cover;
  background-position: center;
  display: grid;
  grid-template-columns: minmax(16px, 1fr) 1fr 1fr minmax(16px, 1fr);
  grid-auto-rows: auto;
  grid-gap: 48px 24px;
  padding: ${p => p.theme.space[7]} 0;

  .offer-item {
    grid-column: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: ${p => p.theme.shadows.button};
    padding: ${p => p.theme.space[2]} ${p => p.theme.space[3]};
    background: ${p => p.theme.colors.accentLighter};
    &:nth-of-type(even) {
      grid-column: 3;
    }

    h4 {
      color: ${p => p.theme.colors.accentDark};
      font-weight: 700;
      font-size: ${p => p.theme.fontSizes[4]};
      line-height: 100%;
    }
  }
`
