import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from '../image'

// import pImg1 from '../../images/case-study-img-three.jpg'
// import pImg2 from '../../images/case-study-img-two.jpg'
// import pImg3 from '../../images/case-study-img-one.jpg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChevronRight } from '@fortawesome/free-solid-svg-icons'




const Blog = () => {


  const { wpgraph2eas: {
    pageBy: {
      home_pagesection_acf: {
        sections: {
          blog: {
            title,
            subtitle
          }
        }
      }
    }
  },
    caseStudyThree: {
      childImageSharp: {
        caseStudyThreeFluid
      }
    },
    caseStudyTwo: {
      childImageSharp: {
        caseStudyTwoFluid
      }
    },
    caseStudyOne: {
      childImageSharp: {
        caseStudyOneFluid
      }
    } } = useStaticQuery(graphql`
  { wpgraph2eas {
    pageBy(uri: "home") {
      home_pagesection_acf {
        sections {
          blog {
            title
            subtitle
          }
        }
      }
    }
  },
  caseStudyThree:file(relativePath:{eq:"case-study-img-three.jpg"}){
    childImageSharp{
      caseStudyThreeFluid:fluid(maxWidth:360, jpegQuality:100){
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  },
  caseStudyTwo:file(relativePath:{eq:"case-study-img-two.jpg"}){
    childImageSharp{
    caseStudyTwoFluid:  fluid(maxWidth:360, jpegQuality:100){
         ...GatsbyImageSharpFluid_noBase64
      }
    }
  },
  caseStudyOne:file(relativePath:{eq:"case-study-img-one.jpg"}){
    childImageSharp{
     caseStudyOneFluid: fluid(maxWidth:360, jpegQuality:100){
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
}
  `)


  return (
    <section className={`blog`}>
      <div className="section__title">
        <h2 className="section__title--heading">
          {title ? title : (<span>Explore Our Work(default)</span>)}
          {/* Explore Our Work */}
        </h2>
        <p className="section__title--subheading">
          {subtitle ? subtitle : (<span>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore et dolore. On the other hand we denounce
          with righteous indignation and dislike men.(default)</span>)}
          {/* Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore et dolore. On the other hand we denounce
          with righteous indignation and dislike men. */}
        </p>
      </div>
      <div className="blog__list container">
        <div className="blog__list--item">
          <div className="blog__list--item--contentWrapper">
            <h3 className="blog__list--item--title px-3 pt-3 pb-1">
              INVENTORY MANAGEMENT
            </h3>
            <p className="blog__list--item--description px-3 pb-3">
              Business Consultancy Corporate
            </p>
          </div>
          <div className="blog__list--item--imgWrapper">
            {/* <img
              className="w-100"
              src={pImg1}
              alt="case Study"
            /> */}
            <Image picsFluid={caseStudyThreeFluid} alt="case Study" />
          </div>

        </div>
        <div className="blog__list--item">
          <div className="blog__list--item--contentWrapper">
            <h3 className="blog__list--item--title px-3 pt-3 pb-1">
              INVENTORY MANAGEMENT
          </h3>
            <p className="blog__list--item--description px-3 pb-3">
              Customer Satisfaction Value
          </p>
          </div>
          <div className="blog__list--item--imgWrapper">
            {/* <img
              className="w-100"
              src={pImg2}
              alt="Customer Satisfaction"
            /> */}

            <Image picsFluid={caseStudyTwoFluid} alt="Customer Satisfaction" />

          </div>


        </div>
        <div className="blog__list--item">
          <div className="blog__list--item--contentWrapper">
            <h3 className="blog__list--item--title px-3 pt-3 pb-1">
              INVENTORY MANAGEMENT
          </h3>
            <p className="blog__list--item--description px-3 pb-3">
              Inventory Management
          </p>
          </div>
          <div className="blog__list--item--imgWrapper">
            {/* <img
              className="w-100"
              src={pImg3}
              alt="Bandora"
            /> */}
            <Image picsFluid={caseStudyOneFluid} alt="Bandora" />

          </div>

        </div>

        <div className="blog__list--item">
          <div className="blog__list--item--contentWrapper">
            <h3 className="blog__list--item--title px-3 pt-3 pb-1">
              INVENTORY MANAGEMENT
            </h3>
            <p className="blog__list--item--description px-3 pb-3">
              Business Consultancy Corporate
            </p>
          </div>
          <div className="blog__list--item--imgWrapper">
            {/* <img
              className="w-100"
              src={pImg1}
              alt="case Study"
            /> */}
            <Image picsFluid={caseStudyThreeFluid} alt="case Study" />
          </div>

        </div>
        <div className="blog__list--item">
          <div className="blog__list--item--contentWrapper">
            <h3 className="blog__list--item--title px-3 pt-3 pb-1">
              INVENTORY MANAGEMENT
          </h3>
            <p className="blog__list--item--description px-3 pb-3">
              Customer Satisfaction Value
          </p>
          </div>
          <div className="blog__list--item--imgWrapper">
            {/* <img
              className="w-100"
              src={pImg2}
              alt="Customer Satisfaction"
            /> */}

            <Image picsFluid={caseStudyTwoFluid} alt="Customer Satisfaction" />

          </div>


        </div>
        <div className="blog__list--item">
          <div className="blog__list--item--contentWrapper">
            <h3 className="blog__list--item--title px-3 pt-3 pb-1">
              INVENTORY MANAGEMENT
          </h3>
            <p className="blog__list--item--description px-3 pb-3">
              Inventory Management
          </p>
          </div>
          <div className="blog__list--item--imgWrapper">
            {/* <img
              className="w-100"
              src={pImg3}
              alt="Bandora"
            /> */}
            <Image picsFluid={caseStudyOneFluid} alt="Bandora" />

          </div>

        </div>
      </div>
    </section>
  )
}

export default Blog
