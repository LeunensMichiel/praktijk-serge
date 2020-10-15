import React, { useState } from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

import Navbar from "./navigation/navbar"
import Footer from "./footer/footer"
import Banner from "./notification/banner"

import "@reach/dialog/styles.css"

const mainCss = css`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(16px, 1fr) repeat(12, minmax(24px, 95px)) minmax(
      16px,
      1fr
    );
  flex: 1 1 0;
`

const IsIE = () => {
  if (typeof window !== `undefined`) {
    return window.navigator.userAgent.match(/(MSIE|Trident)/)
  }
}
const Layout = ({ children }) => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)
  if (IsIE()) {
    alert(
      "Internet Explorer is oud en wordt niet meer ondersteund. Sergevandevoorde.be zal hier niet goed op draaien. Gelieve een moderne browser te downloaden zoals Google Chrome of Firefox"
    )
    window.open("https://www.google.com/intl/nl/chrome/")
  }
  return (
    <>
      <Banner />
      <Navbar
        show={sideDrawerOpen}
        hamburgerClickHandler={() => {
          setSideDrawerOpen(!sideDrawerOpen)
          document.getElementById("hamburger").classList.toggle("is-active")
        }}
      />
      <main css={mainCss} aria-hidden={sideDrawerOpen}>
        {children}
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
