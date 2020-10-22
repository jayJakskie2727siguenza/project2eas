import React from 'react'

const pricePlanBasic = () => {
    return (
        <div className="pricePlan__basic mx-2">
            <div className="pricePlan__basic--wrapper">
                <h2 className="pricePlan__basic--wrapper--h2">BASIC</h2>
                <p className="pricePlan__basic--wrapper--p">Basic Service</p>
                <div className="pricePlan__basic--wrapper--price dflex">
                    <h4 className="pricePlan__basic--wrapper--price--h4">$25</h4>
                    <p>Month</p>
                </div>
            </div>
            <div className="pricePlan__basic--wrapper1">
                <ul className="pricePlan__basic--wrapper1--ul list-unstyled">
                    <li className="pricePlan__basic--wrapper1--ul--li">
                        Full Site Design
              </li>
                    <li className="pricePlan__basic--wrapper1--ul--li">
                        HTML and Wordpress Ready
              </li>
                    <li className="pricePlan__basic--wrapper1--ul--li">
                        Three Alternative Design
              </li>
                    <li className="pricePlan__basic--wrapper1--ul--li">
                        Free One Year Domain
              </li>
                    <li className="pricePlan__basic--wrapper1--ul--li">
                        10 GB Free Hosting
              </li>
                    <li className="pricePlan__basic--wrapper1--ul--li">
                        Unlimited Reversion
              </li>
                </ul>
                <button className="pricePlan__basic--wrapper1--button btn-warning">
                    Choose
            </button>
            </div>
        </div>
    )
}

export default pricePlanBasic
