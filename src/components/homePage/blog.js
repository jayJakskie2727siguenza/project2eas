import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// import Image from '../image'

// import pImg1 from '../../images/case-study-img-three.jpg'
// import pImg2 from '../../images/case-study-img-two.jpg'
// import pImg3 from '../../images/case-study-img-one.jpg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const getData = graphql`
{
    wpgraph2eas {
      pageBy(uri: "home") {
        home_pagesection_acf {
          sections {
            blog {
              title
              subtitle
            }
          }
        }
      }
      projectoverviews(first: 100) {
        nodes {
          projectTitle:title(format: RENDERED)
          content(format: RENDERED)
          projectoverviewsImages__acf {
            nodesTitle:title
            alternativeText
            caption
            description
            altitude
            longitude
            featuredImage {
              sourceUrl
            }
          }
        }
      }
    }
  }
  `


const Blog = () => {


  const {
    wpgraph2eas: {
      pageBy: {
        home_pagesection_acf: {
          sections: {
            blog: {
              title,
              subtitle
            }
          }
        }
      }, projectoverviews: {
        nodes
      }

    }
  } = useStaticQuery(getData)




  return (
    <section className={`blog`}>
      <div className="section__title">
        <h2 className="section__title--heading">
          {title ? title : (<span>Explore Our Work(default)</span>)}
          {/* Explore Our Work */}
        </h2>
        <p className="section__title--subheading">
          {subtitle ? subtitle : (<span>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore et dolore. On the other hand we denounce
          with righteous indignation and dislike men.(default)</span>)}
          {/* Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore et dolore. On the other hand we denounce
          with righteous indignation and dislike men. */}
        </p>
      </div>
      <div className="blog__list container">
        {
          nodes.map(({
            projectTitle,
            projectoverviewsImages__acf: {
              nodesTitle,
              alternativeText,
              caption,
              description,
              altitude,
              longitude,
              featuredImage: {
                sourceUrl
              }
            }
          }, index) => {

            return (
              <div key={index} className="blog__list--item">
                <div className="blog__list--item--contentWrapper">
                  <h3 className="blog__list--item--title px-3 py-1">
                    {
                      projectTitle ? projectTitle : <span>INVENTORY MANAGEMENT</span>
                    }
                  </h3>

                </div>
                <div className="blog__list--item--imgWrapper">
                  <img
                    className="w-100"
                    src={sourceUrl}
                    alt={alternativeText}
                    title={nodesTitle}
                    caption={caption}
                    description={description}
                    altitude={altitude}
                    longitude={longitude}
                  />
                  {/* <Image picsFluid={caseStudyThreeFluid} alt="case Study" /> */}
                </div>

              </div>
            )

          })
        }

      </div>
    </section>
  )
}

export default Blog
