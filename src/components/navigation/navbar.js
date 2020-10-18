import React from "react"
import { Link } from "react-scroll"

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
          <Link
            to="home"
            activeClass="active"
            spy={true}
            smooth="easeInOutQuint"
          >
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
          <Link
            to="home"
            activeClass="active"
            spy={true}
            smooth="easeInOutQuint"
          >
            <h2>Dr. Serge Van de Voorde</h2>
          </Link>
        </LogoWrapper>
        <LinkWrapper>
          <Link
            to="arts"
            activeClass="active"
            spy={true}
            hashSpy={true}
            smooth="easeInOutQuint"
          >
            Arts
          </Link>
          <Link
            to="aanbod"
            hashSpy={true}
            activeClass="active"
            spy={true}
            smooth="easeInOutQuint"
          >
            Aanbod
          </Link>
          <Link
            to="praktisch"
            className="link-cta"
            activeClass="active"
            spy={true}
            hashSpy={true}
            smooth="easeInOutQuint"
          >
            Praktisch
          </Link>
        </LinkWrapper>
      </NavWrapper>
    </>
  )
}

export default Navbar
