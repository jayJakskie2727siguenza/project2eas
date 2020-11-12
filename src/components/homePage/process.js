import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'










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

    } = useStaticQuery(graphql`
{



    wpgraph2eas {

        processitems(first: 100) {
       arrayNodes:nodes{
           id
           pTitle:title
            content(format: RENDERED)
            featuredImage {
                sourceUrl
                altText
            }
       }
      },

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
`)





    return (
        <section className={`process container`}>




            <div className="section__title">
                <h2 className="section__title--heading">
                    {title ? title : (<span>What Do We Do?(default)</span>)}
                    {/* What Do We Do? */}
                </h2>
                <p className="section__title--subheading">
                    {description ? description : (<span>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
                    tempor incididunt ut labore et dolore. On the other hand we denounce
                    with righteous.(default)</span>)}

                </p>
            </div>
            <div className="process__icon">
                <div className="process__icon--wrapper process__icon--wrapper--1">

                    {arrayNodes.map((data) => {



                        return (
                            <div key={data.id} className="process__icon--wrapper--div process__icon--wrapper--div--1">
                                <div className="process__icon--wrapper--icon mr-1">
                                    <img className="process__icon--wrapper--icon--icon" src={data.featuredImage.sourceUrl} alt={data.featuredImage.altText} />
                                </div>
                                <div className="process__icon--wrapper--content ">
                                    <h3 className="process__icon--wrapper--content--h3">{data.pTitle}</h3>
                                    <div className="process__icon--wrapper--content--p" dangerouslySetInnerHTML={{ __html: data.content }} ></div>
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



