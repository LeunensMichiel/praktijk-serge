import styled from "@emotion/styled"

export const NavWrapper = styled.header`
  width: 100%;
  display: grid;
  flex-shrink: 0;
  grid-template-columns: minmax(16px, 1fr) repeat(12, minmax(24px, 95px)) minmax(
      16px,
      1fr
    );
  align-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: ${p => p.theme.space[4]} 0;
  transition: background-color 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  background-color: ${p =>
    p.isDarkBackground ? "transparent" : p.theme.colors.white};
  transform: ${props =>
    props.isStatic ? "translateY(72px)" : "translateY(0)"};
  @media ${p => p.theme.mq.tablet} {
    padding: ${p => p.theme.space[2]} 0;
    grid-gap: 12px 0;
  }

  @media ${p => p.theme.mq.mobileM} {
    background-color: ${p => p.theme.colors.white};
    display: flex;
    flex-direction: column;
    top: 72px;
    width: 100%;
    min-height: 180px;
    padding: 0;
    transform: ${props => (props.show ? "translateY(0)" : "translateY(-100%)")};
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
`

export const LogoWrapper = styled.div`
  grid-column: 2 / span 4;
  display: flex;
  align-items: center;
  h2 {
    text-transform: uppercase;
    font-size: ${p => p.theme.fontSizes[4]};
    color: ${p =>
      p.isDarkBackground
        ? p.theme.colors.accentLighter
        : p.theme.colors.grayDark};
    cursor: pointer;
    transition: color 0.3s ease-out;
    &:hover {
      color: ${p => p.theme.colors.accent};
      transition: color 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    }
  }
  @media ${p => p.theme.mq.tablet} {
    margin-top: ${p => p.theme.space[0]};
    grid-column: 2 / span 6;
    justify-content: center;
    h2 {
      font-size: ${p => p.theme.fontSizes[2]};
    }
  }
  @media ${p => p.theme.mq.mobileM} {
    h2 {
      color: ${p => p.theme.colors.accentLighter};
    }
    margin-top: 0;
    display: ${p => (p.mobile ? "flex" : "none")};
    padding-left: 16px;
  }
`

export const LinkWrapper = styled.nav`
  grid-column: 6 / span 8;
  justify-self: end;
  display: flex;
  align-items: center;
  a {
    padding: ${p => p.theme.space[1]} ${p => p.theme.space[2]};
    margin: 0 ${p => p.theme.space[0]};
    font-size: ${p => p.theme.fontSizes[3]};
    font-weight: 700;
    text-transform: uppercase;
    color: ${p =>
      p.isDarkBackground ? p.theme.colors.white : p.theme.colors.grayDark};
    transition: color 0.3s ease-out, background-color 0.3s ease-out;
    cursor: pointer;
    &:hover {
      color: ${p => p.theme.colors.accent};
      transition: color 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    }
    &.active {
      color: ${p => p.theme.colors.white};
      background-color: ${p => p.theme.colors.grayDarker};
    }
  }
  @media ${p => p.theme.mq.tablet} {
    grid-column: 8 / span 6;
    justify-self: center;
    a {
      font-size: ${p => p.theme.fontSizes[2]};
    }
  }
  @media ${p => p.theme.mq.mobileM} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    flex: auto;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      padding: 32px 0;
      color: ${p => p.theme.colors.white};
      font-size: ${p => p.theme.fontSizes[3]};
      background-color: ${p => p.theme.colors.grayDark};
    }
  }
`

export const NavbarWrapper = styled.nav`
  /*Animation by https://github.com/jonsuh/hamburgers*/
  width: 100%;
  height: 72px;
  display: none;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 10000;
  background: ${p => p.theme.colors.grayDarker};
  box-shadow: ${p => p.theme.shadows.container};

  .hamburger {
    padding: 8px;
    height: 48px;
    margin-right: 16px;
    display: inline-block;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;

    &:hover {
      opacity: 0.5;
    }
    &.is-active {
      &:hover {
        opacity: 0.5;
      }
      .hamburger-inner,
      .hamburger-inner::before,
      .hamburger-inner::after {
        background-color: ${p => p.theme.colors.white};
      }
    }
  }

  .hamburger-box {
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative;
  }

  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px;
    &,
    &::before,
    &::after {
      width: 40px;
      height: 4px;
      background-color: ${p => p.theme.colors.white};
      border-radius: 2px;
      position: absolute;
      transition-property: transform;
      transition-duration: 0.15s;
      transition-timing-function: ease;
    }
    &::before,
    &::after {
      content: "";
      display: block;
    }

    &::before {
      top: -10px;
    }

    &::after {
      bottom: -10px;
    }
  }
  .hamburger--minus {
    .hamburger-inner {
      &::before,
      &::after {
        transition: bottom 0.08s 0s ease-out, top 0.08s 0s ease-out,
          opacity 0s linear;
      }
    }

    &.is-active {
      .hamburger-inner {
        &::before,
        &::after {
          opacity: 0;
          transition: bottom 0.08s ease-out, top 0.08s ease-out,
            opacity 0s 0.08s linear;
        }
        &::before {
          top: 0;
        }

        &::after {
          bottom: 0;
        }
      }
    }
  }

  @media ${p => p.theme.mq.mobileM} {
    display: flex;
  }
`
