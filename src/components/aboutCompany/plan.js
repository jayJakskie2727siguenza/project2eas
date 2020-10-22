import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from '../image'


// import img1 from '../../images/about-icon1-2.png'
// import img2 from '../../images/about-icon2-2.png'


const Plan = () => {

  const dataPlan = useStaticQuery(graphql`
    {
  aboutIconOne:file(relativePath:{eq:"about-icon1-2.png"}){
    childImageSharp{
      fixed(width:83){
        ...GatsbyImageSharpFixed_noBase64
      }
    }
  },
  aboutIconTwo:file(relativePath:{eq:"about-icon2-2.png"}){
    childImageSharp{
      fixed(width:83){
        ...GatsbyImageSharpFixed_noBase64
      }
    }
  }
}
    `)

  return (
    <section className="plan container pb-5">
      <div className="plan__society">
        <h2 className="contentTitle--title">
          Society Where There is Understanding
            </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
            </p>
      </div>
      <div className="plan__strategies">
        {/* <img
                    className="plan__strategies--img"
                    src={img1}
                    alt="about-icon1-2"
                /> */}
        <Image picsFixed={dataPlan.aboutIconOne.childImageSharp.fixed} alt="about-icon1-2" />
        <h3 className="contentTitle--subtitle my-2">01. Planning & Strategy</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
          eiusmod tempor incididunt.
            </p>
      </div>
      <div className="plan__satisfaction">
        {/* <img
                    className="plan__satisfation--img"
                    src={img2}
                    alt="about-icon2-2"
                /> */}
        <Image picsFixed={dataPlan.aboutIconTwo.childImageSharp.fixed} alt="about-icon2-2" />
        <h3 className="contentTitle--subtitle my-2">
          02. Client’s Satisfaction
            </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
          eiusmod tempor incididunt.
            </p>
      </div>
    </section>
  )
}

export default Plan
