import React from 'react'
// import img1 from '../../images/demo-eleven-banner-2.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { useStaticQuery, graphql } from 'gatsby'



const getData = graphql`
      {
        wpgraph2eas {
    pageBy(uri: "home") {
      home_pagesection_acf {
        sections {
          hero {
            backgroundImage {
              bgImage:sourceUrl
            }
            buttons
            headings
            subheadings
          }
        }
      }
    }
  }
      }
    `


const Hero = () => {

  const {
    wpgraph2eas: {
      pageBy: {
        home_pagesection_acf: {
          sections: {
            hero: {
              backgroundImage: {
                bgImage
              },
              buttons,
              headings,
              subheadings
            }
          }
        }
      }
    }
  } = useStaticQuery(getData)



  const getBackgroundImage = {
    backgroundImage: `url(${bgImage})`
    // backgroundImage: "url(../../images/demo-eleven-banner-2.jpg)"
  }


  return (
    <section className="hero" style={getBackgroundImage}>
      <div className="hero__contentWrapper dflex justify-content-end container">
        <div className="hero__content">
          <ul>
            <li>
              <div>
                <h1 className="hero__content--title">
                  {headings}
                </h1>

                <p className="hero__content--subtitle">
                  {subheadings}
                </p>
                <a href="tel:+63 917 421 9688">
                  <button className=" btn-primary btn mt-4">
                    {buttons}
                    <i className="fas fa-long-arrow-alt-right ml-1">
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </i>
                  </button>
                </a>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </section>)




}




export default Hero
