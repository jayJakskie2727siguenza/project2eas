import React from 'react'
import img1 from '../../images/Successfully.png'
import img2 from '../../images/Countries.png'
import img3 from '../../images/Years.png'



const status = () => {
    return (
        <section className="status dflex justify-content-between">
            <div className="status__success dflex justify-content-start">
                <div className="status__success--img">
                    <img src={img1} alt="Successfully" />
                </div>
                <div className="status__success--content">
                    <p className="status__success--content--p1">10</p>
                    <p className="status__success--content--p2 contentTitle--subtitle mt-1">
                        Successfully
            </p>
                    <p className="contentTitle--subtitle">Completed Projects</p>
                </div>
            </div>
            <div className="status__countries dflex">
                <div className="status__countries--img">
                    <img src={img2} alt="Countries" />
                </div>
                <div className="status__countries--content">
                    <p className="status__countries--content--p1">3</p>
                    <p
                        className="status__countries--content--p2 contentTitle--subtitle mt-1"
                    >
                        Countries
            </p>
                    <p className="contentTitle--subtitle">(New Zealand, Australia, Philippines)</p>
                </div>
            </div>
            <div className="status__years dflex">
                <div className="status__years--img">
                    <img src={img3} alt="Years" />
                </div>
                <div className="status__years--content">
                    <p className="status__years--content--p1">2</p>
                    <p className="status__years--content--p2 contentTitle--subtitle mt-1">
                        Years
            </p>
                    <p className="contentTitle--subtitle">Of Experience</p>
                </div>
            </div>
        </section>
    )
}

export default status
