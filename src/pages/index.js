import React from "react"
import SEO from "../components/seo"
import '../styles/style.scss'
import Layout from "../components/layouts/layout"
import { Hero, Features, Benefits, Value, About, Blog, Process, Testimony } from '../components/homePage/homepage'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Hero />
    <Features />
    <Benefits />
    <Value />
    <About />
    <Blog />
    <Process />
    <Testimony />



  </Layout>
)

export default IndexPage

