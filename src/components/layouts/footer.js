import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useStaticQuery, graphql } from 'gatsby'
import addToMailChimp from 'gatsby-plugin-mailchimp'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faPhoneAlt, faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import EASLogo from '../../images/2EAS-LOGO-Horizontal-Website-footer.png'

const getData = graphql`
{
   wpgraph2eas {
    pageBy(uri: "footer") {
      footer_pagesection_acf {
        footer {
          about {
            
            description
          }
          address {
            addHeading:heading
            addAddress:address
            addCell:cellphone
            addTel:telephone
            addEmail:email
          }
          subscribe {
            subHeading:heading
            subDes:description
          }
        }
      }
    }
  }
}
`

const Footer = () => {

  const {
    wpgraph2eas: {
      pageBy: {
        footer_pagesection_acf: {
          footer: {
            about: {

              description
            },
            address: {
              addHeading,
              addAddress,
              addCell,
              addTel,
              addEmail
            },
            subscribe: {
              subHeading,
              subDes
            }
          }
        }
      }
    }
  } = useStaticQuery(getData)

  const [state, setState] = React.useState({
    email: "",
    result: "",
    loading: false
  })

  const { email, result } = state

  const submitButton = async (e) => {
    e.preventDefault()
    if (email) {
      setState({
        ...state,
        loading: true
      })

      const status = await addToMailChimp(email)
      console.log(status)
      if (status.result === "success") {
        setState({
          ...state,
          result: status,
          loading: false
        })
      } else {
        setState({
          ...state,
          result: result,
          loading: false
        })
      }


    } else {
      console.log("The Field is Empty")
    }



  }

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const formattingCellphone = (num) => {
    let number = num.toString()
    let result = "+"
    // + 63 - 9465728674
    for (let i in number) {

      if (result.length === 3) {

        result += "-"
        result += number[i]

      } else if (result.length === 7) {
        result += "-"
        result += number[i]
      } else if (result.length === 11) {
        result += "-"
        result += number[i]
      } else {
        result += number[i]
      }


    }

    return result


  }



  return (
    <section>


      <div className="footer">
        <div className="footer__list container">
          <div className="footer__list--about">
            <div className="footer__list--about--imgWrapper">
              <AniLink cover bg="#f4f4f4" duration={0.7} direction="up" to="/">
                <img className="footer__list--about--imgWrapper--img" src={EASLogo} alt="2EAS-LOGO" />
              </AniLink>
            </div>
            <p className="footer__list--about--p mb-1">
              {
                description ? description : (<span>We are an online accounting consultancy business specializing in Accounting & Taxation System in the Philippines since 2018. (default)</span>)
              }
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
            <h2 className="footer__list--item--heading">
              {
                addHeading ? addHeading : (<span>Company Address (default)</span>)
              }
            </h2>
            <ul className="list-unstyled">
              <li className="mb-1">
                <address className="footer__list--item--address">
                  <i className="fas fa-map-marker-alt mr-1">
                    <FontAwesomeIcon icon={faAddressBook} />
                  </i>
                  {
                    addAddress ? addAddress : (<span>21 Apple St., General Santos City, 9500 South Cotabato, Philippines (default)</span>)
                  }
                </address>
              </li>
              <li className="mb-1">
                <p><i className="fas fa-phone-alt mr-1">
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </i> <a href="tel:(083) 227-1227" className="footer__list--item--a">
                    {
                      addTel ? `(083) ${addTel}` : (<span>(083) 227-1227 (default)</span>)
                    }
                  </a> </p>
              </li>
              <li className="mb-1">
                <p><i className="fas fa-mobile-alt mr-1">
                  <FontAwesomeIcon icon={faMobileAlt} />
                </i> <a href="tel:+63 917 421 9688" className="footer__list--item--a">
                    {
                      addCell ? `${formattingCellphone(addCell)}` : (<span>63 917 421 9688 (default)</span>)
                    }
                  </a> </p>
              </li>
              <li>
                <p>
                  <i className="fas fa-envelope mr-1">
                    <FontAwesomeIcon icon={faEnvelope} />

                  </i>
                  <a href="mailto:solutions.2eas@gmail.com" className="footer__list--item--a">
                    {
                      addEmail ? addEmail : (<span>solutions.2eas@gmail.com (default)</span>)
                    }
                  </a>
                </p>
              </li>
            </ul>
          </div>

          <div className="footer__list--item">
            <h2 className="footer__list--item--heading">
              {
                subHeading ? subHeading : (<span>Newsletter (default)</span>)
              }
            </h2>
            <p className="mb-1">
              {
                subDes ? subDes : (<span>Subscribe to our newsletter for discounts, specials, and more! We
              value your privacy. (default)</span>)
              }
            </p>
            <div className="footer__list--item--submit ">
              <form className="footer__list--item--form dflex justify-content-between">
                <input
                  className="footer__list--item--submit--input"
                  type="email"
                  name="email"
                  value={state.email}
                  placeholder="Enter Your Email"
                  onChange={handleChange}
                />
                <button onClick={submitButton} className="footer__list--item--submit--btn">Submit</button>
              </form>
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

export default Footer
