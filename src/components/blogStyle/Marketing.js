import React from 'react'
import { Link } from 'gatsby'

import mImg1 from '../../images/Blog-pic-01-2.jpg'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'





const Marketing = () => {




    return (
        <div
            className="mainSection__col2--blog dflex justify-content-between px-1 mb-4"
        >
            <article className="mainSection__col2--blog--article">
                <div className="mainSection__col2--blog--wrapper">
                    <div className="mainSection__col2--blog--imgWrapper mb-1">
                        <img
                            className="mainSection__col2--blog--imgWrapper--img"
                            src={mImg1}
                            alt="Blog2"
                        />
                    </div>
                </div>
                <h3 className="contentTitle--subtitle mb-1 text-center">
                    Participate in staff meetings manage dedicated to marketing
                </h3>
                <div className="mainSection__col2--blog--postWrapper mb-1 text-center">
                    <span className="mainSection__col2--blog--postWrapper--1">
                        <i className="mainSection__col2--blog--postWrapper--1--i">
                            <FontAwesomeIcon icon={faUser} />
                        </i>

                        <a
                            className="mainSection__col2--blog--postWrapper--1--a"
                            href="/"
                        >John Doe</a
                        >
                    </span>
                    <span className="mainSection__col2--blog--postWrapper--2">
                        <i className="mainSection__col2--blog--postWrapper--2--i">
                            <FontAwesomeIcon icon={faCalendarAlt} />
                        </i>
                    November 25, 2017
                  </span>
                </div>
                <div className="mainSection__col2--blog--content text-center">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry......
                </div>
            </article>
            <div>
                <button className="btn-warning">
                    <Link to="/SingleBlogPage">READ MORE</Link>

                </button>
            </div>
        </div>
    )
}

export default Marketing
