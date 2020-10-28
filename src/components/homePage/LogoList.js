import React, { Component } from 'react'

//images
// div1
import expensify from '../../images/expensify.png'
import workflow from '../../images/workflow.png'
import capsule from '../../images/capsule.png'
import checkeeper from '../../images/checkeeper.png'

// div2
import shopify from '../../images/shopify.png'
import harvest from '../../images/harvest.png'
import fathom from '../../images/fathom.png'
import unleashed from '../../images/unleashed.png'

// div3
import freshbooks from '../../images/freshbooks.png'
import constantcontact from '../../images/constantcontact.png'
import tradegecko from '../../images/tradegecko.png'
import chaser from '../../images/chaser.png'

// div4

import dear from '../../images/dear.png'
import hubdoc from '../../images/Hubdoc.png'
import vend from '../../images/vend.png'


let setInt = ""
export default class Logolist1 extends Component {
    state = {
        opacity: 1
    }



    componentDidMount = () => {
        setInt = setInterval(() => {
            if (this.state.opacity === 4) {
                this.setState({ opacity: 1 })
            } else {
                this.setState({ opacity: this.state.opacity + 1 })
            }
        }, 2000)
    }

    mouseEnter = () => {
        clearInterval(setInt)
    }
    mouseOut = () => {
        this.componentDidMount()
    }

    render() {
        return (
            <section className="logolist__wrapper container  my-2">



                <h2 className="logolist__wrapper--h2 text-center  mb-2">OTHER XERO ADD-ON WE RECOMMEND FOR YOUR BUSINESS</h2>

                <div onPointerEnter={this.mouseEnter} onPointerLeave={this.mouseOut} className="logolist__wrapperSlider mb-4 container ">
                    <div className={`logolist__wrapper--div1 logolist__wrapper--div ${this.state.opacity === 1 ? "opacity-show" : "opacity-hide"}`}>
                        <div className="logolist__wrapper--div1--imgWrapper logolist__wrapper--div--imgWrapper">
                            <img className="logolist__wrapper--div--imgWrapper--img" src={expensify} alt="expensify" />
                        </div>

                        <div className="logolist__wrapper--div1--imgWrapper logolist__wrapper--div--imgWrapper">
                            <img className="logolist__wrapper--div--imgWrapper--img" src={workflow} alt="workflow" />
                        </div>

                        <div className="logolist__wrapper--div1--imgWrapper logolist__wrapper--div--imgWrapper">
                            <img className="logolist__wrapper--div--imgWrapper--img" src={capsule} alt="capsule" />
                        </div>

                        <div className="logolist__wrapper--div1--imgWrapper logolist__wrapper--div--imgWrapper">
                            <img className="logolist__wrapper--div--imgWrapper--img" src={checkeeper} alt="checkeeper" />
                        </div>

                    </div>

                    <div className={`logolist__wrapper--div2 logolist__wrapper--div ${this.state.opacity === 2 ? "opacity-show" : "opacity-hide"}`}>
                        <div className="logolist__wrapper--div2--imgWrapper logolist__wrapper--div--imgWrapper">
                            <img className="logolist__wrapper--div--imgWrapper--img" src={shopify} alt="expensify" />
                        </div>

                        <div className="logolist__wrapper--div2--imgWrapper logolist__wrapper--div--imgWrapper">
                            <img className="logolist__wrapper--div--imgWrapper--img" src={harvest} alt="workflow" />
                        </div>

                        <div className="logolist__wrapper--div2--imgWrapper logolist__wrapper--div--imgWrapper">
                            <img className="logolist__wrapper--div--imgWrapper--img" src={fathom} alt="capsule" />
                        </div>

                        <div className="logolist__wrapper--div2--imgWrapper logolist__wrapper--div--imgWrapper">
                            <img className="logolist__wrapper--div--imgWrapper--img" src={unleashed} alt="checkeeper" />
                        </div>
                    </div>

                    <div className={`logolist__wrapper--div3 logolist__wrapper--div ${this.state.opacity === 3 ? "opacity-show" : "opacity-hide"}`}>
                        <div className="logolist__wrapper--div3--imgWrapper logolist__wrapper--div--imgWrapper">
                            <img className="logolist__wrapper--div--imgWrapper--img" src={freshbooks} alt="expensify" />
                        </div>

                        <div className="logolist__wrapper--div3--imgWrapper logolist__wrapper--div--imgWrapper">
                            <img className="logolist__wrapper--div--imgWrapper--img" src={constantcontact} alt="workflow" />
                        </div>

                        <div className="logolist__wrapper--div3--imgWrapper logolist__wrapper--div--imgWrapper">
                            <img className="logolist__wrapper--div--imgWrapper--img" src={tradegecko} alt="capsule" />
                        </div>

                        <div className="logolist__wrapper--div3--imgWrapper logolist__wrapper--div--imgWrapper">
                            <img className="logolist__wrapper--div--imgWrapper--img" src={chaser} alt="checkeeper" />
                        </div>

                    </div>

                    <div className={`logolist__wrapper--div4 logolist__wrapper--div ${this.state.opacity === 4 ? "opacity-show" : "opacity-hide"}`}>
                        <div className="logolist__wrapper--div4--imgWrapper--1 logolist__wrapper--div--imgWrapper">
                            <img className="logolist__wrapper--div--imgWrapper--img" src={dear} alt="dear" />
                        </div>

                        <div className="logolist__wrapper--div4--imgWrapper--2 logolist__wrapper--div--imgWrapper">
                            <img className="logolist__wrapper--div--imgWrapper--img logolist__wrapper--div4--imgWrapper--2--img" src={hubdoc} alt="hubdoc" />
                        </div>

                        <div className="logolist__wrapper--div4--imgWrapper--3 logolist__wrapper--div--imgWrapper">
                            <img className="logolist__wrapper--div--imgWrapper--img" src={vend} alt="vend" />
                        </div>



                    </div>
                </div>


            </section>
        )
    }
}
