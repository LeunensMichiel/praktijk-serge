import React from "react"
import { InfoWrapper } from "./contactStyles"

import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Practical = () => {
  const data = useStaticQuery(graphql`
    query {
      building: file(relativePath: { eq: "images/consultaat.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 560, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <InfoWrapper>
      <div className="contact__info">
        <div className="contact__info--section">
          <h5>Privépraktijk</h5>
          <p>Residentie De Medici</p>
          <p>Volhardingslaan 72 bus 12</p>
          <p>9800 Deinze (rondpunt, boven Belfius)</p>
        </div>
        <div className="contact__info--section">
          <h5>Raadpleging op</h5>
          <p>Dinsdagnamiddag, wekelijks</p>
          <p>Woensdagvoormiddag 1x/maand</p>
        </div>
        <div className="contact__info--section">
          <h5>Afspraak</h5>
          <p>
            U kan enkel telefonisch een afspraak maken op het nummer 09 224 63
            33.
          </p>
          <p>
            <b>Met vermelding:</b> privéraadpleging Deinze.
          </p>
          <p>
            Ook via <b>0475 75 24 86</b> kan u een bericht inspreken
          </p>
        </div>
      </div>
      <aside className="contact__aside">
        <Img
          alt="Foto van de het praktijkgebouw"
          fluid={data.building.childImageSharp.fluid}
        />
        <p>
          Dit is in een appartementsgebouw gelegen aan het ronde punt bij
          Petegem-kerk, op het eerste verdiep, boven de Belfiusbank en rechtover
          het CM-gebouw.
        </p>
      </aside>
    </InfoWrapper>
  )
}

export default Practical
