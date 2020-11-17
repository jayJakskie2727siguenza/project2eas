import React from 'react'
import '../styles/style.scss'

import { graphql, useStaticQuery } from 'gatsby'

import Layout from "../components/layouts/layout"
import MainFooter from '../components/layouts/Mainfooter'
import SEO from "../components/seo"

import { Banner, QuickContact, FinancialPlanning, ServicesOnline, FinancialPlanning1, FinancialPlanning3 } from '../components/financialPlanning/financialPlanningMain'


const getData = graphql`
{
    wpgraph2eas {
        pageBy(uri: "services") {
            page_seo_acf {
                    siteMetaTitle
                    siteMetaDescription
                }
                title(format: RENDERED)
        }
    }
}
`

const FinancialPlanningPage = () => {

    const {
        wpgraph2eas: {
            pageBy: {
                page_seo_acf: {
                    siteMetaTitle,
                    siteMetaDescription
                },
                title
            }
        }
    } = useStaticQuery(getData)

    return (
        <Layout>
            <SEO title={siteMetaTitle} description={siteMetaDescription} />
            <Banner title={title} />
            <section className="main container pt-6 pb-6 dflex justify-content-center">
                <div className="col1 pr-1">
                    <QuickContact />

                </div>
                <div className="col2 mt-3 ml-2 px-1">
                    <FinancialPlanning />
                    <ServicesOnline />
                    <FinancialPlanning1 />
                    <FinancialPlanning3 />
                </div>
            </section>
            <MainFooter />
        </Layout>
    )

}

export default FinancialPlanningPage
