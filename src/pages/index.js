import React from "react"
import SEO from "../components/seo"
import '../styles/style.scss'
import Layout from "../components/layouts/layout"
import { Hero, Benefits, Value, About, Blog, Process, LogoList } from '../components/homePage/homepage'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Hero />
    <Benefits />

    <Value />
    <About />
    <Blog />
    <Process />
    <LogoList />



  </Layout>
)

export default IndexPage

