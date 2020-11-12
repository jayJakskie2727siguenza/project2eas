import React from 'react'


// import Image from '../image'

import { useStaticQuery, graphql } from 'gatsby'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Features = () => {
    const {

        wpgraph2eas: {
            pageBy: {
                home_pagesection_acf: {
                    sections: {
                        benefits: {

                            icons: {
                                title1,
                                title2,
                                title3,
                                description1,
                                description2,
                                description3,
                                icon1: {
                                    icon1Url,
                                    icon1altText
                                },
                                icon2: {
                                    icon2Url,
                                    icon2altText
                                },
                                icon3: {
                                    icon3Url,
                                    icon3altText
                                }
                            }
                        }
                    }
                }
            }
        }

    } = useStaticQuery(graphql`
    {
    wpgraph2eas {
      pageBy(uri: "home") {
        home_pagesection_acf {
          sections {
            benefits {
             
              icons {
                title1
                title2
                title3
                description1
                description2
                description3
                icon1 {
                  icon1Url: sourceUrl
                  icon1altText: altText
                }
                icon2 {
                  icon2Url: sourceUrl
                  icon2altText: altText
                }
                icon3 {
                  icon3Url: sourceUrl
                  icon3altText: altText
                }
              }
            }
          }
        }
      }
    }
  }
    `)

    return (

        <section className={`features container mt-4`}>

            <div className="features__col dflex justify-content-start py-3 px-2">
                <div className="features__col--imgWrapper mr-1">
                    <img
                        className="features__col--img"
                        src={icon1Url}
                        alt={icon1altText}
                    />

                    {/* <Image picsFixed={dataFeatures.demoElevenIconOne.childImageSharp.fixed} className="features__col--img" alt="creative idea" /> */}

                </div>
                <div>
                    <h2 className="features__col--title mb-1" >{title1}</h2>
                    <p className="features__col--description my-2">
                        {description1}
                    </p>
                    {/* <a className="features__col--link" href="/"> READ MORE
                    <i className="fas fa-arrow-right ml-1">
                            <FontAwesomeIcon icon={faArrowRight} />
                        </i>
                    </a> */}
                </div>
            </div>
            <div className="features__col dflex justify-content-start py-3 px-2">
                <div className="features__col--imgWrapper mr-1">
                    <img
                        className="features__col--img"
                        src={icon2Url}
                        alt={icon2altText}
                    />
                    {/* <Image picsFixed={dataFeatures.demoElevenIconTwo.childImageSharp.fixed} className="features__col--img" alt="creative idea" /> */}
                </div>

                <div>
                    <h2 className="features__col--title mb-1">{title2}</h2>
                    <p className="features__col--description my-2">
                        {
                            description2
                        }
                    </p>
                    {/* <a className="features__col--link" href="/"> READ MORE
                    <i className="fas fa-arrow-right ml-1">
                            <FontAwesomeIcon icon={faArrowRight} />
                        </i>
                    </a> */}
                </div>
            </div>
            <div className="features__col dflex justify-content-start py-3 px-2">
                <div className="features__col--imgWrapper mr-1">
                    <img
                        className="features__col--img"
                        src={icon3Url}
                        alt={icon3altText}
                    />
                    {/* <Image picsFixed={dataFeatures.demoElevenIconThree.childImageSharp.fixed} className="features__col--img" alt="creative idea" /> */}
                </div>
                <div>
                    <h2 className="features__col--title mb-1">{title3}</h2>
                    <p className="features__col--description my-2">
                        {
                            description3
                        }
                    </p>
                    {/* <a className="features__col--link" href="/"> READ MORE
                    <i className="fas fa-arrow-right ml-1">
                            <FontAwesomeIcon icon={faArrowRight} />
                        </i>
                    </a> */}
                </div>
            </div>
        </section>


    )
}

export default Features
