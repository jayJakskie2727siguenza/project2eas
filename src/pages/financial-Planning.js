import React from 'react'
import '../styles/style.scss'
import Layout from "../components/layouts/layout"
import SEO from "../components/seo"

import { Banner, QuickContact, NeedHelp, Downloads, FinancialPlanning, ServicesOnline, FinancialPlanning1, FinancialPlanning2, FinancialPlanning3 } from '../components/financialPlanning/financialPlanningMain'



const financialPlanningPage = () => {
    return (
        <Layout>
            <SEO title="Services" />
            <Banner title="Services" />
            <section className="main container pt-6 pb-6 dflex justify-content-center">
                <div className="col1 pr-1">
                    <QuickContact />
                    <NeedHelp />
                    <Downloads />
                </div>
                <div className="col2 mt-3 ml-2 px-1">
                    <FinancialPlanning />
                    <ServicesOnline />
                    <FinancialPlanning1 />
                    <FinancialPlanning2 />
                    <FinancialPlanning3 />
                </div>
            </section>
        </Layout>
    )

}

export default financialPlanningPage
