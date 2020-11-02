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


    return (
        <section className="reason container mt-4">
            {/* <div className="solutions dflex justify-content-center align-items-center mb-8 mt-1">
                <div className="solutions__img pr-1">
                    <img
                        className="solutions__img--img"
                        src={img1}
                        alt="about-2"
                    />

                </div>
                <div className="solutions__brand px-3 py-3">
                    <div className="solutions__brand--title">
                        <h2 className="contentTitle--title">
                            Meet Our Brand New Solution
                  </h2>
                    </div>
                    <div className="solutions__brand--subtitle">
                        <p className="solutions__brand--subtitle--p py-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                    </div>
                    <div className="solutions__brand--button">
                        <button className="solutions__brand--button--btn btn">
                            READ MORE
                  </button>
                    </div>
                </div>
            </div> */}
            <div className="reasons mt-1 mb-8">
                <div className="reasons__col1 px-1 py-4">
                    <h2 className="contentTitle--title">
                        {contentTitle ? contentTitle : (<span>Some Reasons to Work Together(default)</span>)}
                        {/* Some Reasons to Work Together */}
                    </h2>
                    <div
                        className="reasons__col1--1 mt-4 dflex justify-content-center align-items-start"
                    >
                        <img
                            src={icon1}
                            alt="Quality-2"
                            className="reasons__col1--1--img px-1"
                        />

                        <div className="pl-2">
                            <h3 className="contentTitle--subtitle">
                                {contentSubTitle1 ? contentSubTitle1 : (<span>We Believe in Best Quality(default)</span>)}
                                {/* We Believe in Best Quality */}
                            </h3>
                            <p>
                                {contentDescription1 ? contentDescription1 : (<span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua ut enim ad minim veniam.(default)</span>)}
                                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua ut enim ad minim veniam. */}
                            </p>
                        </div>
                    </div>
                    <div
                        className="reasons__col1--2 mt-4 dflex justify-content-center align-items-start"
                    >
                        <img
                            src={icon2}
                            alt="Relation-2"
                            className="reasons__col1--2--img px-1"
                        />
                        <div className="pl-1">
                            <h3 className="contentTitle--subtitle">
                                {contentSubTitle2 ? contentSubTitle2 : (<span>We Believe in Good Relation(default)</span>)}
                                {/* We Believe in Good Relation */}
                            </h3>
                            <p>
                                {contentDescription2 ? contentDescription2 : (<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                                do eiusmod tempor incididunt.(default)</span>)}
                                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                                do eiusmod tempor incididunt. */}
                            </p>
                        </div>
                    </div>
                    <div
                        className="reasons__col1--3 mt-4 dflex justify-content-center align-items-start"
                    >
                        <img
                            src={icon3}
                            alt="Abilities-2"
                            className="reasons__col1--3--img px-1"
                        />
                        <div className="pl-1">
                            <h3 className="contentTitle--subtitle">
                                {contentSubTitle3 ? contentSubTitle3 : (<span>We Believe in Abilities(default)</span>)}
                                {/* We Believe in Abilities */}
                            </h3>
                            <p>
                                {contentDescription3 ? contentDescription3 : (<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                                do eiusmod tempor incididunt.(default)</span>)}
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
            </div>
            {/* <div className="markets mt-1 mb-8">
                <div className="markets__imgdiv">
                    <img
                        className="markets__imgdiv--img"
                        src={img6}
                        alt="about-3"
                    />

                </div>

                <div className="markets__works px-5 py-3">
                    <h2 className="markets__works--h2 contentTitle--title">
                        Collaboratively Administrate Ampowered Markets Works.
                </h2>
                    <p className="markets__works--p--1 mt-3 mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                </p>
                    <h3 className="markets__works--h3 contentTitle--subtitle">
                        Why Choose Us ?
                </h3>
                    <p className="markets__works--p--2 my-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                </p>
                    <button className="markets__works--btn btn">READ MORE</button>
                </div>
            </div> */}
        </section>
    )
}

export default Features1
