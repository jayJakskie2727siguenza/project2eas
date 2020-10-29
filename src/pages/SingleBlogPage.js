import React from 'react'
import Banner from '../components/Banner'
import Layout from '../components/layouts/layout'
import MainFooter from '../components/layouts/Mainfooter'
import SEO from '../components/seo'
import SinglePageCol1 from '../components/blogStyle/SinglePageCol1'
import SinglePageCol2 from '../components/blogStyle/SinglePageCol2'


const SingleBlogPage = () => {
    return (
        <Layout>
            <SEO title="News" />
            <Banner title="News" subtitle="Jack" />
            <section className="singlePage container pb-2 ">
                <SinglePageCol1 />
                <SinglePageCol2 />
            </section>
            <MainFooter />
        </Layout>

    )
}

export default SingleBlogPage
