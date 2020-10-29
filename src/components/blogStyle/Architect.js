import React from 'react'
import aImg1 from '../../images/Blog-pic-02-2.jpg'
import { Link } from 'gatsby'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const Architect = ({ title }) => {
    return (
        <div
            className="mainSection__col2--blog dflex justify-content-between px-1 mb-4"
        >
            <article className="mainSection__col2--blog--article">
                <div className="mainSection__col2--blog--wrapper">
                    <div className="mainSection__col2--blog--imgWrapper mb-1">
                        <img
                            className="mainSection__col2--blog--imgWrapper--img"
                            src={aImg1}
                            alt="Blog2"
                        />
                    </div>
                </div>
                <h3 className="contentTitle--subtitle mb-1 text-center">
                    {title}
                </h3>
                <div className="mainSection__col2--blog--postWrapper mb-1 text-center">
                    <span className="mainSection__col2--blog--postWrapper--1">
                        <i className="mainSection__col2--blog--postWrapper--1--i">
                            <FontAwesomeIcon icon={faUser} />
                        </i>
                        <a
                            className="mainSection__col2--blog--postWrapper--1--a"
                            href="/"
                        >John Doe
                        </a>
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
                <Link to="/SingleBlogPage" className="mainSection__col2--blog--content--a">
                    <button className="btn-warning">READ MORE</button>
                </Link>
            </div>
        </div>
    )
}

export default Architect
