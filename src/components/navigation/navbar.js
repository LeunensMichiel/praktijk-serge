import React from "react"
import { Link } from "gatsby"

import {
  NavWrapper,
  LogoWrapper,
  LinkWrapper,
  NavbarWrapper,
} from "./navbarStyles"

const Navbar = ({ show = false, hamburgerClickHandler }) => {
  return (
    <>
      <NavbarWrapper>
        <LogoWrapper mobile>
          <Link to="/">
            <h2>Dr. Serge Van de Voorde</h2>
          </Link>
        </LogoWrapper>
        <button
          className="hamburger hamburger--elastic"
          type="button"
          onClick={hamburgerClickHandler}
          onKeyDown={hamburgerClickHandler}
          id="hamburger"
          aria-label="Menu"
          aria-controls="navigation"
          aria-expanded={show}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </NavbarWrapper>
      <NavWrapper show={show}>
        <LogoWrapper>
          <Link to="/">
            <h2>Dr. Serge Van de Voorde</h2>
          </Link>
        </LogoWrapper>
        <LinkWrapper>
          <Link to="/#arts" activeClassName="active">
            Arts
          </Link>
          <Link to="/#aanbod" activeClassName="active">
            Aanbod
          </Link>
          <Link to="/#praktisch" className="link-cta" activeClassName="active">
            Praktisch
          </Link>
        </LinkWrapper>
      </NavWrapper>
    </>
  )
}

export default Navbar
