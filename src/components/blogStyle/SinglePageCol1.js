import React from 'react'
import Moment from 'react-moment'

// import Img from '../image'
// import simg1 from '../../images/Blog-pic-01-2.jpg'

import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const SinglePageCol1 = (props) => {



    return (
        <div className="singlePage__col1 pl-1 pr-2 pt-5 mt-1 mb-5">
            <h2 className="singlePage__col1--h2" dangerouslySetInnerHTML={{ __html: props.title }} />
            <div className="singlePage__col1--user">
                <p className="singlePage__col1--user--date"><Moment format="D MMM YYYY" withTitle>{props.date}</Moment></p>
                <div className="singlePage__col1--user--wrapperInfo">
                    <span className="singlePage__col1--user--wrapperInfo--name mr-2"><i ><FontAwesomeIcon icon={faUser} /></i> John Doe</span>
                    <span className="singlePage__col1--user--wrapperInfo--occupation"><i ><FontAwesomeIcon icon={faCalendarAlt} /></i> Staff Meetings</span>
                </div>
            </div>
            <div className="singlePage__col1--userBlog">
                <div className="singlePage__col1--userBlog--imgWrapper">
                    <img src={props.imgs} className="singlePage__col1--userBlog--imgWrapper--img" alt={props.alt} />
                </div>
                <div className="singlePage__col1--userBlog--blog" dangerouslySetInnerHTML={{ __html: props.content }} />

            </div>


        </div >
    )
}

export default SinglePageCol1
