import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import '../styles/style.scss'
import Layout from "../components/layouts/layout"
import MainFooter from '../components/layouts/Mainfooter'
import SEO from "../components/seo"


import { Banner, Features, Status, ProvideSolution, Teams } from '../components/aboutCompany/aboutcompany'

const data = graphql`{
    wpgraph2eas {
      pageBy(uri: "about") {
        aboutus_pagesection_acf {
          aboutUsTitle
        }
      }
    }
  }`

const AboutCompany = () => {
  const { wpgraph2eas: {
    pageBy: {
      aboutus_pagesection_acf: {
        aboutUsTitle
      }
    }
  } } = useStaticQuery(data)
  return (
    <Layout>
      <SEO title={aboutUsTitle} />
      <Banner title={aboutUsTitle} />
      <ProvideSolution />
      <Features />
      <Status />
      <Teams />
      <MainFooter />
    </Layout>
  )
}

export default AboutCompany
