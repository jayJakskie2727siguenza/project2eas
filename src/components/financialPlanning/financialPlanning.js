import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'


const getData = graphql`
{
    wpgraph2eas {
    pageBy(uri: "services") {
      services_pagesection_acf {
        financialPlanningSection {
          title
          description1
          description2
          description3
        }
      }
    }
  }
}
`


const FinancialPlanning = () => {


    const { wpgraph2eas: {
        pageBy: {
            services_pagesection_acf: {
                financialPlanningSection: {
                    title,
                    description1,
                    description2,
                    // description3
                }
            }
        }
    } } = useStaticQuery(getData)


    return (
        <div className="financialPlanning mb-2">
            <div className="financialPlanning__wrapper">
                <h2 className="contentTitle--title mb-3">
                    {title ? title : (<span>Financial Planning(default)</span>)}
                </h2>
                <div className="financialPlanning__wrapper--div1 mb-3">
                    <p className="financialPlanning__wrapper--div1--p">
                        {
                            description1 ? description1 : (<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur.(default)</span>)
                        }
                    </p>
                </div>
                <div className="financialPlanning__wrapper--div2 mb-3">
                    <p className="financialPlanning__wrapper--div2--p">
                        {
                            description2 ? description2 : (<span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit.(default)</span>)
                        }
                    </p>
                </div>
                {/* <div className="financialPlanning__wrapper--div3 pb-3">
                    <p className="financialPlanning__wrapper--div3--p">
                        {
                            description3 ? description3 : (<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate.(default)</span>)
                        }
                    </p>
                </div> */}
            </div>
        </div>
    )
}

export default FinancialPlanning
