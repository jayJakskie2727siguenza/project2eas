import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from '../image'

// import pImg1 from '../../images/demo-eleven-image01.jpg'
// import pImg2 from '../../images/demo-eleven-image02.jpg'




const About = () => {

    


    const {
        wpgraph2eas: {
            pageBy:{
                home_pagesection_acf :{
                    sections: {
                        about: {
                            title1,
                            title2,
                            description1,
                            description2
                        }
                    }
                }
            }
},
    demoElevenImageOne: {
        childImageSharp:{
            demoElevenImg1Fluid
        }
    },
        demoElevenImageTwo: {
    childImageSharp:{
                demoElevenImg2Fluid
    }
}
    } = useStaticQuery(graphql`
    {
    wpgraph2eas {
      pageBy(uri: "home") {
        home_pagesection_acf {
          sections {
            about {
              title1
              title2
              description1
              description2
            }
          }
        }
      }
    },
  demoElevenImageOne:file(relativePath:{eq:"demo-eleven-image01.jpg"}){
    childImageSharp{
      demoElevenImg1Fluid:fluid(maxWidth:630){
       
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  },
  demoElevenImageTwo:file(relativePath:{eq:"demo-eleven-image02.jpg"}){
    childImageSharp{
       demoElevenImg2Fluid:fluid(maxWidth:630){
        
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  
}
    `)


   

    return (

        <section className={`about container`}>
            <div className="about__item pr-2 pb-3">
                <h2 className="about__item--title">
                    {title1 ? title1 : (<span>Learn more about our history. It just might inspire you to help us
                    build a better future.(default)</span>)}
                    {/* Learn more about our history. It just might inspire you to help us
                    build a better future. */}
                </h2>
                <p className="about__item--description mt-3"  dangerouslySetInnerHTML={{__html:description1}} >
                    {/* {description1 ? description1 : (<span>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
                    tempor incididunt ut labore et dolore.


                    On the other hand, we denounce with righteous indignation and dislike
                    men who are so beguiled and demoralized by the charms of pleasure of
                    the moment, so blinded by desire.(default)</span>)} */}
                </p>
            </div>
            <div className="about__item mb-2">
                <div>
                    {/* <img
                        className="w-100"
                        src={pImg1}
                        alt="aboutImage1"
                    /> */}
                    <Image picsFluid={demoElevenImg1Fluid} alt="aboutImage1" />
                </div>
            </div>
            <div className="about__item pt-3">
                <div>
                    {/* <img
                        className="w-100"
                        src={pImg2}
                        alt="aboutImage2"
                    /> */}
                    <Image picsFluid={demoElevenImg2Fluid} alt="aboutImage2" />
                </div>
            </div>
            <div className="about__item px-3 pt-3">
                <h2 className="about__item--title">
                    {title2 ? title2 : (<span>We're knowledgeable about making benefits higher(default)</span>)}
        </h2>
                <p className="about__item--description mt-3" dangerouslySetInnerHTML={{__html:description2}} >
                    {/* {description2 ? description2 : (<span>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam.
                     
                     
                    On the other hand, we denounce with righteous indignation and dislike
                    men who are so beguiled and demoralized by the charms of pleasure of
                    the moment, so blinded by desire.(default)</span>)} */}
                </p>
            </div>
        </section>

    )
}

export default About
