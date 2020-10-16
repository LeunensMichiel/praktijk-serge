import React from "react"

import { FooterWrapper } from "./footerStyles"

const Footer = () => {
  return (
    <FooterWrapper>
      <span>
        {" "}
        © Dr. Serge Van de Voorde <b>{new Date().getFullYear()}</b>. Fysische
        geneeskunde & revalidatie.
      </span>
    </FooterWrapper>
  )
}

export default Footer
