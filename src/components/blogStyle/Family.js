import React from 'react'
import fImg1 from '../../images/Blog-pic-03-2.jpg'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const Family = () => {
    return (
        <div
            className="mainSection__col2--blog dflex justify-content-between px-1 mb-4"
        >
            <article className="mainSection__col2--blog--article">
                <div className="mainSection__col2--blog--wrapper">
                    <div className="mainSection__col2--blog--imgWrapper mb-1">
                        <img
                            className="mainSection__col2--blog--imgWrapper--img"
                            src={fImg1}
                            alt="Blog2"
                        />
                    </div>
                </div>
                <h3 className="contentTitle--subtitle mb-1 text-center">
                    Family Helping Family in The Wake of Hurricanes Harvey and
                    Irma
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
                <button className="btn-warning">
                    READ MORE
                </button>
            </div>
        </div>
    )
}

export default Family
