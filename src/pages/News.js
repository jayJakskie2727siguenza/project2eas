import React from 'react'
import Moment from 'react-moment'

import { Link } from 'gatsby'
// import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { graphql, useStaticQuery } from 'gatsby'

import '../styles/style.scss'
import Layout from "../components/layouts/layout"
import MainFooter from '../components/layouts/Mainfooter'
import SEO from "../components/seo"

import { Banner } from '../components/blogStyle/blogStyle'



const getData = graphql`
{
    wpgraph2eas {
    pageBy(uri: "news") {
      news_pagesection_acf {
        title
      }
    },
    
    posts {
      nodes {
        id
        slug
        postTitle:title
        postDate:date
        content
        featuredImage {
          sourceUrl
          altText
        }
      }
    }
  
  }
}
`

const BlogStyle = () => {

    const {
        wpgraph2eas: {
            pageBy: {
                news_pagesection_acf: {
                    title
                }
            },

            posts: {
                nodes
            }

        }
    } = useStaticQuery(getData)



    return (
        <Layout>
            <SEO title={title} />
            <Banner title={title} />
            <section className="mainSection container">
                <div className="mainSection--1 dflex px-1">
                    <div className="mainSection__col2">
                        {
                            nodes.map(({
                                id,
                                slug,
                                postTitle,
                                postDate,
                                content,
                                featuredImage: {
                                    sourceUrl,
                                    altText
                                } }) => {



                                return (



                                    <div
                                        className="mainSection__col2--blog dflex justify-content-between px-1 mb-4" key={id}
                                    >
                                        <article className="mainSection__col2--blog--article">
                                            <div className="mainSection__col2--blog--wrapper">
                                                <div className="mainSection__col2--blog--imgWrapper mb-1">
                                                    <img
                                                        className="mainSection__col2--blog--imgWrapper--img"
                                                        src={sourceUrl}
                                                        alt={altText}
                                                    />
                                                </div>
                                            </div>
                                            <h3 className="contentTitle--subtitle mb-1 text-center">
                                                {postTitle}
                                            </h3>
                                            <div className="mainSection__col2--blog--postWrapper mb-1 text-center">
                                                {/* <span className="mainSection__col2--blog--postWrapper--1">
                                                    <i className="mainSection__col2--blog--postWrapper--1--i">
                                                        <FontAwesomeIcon icon={faUser} />
                                                    </i>
                                                    <a
                                                        className="mainSection__col2--blog--postWrapper--1--a"
                                                        href="/"
                                                    >John Doe
                                                    </a>
                                                </span> */}
                                                <span className="mainSection__col2--blog--postWrapper--2">
                                                    <i className="mainSection__col2--blog--postWrapper--2--i">
                                                        <FontAwesomeIcon icon={faCalendarAlt} />
                                                    </i>
                                                    <Moment format="D MMM YYYY" withTitle > {postDate}</Moment>
                                                </span>
                                            </div>
                                            <div className="mainSection__col2--blog--content text-center" dangerouslySetInnerHTML={{ __html: `${content.slice(0, 100)}...` }} />

                                        </article>
                                        <div>
                                            <Link to={`posts/${slug}`} className="mainSection__col2--blog--content--a">
                                                <button className="btn-warning btnHoveringFloat">READ MORE</button>
                                            </Link>
                                        </div>
                                    </div>

                                )

                            })
                        }
                    </div>

                </div>
            </section>

            <MainFooter />
        </Layout>
    )
}

export default BlogStyle
