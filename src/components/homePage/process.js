import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
// import Image from '../image'

// import pieChart from '../../images/pie-chart.png'

// logo
import logoAudit from '../../images/006-audit.png'
import logoBinder from '../../images/012-binder.png'
import logoEarning from '../../images/013-earning.png'
import logoAgreement from '../../images/020-agreement.png'
import logoLedger from '../../images/022-Ledger.png'
import logoSmartphone from '../../images/025-smartphone.png'
import logoReport from '../../images/030-report.png'
import logoRevenue from '../../images/031-Revenue.png'








const Process = () => {

    //     const dataProcess = useStaticQuery(graphql`
    //     {
    //   demoElevenCustomerOne:file(relativePath:{eq:"demo-eleven-customer01.png"}){
    //     childImageSharp{
    //       fixed(width:154){
    //                 ...GatsbyImageSharpFixed_noBase64
    //       }
    //     }
    //   },
    //   demoElevenCustomerTwo:file(relativePath:{eq:"demo-eleven-customer02.png"}){
    //     childImageSharp{
    //       fixed(width:154){
    //                 ...GatsbyImageSharpFixed_noBase64
    //       }
    //     }
    //   },
    //   demoElevenCustomerThree:file(relativePath:{eq:"demo-eleven-customer03.png"}){
    //     childImageSharp{
    //       fixed(width:154){
    //                 ...GatsbyImageSharpFixed_noBase64
    //       }
    //     }
    //   }

    // }
    //     `)


    return (
        <section className={`process container`}>
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
            <div className="process__icon">
                <div className="process__icon--wrapper process__icon--wrapper--1">
                    <div className="process__icon--wrapper--div process__icon--wrapper--div--1">
                        <div className="process__icon--wrapper--icon mr-1">
                            <img className="process__icon--wrapper--icon--icon" src={logoAgreement} alt="pie-chart" />
                        </div>
                        <div className="process__icon--wrapper--content ">
                            <h3 className="process__icon--wrapper--content--h3">Easy Invoicing</h3>
                            <p className="process__icon--wrapper--content--p">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore. </p>
                        </div>
                    </div>
                    <div className="process__icon--wrapper--div process__icon--wrapper--div--1">
                        <div className="process__icon--wrapper--icon mr-1">
                            <img className="process__icon--wrapper--icon--icon" src={logoSmartphone} alt="pie-chart" />
                        </div>
                        <div className="process__icon--wrapper--content">
                            <h3 className="process__icon--wrapper--content--h3">Go Mobile</h3>
                            <p className="process__icon--wrapper--content--p">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore. </p>
                        </div>
                    </div>
                    <div className="process__icon--wrapper--div process__icon--wrapper--div--1">
                        <div className="process__icon--wrapper--icon mr-1">
                            <img className="process__icon--wrapper--icon--icon" src={logoBinder} alt="pie-chart" />
                        </div>
                        <div className="process__icon--wrapper--content">
                            <h3 className="process__icon--wrapper--content--h3">Inventory</h3>
                            <p className="process__icon--wrapper--content--p">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore. </p>
                        </div>
                    </div>
                    <div className="process__icon--wrapper--div process__icon--wrapper--div--1">
                        <div className="process__icon--wrapper--icon mr-1">
                            <img className="process__icon--wrapper--icon--icon" src={logoRevenue} alt="pie-chart" />
                        </div>
                        <div className="process__icon--wrapper--content">
                            <h3 className="process__icon--wrapper--content--h3">multi-currency</h3>
                            <p className="process__icon--wrapper--content--p">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore. </p>
                        </div>
                    </div>
                    <div className="process__icon--wrapper--div process__icon--wrapper--div--1">
                        <div className="process__icon--wrapper--icon mr-1">
                            <img className="process__icon--wrapper--icon--icon" src={logoReport} alt="pie-chart" />
                        </div>
                        <div className="process__icon--wrapper--content">
                            <h3 className="process__icon--wrapper--content--h3">700+ third-party apps</h3>
                            <p className="process__icon--wrapper--content--p">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore. </p>
                        </div>
                    </div>
                    <div className="process__icon--wrapper--div process__icon--wrapper--div--1">
                        <div className="process__icon--wrapper--icon mr-1">
                            <img className="process__icon--wrapper--icon--icon" src={logoAudit} alt="pie-chart" />
                        </div>
                        <div className="process__icon--wrapper--content">
                            <h3 className="process__icon--wrapper--content--h3">attach files to data</h3>
                            <p className="process__icon--wrapper--content--p">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore. </p>
                        </div>
                    </div>

                    <div className="process__icon--wrapper--div process__icon--wrapper--div--1">
                        <div className="process__icon--wrapper--icon mr-1">
                            <img className="process__icon--wrapper--icon--icon" src={logoEarning} alt="pie-chart" />
                        </div>
                        <div className="process__icon--wrapper--content">
                            <h3 className="process__icon--wrapper--content--h3">create purchase orders</h3>
                            <p className="process__icon--wrapper--content--p">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore. </p>
                        </div>
                    </div>
                    <div className="process__icon--wrapper--div process__icon--wrapper--div--1">
                        <div className="process__icon--wrapper--icon mr-1">
                            <img className="process__icon--wrapper--icon--icon" src={logoAgreement} alt="pie-chart" />
                        </div>
                        <div className="process__icon--wrapper--content">
                            <h3 className="process__icon--wrapper--content--h3">claim those expenses</h3>
                            <p className="process__icon--wrapper--content--p">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore. </p>
                        </div>
                    </div>
                    <div className="process__icon--wrapper--div process__icon--wrapper--div--1">
                        <div className="process__icon--wrapper--icon mr-1">
                            <img className="process__icon--wrapper--icon--icon" src={logoLedger} alt="pie-chart" />
                        </div>
                        <div className="process__icon--wrapper--content">
                            <h3 className="process__icon--wrapper--content--h3">pay bills</h3>
                            <p className="process__icon--wrapper--content--p">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore. </p>
                        </div>
                    </div>
                    <div className="process__icon--wrapper--div process__icon--wrapper--div--1">
                        <div className="process__icon--wrapper--icon mr-1">
                            <img className="process__icon--wrapper--icon--icon" src={logoBinder} alt="pie-chart" />
                        </div>
                        <div className="process__icon--wrapper--content">
                            <h3 className="process__icon--wrapper--content--h3">bank connections</h3>
                            <p className="process__icon--wrapper--content--p">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore. </p>
                        </div>
                    </div>
                    <div className="process__icon--wrapper--div process__icon--wrapper--div--1">
                        <div className="process__icon--wrapper--icon mr-1">
                            <img className="process__icon--wrapper--icon--icon" src={logoAudit} alt="pie-chart" />
                        </div>
                        <div className="process__icon--wrapper--content">
                            <h3 className="process__icon--wrapper--content--h3">contact & smart list</h3>
                            <p className="process__icon--wrapper--content--p">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore. </p>
                        </div>
                    </div>
                    <div className="process__icon--wrapper--div process__icon--wrapper--div--1">
                        <div className="process__icon--wrapper--icon mr-1">
                            <img className="process__icon--wrapper--icon--icon" src={logoReport} alt="pie-chart" />
                        </div>
                        <div className="process__icon--wrapper--content">
                            <h3 className="process__icon--wrapper--content--h3">xero expenses</h3>
                            <p className="process__icon--wrapper--content--p">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore. </p>
                        </div>
                    </div>

                    <div className="process__icon--wrapper--div process__icon--wrapper--div--1">
                        <div className="process__icon--wrapper--icon mr-1">
                            <img className="process__icon--wrapper--icon--icon" src={logoRevenue} alt="pie-chart" />
                        </div>
                        <div className="process__icon--wrapper--content">
                            <h3 className="process__icon--wrapper--content--h3">bank reconciliation</h3>
                            <p className="process__icon--wrapper--content--p">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore. </p>
                        </div>
                    </div>
                    <div className="process__icon--wrapper--div process__icon--wrapper--div--1">
                        <div className="process__icon--wrapper--icon mr-1">
                            <img className="process__icon--wrapper--icon--icon" src={logoReport} alt="pie-chart" />
                        </div>
                        <div className="process__icon--wrapper--content">
                            <h3 className="process__icon--wrapper--content--h3">information security</h3>
                            <p className="process__icon--wrapper--content--p">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore. </p>
                        </div>
                    </div>
                    <div className="process__icon--wrapper--div process__icon--wrapper--div--1">
                        <div className="process__icon--wrapper--icon mr-1">
                            <img className="process__icon--wrapper--icon--icon" src={logoLedger} alt="pie-chart" />
                        </div>
                        <div className="process__icon--wrapper--content">
                            <h3 className="process__icon--wrapper--content--h3">sales tax</h3>
                            <p className="process__icon--wrapper--content--p">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore. </p>
                        </div>
                    </div>
                    <div className="process__icon--wrapper--div process__icon--wrapper--div--1">
                        <div className="process__icon--wrapper--icon mr-1">
                            <img className="process__icon--wrapper--icon--icon" src={logoEarning} alt="pie-chart" />
                        </div>
                        <div className="process__icon--wrapper--content">
                            <h3 className="process__icon--wrapper--content--h3">quotes</h3>
                            <p className="process__icon--wrapper--content--p">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore. </p>
                        </div>
                    </div>
                    <div className="process__icon--wrapper--div process__icon--wrapper--div--1">
                        <div className="process__icon--wrapper--icon mr-1">
                            <img className="process__icon--wrapper--icon--icon" src={logoBinder} alt="pie-chart" />
                        </div>
                        <div className="process__icon--wrapper--content">
                            <h3 className="process__icon--wrapper--content--h3">accept payments</h3>
                            <p className="process__icon--wrapper--content--p">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore. </p>
                        </div>
                    </div>
                    <div className="process__icon--wrapper--div process__icon--wrapper--div--1">
                        <div className="process__icon--wrapper--icon mr-1">
                            <img className="process__icon--wrapper--icon--icon" src={logoSmartphone} alt="pie-chart" />
                        </div>
                        <div className="process__icon--wrapper--content">
                            <h3 className="process__icon--wrapper--content--h3">fixed assets</h3>
                            <p className="process__icon--wrapper--content--p">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore. </p>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Process
