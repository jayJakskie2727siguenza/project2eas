import React from 'react'
import tImg from '../../images/person.jpg'


const Teams = () => {
    return (
        <section className="teams container">
            <div className="teams__wrapper">
                <div className="teams__wrapper--1">
                    <div className="teams__wrapper--1--imgWrapper">
                        <img src={tImg} className="teams__wrapper--1--imgWrapper--img" alt="person" />
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Teams
