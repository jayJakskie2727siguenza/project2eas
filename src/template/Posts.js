import React from 'react'
import { graphql } from 'gatsby'


import Banner from '../components/Banner'
import Layout from '../components/layouts/layout'
import MainFooter from '../components/layouts/Mainfooter'
import SEO from '../components/seo'

import SinglePageCol1 from '../components/blogStyle/SinglePageCol1'
import SinglePageCol2 from '../components/blogStyle/SinglePageCol2'



export const getData = graphql`


  query GetSinglePost($slug:String!){
  wpgraph2eas {
    postBy(slug: $slug) {
      title
      content
      featuredImage {
        sourceUrl
        altText
      }
       date
    }
  }
}

`

const Posts = ({ data: { wpgraph2eas: { postBy: { title, content, featuredImage: { sourceUrl, altText }, date } } } }) => {




    return (
        <Layout>
            <SEO title={title} />
            <Banner title={title} subtitle="News" />
            <section className="singlePage container pb-2 ">
                <SinglePageCol1 content={content} title={title} imgs={sourceUrl} alt={altText} date={date} />
                <SinglePageCol2 />

            </section>
            <MainFooter />
        </Layout>

    )
}

export default Posts



