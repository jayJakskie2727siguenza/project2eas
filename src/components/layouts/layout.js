/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import AniLink from "gatsby-plugin-transition-link/AniLink"
import Header from './header'
import Footer from './footer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faBars, faHome, faUsers, faConciergeBell, faIdCard } from '@fortawesome/free-solid-svg-icons'
import { faNewspaper } from '@fortawesome/free-regular-svg-icons'

const Layout = ({ children }) => {

  const [settings, setSettings] = React.useState({
    menuList: false,
    cover: false,
    blur: false
  })


  const pointerClick = () => {
    if (settings.menuList || settings.cover || settings.blur) {
      setSettings({
        menuList: false,
        cover: false,
        blur: false
      })
    } else {
      setSettings({
        menuList: true,
        cover: true,
        blur: true
      })
    }
  }

  return (
    <>
      <div className={`topNav__menuList ${settings.menuList ? "topNav__menuList--show" : "topNav__menuList--hide"}`}>
        <ul className="topNav__menuList--ul ">
          <AniLink className="topNav__menuList--ul--li--a" cover bg="#f4f4f4" duration={0.7} direction="up" to="/" >
            <li className="topNav__menuList--ul--li">
              <div className="topNav__menuList--ul--li--iconWrapper">
                <FontAwesomeIcon className="topNav__menuList--ul--li--iconWrapper--icon" icon={faHome} />
              </div>

              <span>Home</span>

            </li>
          </AniLink>
          <AniLink fade to="/about" className="topNav__menuList--ul--li--a">
            <li className="topNav__menuList--ul--li">
              <div className="topNav__menuList--ul--li--iconWrapper">
                <FontAwesomeIcon className="topNav__menuList--ul--li--iconWrapper--icon" icon={faUsers} />
              </div>


              <span>About Us</span>

            </li>
          </AniLink>
          <AniLink fade to="/financial-Planning" className="topNav__menuList--ul--li--a">
            <li className="topNav__menuList--ul--li">
              <div className="topNav__menuList--ul--li--iconWrapper">

                <FontAwesomeIcon className="topNav__menuList--ul--li--iconWrapper--icon" icon={faConciergeBell} />
              </div>

              <span>Services</span>

            </li>
          </AniLink>
          <AniLink fade to="/News" className="topNav__menuList--ul--li--a">
            <li className="topNav__menuList--ul--li">
              <div className="topNav__menuList--ul--li--iconWrapper">

                <FontAwesomeIcon className="topNav__menuList--ul--li--iconWrapper--icon" icon={faNewspaper} />
              </div>

              <span>News</span>

            </li>
          </AniLink>
          <AniLink fade to="/contactPage" className="topNav__menuList--ul--li--a">
            <li className="topNav__menuList--ul--li">
              <div className="topNav__menuList--ul--li--iconWrapper">

                <FontAwesomeIcon className="topNav__menuList--ul--li--iconWrapper--icon" icon={faIdCard} />
              </div>

              <span>Contact</span>

            </li>
          </AniLink>
        </ul>
      </div>
      <div className="topNav__menu  justify-content-between align-items-center">

        <a href="tel:+63 917 421 9688" style={{ width: "100%", color: "black" }}>
          <div className="topNav__menu--callNow dflex justify-content-between align-items-center">
            <div>
              <div className={`topNav__menu--callNow--iconWrapper`}><FontAwesomeIcon icon={faPhoneAlt} /></div>
              {/* <input type="checkbox" id="callNow--checkbox" className="topNav__menu--checkbox" /> */}
            </div>
            <p className={`topNav__menu--callNow--p`}>Call Now</p>
          </div>
        </a>

        <div onPointerDown={pointerClick} className="topNav__menu--menu dflex justify-content-between align-items-center">
          <p className={`topNav__menu--menu--p`}>Menu</p>
          <div>
            <div className={`topNav__menu--menu--iconWrapper`}>{settings.menuList ? "X" : <FontAwesomeIcon icon={faBars} />}</div>

          </div>
        </div>
      </div>

      <div className={`topNav__cover ${settings.cover ? "topNav__cover--show" : "topNav__cover--hide"}`}>
        &nbsp;
          </div>
      <div className={`layout__main ${settings.blur ? "layout__main--blur" : ""}`}>
        <Header />
        <div>



          <main>{children}</main>




          <Footer />
          <div className="footer__copyright">


            © 2020-2021 2E Accounting Solutions. All Rights Reserved. <br />
            Website Design By:  <a href="https://greatweb.dev/" className="footer__copyright--a">Great Web</a>
          </div>



        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
