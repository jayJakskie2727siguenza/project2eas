import React from 'react'
import pImg1 from '../../images/Blog-pic-01-2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'



const SinglePageCol2 = () => {
    return (
        <div className="singlePage__col2 pt-5 mt-1 px-1">
            <div className="singlePage__col2--search">
                <h2 className="singlePage__col2--search--h2 mb-2">SEARCH</h2>
                <div className="singlePage__col2--search--input dflex">
                    <input className="singlePage__col2--search--input--text" type="text" placeholder="Search ..." />
                    <button className="singlePage__col2--search--input--button">
                        <i className="singlePage__col2--search--input--button--i far fa-search">
                            <FontAwesomeIcon icon={faSearch} />
                        </i>
                    </button>
                </div>

            </div>
            <div className="singlePage__col2--recentPost mt-3">
                <h2 className="singlePage__col2--recentPost--h2">RECENT POST</h2>
                <ul className="singlePage__col2--recentPost--ul">
                    <li className="singlePage__col2--recentPost--ul--li">
                        <div className="singlePage__col2--recentPost--ul--li--user dflex">
                            <div className="singlePage__col2--recentPost--ul--li--user--1--imgwrapper">
                                <img src={pImg1} className="singlePage__col2--recentPost--ul--li--user--1--img" alt="staff meeting" />
                            </div>
                            <div className="singlePage__col2--recentPost--ul--li--user--2">
                                <p className="singlePage__col2--recentPost--ul--li--user--2--p">Participate in staff meetings manage dedicated to marketing</p>
                            </div>
                        </div>
                        <div className="singlePage__col2--recentPost--ul--li--date">
                            <span className="singlePage__col2--recentPost--ul--li--date--date">25 November, 2017</span>
                        </div>
                    </li>
                    <li className="singlePage__col2--recentPost--ul--li">
                        <div className="singlePage__col2--recentPost--ul--li--user dflex">
                            <div className="singlePage__col2--recentPost--ul--li--user--1--imgwrapper">
                                <img src={pImg1} className="singlePage__col2--recentPost--ul--li--user--1--img" alt="staff meeting" />
                            </div>
                            <div className="singlePage__col2--recentPost--ul--li--user--2">
                                <p className="singlePage__col2--recentPost--ul--li--user--2--p">Participate in staff meetings manage dedicated to marketing</p>
                            </div>
                        </div>
                        <div className="singlePage__col2--recentPost--ul--li--date">
                            <span className="singlePage__col2--recentPost--ul--li--date--date">25 November, 2017</span>
                        </div>
                    </li>
                    <li className="singlePage__col2--recentPost--ul--li">
                        <div className="singlePage__col2--recentPost--ul--li--user dflex">
                            <div className="singlePage__col2--recentPost--ul--li--user--1--imgwrapper">
                                <img src={pImg1} className="singlePage__col2--recentPost--ul--li--user--1--img" alt="staff meeting" />
                            </div>
                            <div className="singlePage__col2--recentPost--ul--li--user--2">
                                <p className="singlePage__col2--recentPost--ul--li--user--2--p">Participate in staff meetings manage dedicated to marketing</p>
                            </div>
                        </div>
                        <div className="singlePage__col2--recentPost--ul--li--date">
                            <span className="singlePage__col2--recentPost--ul--li--date--date">25 November, 2017</span>
                        </div>
                    </li>
                    <li className="singlePage__col2--recentPost--ul--li">
                        <div className="singlePage__col2--recentPost--ul--li--user dflex">
                            <div className="singlePage__col2--recentPost--ul--li--user--1--imgwrapper">
                                <img src={pImg1} className="singlePage__col2--recentPost--ul--li--user--1--img" alt="staff meeting" />
                            </div>
                            <div className="singlePage__col2--recentPost--ul--li--user--2">
                                <p className="singlePage__col2--recentPost--ul--li--user--2--p">Participate in staff meetings manage dedicated to marketing</p>
                            </div>
                        </div>
                        <div className="singlePage__col2--recentPost--ul--li--date">
                            <span className="singlePage__col2--recentPost--ul--li--date--date">25 November, 2017</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SinglePageCol2
