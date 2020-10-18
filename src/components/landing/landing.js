import React from "react"
import { Link } from "react-scroll"

import { InnerLanding, LandingImage, LandingWrapper } from "./landingStyles"
const Landing = () => {
  return (
    <>
      <LandingWrapper id="home">
        <InnerLanding>
          <h1>Privéconsultatie fysische geneeskunde en revalidatie</h1>
          <p>
            Met deze site wil ik u op de hoogte brengen van de werking van mijn
            praktijk.
          </p>
          <p>
            U kan er informatie vinden over wie ik ben en wat ik doe, waar en
            wanneer ik raadplegingen doe en hoe u een afspraak kan maken.
          </p>
          <Link
            to="praktisch"
            className="link-cta"
            spy={true}
            hashSpy={true}
            smooth="easeInOutQuint"
          >
            Praktisch
          </Link>
        </InnerLanding>
      </LandingWrapper>
      <LandingImage>
        <blockquote>
          <p>
            Life is like riding a bicycle. To keep your balance, you must keep
            on moving.
          </p>
          <footer>— Albert Einstein</footer>
        </blockquote>
      </LandingImage>
    </>
  )
}

export default Landing
