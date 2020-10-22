import React, { Component } from 'react'

export class financialPlanning2 extends Component {
    state = {
        accordion1: {
            show: true,
            hide: false
        },
        accordion2: {
            show: false,
            hide: true
        },
        accordion3: {
            show: false,
            hide: true
        },
        accordion4: {
            show: false,
            hide: true
        },
        accordion5: {
            show: false,
            hide: true
        }
    }

    accordion1 = () => {
        this.setState({
            accordion1: {
                show: true,
                hide: false
            },
            accordion2: {
                show: false,
                hide: true
            },
            accordion3: {
                show: false,
                hide: true
            },
            accordion4: {
                show: false,
                hide: true
            },
            accordion5: {
                show: false,
                hide: true
            }

        })
    }
    accordion2 = () => {
        this.setState({
            accordion1: {
                show: false,
                hide: true
            },
            accordion2: {
                show: true,
                hide: false
            },
            accordion3: {
                show: false,
                hide: true
            },
            accordion4: {
                show: false,
                hide: true
            },
            accordion5: {
                show: false,
                hide: true
            }
        })
    }
    accordion3 = () => {
        this.setState({
            accordion1: {
                show: false,
                hide: true
            },
            accordion2: {
                show: false,
                hide: true
            },
            accordion3: {
                show: true,
                hide: false
            },
            accordion4: {
                show: false,
                hide: true
            },
            accordion5: {
                show: false,
                hide: true
            }
        })
    }
    accordion4 = () => {
        this.setState({
            accordion1: {
                show: false,
                hide: true
            },
            accordion2: {
                show: false,
                hide: true
            },
            accordion3: {
                show: false,
                hide: true
            },
            accordion4: {
                show: true,
                hide: false
            },
            accordion5: {
                show: false,
                hide: true
            }
        })
    }
    accordion5 = () => {
        this.setState({
            accordion1: {
                show: false,
                hide: true
            },
            accordion2: {
                show: false,
                hide: true
            },
            accordion3: {
                show: false,
                hide: true
            },
            accordion4: {
                show: false,
                hide: true
            },
            accordion5: {
                show: true,
                hide: false
            }
        })
    }



    render() {
        return (
            <div className="financialPlanning2 mb-3 pt-4">

                <div className="financialPlanning2__Accordion1 mb-2 " onPointerDown={this.accordion1}>
                    <div className="financialPlanning2__Accordion1--wrapper pb-1 dflex">
                        <div className="financialPlanning2__wrapper--i">
                            <div className={this.state.accordion1.show ? "financialPlanning2__wrapper--i--minus show" : "financialPlanning2__wrapper--i--minus hide"}>
                                &nbsp;
                            </div>
                            <div className={this.state.accordion1.hide ? "financialPlanning2__wrapper--i--plus show" : "financialPlanning2__wrapper--i--plus hide"}>
                                <div className="financialPlanning2__wrapper--i--plus--1">
                                    &nbsp;
                                 </div>
                                <div className="financialPlanning2__wrapper--i--plus--2">
                                    &nbsp;
                                </div>
                            </div>
                        </div>
                        <h4 className="financialPlanning2__Accordion1--wrapper--h4 pl-2">
                            Financial Planning Information
                        </h4>
                    </div>
                    <div className={this.state.accordion1.show ? "financialPlanning2__wrapper1 show1" : "financialPlanning2__wrapper1 hide1"}>
                        <p className="financialPlanning2__Accordion1--p pl-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum.
                        </p>
                    </div>
                </div>

                <div className="financialPlanning2__Accordion2 mb-2" onPointerDown={this.accordion2} >
                    <div className="financialPlanning2__Accordion2--wrapper pb-1 dflex">
                        <div className="financialPlanning2__wrapper--i">
                            <div className={this.state.accordion2.show ? "financialPlanning2__wrapper--i--minus show" : "financialPlanning2__wrapper--i--minus hide"}>
                                &nbsp;
                  </div>
                            <div className={this.state.accordion2.hide ? "financialPlanning2__wrapper--i--plus show" : "financialPlanning2__wrapper--i--plus hide"}>
                                <div className="financialPlanning2__wrapper--i--plus--1">
                                    &nbsp;
                    </div>
                                <div className="financialPlanning2__wrapper--i--plus--2">
                                    &nbsp;
                    </div>
                            </div>
                        </div>
                        <h4 className="financialPlanning2__Accordion2--wrapper--h4 pl-2">
                            Company Growth
                </h4>
                    </div>
                    <div className={this.state.accordion2.show ? "financialPlanning2__wrapper1 show1" : "financialPlanning2__wrapper1 hide1"}>
                        <p className="financialPlanning2__Accordion2--p pl-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum.
                </p>
                    </div>
                </div>

                <div className="financialPlanning2__Accordion3 mb-2" onPointerDown={this.accordion3}>
                    <div className="financialPlanning2__Accordion3--wrapper pb-1 dflex">
                        <div className="financialPlanning2__wrapper--i">
                            <div className={this.state.accordion3.show ? "financialPlanning2__wrapper--i--minus show" : "financialPlanning2__wrapper--i--minus hide"}>
                                &nbsp;
                  </div>
                            <div className={this.state.accordion3.hide ? "financialPlanning2__wrapper--i--plus show" : "financialPlanning2__wrapper--i--plus hide"}>
                                <div className="financialPlanning2__wrapper--i--plus--1">
                                    &nbsp;
                    </div>
                                <div className="financialPlanning2__wrapper--i--plus--2">
                                    &nbsp;
                    </div>
                            </div>
                        </div>
                        <h4 className="financialPlanning2__Accordion3--wrapper--h4 pl-2">
                            Our Workflow & Process
                </h4>
                    </div>
                    <div className={this.state.accordion3.show ? "financialPlanning2__wrapper1 show1" : "financialPlanning2__wrapper1 hide1"}>
                        <p className="financialPlanning2__Accordion3--p pl-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum.
                </p>
                    </div>
                </div>

                <div className="financialPlanning2__Accordion4 mb-2" onPointerDown={this.accordion4}>
                    <div className="financialPlanning2__Accordion4--wrapper pb-1 dflex">
                        <div className="financialPlanning2__wrapper--i">
                            <div className={this.state.accordion4.show ? "financialPlanning2__wrapper--i--minus show" : "financialPlanning2__wrapper--i--minus hide"}>
                                &nbsp;
                  </div>
                            <div className={this.state.accordion4.hide ? "financialPlanning2__wrapper--i--plus show" : "financialPlanning2__wrapper--i--plus hide"}>
                                <div className="financialPlanning2__wrapper--i--plus--1">
                                    &nbsp;
                    </div>
                                <div className="financialPlanning2__wrapper--i--plus--2">
                                    &nbsp;
                    </div>
                            </div>
                        </div>
                        <h4 className="financialPlanning2__Accordion4--wrapper--h4 pl-2">
                            Research Analysis
                </h4>
                    </div>
                    <div className={this.state.accordion4.show ? "financialPlanning2__wrapper1 show1" : "financialPlanning2__wrapper1 hide1"}>
                        <p className="financialPlanning2__Accordion4--p pl-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum.
                </p>
                    </div>
                </div>

                <div className="financialPlanning2__Accordion5 mb-2" onPointerDown={this.accordion5}>
                    <div className="financialPlanning2__Accordion5--wrapper pb-1 dflex">
                        <div className="financialPlanning2__wrapper--i">
                            <div className={this.state.accordion5.show ? "financialPlanning2__wrapper--i--minus show" : "financialPlanning2__wrapper--i--minus hide"}>
                                &nbsp;
                  </div>
                            <div className={this.state.accordion5.hide ? "financialPlanning2__wrapper--i--plus show" : "financialPlanning2__wrapper--i--plus hide"}>
                                <div className="financialPlanning2__wrapper--i--plus--1">
                                    &nbsp;
                    </div>
                                <div className="financialPlanning2__wrapper--i--plus--2">
                                    &nbsp;
                    </div>
                            </div>
                        </div>
                        <h4 className="financialPlanning2__Accordion5--wrapper--h4 pl-2">
                            Find A Plan That`s Right For You
                </h4>
                    </div>
                    <div className={this.state.accordion5.show ? "financialPlanning2__wrapper1 show1" : "financialPlanning2__wrapper1 hide1"}>
                        <p className="financialPlanning2__Accordion5--p pl-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum.
                </p>
                    </div>
                </div>

            </div>
        )
    }
}

export default financialPlanning2
