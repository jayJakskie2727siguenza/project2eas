import React from 'react'
import img1 from '../../images/about-image4.jpg'




const provideSolution = () => {
    return (
        <section className="providedSolution container">
            <div className="providedSolution__content">
                <h2 className="contentTitle--title">
                    We Provide Solution on Your Business
          </h2>
                <p className="providedSolution__content--p">
                    On the other hand we denounce with righteous indignation and dislike
                    men who are so beguiled and demoralized by the charms of pleasure of
                    the moment so blinded by desire that they cannot foresee.
          </p>
                <h3 className="contentTitle--subtitle">What We Do ?</h3>
                <p className="providedSolution__content--p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam quis nostrud exercitation.
          </p>
                <button className="providedSolution__content--btn btn">READ MORE</button>
            </div>
            <div className="providedSolution__img">
                <img
                    className="providedSolution__img--img"
                    src={img1}
                    alt="about4"
                />
            </div>
        </section>
    )
}

export default provideSolution
