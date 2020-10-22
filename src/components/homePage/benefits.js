import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// import pImg1 from '../../images/demo-eleven-software-icon-01.png'
// import pImg2 from '../../images/demo-eleven-distribution-icon-01.png'
// import pImg3 from '../../images/demo-eleven-travel-icon-01.png'
// import pImg4 from '../../images/demo-eleven-banking-icon-01.png'
// import pImg5 from '../../images/demo-eleven-business-icon-01.png'
// import pImg6 from '../../images/demo-eleven-automotive-icon-01.png'
import Image from '../image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'



const Benefits = () => {

    const dataBenefits = useStaticQuery(graphql`
    {
  demoElevenSoftware:file(relativePath:{eq:"demo-eleven-software-icon-01.png"}){
    childImageSharp{
      fixed(width:79){
       ...GatsbyImageSharpFixed_noBase64
      }
    }
  },
  demoElevenDistribution:file(relativePath:{eq:"demo-eleven-distribution-icon-01.png"}){
    childImageSharp{
      fixed(width:79){
       ...GatsbyImageSharpFixed_noBase64
      }
    }
  },
  demoElevenTravel:file(relativePath:{eq:"demo-eleven-travel-icon-01.png"}){
    childImageSharp{
      fixed(width:79){
         ...GatsbyImageSharpFixed_noBase64
      }
    }
  },
  demoElevenBanking:file(relativePath:{eq:"demo-eleven-banking-icon-01.png"}){
    childImageSharp{
      fixed(width:79){
        ...GatsbyImageSharpFixed_noBase64
      }
    }
  },
  demoElevenBusiness:file(relativePath:{eq:"demo-eleven-business-icon-01.png"}){
    childImageSharp{
      fixed(width:79){
        ...GatsbyImageSharpFixed_noBase64
      }
    }
  },
  demoElevenAutomotive:file(relativePath:{eq:"demo-eleven-automotive-icon-01.png"}){
    childImageSharp{
      fixed(width:79){
         ...GatsbyImageSharpFixed_noBase64
      }
    }
  }
  
}
    `)



    return (
        <section className={`benefits mt-5`}>
            <div className="section__title">
                <h2 className="section__title--heading">
                    Invest in Our Company and have Healthy Profits for Long Term.
                </h2>
                <p className="section__title--subheading">
                    On the other hand we denounce with righteous indignation and dislike
                    men who are so beguiled and demoralized by the charms of pleasure of
                    the moment so blinded by desire that they cannot foresee the pain and
                    trouble.
                </p>
            </div>
            <div className="benefits__content container">
                <div className="benefits__content--left">
                    <div className="benefits__content--left--item">
                        <div className="benefits__content--left--item--imgWrapper">
                            {/* <img
                                className="benefits__content--left-item--img"
                                src={pImg1}
                                alt="softWare Icon"
                            /> */}
                            <Image picsFixed={dataBenefits.demoElevenSoftware.childImageSharp.fixed} className="benefits__content--left-item--img" alt="softWare Icon" />
                        </div>
                        <h3 className="benefits__content--left--item--title">
                            Software Technology
                        </h3>

                    </div>
                    <div className="benefits__content--left--item">
                        <div className="benefits__content--left--item--imgWrapper">
                            {/* <img
                                className="benefits__content--left-item--img"
                                src={pImg2}
                                alt="distribution Icon"
                            /> */}
                            <Image picsFixed={dataBenefits.demoElevenDistribution.childImageSharp.fixed} className="benefits__content--left-item--img" alt="distribution Icon" />
                        </div>
                        <h3 className="benefits__content--left--item--title">
                            Software Technology
                        </h3>

                    </div>
                    <div className="benefits__content--left--item">
                        <div className="benefits__content--left--item--imgWrapper">
                            {/* <img
                                className="benefits__content--left-item--img"
                                src={pImg3}
                                alt="softWare Icon"
                            /> */}
                            <Image picsFixed={dataBenefits.demoElevenTravel.childImageSharp.fixed} className="benefits__content--left-item--img" alt="Travel Icon" />
                        </div>
                        <h3 className="benefits__content--left--item--title">
                            Software Technology
                        </h3>
                    </div>
                    <div className="benefits__content--left--item">
                        <div className="benefits__content--left--item--imgWrapper">
                            {/* <img
                                className="benefits__content--left-item--img"
                                src={pImg4}
                                alt="softWare Icon"
                            /> */}
                            <Image picsFixed={dataBenefits.demoElevenBanking.childImageSharp.fixed} className="benefits__content--left-item--img" alt="Banking Icon" />
                        </div>
                        <h3 className="benefits__content--left--item--title">
                            Software Technology
                        </h3>
                    </div>
                    <div className="benefits__content--left--item">
                        <div className="benefits__content--left--item--imgWrapper">
                            {/* <img
                                className="benefits__content--left-item--img"
                                src={pImg5}
                                alt="softWare Icon"
                            /> */}
                            <Image picsFixed={dataBenefits.demoElevenBusiness.childImageSharp.fixed} className="benefits__content--left-item--img" alt="Business Icon" />
                        </div>
                        <h3 className="benefits__content--left--item--title">
                            Software Technology
                        </h3>
                    </div>
                    <div className="benefits__content--left--item">
                        <div className="benefits__content--left--item--imgWrapper">
                            {/* <img
                                className="benefits__content--left-item--img"
                                src={pImg6}
                                alt="softWare Icon"
                            /> */}
                            <Image picsFixed={dataBenefits.demoElevenAutomotive.childImageSharp.fixed} className="benefits__content--left-item--img" alt="Automotive Icon" />
                        </div>
                        <h3 className="benefits__content--left--item--title">
                            Software Technology
                        </h3>
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
