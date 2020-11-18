import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'



const getData = graphql`
  {
    wpgraph2eas {
      pageBy(uri: "services") {
        services_pagesection_acf {
          serviceInfoSection {
            item1 {
             item1Title: title
             item1Des: description
              icon {
               icon1Title: title
               icon1Alt: alternativeText
                icon1Cap:caption
                icon1Des:description
                icon1Altitude:altitude
                icon1Longitude:longitude
                image {
                  icon1Url:sourceUrl
                }
              }
            }
            item2 {
            item2Title:  title
             item2Des: description
              icon {
                icon2Title:title
              icon2Alt:  alternativeText
              icon2Cap:  caption
               icon2Des: description
               icon2Altitude: altitude
               icon2Longitude: longitude
                image {
                 icon2Url: sourceUrl
                }
              }
            }
            item3 {
             item3Title: title
             item3Des: description
              icon {
               icon3Title: title
               icon3Alt: alternativeText
               icon3Cap: caption
               icon3Des: description
               icon3Altitude: altitude
               icon3Longitude: longitude
                image {
                 icon3Url: sourceUrl
                }
              }
            }
          }
        }
      }
    }
  }
`

const ServicesOnline = () => {

    const {
        wpgraph2eas: {
            pageBy: {
                services_pagesection_acf: {
                    serviceInfoSection: {
                        item1: {
                            item1Title,
                            item1Des,
                            icon: {
                                icon1Title,
                                icon1Alt,
                                icon1Cap,
                                icon1Des,
                                icon1Altitude,
                                icon1Longitude,
                                image: {
                                    icon1Url
                                }
                            }
                        },
                        item2: {
                            item2Title,
                            item2Des,
                            icon: {
                                icon2Title,
                                icon2Alt,
                                icon2Cap,
                                icon2Des,
                                icon2Altitude,
                                icon2Longitude,
                                image: {
                                    icon2Url
                                }
                            }
                        },
                        item3: {
                            item3Title,
                            item3Des,
                            icon: {
                                icon3Title,
                                icon3Alt,
                                icon3Cap,
                                icon3Des,
                                icon3Altitude,
                                icon3Longitude,
                                image: {
                                    icon3Url
                                }
                            }
                        }
                    }
                }
            }
        }
    } = useStaticQuery(getData)


    return (
        <div className="servicesOnline mb-3 pt-2">
            <div className="servicesOnline__col1">
                <div className="servicesOnline__col1--wrapper">
                    <div className="servicesOnline__col1--1">
                        <div className="servicesOnline__col1--1--a">&nbsp;</div>
                    </div>
                    <div className="servicesOnline__col1--2 px-2 pt-1 pb-2">
                        <img src={icon1Url} alt={icon1Alt} title={icon1Title} caption={icon1Cap} description={icon1Des} altitude={icon1Altitude} longitude={icon1Longitude} />
                        <h4 className="servicesOnline__col1--2--h4 mb-1">
                            {item1Title}
                        </h4>
                        <p className="servicesOnline__col1--2--p">
                            {
                                item1Des

                            }
                        </p>
                    </div>
                </div>
            </div>
            <div className="servicesOnline__col2">
                <div className="servicesOnline__col2--wrapper">
                    <div className="servicesOnline__col2--1">
                        <div className="servicesOnline__col2--1--a">&nbsp;</div>
                    </div>
                    <div className="servicesOnline__col2--2 px-2 pt-1 pb-2">
                        <img src={icon2Url} alt={icon2Alt} title={icon2Title} caption={icon2Cap} description={icon2Des} altitude={icon2Altitude} longitude={icon2Longitude} />
                        <h4 className="servicesOnline__col2--2--h4 mb-1">
                            {item2Title}
                        </h4>
                        <p className="servicesOnline__col2--2--p">
                            {
                                item2Des
                            }
                        </p>
                    </div>
                </div>
            </div>
            <div className="servicesOnline__col3">
                <div className="servicesOnline__col3--wrapper">
                    <div className="servicesOnline__col3--1">
                        <div className="servicesOnline__col3--1--a">&nbsp;</div>
                    </div>
                    <div className="servicesOnline__col3--2 px-2 pt-1 pb-2">
                        <img src={icon3Url} alt={icon3Alt} title={icon3Title} caption={icon3Cap} description={icon3Des} altitude={icon3Altitude} longitude={icon3Longitude} />
                        <h4 className="servicesOnline__col3--2--h4 mb-1">
                            {item3Title}
                        </h4>
                        <p className="servicesOnline__col3--2--p">
                            {item3Des}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesOnline
