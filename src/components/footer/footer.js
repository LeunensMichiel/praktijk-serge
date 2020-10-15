import React from "react"

import { FooterWrapper, UpperFooter, BottomFooter } from "./footerStyles"

const Footer = () => {
  return (
    <FooterWrapper>
      <UpperFooter>
        <h3>Huidziekten Deinze</h3>
        <span> © {new Date().getFullYear()} Huidziekten Deinze</span>
      </UpperFooter>
      <BottomFooter>
        <div className="footer__block">
          <span>Dr. Isabel Blockeel</span>
          <span>Dr. Lies Vanquickenborne</span>
        </div>
        <div className="footer__block">
          <span>Volhardingslaan 72/12</span>
          <span>9800 Deinze</span>
        </div>
        <div className="footer__block">
          <span>Tel: 09 386 16 10</span>
          <span>huidziekten.deinze@hotmail.com</span>
        </div>
      </BottomFooter>
    </FooterWrapper>
  )
}

export default Footer
