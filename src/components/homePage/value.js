import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from '../image'
// import pImg1 from '../../images/demo-eleven-icon-dark01.png'
// import pImg2 from '../../images/demo-eleven-icon-dark02.png'
// import pImg3 from '../../images/demo-eleven-icon-dark03.png'





const Value = () => {
  const dataValue = useStaticQuery(graphql`
    {
  demoElevenDarkOne:file(relativePath:{eq:"demo-eleven-icon-dark01.png"}){
    childImageSharp{
      fixed(width: 104){
        ...GatsbyImageSharpFixed_noBase64
      }
    }
  },
  demoElevenDarkTwo:file(relativePath:{eq:"demo-eleven-icon-dark02.png"}){
    childImageSharp{
      fixed(width: 104){
        ...GatsbyImageSharpFixed_noBase64
      }
    }
  },
  demoElevenDarkThree:file(relativePath:{eq:"demo-eleven-icon-dark03.png"}){
    childImageSharp{
      fixed(width: 104){
        ...GatsbyImageSharpFixed_noBase64
      }
    }
  }
}
    `)
  return (
    <section className={`value `}>
      <div className="value__main container">
        <h2 className="text-center value__heading text-white">
          Capitalize on low hanging fruit to identify a ballpark value added
          activity to beta test. Override the digital divide.
        </h2>
        <div className="value__wrapper mt-5">
          <div className="value__col">
            <div className="value__col--imgWrapper">
              {/* <img
                                src={pImg1}
                                alt="Diamonds"
                            /> */}
              <Image picsFixed={dataValue.demoElevenDarkOne.childImageSharp.fixed} alt="Diamonds" />
            </div>
            <h3 className="value__col--title my-2">
              Accounting & Taxation System
            </h3>
            <p className="value__col--sub">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod.
            </p>
          </div>
          <div className="value__col">
            <div className="value__col--imgWrapper">
              {/* <img
                src={pImg2}
                alt="User"
               /> */}
              <Image picsFixed={dataValue.demoElevenDarkTwo.childImageSharp.fixed} alt="User" />
            </div>
            <h3 className="value__col--title my-2">
              Financial Consultancy
            </h3>
            <p className="value__col--sub">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod.
            </p>
          </div>
          <div className="value__col">
            <div className="value__col--imgWrapper">
              {/* <img
                  src={pImg3}
                  alt="Graph"
              /> */}
              <Image picsFixed={dataValue.demoElevenDarkThree.childImageSharp.fixed} alt="Graph" />
            </div>
            <h3 className="value__col--title my-2">
              Virtual Staff Outsourcing
            </h3>
            <p className="value__col--sub">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Value
