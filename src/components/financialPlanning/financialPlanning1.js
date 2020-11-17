import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'



const getData = graphql`
{
    wpgraph2eas {
        pageBy(uri: "services") {
            services_pagesection_acf {
                financialPlanningSection1 {
                    description
                }
            }
        },
        financialplan_1_lists(first: 20) {
            nodes {
               listTitle: title
               id
            }
        }
    }
}
`

const FinancialPlanning1 = () => {


    const {
        wpgraph2eas: {
            // pageBy: {
            //     services_pagesection_acf: {
            //         financialPlanningSection1: {
            //             description
            //         }
            //     }
            // },
            financialplan_1_lists: {
                nodes
            }
        }
    } = useStaticQuery(getData)




    return (
        <div className="financialPlanning1 mb-4 pt-2">
            {/* <div className="financialPlanning1__div1 pb-3">
                <p>
                    {
                        description ? description : (<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur.(default)</span>)
                    }
                </p>
            </div> */}

            <div className="financialPlanning1__div2 ">
                <ul className="financialPlanning1__div2--list1  list-unstyled">
                    {
                        nodes.map(data => {
                            return (
                                <li key={data.id} className="financialPlanning1__div2--list--item ">
                                    <i className="pr-1"><FontAwesomeIcon icon={faCaretRight} /></i>
                                    {data.listTitle}
                                </li>
                            )
                        })
                    }

                </ul>

            </div>
        </div>
    )
}

export default FinancialPlanning1
