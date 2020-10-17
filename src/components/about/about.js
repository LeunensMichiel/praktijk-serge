import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { AboutWrapper } from "./aboutStyles"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      serge: file(relativePath: { eq: "images/serge.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 560, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <AboutWrapper>
      <div className="img-wrapper">
        <Img
          alt="praktijkafbeelding"
          fluid={data.serge.childImageSharp.fluid}
        />
      </div>
      <div className="about-text">
        <p>
          <b>Dokter Serge Van de Voorde</b> studeerde geneeskunde aan de KU
          Leuven en behaalde zijn diploma in 1994. Nadien specialiseerde hij
          zich in de fysische geneeskunde en revalidatie met opleidingen in AZ
          Sint Lucas Brugge, SZ Roeselare en UZ Leuven. Daarnaast behaalde hij
          een licentie in de sportgeneeskunde en een certificaat in de manuele
          geneeskunde.
        </p>
        <p>
          Sinds 2000 werkt hij voltijds in het AZ Sint Lucas Gent en startte een
          privéconsultatie in 2011 in Residentie De Medici te Deinze.
        </p>
        <div className="flex">
          <div className="about__card">
            <h3>AZ Sint-Lucas Gent</h3>
            <span>Elke weekdag</span>
            <a
              href="http://www.azstlucas.be/zorgaanbod/artsen/detail/van-de-voorde-serge"
              target="_blank"
              rel="noopener noreferrer"
              className="about__card-footer"
            >
              Meer info
            </a>
          </div>
          <div className="about__card">
            <h3>Privéconsultatie</h3>
            <span>Dinsdagnamiddag</span>
            <span className="about__card-footer">
              1x/maand woensdagvoormiddag
            </span>
          </div>
        </div>
      </div>
    </AboutWrapper>
  )
}

export default About
