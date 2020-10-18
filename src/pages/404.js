import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>Deze pagina bestaat niet.</p>
  </Layout>
)

export default NotFoundPage
