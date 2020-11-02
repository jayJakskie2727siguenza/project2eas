import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'

//images
// div1
// import expensify from '../../images/expensify.png'
// import workflow from '../../images/workflow.png'
// import capsule from '../../images/capsule.png'
// import checkeeper from '../../images/checkeeper.png'

// // div2
// import shopify from '../../images/shopify.png'
// import harvest from '../../images/harvest.png'
// import fathom from '../../images/fathom.png'
// import unleashed from '../../images/unleashed.png'

// // div3
// import freshbooks from '../../images/freshbooks.png'
// import constantcontact from '../../images/constantcontact.png'
// import tradegecko from '../../images/tradegecko.png'
// import chaser from '../../images/chaser.png'

// // div4

// import dear from '../../images/dear.png'
// import hubdoc from '../../images/Hubdoc.png'
// import vend from '../../images/vend.png'





export default class Logolist extends Component {
    state = {
        opacity: 0
    }



    componentDidMount = () => {
        this.setInt = setInterval(() => {
            if (this.state.opacity === 3) {
                this.setState({ opacity: 0 })
            } else {
                this.setState({ opacity: this.state.opacity + 1 })
            }
        }, 2000)
    }

    generatingArray = (arrayParams) => {

        let arrayData = []
        let arrayStored = []


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
        clearInterval(this.setInt)
    }

    mouseEnter = () => {
        this.componentWillUnmount()
    }
    mouseOut = () => {
        this.componentDidMount()
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
                            <div onPointerEnter={this.mouseEnter} onPointerLeave={this.mouseOut} className="logolist__wrapperSlider mb-4 container ">
                                {
                                    this.generatingArray(nodes).map((data, index) => {

                                        return (

                                            <div key={index} className={`logolist__wrapper--div1 logolist__wrapper--div ${this.state.opacity === index ? "opacity-show" : "opacity-hide"}`}>

                                                {
                                                    data.map((data, index) => {

                                                        return (
                                                            <div key={index} className="logolist__wrapper--div1--imgWrapper logolist__wrapper--div--imgWrapper">
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
