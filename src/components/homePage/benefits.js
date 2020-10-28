import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from '../image'
import Features from './features'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'



const Benefits = () => {

    const dataBenefits = useStaticQuery(graphql`
  {
    ipodMockupXero:file(relativePath: {eq: "ipod-mockup-xero.png"}) {
      relativePath
      childImageSharp {
        fluid(maxWidth: 800) {
         ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`)



    return (
        <section className={`benefits mt-4`}>
            <div className="section__title">
                <h2 className="section__title--heading">
                    Invest in Our Company and have Healthy Profits for Long Term.
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
                        <Image picsFluid={dataBenefits.ipodMockupXero.childImageSharp.fluid} alt="ipod-Mockup-Xero" className="benefits__content--left--imgWrapper--img" />
                    </div>
                </div>

                <div className="benefits__content--right--title">
                    <h3>
                        YOU’VE GOT ALL REASONS TO MOVE YOUR TEAM TO CONSULTIX COWORKING!
                    </h3>
                    <p className="benefits__content--right--description my-2">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                        eiusmod tempor incididunt ut labore et dolore. On the other hand we
                        denounce with righteous indignation and dislike men who are so
                        beguiled and demoralized by the charms of pleasure.
                    </p>
                    <p className="benefits__content--right--description my-2">
                        On the other hand, we denounce with righteous indignation and
                        dislike men who are so beguiled and demoralized by the charms.
                    </p>
                    <button className="btn-1 btn-primary my-1">
                        LEARN ABOUT THE INDUSTRIES WE PROVIDE
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
