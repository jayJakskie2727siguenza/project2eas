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
        page_seo_acf {
        siteMetaTitle
        siteMetaDescription
      }
       title(format: RENDERED)
      }
    }
  }`

const AboutCompany = () => {
  const { wpgraph2eas: {
    pageBy: {
      page_seo_acf: {
        siteMetaTitle,
        siteMetaDescription
      },
      title
    }
  } } = useStaticQuery(data)
  return (
    <Layout>
      <SEO title={siteMetaTitle} description={siteMetaDescription} />
      <Banner title={title} />
      <ProvideSolution />
      <Features />
      <Status />
      <Teams />
      <MainFooter />
    </Layout>
  )
}

export default AboutCompany
