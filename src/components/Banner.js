import React from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'





const Banner = ({ title, subtitle }) => {

    // const getbgImage ={{
    //     backgroundImage: `url("")`
    // }}

    return (
        <section className="banner">
            <div className="banner__wrapper container py-5">
                <div className="banner__wrapper--main mb-1">
                    <h1 dangerouslySetInnerHTML={{ __html: title }} />
                </div>
                <div className="banner__wrapper--submain dflex justify-content-center">

                    <a className="banner__wrapper--submain--mainpage mr-1" href="/">Home</a>
                    <span className="banner__wrapper--submain--icon mr-1">
                        <i className="banner__wrapper--submain--icon--item">
                            <FontAwesomeIcon icon={faAngleRight} />
                        </i>
                    </span>
                    {subtitle ? <SubBanner subtitle={subtitle} /> : ""}
                    <div className="banner__wrapper--submain--subpage mr-1">
                        {title}
                    </div>



                </div>
            </div>
        </section>
    )
}




const SubBanner = ({ subtitle }) => {
    return (
        <>


            <div className="banner__wrapper--submain--subpage mr-1">
                <a href={`/${subtitle}`}> {subtitle}</a>
            </div>
            <span className="banner__wrapper--submain--icon mr-1">
                <i className="banner__wrapper--submain--icon--item">
                    <FontAwesomeIcon icon={faAngleRight} />
                </i>
            </span>

        </>
    )
}





export default Banner
