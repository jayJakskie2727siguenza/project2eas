import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// import img1 from '../../images/about-image4.jpg'


const getData = graphql`
{
    wpgraph2eas {
      pageBy(uri: "about") {
        aboutus_pagesection_acf {
          providedSolutionSection {
            contentTitle
            contentSubTitle
            contentDescription1
            contentDescription2
           
            contentImage {
                sourceUrl
            }
          }
        }
      }
    }
  }
`


const ProvideSolution = () => {

    const {
        wpgraph2eas: {
            pageBy: {
                aboutus_pagesection_acf: {
                    providedSolutionSection: {
                        contentTitle,
                        contentSubTitle,
                        contentDescription1,
                        contentDescription2,

                        contentImage: {
                            sourceUrl
                        }
                    }
                }
            }
        }
    } = useStaticQuery(getData)

    return (
        <section className="providedSolution container">
            <div className="providedSolution__content">
                <h2 className="contentTitle--title">
                    {contentTitle ? contentTitle : (<span>  We Provide Solution on Your Business(default)</span>)}
                    {/* We Provide Solution on Your Business */}
                </h2>
                <p className="providedSolution__content--p" dangerouslySetInnerHTML={{ __html: contentDescription1 }}>

                    {/* On the other hand we denounce with righteous indignation and dislike
                    men who are so beguiled and demoralized by the charms of pleasure of
                    the moment so blinded by desire that they cannot foresee. */}
                </p>
                <h3 className="contentTitle--subtitle">
                    {contentSubTitle ? contentSubTitle : (<span>What We Do ?(default)</span>)}
                    {/* What We Do ? */}
                </h3>
                <p className="providedSolution__content--p" dangerouslySetInnerHTML={{ __html: contentDescription2 }}>

                    {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam quis nostrud exercitation. */}
                </p>
                {/* <button className="providedSolution__content--btn btn">
                    {button ? button : (<span>READ MORE(default)</span>)}
                   
                </button> */}
            </div>
            <div className="providedSolution__img">
                <img
                    className="providedSolution__img--img"
                    src={sourceUrl}
                    alt="about4"
                />
            </div>
        </section>
    )
}



export default ProvideSolution
