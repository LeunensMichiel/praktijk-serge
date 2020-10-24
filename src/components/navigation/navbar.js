import React, { useState, useEffect } from "react"
import { Link } from "react-scroll"
import { throttle } from "lodash"

import {
  NavWrapper,
  LogoWrapper,
  LinkWrapper,
  NavbarWrapper,
} from "./navbarStyles"

const Navbar = ({ show = false, hamburgerClickHandler }) => {
  const [isDarkBackground, setIsDarkBackground] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [isStatic, setIsStatic] = useState(true)

  const handleScroll = throttle(() => {
    const currentScrollPos = window.pageYOffset

    setIsStatic(currentScrollPos < 100)

    setPrevScrollPos(currentScrollPos)
  }, 100)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos, isStatic, handleScroll])

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
      <NavWrapper
        show={show}
        isStatic={isStatic}
        isDarkBackground={isDarkBackground}
      >
        <LogoWrapper isDarkBackground={isDarkBackground}>
          <Link
            to="home"
            activeClass="active"
            spy={true}
            smooth="easeInOutQuint"
            onSetActive={() => setIsDarkBackground(true)}
          >
            <h2>Dr. Serge Van de Voorde</h2>
          </Link>
        </LogoWrapper>
        <LinkWrapper isDarkBackground={isDarkBackground}>
          <Link
            to="arts"
            activeClass="active"
            spy={true}
            hashSpy={true}
            smooth="easeInOutQuint"
            onSetActive={() => setIsDarkBackground(false)}
          >
            Arts
          </Link>
          <Link
            to="aanbod"
            hashSpy={true}
            activeClass="active"
            spy={true}
            smooth="easeInOutQuint"
            onSetActive={() => setIsDarkBackground(false)}
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
            onSetActive={() => setIsDarkBackground(false)}
          >
            Praktisch
          </Link>
        </LinkWrapper>
      </NavWrapper>
    </>
  )
}

export default Navbar
