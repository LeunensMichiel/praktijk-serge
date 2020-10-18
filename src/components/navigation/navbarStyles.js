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
  top: 100px;
  left: 0;
  right: 0;
  z-index: 100;

  @media ${p => p.theme.mq.mobileM} {
    background-color: ${p => p.theme.colors.white};
    display: flex;
    flex-direction: column;
    top: 72px;
    width: 100%;
    min-height: 200px;
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
    color: ${p => p.theme.colors.accentLighter};
    cursor: pointer;
    transition: color 0.3s ease-out;
    &:hover {
      color: ${p => p.theme.colors.accent};
      transition: color 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    }
  }
  @media ${p => p.theme.mq.tablet} {
    margin-top: ${p => p.theme.space[0]};
    grid-column: 2 / span 12;
    justify-content: center;
    h2 {
      font-size: ${p => p.theme.fontSizes[2]};
    }
  }
  @media ${p => p.theme.mq.mobileM} {
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
    color: ${p => p.theme.colors.white};
    transition: color 0.3s ease-out, background-color 0.3s ease-out;
    cursor: pointer;
    &:hover {
      color: ${p => p.theme.colors.accent};
      transition: color 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    }
    &.active {
      background-color: ${p => p.theme.colors.grayDarker};
    }
  }
  @media ${p => p.theme.mq.tablet} {
    grid-column: 2 / span 12;
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
      font-size: ${p => p.theme.fontSizes[3]};
      background-color: ${p => p.theme.colors.grayDark};
      &:nth-of-type(2n) {
        background-color: ${p => p.theme.colors.grayDarker};
      }
      &:hover,
      &:focus {
        background-color: ${p => p.theme.colors.accentDark};
      }
      &.link-cta {
        &:hover,
        &:focus {
          background-color: ${p => p.theme.colors.accentDark};
        }
      }
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
    padding: 16px;
    height: 56px;
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
  .hamburger--elastic {
    .hamburger-inner {
      top: 2px;
      transition-duration: 0.275s;
      transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);

      &::before {
        top: 10px;
        transition: opacity 0.125s 0.275s ease;
      }

      &::after {
        top: 20px;
        transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
    }
    &.is-active {
      .hamburger-inner {
        transform: translate3d(0, 10px, 0) rotate(135deg);
        transition-delay: 0.075s;

        &::before {
          transition-delay: 0s;
          opacity: 0;
        }

        &::after {
          transform: translate3d(0, -20px, 0) rotate(-270deg);
          transition-delay: 0.075s;
        }
      }
    }
    .hamburger--elastic-r {
      .hamburger-inner {
        top: 2px;
        transition-duration: 0.275s;
        transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);

        &::before {
          top: 10px;
          transition: opacity 0.125s 0.275s ease;
        }

        &::after {
          top: 20px;
          transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
      }
      &.is-active {
        .hamburger-inner {
          transform: translate3d(0, 10px, 0) rotate(-135deg);
          transition-delay: 0.075s;

          &::before {
            transition-delay: 0s;
            opacity: 0;
          }

          &::after {
            transform: translate3d(0, -20px, 0) rotate(270deg);
            transition-delay: 0.075s;
          }
        }
      }
    }
  }

  @media ${p => p.theme.mq.mobileM} {
    display: flex;
  }
`
