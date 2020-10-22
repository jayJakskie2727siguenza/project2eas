import React from 'react'
import '../styles/style.scss'
import Layout from "../components/layouts/layout"
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
                        <Marketing />
                        <Architect />
                        <Family />
                        <Commerce />
                        <Management />
                        <Funds />
                    </div>
                </div>
            </section>


        </Layout>
    )
}

export default blogStyle
