import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

import SEO from "../components/seo"
import '../styles/style.scss'
import Layout from "../components/layouts/layout"
import { Hero, Benefits, Value, About, Blog, Process, LogoList } from '../components/homePage/homepage'




const IndexPage = () => {



  const {
    wpgraph2eas: {
      pageBy: {
        page_seo_acf: {
          siteMetaTitle,
          siteMetaDiscription
        }
      }
    }
  } = useStaticQuery(graphql`
 {
    wpgraph2eas {
      pageBy(uri: "home") {
        page_seo_acf {
          siteMetaTitle
          siteMetaDiscription
        }
      }
    }
  }
`)

  return (
    <Layout>
      <SEO title={siteMetaTitle} description={siteMetaDiscription} />

      <Hero />
      <Benefits />

      <Value />
      <About />
      <Blog />
      <Process />
      <LogoList />



    </Layout>
  )
}

export default IndexPage

