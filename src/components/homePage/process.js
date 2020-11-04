import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'










const Process = () => {

    const {

        wpgraph2eas: {

            processitems: {
                arrayNodes
            },


            pageBy: {
                home_pagesection_acf: {
                    sections: {
                        process: {
                            title,
                            description
                        }
                    }
                }
            }
        }

    } = useStaticQuery(graphql`
{

    

    wpgraph2eas {
        
        processitems(first: 100) {
       arrayNodes:nodes{
           id
           pTitle:title
            content(format: RENDERED)
            featuredImage {
                sourceUrl
                altText
            }
       }
      },

      pageBy(uri: "home") {
        home_pagesection_acf {
          sections {
            process {
              title
              description
            }
          }
        }
      }
    }
  }
`)





    return (
        <section className={`process container`}>




            <div className="section__title">
                <h2 className="section__title--heading">
                    {title ? title : (<span>What Do We Do?(default)</span>)}
                    {/* What Do We Do? */}
                </h2>
                <p className="section__title--subheading">
                    {description ? description : (<span>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
                    tempor incididunt ut labore et dolore. On the other hand we denounce
                    with righteous.(default)</span>)}
                    {/* Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
                    tempor incididunt ut labore et dolore. On the other hand we denounce
                    with righteous. */}
                </p>
            </div>
            <div className="process__icon">
                <div className="process__icon--wrapper process__icon--wrapper--1">

                    {arrayNodes.map((data) =>

                        <div key={data.id} className="process__icon--wrapper--div process__icon--wrapper--div--1">
                            <div className="process__icon--wrapper--icon mr-1">
                                <img className="process__icon--wrapper--icon--icon" src={data.featuredImage.sourceUrl} alt={data.featuredImage.altText} />
                            </div>
                            <div className="process__icon--wrapper--content ">
                                <h3 className="process__icon--wrapper--content--h3">{data.pTitle.toString()}</h3>
                                <p className="process__icon--wrapper--content--p" dangerouslySetInnerHTML={{ __html: data.content }} />
                            </div>
                        </div>

                    )}


                    {/* <div className="process__icon--wrapper--div process__icon--wrapper--div--1">
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
                    </div> */}
                </div>


            </div>
        </section>
    )


}



export default Process
