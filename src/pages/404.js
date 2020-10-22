import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layouts/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <p><Link to="/">back to Home</Link></p>
  </Layout>
)

export default NotFoundPage
