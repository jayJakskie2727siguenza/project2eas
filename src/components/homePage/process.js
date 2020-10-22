import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from '../image'


// import pImg1 from '../../images/demo-eleven-customer01.png'
// import pImg2 from '../../images/demo-eleven-customer02.png'
// import pImg3 from '../../images/demo-eleven-customer03.png'






const Process = () => {

    const dataProcess = useStaticQuery(graphql`
    {
  demoElevenCustomerOne:file(relativePath:{eq:"demo-eleven-customer01.png"}){
    childImageSharp{
      fixed(width:154){
                ...GatsbyImageSharpFixed_noBase64
      }
    }
  },
  demoElevenCustomerTwo:file(relativePath:{eq:"demo-eleven-customer02.png"}){
    childImageSharp{
      fixed(width:154){
                ...GatsbyImageSharpFixed_noBase64
      }
    }
  },
  demoElevenCustomerThree:file(relativePath:{eq:"demo-eleven-customer03.png"}){
    childImageSharp{
      fixed(width:154){
                ...GatsbyImageSharpFixed_noBase64
      }
    }
  }
  
}
    `)


    return (
        <section className={`process container mt-5`}>
            <div className="section__title">
                <h2 className="section__title--heading">
                    What Do We Do?
        </h2>
                <p className="section__title--subheading">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
                    tempor incididunt ut labore et dolore. On the other hand we denounce
                    with righteous.
        </p>
            </div>
            <div className="process__list">
                <div className="process__list--item px-2 py-2">
                    <div className="process__list--item--imgWrapper">
                        {/* <img
                            src={pImg1}
                            alt="customer1"
                        /> */}
                        <Image picsFixed={dataProcess.demoElevenCustomerOne.childImageSharp.fixed} alt="customer1" />
                        <h2 className="process__list--item--title">
                            Customer Engagement Transformation.
            </h2>
                        <p className="process__list--item--description">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                            eiusmod tempor incididunt ut labore et dolore.
            </p>
                    </div>
                </div>
                <div className="process__list--item px-2 py-2">
                    <div className="process__list--item--imgWrapper">
                        {/* <img
                            src={pImg2}
                            alt="customer2"
                        /> */}
                        <Image picsFixed={dataProcess.demoElevenCustomerTwo.childImageSharp.fixed} alt="customer2" />
                        <h2 className="process__list--item--title">
                            Business Process Transformation.
            </h2>
                        <p className="process__list--item--description">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                            eiusmod tempor incididunt ut labore et dolore.
            </p>
                    </div>
                </div>
                <div className="process__list--item px-2 py-2">
                    <div className="process__list--item--imgWrapper">
                        {/* <img
                            src={pImg3}
                            alt="customer3"
                        /> */}
                        <Image picsFixed={dataProcess.demoElevenCustomerThree.childImageSharp.fixed} alt="customer2" />
                        <h2 className="process__list--item--title">
                            Business Process Transformation.
            </h2>
                        <p className="process__list--item--description">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                            eiusmod tempor incididunt ut labore et dolore.
            </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Process
