import React from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'





const Banner = ({ title, subtitle }) => {
    return (
        <section className="banner">
            <div className="banner__wrapper container py-5">
                <div className="banner__wrapper--main mb-1">
                    <h1>{title}</h1>
                </div>
                <div className="banner__wrapper--submain dflex justify-content-center">
                    <a className="banner__wrapper--submain--mainpage mr-1" href="/">Home</a>
                    <span className="banner__wrapper--submain--icon mr-1">
                        <i className="banner__wrapper--submain--icon--item">
                            <FontAwesomeIcon icon={faAngleRight} />
                        </i>
                    </span>
                    <div className="banner__wrapper--submain--subpage mr-1">
                        {title}
                    </div>
                    {subtitle ? <SubBanner subtitle={subtitle} /> : ""}


                </div>
            </div>
        </section>
    )
}




const SubBanner = ({ subtitle }) => {
    return (
        <>
            <span className="banner__wrapper--submain--icon mr-1">
                <i className="banner__wrapper--submain--icon--item">
                    <FontAwesomeIcon icon={faAngleRight} />
                </i>
            </span>
            <div className="banner__wrapper--submain--subpage mr-1">
                {subtitle}
            </div>
        </>
    )
}





export default Banner
