import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faPhoneAlt, faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import EASLogo from '../../images/2EAS-LOGO-Horizontal-Website-footer.png'



const footer = () => {
  return (
    <section>


      <div className="footer">
        <div className="footer__list container">
          <div className="footer__list--about">
            <div className="footer__list--about--imgWrapper">
              <img className="footer__list--about--imgWrapper--img" src={EASLogo} alt="2EAS-LOGO" />
            </div>
            <p className="footer__list--about--p mb-1">We are an online accounting consultancy business specializing in Accounting & Taxation System in the Philippines since 2018.
          </p>
            <div
              className="footer__social dflex justify-content-start align-items-center"
            >
              <p className="footer__followUs">Follow Us:</p>
              <ul className="dflex justify-content-start list-unstyled">

                <li className="ml-1">



                  <a href="https://www.facebook.com/pages/category/Accountant/2E-Accounting-Solutions-Philippines-2304099389605381/">
                    <i className="footer__social text-white fab fa-facebook-f">
                      <FontAwesomeIcon icon={faFacebook} />
                    </i>
                  </a>






                </li>
                <li >



                  <a href="https://www.linkedin.com/company/2e-accounting-solutions-philippines/">
                    <i className="footer__social text-white fab fa-Linkedin">

                      <FontAwesomeIcon icon={faLinkedin} />
                    </i>
                  </a>




                </li>

              </ul>
            </div>
          </div>

          <div className="footer__list--item">
            <h2 className="footer__list--item--heading">Company Address</h2>
            <ul className="list-unstyled">
              <li className="mb-1">
                <address className="footer__list--item--address">
                  <i className="fas fa-map-marker-alt mr-1">
                    <FontAwesomeIcon icon={faAddressBook} />
                  </i>
                21 Apple St., General Santos City, 9500 South Cotabato, Philippines
              </address>
              </li>
              <li className="mb-1">
                <p><i className="fas fa-phone-alt mr-1">
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </i> <a href="tel:(083) 227-1227" className="footer__list--item--a">(083) 227-1227</a> </p>
              </li>
              <li className="mb-1">
                <p><i className="fas fa-mobile-alt mr-1">
                  <FontAwesomeIcon icon={faMobileAlt} />
                </i> <a href="tel:+63 917 421 9688" className="footer__list--item--a"> +63 917 421 9688</a> </p>
              </li>
              <li>
                <p>
                  <i className="fas fa-envelope mr-1">
                    <FontAwesomeIcon icon={faEnvelope} />

                  </i>
                  <a href="mailto:solutions.2eas@gmail.com" className="footer__list--item--a"> solutions.2eas@gmail.com</a>
                </p>
              </li>
            </ul>
          </div>

          <div className="footer__list--item">
            <h2 className="footer__list--item--heading">Newsletter</h2>
            <p className="mb-1">
              Subscribe to our newsletter for discounts, specials, and more! We
              value your privacy.
          </p>
            <div className="footer__list--item--submit dflex justify-content-between">
              <input
                className="footer__list--item--submit--input"
                type="email"
                placeholder="Enter Your Email"
              />
              <button className="footer__list--item--submit--btn">Submit</button>
            </div>
          </div>
          <div>
            <iframe title="Company Map" className="footer__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.097694952234!2d125.16136215052991!3d6.117549929424301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f79ff71097470f%3A0x9dabd3e0e30995c9!2s2E%20Accounting%20Solutions%20Philippines!5e0!3m2!1sen!2sph!4v1603296267594!5m2!1sen!2sph" aria-hidden="false" ></iframe>
          </div>
        </div>
      </div >
    </section>

  )
}

export default footer
