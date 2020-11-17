import React from 'react'
import sImg1 from '../../images/demo-eleven-bulb-2.png'
import sImg2 from '../../images/demo-eleven-mail-1-2.png'
import sImg3 from '../../images/demo-eleven-chart-1-2.png'



const servicesOnline = () => {
    return (
        <div className="servicesOnline mb-3 pt-2">
            <div className="servicesOnline__col1">
                <div className="servicesOnline__col1--wrapper">
                    <div className="servicesOnline__col1--1">
                        <div className="servicesOnline__col1--1--a">&nbsp;</div>
                    </div>
                    <div className="servicesOnline__col1--2 px-2 pt-1 pb-2">
                        <img src={sImg1} alt="bulb2" />
                        <h4 className="servicesOnline__col1--2--h4 mb-1">
                            SERVICE & COST PLANING
                  </h4>
                        <p className="servicesOnline__col1--2--p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt.
                  </p>
                    </div>
                </div>
            </div>
            <div className="servicesOnline__col2">
                <div className="servicesOnline__col2--wrapper">
                    <div className="servicesOnline__col2--1">
                        <div className="servicesOnline__col2--1--a">&nbsp;</div>
                    </div>
                    <div className="servicesOnline__col2--2 px-2 pt-1 pb-2">
                        <img src={sImg2} alt="mail" />
                        <h4 className="servicesOnline__col2--2--h4 mb-1">
                            SERVICE & COST PLANING
                  </h4>
                        <p className="servicesOnline__col2--2--p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt.
                  </p>
                    </div>
                </div>
            </div>
            <div className="servicesOnline__col3">
                <div className="servicesOnline__col3--wrapper">
                    <div className="servicesOnline__col3--1">
                        <div className="servicesOnline__col3--1--a">&nbsp;</div>
                    </div>
                    <div className="servicesOnline__col3--2 px-2 pt-1 pb-2">
                        <img src={sImg3} alt="chart" />
                        <h4 className="servicesOnline__col3--2--h4 mb-1">
                            SERVICE & COST PLANING
                  </h4>
                        <p className="servicesOnline__col3--2--p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt.
                  </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default servicesOnline
