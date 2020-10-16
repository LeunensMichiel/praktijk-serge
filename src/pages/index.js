import React from "react"

import SEO from "../components/seo/seo"
import Layout from "../components/layout"
import Landing from "../components/landing/landing"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Privéconsultatie fysische geneeskunde en revalidatie"
      description="Dr. Serge Van de Voorde specialiseert zich in de fysische geneeskunde en revalidatie. Bij hem kan u terecht voor alles rond sportletsels, rug- en nek, infiltraties en meer."
    />
    <Landing />
  </Layout>
)

export default IndexPage
