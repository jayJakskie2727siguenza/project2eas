// import PropTypes from "prop-types"
import React, { Component } from "react"
// import Images from '../image'

import logoImage from '../../images/2EAS-LOGO-Horizontal-Website.png'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'












export class Header extends Component {

  state = {
    checking: false
  }



  func1 = () => {
    if (this.state.checking) {

      this.setState({ checking: false })
    } else {

      this.setState({ checking: true })
    }
  }



  render() {


    return (
      <header>
        <div className="topNav">
          <nav className={this.state.checking ? "nav1 opacityShow" : "nav1 opacityHide"}>
            <div className={this.state.checking ? "nav1__div dflex showNav" : "nav1__div dflex hideNav"}>
              <ul
                className="nav1__div--list list-unstyled dflex mr-4 pt-4"
              >
                <li className="nav1__div--list--item">
                  <AniLink cover bg="#f4f4f4" duration={0.7} direction="up" to="/" >
                    <span className="nav1__div--list--item--link">Home</span>

                  </AniLink>

                </li>
                <li className="nav1__div--list--item">
                  <AniLink fade to="/about" className="nav1__div--list--item--link">About Us</AniLink>

                </li>
                <li className="nav1__div--list--item">
                  <AniLink fade to="/financial-Planning" className="nav1__div--list--item--link">Services</AniLink>

                </li>
                <li className="nav1__div--list--item">
                  <AniLink fade to="/News" className="nav1__div--list--item--link">News</AniLink>

                </li>
                <li className="nav1__div--list--item">
                  <AniLink fade to="/contactPage" className="nav1__div--list--item--link">Contact</AniLink>

                </li>

              </ul>
            </div>
          </nav>
          <div
            className="container dflex justify-content-between align-items-center py-1"
          >
            <div
              className="topNav__help dflex justify-content-start align-items-center"
            >
              <p className="topNav__needhelp mr-2">NEED HELP TALK TO AN EXPERT</p>
              <p className="topNav__contact"><a href="tel:(083) 227-1227">(083) 227-1227</a></p>
            </div>

          </div>
        </div>
        <nav className="nav">
          <div
            className="nav__main container dflex justify-content-between align-items-center py-1"
          >
            <div className="nav__logoWrapper">
              <img
                className="nav__logo"
                src={logoImage}
                alt="demoElevenLogo"
              />
              {/* <Images /> */}

            </div>
            <div className="nav__menu">
              <ul
                className="nav__menu--list list-unstyled dflex justify-content-between align-items-center"
              >
                <li className="nav__menu--list--item">
                  <AniLink cover bg="#f4f4f4" duration={0.7} direction="up" to="/" className="nav__menu--list--item--link">Home</AniLink>

                </li>
                <li className="nav__menu--list--item">
                  <AniLink fade to="/about" className="nav__menu--list--item--link">About Us</AniLink>

                </li>
                <li className="nav__menu--list--item">
                  <AniLink fade to="/financial-Planning" className="nav__menu--list--item--link">Services</AniLink>

                </li>
                <li className="nav__menu--list--item">
                  <AniLink fade to="/News" className="nav__menu--list--item--link">News</AniLink>

                </li>
                <li className="nav__menu--list--item">
                  <AniLink fade to="/contactPage" className="nav__menu--list--item--link">Contact</AniLink>

                </li>
                <li className="nav__menu--list--item">

                  <button className="nav__menu--list--item--button">Call Now</button>



                </li>
              </ul>
            </div>




          </div>
          <input type="checkbox" className="nav__menu--checkbox" name="checkbox" id="checkbox" onBlur={this.func1} onFocus={this.func1} ></input>

          <label htmlFor="checkbox">
            <div className="nav__menu--Btn ml-3" id="sample1" >
              <FontAwesomeIcon icon={faBars} />
            </div>
          </label>

        </nav>

      </header>
    )
  }
}




export default Header














