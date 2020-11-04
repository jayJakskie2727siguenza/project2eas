import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'




let setInt = ""
let arrayData = []
let arrayStored = []
export default class Logolist extends Component {
    state = {
        opacity: 1,

    }

    timeInterval = () => {
        setInt = setInterval(() => {
            if (this.state.opacity === arrayStored.length) {
                this.setState({ opacity: 1 })
            } else {
                this.setState({ opacity: this.state.opacity + 1 })
            }
        }, 2500)
    }

    componentDidMount = () => {
        this.timeInterval()
    }

    generatingArray = (arrayParams) => {




        arrayParams.map((data) => {

            if (arrayData.length === 4) {
                arrayStored.push(arrayData)
                arrayData = []
                return arrayData.push(data)

            } else {

                return arrayData.push(data)
            }

        })

        arrayStored.push(arrayData)

        return arrayStored

    }

    componentWillUnmount = () => {
        clearInterval(setInt)
    }

    mouseEnter = () => {
        clearInterval(setInt)
    }
    mouseOut = () => {
        this.timeInterval()
    }

    render() {
        return <StaticQuery
            query={
                graphql`
                {
                    wpgraph2eas {

                        partnership_lists(first: 100) {
                            nodes {
                                featuredImage {
                                    sourceUrl
                                    altText
                                    id
                                }
                            }
                        },

                        pageBy(uri: "home") {
                            home_pagesection_acf {
                                sections {
                                    logolist {
                                        title
                                    }
                                }
                            }
                        }
                    }
                }
                `}
            render={
                ({
                    wpgraph2eas: {

                        partnership_lists: {
                            nodes
                        },

                        pageBy: {
                            home_pagesection_acf: {
                                sections: {
                                    logolist: {
                                        title
                                    }
                                }
                            }
                        }
                    }
                }) => {

                    return (
                        <section className="logolist__wrapper container  my-2">



                            <h2 className="logolist__wrapper--h2 text-center  mb-2">
                                {title ? title : (<span>OTHER XERO ADD-ON WE RECOMMEND FOR YOUR BUSINESS(default)</span>)}
                            </h2>
                            <div className="logolist__wrapperSlider mb-4 container ">
                                {
                                    this.generatingArray(nodes).map((data, index) => {

                                        return (

                                            <div key={index} className={`logolist__wrapper--div1 logolist__wrapper--div ${this.state.opacity === index ? "opacity-show" : "opacity-hide"}`}>

                                                {
                                                    data.map((data, index) => {

                                                        return (
                                                            <div key={index} onPointerEnter={this.mouseEnter} onPointerLeave={this.mouseOut} className="logolist__wrapper--div1--imgWrapper logolist__wrapper--div--imgWrapper">
                                                                <img className="logolist__wrapper--div--imgWrapper--img" src={data.featuredImage.sourceUrl} alt={data.featuredImage.altText} />
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </section >
                    )
                }}
        />
    }
}
