import React from 'react'
import Img from 'gatsby-image'
// import { useStaticQuery, graphql } from 'gatsby'

const Images = (props) => {

  if (props.picsFixed) {
    return <Img fixed={props.picsFixed} className={props.className} alt={props.alt} />
  } else if (props.picsFluid) {
    return <Img fluid={props.picsFluid} className={props.className} alt={props.alt} />
  }



  // return <Img fixed={props.picsFixed} />
}

export default Images
