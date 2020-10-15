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
            <h2>Huidziekten Deinze</h2>
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
            <h2>Huidziekten Deinze</h2>
          </Link>
        </LogoWrapper>
        <LinkWrapper>
          <Link to="/" activeClassName="active">
            Welkom
          </Link>
          <Link to="/team/" partiallyActive={true} activeClassName="active">
            Team
          </Link>
          <Link
            to="/behandelingen/"
            partiallyActive={true}
            activeClassName="active"
          >
            Behandelingen
          </Link>
          <Link
            to="/praktisch/"
            partiallyActive={true}
            activeClassName="active"
          >
            Praktisch
          </Link>
        </LinkWrapper>
        <hr />
      </NavWrapper>
    </>
  )
}

export default Navbar
