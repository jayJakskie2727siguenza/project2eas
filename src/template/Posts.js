import React from 'react'
import Moment from 'react-moment'
import { graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'


import Banner from '../components/Banner'
import Layout from '../components/layouts/layout'
import MainFooter from '../components/layouts/Mainfooter'
import SEO from '../components/seo'

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
        <div className="singlePage__col1 pl-1 pr-2 pt-5 mt-1 mb-5">
          <h2 className="singlePage__col1--h2" dangerouslySetInnerHTML={{ __html: title }} />
          <div className="singlePage__col1--user">
            <p className="singlePage__col1--user--date">

              <Moment format="MMMM DD, YYYY" >{date}</Moment>

            </p>
            <div className="singlePage__col1--user--wrapperInfo">
              <span className="singlePage__col1--user--wrapperInfo--name mr-2"><i ><FontAwesomeIcon icon={faUser} /></i> John Doe</span>
              <span className="singlePage__col1--user--wrapperInfo--occupation"><i ><FontAwesomeIcon icon={faCalendarAlt} /></i> Staff Meetings</span>
            </div>
          </div>
          <div className="singlePage__col1--userBlog">
            <div className="singlePage__col1--userBlog--imgWrapper">
              <img src={sourceUrl} className="singlePage__col1--userBlog--imgWrapper--img" alt={altText} />
            </div>
            <div className="singlePage__col1--userBlog--blog" dangerouslySetInnerHTML={{ __html: content }} />

          </div>


        </div >

        <SinglePageCol2 />

      </section>
      <MainFooter />
    </Layout>

  )
}

export default Posts



