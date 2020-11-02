import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from '../image'
import Features from './features'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'


const getData = graphql`
  {wpgraph2eas {
    pageBy(uri: "home") {
      home_pagesection_acf {
        sections {
          benefits {
            title
            subTitle
            description
            button
          }
        }
      }
    }
  },
 imgS: file(relativePath: {eq: "ipod-mockup-xero.png"}) {
    childImageSharp {
      fluid(maxWidth: 800) {
         ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  }
`

const Benefits = () => {

    const {
        wpgraph2eas: {
            pageBy: {
                home_pagesection_acf: {
                    sections: {
                        benefits: {
                            title,
                            subTitle,
                            description,
                            button
                        }
                    }
                }
            }
        },
        imgS: {
            childImageSharp: {
                fluid
            }
        }
    } = useStaticQuery(getData)



    return (
        <section className={`benefits mt-4`}>
            <div className="section__title">
                <h2 className="section__title--heading">
                    {title ? title : (<span>Invest in Our Company and have Healthy Profits for Long Term.(default)</span>)}

                </h2>
                {/* <p className="section__title--subheading">
                    On the other hand we denounce with righteous indignation and dislike
                    men who are so beguiled and demoralized by the charms of pleasure of
                    the moment so blinded by desire that they cannot foresee the pain and
                    trouble.
                </p> */}

                <Features />
            </div>
            <div className="benefits__content container">
                <div className="benefits__content--left">
                    <div className="benefits__content--left--imgWrapper">
                        <Image picsFluid={fluid} alt="ipodMockupXero" className="benefits__content--left--imgWrapper--img" />
                    </div>
                </div>

                <div className="benefits__content--right--title">
                    <h3>
                        {subTitle ? subTitle : (<span>YOU’VE GOT ALL REASONS TO MOVE YOUR TEAM TO CONSULTIX COWORKING!(default)</span>)}

                    </h3>
                    <p className="benefits__content--right--description my-2" dangerouslySetInnerHTML={{ __html: description }}>
                        {/* {description ? description : (<span>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore. On the other hand we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.

On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms.(default)</span>)} */}

                    </p>
                    <button className="btn-1 btn-primary my-1">
                        {
                            button ? button : <span>LEARN ABOUT THE INDUSTRIES WE PROVIDE(default)</span>
                        }

                        {/* LEARN ABOUT THE INDUSTRIES WE PROVIDE */}
                        <i className="fa-long-arrow-right benefits__content--right--i">
                            <FontAwesomeIcon icon={faLongArrowAltRight} />
                        </i>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Benefits
