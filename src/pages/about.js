import React from "react"
// import { Link } from "gatsby"
import '../styles/style.scss'
import Layout from "../components/layouts/layout"
import SEO from "../components/seo"


import { Banner, Features, Plan, Status, ProvideSolution } from '../components/aboutCompany/aboutcompany'



const aboutCompany = () => (
  <Layout>
    <SEO title="About Company" />
    <Banner title="About Company" />
    <Plan />
    <Features />
    <Status />
    <ProvideSolution />
  </Layout>
)

export default aboutCompany
