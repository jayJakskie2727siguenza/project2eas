import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'



// import img1 from '../../images/about-image-2.png'
// import img2 from '../../images/Quality-2.png'
// import img3 from '../../images/Relation-2.png'
// import img4 from '../../images/Abilities-2.png'
// import img5 from '../../images/about-image2.jpg'
// import img6 from '../../images/about-image3.png'

const getData = graphql` {
    wpgraph2eas {
      pageBy(uri: "about") {
        aboutus_pagesection_acf {
          reasonSection {
            contentTitle
            contentSubTitle1
            contentSubTitle2
            contentSubTitle3
            contentDescription1
            contentDescription2
            contentDescription3
             contentIcon1 {
                icon1:sourceUrl
            }
            contentIcon2 {
                icon2:sourceUrl
            }
            contentIcon3 {
                icon3:sourceUrl
            }
            contentImage {
                sourceUrl
            }
          }
        }
      }
    }
  }`

const Features1 = () => {

    const {

        wpgraph2eas: {
            pageBy: {
                aboutus_pagesection_acf: {
                    reasonSection: {
                        contentTitle,
                        contentSubTitle1,
                        contentSubTitle2,
                        contentSubTitle3,
                        contentDescription1,
                        contentDescription2,
                        contentDescription3,
                        contentIcon1: {
                            icon1
                        },
                        contentIcon2: {
                            icon2
                        },
                        contentIcon3: {
                            icon3
                        },
                        contentImage: {
                            sourceUrl
                        }
                    }
                }
            }
        }

    } = useStaticQuery(getData)


    const grammarFormat = (str) => {

        return str.match(/\S{1,}/ig).reduce((a, v) => {

            return a += ` ${v.match(/\S/ig).reduce((a, v) => {

                return a += `${v.match(/\S/ig).reduce((a, v) => {

                    if (v === "/" || v === "," || v === ".") {
                        return a += `${v} `
                    } else if (v === "-" || v === "&") {
                        return a += ` ${v} `
                    } else {
                        return a += `${v}`
                    }

                }, "")}`

            }, "")}`

        }, "")


    }


    return (



        <section className="reasons container mt-4 mb-8">
            <div className="reasons__col1 px-1 py-4">
                <h2 className="contentTitle--title">
                    {contentTitle ? contentTitle : (<span>Some Reasons to Work Together(default)</span>)}
                    {/* Some Reasons to Work Together */}
                </h2>
                <div
                    className="reasons__col1--1 mt-4 "
                >
                    <div className="reasons__col1--1--imgWrapper">
                        <img
                            src={icon1}
                            alt="Quality-2"
                            className="reasons__col1--1--img px-1"
                        />
                    </div>

                    <div className="pl-2">
                        <h3 className="contentTitle--subtitle">
                            {contentSubTitle1 ? contentSubTitle1 : (<span>We Believe in Best Quality(default)</span>)}
                            {/* We Believe in Best Quality */}
                        </h3>
                        <p dangerouslySetInnerHTML={{ __html: contentDescription1 }}>

                            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua ut enim ad minim veniam. */}
                        </p>
                    </div>
                </div>
                <div
                    className="reasons__col1--2 mt-4 "
                >
                    <div className="reasons__col1--2--imgWrapper">
                        <img
                            src={icon2}
                            alt="Relation-2"
                            className="reasons__col1--2--img px-1"
                        />
                    </div>
                    <div className="pl-1">
                        <h3 className="contentTitle--subtitle">
                            {contentSubTitle2 ? contentSubTitle2 : (<span>We Believe in Good Relation(default)</span>)}
                            {/* We Believe in Good Relation */}
                        </h3>
                        <div >
                            <p dangerouslySetInnerHTML={{ __html: grammarFormat(contentDescription2) }}>

                                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                                do eiusmod tempor incididunt. */}
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="reasons__col1--3 mt-4 "
                >
                    <div className="reasons__col1--3--imgWrapper">
                        <img
                            src={icon3}
                            alt="Abilities-2"
                            className="reasons__col1--3--img px-1"
                        />
                    </div>
                    <div className="pl-1">
                        <h3 className="contentTitle--subtitle">
                            {contentSubTitle3 ? contentSubTitle3 : (<span>We Believe in Abilities(default)</span>)}
                            {/* We Believe in Abilities */}
                        </h3>
                        <p dangerouslySetInnerHTML={{ __html: grammarFormat(contentDescription3) }}>

                            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                                do eiusmod tempor incididunt. */}
                        </p>
                    </div>
                </div>
            </div>
            <div className="reasons__col2">
                <img
                    className="reasons__col2--img"
                    src={sourceUrl}
                    alt="about-2"
                />

            </div>
        </section>

    )
}

export default Features1
