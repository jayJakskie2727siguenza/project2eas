import React from "react"
// import { Link } from "gatsby"
import '../styles/style.scss'
import Layout from "../components/layouts/layout"
import MainFooter from '../components/layouts/Mainfooter'
import SEO from "../components/seo"


import { Banner, Features, Status, ProvideSolution } from '../components/aboutCompany/aboutcompany'



const aboutCompany = () => (
  <Layout>
    <SEO title="About Company" />
    <Banner title="About Company" />
    <ProvideSolution />
    {/* <Plan /> */}
    <Features />
    <Status />
    <MainFooter />
  </Layout>
)

export default aboutCompany
