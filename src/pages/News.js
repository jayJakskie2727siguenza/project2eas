import React from 'react'
import '../styles/style.scss'
import Layout from "../components/layouts/layout"
import MainFooter from '../components/layouts/Mainfooter'
import SEO from "../components/seo"

import { Banner, Marketing, Architect, Family, Commerce, Management, Funds } from '../components/blogStyle/blogStyle'





const blogStyle = () => {


    return (
        <Layout>
            <SEO title="News" />
            <Banner title="News" />
            <section className="mainSection container">
                <div className="mainSection--1 dflex px-1">
                    <div className="mainSection__col2">
                        <Marketing title="Participate in staff meetings manage dedicated to marketing" />
                        <Architect title="Future Plan & Strategy for Consutruction and Architecture" />
                        <Family title="Family Helping Family in The Wake of Hurricanes Harvey and
                    Irma" />
                        <Commerce title="Winning the Race for Digital Commerce" />
                        <Management title="Transform Customer Experience with an Intelligent Client
                    Management" />
                        <Funds title="Hedge Funds This Year, Explained" />
                    </div>
                </div>
            </section>

            <MainFooter />
        </Layout>
    )
}

export default blogStyle
