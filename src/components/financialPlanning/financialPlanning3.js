import React from 'react'
import fImg1 from '../../images/DEMO-ELEVEN-ANALYZE-YOUR-BU.png'
import fImg2 from '../../images/DEMO-ELEVEN-BUSINESS-STRATE.png'




const financialPlanning3 = () => {
    return (
        <div className="financialPlanning3 pt-2">
            <div className="financialPlanning3__analyze">
                <div className="financialPlanning3__analyze--wrapper">
                    <img
                        className="financialPlanning3__analyze--wrapper--img mb-1"
                        src={fImg1}
                        alt="businessAnalyze"
                    />
                    <h4 className="contentTitle--subtitle mb-1">
                        ANALYZE YOUR BUSINESS
                </h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                </div>
            </div>
            <div className="financialPlanning3__strategies">
                <div className="financialPlanning3__strategies--wrapper">
                    <img
                        className="financialPlanning3__strategies--wrapper--img mb-1"
                        src={fImg2}
                        alt="businessStrategies"
                    />
                    <h4 className="contentTitle--subtitle mb-1">BUSINESS STRATEGIES</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                </div>
            </div>
        </div>
    )
}

export default financialPlanning3
