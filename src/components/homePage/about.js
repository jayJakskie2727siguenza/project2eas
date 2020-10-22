import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from '../image'

// import pImg1 from '../../images/demo-eleven-image01.jpg'
// import pImg2 from '../../images/demo-eleven-image02.jpg'




const About = () => {

    const dataAbout = useStaticQuery(graphql`
    {
  demoElevenImageOne:file(relativePath:{eq:"demo-eleven-image01.jpg"}){
    childImageSharp{
      fluid(maxWidth:630){
       
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  },
  demoElevenImageTwo:file(relativePath:{eq:"demo-eleven-image02.jpg"}){
    childImageSharp{
      fluid(maxWidth:630){
        
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
                    Learn more about our history. It just might inspire you to help us
                    build a better future.
        </h2>
                <p className="about__item--description mt-3">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
                    tempor incididunt ut labore et dolore.
        </p>
                <p className="about__item--description mt-3">
                    On the other hand, we denounce with righteous indignation and dislike
                    men who are so beguiled and demoralized by the charms of pleasure of
                    the moment, so blinded by desire.
        </p>
            </div>
            <div className="about__item mb-2">
                <div>
                    {/* <img
                        className="w-100"
                        src={pImg1}
                        alt="aboutImage1"
                    /> */}
                    <Image picsFluid={dataAbout.demoElevenImageOne.childImageSharp.fluid} alt="aboutImage1" />
                </div>
            </div>
            <div className="about__item">
                <div>
                    {/* <img
                        className="w-100"
                        src={pImg2}
                        alt="aboutImage2"
                    /> */}
                    <Image picsFluid={dataAbout.demoElevenImageTwo.childImageSharp.fluid} alt="aboutImage2" />
                </div>
            </div>
            <div className="about__item px-3 pt-3">
                <h2 className="about__item--title">
                    We're knowledgeable about making benefits higher
        </h2>
                <p className="about__item--description mt-3">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam.
        </p>
                <p className="about__item--description mt-3">
                    On the other hand, we denounce with righteous indignation and dislike
                    men who are so beguiled and demoralized by the charms of pleasure of
                    the moment, so blinded by desire.
        </p>
            </div>
        </section>

    )
}

export default About
