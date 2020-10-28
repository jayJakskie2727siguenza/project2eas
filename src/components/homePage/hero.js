import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'




const hero = () => {



  return (
    <section className="hero">
      <div className="hero__contentWrapper dflex justify-content-end container">
        <div className="hero__content">
          <h1 className="hero__content--title">
            Best Marketing Platform to Really Grow your Business
          </h1>

          <p className="hero__content--subtitle">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam quis nostrud exercitation ullamco laboris
          </p>
          <button className="btn btn-primary-outline hero__content--btn mt-4">
            GET FREE CONSULTATION <i className="fas fa-long-arrow-alt-right">
              <FontAwesomeIcon icon={faLongArrowAltRight} />
            </i>
          </button>
        </div>
      </div>
    </section>



  )
}




export default hero
