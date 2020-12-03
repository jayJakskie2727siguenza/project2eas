import React from 'react'
import Moment from 'react-moment'
import { useStaticQuery, graphql, Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const getData = graphql`
{
    wpgraph2eas {
    posts(first: 4) {
      nodes {
        postTitle: title
        postDate: date
        slug
        featuredImage {
            sourceUrl
            altText
        }
      }
    }
  }
}
`



const SinglePageCol2 = () => {


    const {
        wpgraph2eas: {
            posts: {
                nodes
                // postTitle,
                // postDate,
                // featuredImage: {
                //     sourceUrl,
                //     altText
                // }

            }
        }
    } = useStaticQuery(getData)

    return (
        <div className="singlePage__col2 pt-5 mt-1 px-1">
            <div className="singlePage__col2--search">
                <h2 className="singlePage__col2--search--h2 mb-2">SEARCH</h2>
                <div className="singlePage__col2--search--input dflex">
                    <input className="singlePage__col2--search--input--text" type="text" placeholder="Search ..." />
                    <button className="singlePage__col2--search--input--button">
                        <i className="singlePage__col2--search--input--button--i far fa-search">
                            <FontAwesomeIcon icon={faSearch} />
                        </i>
                    </button>
                </div>

            </div>
            <div className="singlePage__col2--recentPost mt-3">
                <h2 className="singlePage__col2--recentPost--h2">RECENT POST</h2>
                <ul className="singlePage__col2--recentPost--ul">

                    {
                        nodes.map((data, index) => {

                            

                            return (

                                <li key={index} className="singlePage__col2--recentPost--ul--li">
                                    <Link to={`/News/posts/${data.slug}`} className="mainSection__col2--blog--content--a">
                                        <div className="singlePage__col2--recentPost--ul--li--user dflex">
                                            <div className="singlePage__col2--recentPost--ul--li--user--1--imgwrapper">
                                                <img src={data.featuredImage.sourceUrl} className="singlePage__col2--recentPost--ul--li--user--1--img" alt={data.featuredImage.altText} />
                                            </div>
                                            <div className="singlePage__col2--recentPost--ul--li--user--2">
                                                <p className="singlePage__col2--recentPost--ul--li--user--2--p">{data.postTitle}</p>
                                            </div>
                                        </div>
                                        <div className="singlePage__col2--recentPost--ul--li--date">
                                            <span className="singlePage__col2--recentPost--ul--li--date--date">
                                                <Moment format="MMMM DD, YYYY">{data.postDate}</Moment>
                                            </span>
                                        </div>
                                    </Link>
                                </li>)

                        })
                    }

                </ul>
            </div>
        </div>
    )
}

export default SinglePageCol2
