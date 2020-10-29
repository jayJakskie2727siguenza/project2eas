import React, { Component } from 'react'

export class financialPlanning2 extends Component {
    state = {

        show: 1


    }

    check = (id) => {
        if (this.state.show !== id) {
            this.setState({ show: id })
        } else {
            this.setState({ show: 1 })
        }

    }

    render() {
        return (
            <div className="financialPlanning2 mb-3 pt-4">

                <div className="financialPlanning2__Accordion1 mb-2 " onPointerDown={() => this.check(1)}>

                    <div className="financialPlanning2__Accordion1--wrapper pb-1 dflex">
                        <div className="financialPlanning2__wrapper--i">
                            <div className={`financialPlanning2__wrapper--i--minus ${this.state.show === 1 ? "show" : "hide"}`}>
                                &nbsp;
                            </div>
                            <div className={`financialPlanning2__wrapper--i--plus ${this.state.show === 1 ? " hide" : " show"}`}>
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
                    <div className={`financialPlanning2__wrapper1 ${this.state.show === 1 ? "show1" : "hide1"} `}>
                        <p className="financialPlanning2__Accordion1--p pl-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum.
                        </p>
                    </div>
                </div>

                <div className="financialPlanning2__Accordion2 mb-2" onPointerDown={() => this.check(2)} >
                    <div className="financialPlanning2__Accordion2--wrapper pb-1 dflex">
                        <div className="financialPlanning2__wrapper--i">
                            <div className={`financialPlanning2__wrapper--i--minus ${this.state.show === 2 ? " show" : "hide"}`}>
                                &nbsp;
                            </div>
                            <div className={`financialPlanning2__wrapper--i--plus  ${this.state.show === 2 ? "hide" : " show"}`}>
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
                    <div className={`financialPlanning2__wrapper1 ${this.state.show === 2 ? "show1" : " hide1"}`}>
                        <p className="financialPlanning2__Accordion2--p pl-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum.
                        </p>
                    </div>
                </div>

                <div className="financialPlanning2__Accordion3 mb-2" onPointerDown={() => this.check(3)}>
                    <div className="financialPlanning2__Accordion3--wrapper pb-1 dflex">
                        <div className="financialPlanning2__wrapper--i">
                            <div className={`financialPlanning2__wrapper--i--minus ${this.state.show === 3 ? " show" : " hide"}`}>
                                &nbsp;
                            </div>
                            <div className={`financialPlanning2__wrapper--i--plus ${this.state.show === 3 ? " hide" : " show"}`}>
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
                    <div className={`financialPlanning2__wrapper1 ${this.state.show === 3 ? " show1" : " hide1"}`}>
                        <p className="financialPlanning2__Accordion3--p pl-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum.
                        </p>
                    </div>
                </div>

                <div className="financialPlanning2__Accordion4 mb-2" onPointerDown={() => this.check(4)}>
                    <div className="financialPlanning2__Accordion4--wrapper pb-1 dflex">
                        <div className="financialPlanning2__wrapper--i">
                            <div className={`financialPlanning2__wrapper--i--minus ${this.state.show === 4 ? " show" : " hide"} `}>
                                &nbsp;
                            </div>
                            <div className={`financialPlanning2__wrapper--i--plus ${this.state.show === 4 ? " hide" : " show"}`}>
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
                    <div className={`financialPlanning2__wrapper1 ${this.state.show === 4 ? " show1" : " hide1"}`}>
                        <p className="financialPlanning2__Accordion4--p pl-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum.
                        </p>
                    </div>
                </div>

                <div className="financialPlanning2__Accordion5 mb-2" onPointerDown={() => this.check(5)}>
                    <div className="financialPlanning2__Accordion5--wrapper pb-1 dflex">
                        <div className="financialPlanning2__wrapper--i">
                            <div className={`financialPlanning2__wrapper--i--minus ${this.state.show === 5 ? " show" : " hide"}`}>
                                &nbsp;
                            </div>
                            <div className={`financialPlanning2__wrapper--i--plus ${this.state.show === 5 ? " hide" : " show"}`}>
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
                    <div className={`financialPlanning2__wrapper1 ${this.state.show === 5 ? " show1" : " hide1"}`}>
                        <p className="financialPlanning2__Accordion5--p pl-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum.
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
