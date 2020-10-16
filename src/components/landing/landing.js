import React from "react"
import { InnerLanding, LandingImage, LandingWrapper } from "./landingStyles"
const Landing = () => {
  return (
    <>
      <LandingWrapper>
        <InnerLanding>
          <h1>Privéconsultatie fysische geneeskunde en revalidatie</h1>
          <p>
            Met deze site wil ik u op de hoogte brengen van de werking van mijn
            praktijk.
            <br />U kan er informatie vinden over wie ik ben en wat ik doe, waar
            en wanneer ik raadplegingen doe en hoe u een afspraak kan maken.
          </p>
          <a>Maak een afspraak</a>
        </InnerLanding>
      </LandingWrapper>
      <LandingImage />
    </>
  )
}

export default Landing
