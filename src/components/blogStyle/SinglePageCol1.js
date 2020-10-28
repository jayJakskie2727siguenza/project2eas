import React from 'react'
// import Img from '../image'
import simg1 from '../../images/Blog-pic-01-2.jpg'

import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const SinglePageCol1 = () => {
    return (
        <div className="singlePage__col1 pl-1 pr-2 pt-5 mt-1 mb-5">
            <h2 className="singlePage__col1--h2">Participate in staff meetings manage dedicated to marketing</h2>
            <div className="singlePage__col1--user">
                <p className="singlePage__col1--user--date">November 25, 2017</p>
                <div className="singlePage__col1--user--wrapperInfo">
                    <span className="singlePage__col1--user--wrapperInfo--name mr-2"><i ><FontAwesomeIcon icon={faUser} /></i> John Doe</span>
                    <span className="singlePage__col1--user--wrapperInfo--occupation"><i ><FontAwesomeIcon icon={faCalendarAlt} /></i> Staff Meetings</span>
                </div>
            </div>
            <div className="singlePage__col1--userBlog">
                <div className="singlePage__col1--userBlog--imgWrapper">
                    <img src={simg1} className="singlePage__col1--userBlog--imgWrapper--img" alt="staff meeting" />
                </div>
                <div className="singlePage__col1--userBlog--blog">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default SinglePageCol1
