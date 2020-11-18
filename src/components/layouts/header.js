// import PropTypes from "prop-types"
import React, { Component } from "react"


import logoImage from '../../images/2EAS-LOGO-Horizontal-Website.png'
import AniLink from "gatsby-plugin-transition-link/AniLink"







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
              <AniLink cover bg="#f4f4f4" duration={0.7} direction="up" to="/" className="nav__logoWrapper--a">
                <img
                  className="nav__logoWrapper--logo"
                  src={logoImage}
                  alt="demoElevenLogo"
                />
              </AniLink>
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
                  <a href="https://login.xero.com/">Login to Xero</a>
                </li>
                <li className="nav__menu--list--item">

                  <a href="tel:+63 917 421 9688" ><button className="nav__menu--list--item--button btnHoveringFloat">Call Now</button></a>



                </li>
              </ul>
            </div>




          </div>
          {/* <input type="checkbox" className="nav__menu--checkbox" name="checkbox" id="checkbox" onBlur={this.func1} onFocus={this.func1} ></input>

          <label htmlFor="checkbox">
            <div className="nav__menu--Btn ml-3" id="sample1" >
              <FontAwesomeIcon icon={faBars} />
            </div>
          </label> */}

        </nav>

      </header>
    )
  }
}




export default Header














