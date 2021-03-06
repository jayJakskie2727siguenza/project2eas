import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'





const getData = graphql`
{
    wpgraph2eas {
      processitems(first: 100) {
        arrayNodes: nodes {

          pTitle: title
          content(format: RENDERED)
          processitemsImages__acf {
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
      pageBy(uri: "home") {
        home_pagesection_acf {
          sections {
            process {
              title
              description
            }
          }
        }
      }
    }
  }
`




const Process = () => {

    const {

        wpgraph2eas: {

            processitems: {
                arrayNodes
            },


            pageBy: {
                home_pagesection_acf: {
                    sections: {
                        process: {
                            title,
                            description
                        }
                    }
                }
            }
        }

    } = useStaticQuery(getData)





    return (
        <section className={`process container`}>


            <div className="section__title">
                <h2 className="section__title--heading process__section--title">
                    {title ? title : (<span>What Do We Do?(default)</span>)}
                    {/* What Do We Do? */}
                </h2>
                <p className="section__title--subheading" dangerouslySetInnerHTML={{ __html: description }}>
                    {/* {description ? description : (<span>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
                    tempor incididunt ut labore et dolore. On the other hand we denounce
                    with righteous.(default)</span>)} */}

                </p>
            </div>
            <div className="process__icon">
                <div className="process__icon--wrapper process__icon--wrapper--1">

                    {arrayNodes.map(({

                        pTitle,
                        content,
                        processitemsImages__acf: {
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
                            <div key={index} className="process__icon--wrapper--div process__icon--wrapper--div--1">
                                <div className="process__icon--wrapper--icon ">
                                    <img className="process__icon--wrapper--icon--icon" src={sourceUrl} alt={alternativeText} title={nodesTitle} caption={caption} description={description} altitude={altitude} longitude={longitude} />
                                </div>
                                <div className="process__icon--wrapper--content ">
                                    <h3 className="process__icon--wrapper--content--h3">{pTitle}</h3>
                                    <div className="process__icon--wrapper--content--p" dangerouslySetInnerHTML={{ __html: content }} ></div>
                                </div>
                            </div>
                        )
                    }

                    )}



                </div>


            </div>
        </section>
    )


}



export default Process



