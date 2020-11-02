import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'


// import fImg1 from '../../images/DEMO-ELEVEN-ANALYZE-YOUR-BU.png'
// import fImg2 from '../../images/DEMO-ELEVEN-BUSINESS-STRATE.png'



const getData = graphql`
{
    wpgraph2eas {
    pageBy(uri: "services") {
      services_pagesection_acf {
        financialPlanningSection3 {
          title1
          title2
          description1
          description2
          icon1 {
            icon1Url:sourceUrl
          }
          icon2 {
           icon2Url: sourceUrl
          }
        }
      }
    }
  }
}
`

const FinancialPlanning3 = () => {


    const {
        wpgraph2eas: {
            pageBy: {
                services_pagesection_acf: {
                    financialPlanningSection3: {
                        title1,
                        title2,
                        description1,
                        description2,
                        icon1: {
                            icon1Url
                        },
                        icon2: {
                            icon2Url
                        }
                    }
                }
            }
        }
    } = useStaticQuery(getData)

    return (
        <div className="financialPlanning3 pt-2">
            <div className="financialPlanning3__analyze">
                <div className="financialPlanning3__analyze--wrapper">
                    <img
                        className="financialPlanning3__analyze--wrapper--img mb-1"
                        src={icon1Url}
                        alt="businessAnalyze"
                    />
                    <h4 className="contentTitle--subtitle mb-1">
                        {
                            title1 ? title1 : (<span>ANALYZE YOUR BUSINESS (default)</span>)
                        }
                    </h4>
                    <p>
                        {
                            description1 ? description1 : (<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. (default)</span>)
                        }
                    </p>
                </div>
            </div>
            <div className="financialPlanning3__strategies">
                <div className="financialPlanning3__strategies--wrapper">
                    <img
                        className="financialPlanning3__strategies--wrapper--img mb-1"
                        src={icon2Url}
                        alt="businessStrategies"
                    />
                    <h4 className="contentTitle--subtitle mb-1">
                        {
                            title2 ? title2 : (<span>BUSINESS STRATEGIES (default)</span>)
                        }
                    </h4>
                    <p>
                        {
                            description2 ? description2 : (<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. (default)</span>)
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FinancialPlanning3
