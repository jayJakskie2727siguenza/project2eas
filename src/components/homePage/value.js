import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// import Image from '../image'
// import pImg1 from '../../images/demo-eleven-icon-dark01.png'
// import pImg2 from '../../images/demo-eleven-icon-dark02.png'
// import pImg3 from '../../images/demo-eleven-icon-dark03.png'



const getData = graphql`
    {
    wpgraph2eas {
      pageBy(uri: "home") {
        home_pagesection_acf {
          sections {
            value {
              title
              subtitle1
              subtitle2
              subtitle3
              description1
              description2
              description3
              icon1 {
                icon1Url: sourceUrl
                icon1Alt: altText
              }
              icon2 {
                icon2Url: sourceUrl
                icon2Alt: altText
              }
              icon3 {
                icon3Url: sourceUrl
                icon3Alt: altText
              }
            }
          }
        }
      }
    }
  }
    `



const Value = () => {
  const {
    wpgraph2eas: {
      pageBy: {
        home_pagesection_acf: {
          sections: {
            value: {
              title,
              subtitle1,
              subtitle2,
              subtitle3,
              description1,
              description2,
              description3,
              icon1: {
                icon1Url,
                icon1Alt,
              },
              icon2: {
                icon2Url,
                icon2Alt,
              },
              icon3: {
                icon3Url,
                icon3Alt
              }
            }
          }
        }
      }
    }
  } = useStaticQuery(getData)




  return (
    <section className={`value `}>
      <div className="value__main container">
        <h2 className="text-center value__heading text-white">
          {
            title ? title : <span>Capitalize on low hanging fruit to identify a ballpark value added
          activity to beta test. Override the digital divide.</span>
          }
        </h2>
        <div className="value__wrapper mt-5">
          <div className="value__col">
            <div className="value__col--imgWrapper">


              <img
                src={icon1Url}
                alt={icon1Alt}
              />
              {/* <Image picsFixed={dataValue.demoElevenDarkOne.childImageSharp.fixed} alt="Diamonds" /> */}
            </div>
            <h3 className="value__col--title my-2">
              {
                subtitle1 ? subtitle1 : <span> Accounting & Taxation System</span>
              }
            </h3>
            <p className="value__col--sub">
              {
                description1 ? description1 : <span> Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod.</span>
              }
            </p>
          </div>


          <div className="value__col">
            <div className="value__col--imgWrapper">
              <img
                src={icon2Url}
                alt={icon2Alt}
              />
              {/* <Image picsFixed={dataValue.demoElevenDarkTwo.childImageSharp.fixed} alt="User" /> */}
            </div>
            <h3 className="value__col--title my-2">
              {
                subtitle2 ? subtitle2 : <span> Financial Consultancy</span>
              }
            </h3>
            <p className="value__col--sub">
              {
                description2 ? description2 : <span> Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod.</span>
              }
            </p>
          </div>
          <div className="value__col">
            <div className="value__col--imgWrapper">
              <img
                src={icon3Url}
                alt={icon3Alt}
              />
              {/* <Image picsFixed={dataValue.demoElevenDarkThree.childImageSharp.fixed} alt="Graph" /> */}
            </div>
            <h3 className="value__col--title my-2">
              {
                subtitle3 ? subtitle3 : <span>Virtual Staff Outsourcing</span>
              }
            </h3>
            <p className="value__col--sub">
              {
                description3 ? description3 : <span> Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod.</span>
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Value
