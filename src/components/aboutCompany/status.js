import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import img1 from '../../images/Successfully.png'
import img2 from '../../images/Countries.png'
import img3 from '../../images/Years.png'

const getData = graphql`{
    wpgraph2eas {
    pageBy(uri: "about") {
      aboutus_pagesection_acf {
        statusSection {
          statusSuccess {
            successNumber
            successDescription
          }
          statusCountries {
            countriesNumber
            countriesDescription
          }
          statusYears {
            yearsNumber
            yearsDescription
          }
        }
      }
    }
  }
}`

const Status = () => {
    const {
        wpgraph2eas: {
            pageBy: {
                aboutus_pagesection_acf: {
                    statusSection: {
                        statusSuccess: {
                            successNumber,
                            successDescription
                        },
                        statusCountries: {
                            countriesNumber,
                            countriesDescription
                        },
                        statusYears: {
                            yearsNumber,
                            yearsDescription
                        }
                    }
                }
            }
        }
    } = useStaticQuery(getData)
    return (
        <section className="status dflex justify-content-between">
            <div className="status__success dflex justify-content-start">
                <div className="status__success--img">
                    <img src={img1} alt="Successfully" />
                </div>
                <div className="status__success--content">
                    <p className="status__success--content--p1">
                        {successNumber ? successNumber : (<span>10 (default)</span>)}
                        {/* 10 */}
                    </p>
                    <p className="status__success--content--p2 contentTitle--subtitle mt-1">

                        Successfully
            </p>
                    <p className="contentTitle--subtitle">
                        {successDescription ? successDescription : (<span>Completed Projects (default)</span>)}
                        {/* Completed Projects */}
                    </p>
                </div>
            </div>
            <div className="status__countries dflex">
                <div className="status__countries--img">
                    <img src={img2} alt="Countries" />
                </div>
                <div className="status__countries--content">
                    <p className="status__countries--content--p1">
                        {countriesNumber ? countriesNumber : (<span>3 (default)</span>)}
                        {/* 3 */}
                    </p>
                    <p
                        className="status__countries--content--p2 contentTitle--subtitle mt-1"
                    >
                        Countries
            </p>
                    <p className="contentTitle--subtitle">
                        {countriesDescription ? countriesDescription : (<span>(New Zealand, Australia, Philippines) (default)</span>)}
                        {/* (New Zealand, Australia, Philippines) */}
                    </p>
                </div>
            </div>
            <div className="status__years dflex">
                <div className="status__years--img">
                    <img src={img3} alt="Years" />
                </div>
                <div className="status__years--content">
                    <p className="status__years--content--p1">
                        {yearsNumber ? yearsNumber : (<span>2 (default)</span>)}
                        {/* 2 */}
                    </p>
                    <p className="status__years--content--p2 contentTitle--subtitle mt-1">
                        Years
            </p>
                    <p className="contentTitle--subtitle">
                        {yearsDescription ? yearsDescription : (<span>Of Experience (default)</span>)}
                        {/* Of Experience */}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Status
