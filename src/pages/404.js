import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="background container">
      <h1>404: Not Found</h1>
      <p><Link to="/">back to main</Link></p>
    </div>
  </Layout>
)

export default NotFoundPage
