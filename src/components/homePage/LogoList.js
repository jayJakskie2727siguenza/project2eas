import React, { Component } from 'react'
import { graphql, StaticQuery } from 'gatsby'


let gettingDataArrayStoredLength = 0

export default class LogoList extends Component {

    state = {
        opacity: 0,
        setInt: "",
        storedLength: 0



    }


    // built-in Functions


    componentDidMount = () => {

        this.startCountingInterval()




    }

    componentWillUnmount = () => {
        clearInterval(this.state.setInt)
    }



    // EventListener Functions

    mouseEnter = () => {
        this.componentWillUnmount()

    }

    mouseOut = () => {
        this.startCountingInterval()
    }


    // getting data in graphql
    gettingData = (nodes) => {

        let arrayStored = []
        let arrayData = []


        nodes.map(data => {
            if (arrayData.length === 4) {
                arrayStored.push(arrayData)
                arrayData = []
                return arrayData.push(data)
            } else {
                return (
                    arrayData.push(data)
                )
            }
        })


        arrayStored.push(arrayData)

        // getting the data stored length in gettingData Functions
        gettingDataArrayStoredLength = arrayStored.length


        return arrayStored


    }


    startCountingInterval = () => {




        // const varComponent = {
        //     divisionLength: this.state.storedLength


        // }

        return this.setState({
            setInt: setInterval(() => {
                if (this.state.opacity === gettingDataArrayStoredLength - 1) {
                    this.setState({

                        opacity: 0
                    })
                } else {
                    this.setState({
                        opacity: this.state.opacity + 1,

                    })
                }


            }, 2000)
        })
    }







    render() {
        return <StaticQuery
            query={

                graphql`
  {
    wpgraph2eas {
      partnership_lists(first: 100) {
        nodes {
          partnershipsImages__acf {
            partnerShipsTitle:title
            alternativeText
            caption
            description
            altitude
            longitude
            featuredImage {
              sourceUrl
            }
          }
        }
      }
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
`

            }
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
                                    this.gettingData(nodes).map((data, index) => {

                                        return (

                                            <div key={index} className={`logolist__wrapper--div1 logolist__wrapper--div ${this.state.opacity === index ? "opacity-show" : "opacity-hide"}`}>

                                                {
                                                    data.map(({
                                                        partnershipsImages__acf: {
                                                            partnerShipsTitle,
                                                            alternativeText,
                                                            caption,
                                                            description,
                                                            altitude,
                                                            longitude,
                                                            featuredImage: {
                                                                sourceUrl
                                                            }
                                                        }
                                                    }, index) => {

                                                        return (
                                                            <div key={index} onPointerEnter={this.mouseEnter} onPointerLeave={this.mouseOut} className="logolist__wrapper--div1--imgWrapper logolist__wrapper--div--imgWrapper">
                                                                <img className="logolist__wrapper--div--imgWrapper--img" src={sourceUrl} title={partnerShipsTitle} alt={alternativeText} caption={caption} description={description} altitude={altitude} longitude={longitude} />
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
