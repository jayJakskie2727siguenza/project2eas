import React from 'react'
import Moment from 'react-moment'



const date = ({ children }) => {
    return (
        <span>
            <Moment format="DD MMMM YYYY" withTitle > {children}</Moment>
        </span>
    )
}

export default date
