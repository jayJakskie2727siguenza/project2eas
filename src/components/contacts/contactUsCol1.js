import React from 'react'

const contactUsCol1 = () => {
    return (
        <div className="contactUs__col1">
            <form className="contactUs__col1--form" action="/" method="GET">
                <h2 className="contactUs__col1--h2 mb-1">We Love to Hear From You</h2>
                <p className="contactUs__col1--p mb-2">
                    Please call or email contact form and we will be happy to assist
                    you.
            </p>
                <div className="contactUs__col1--input">
                    <input
                        type="text"
                        name="fName"
                        id="fName"
                        placeholder="Full Name"
                        className="contactUs__col1--input--fName mb-1"
                    />

                    <input
                        type="email"
                        name="cEmail"
                        id="cEmail"
                        placeholder="Email Address"
                        className="contactUs__col1--input--cEmail mb-1"
                    />
                    <input
                        type="tel"
                        name="cTel"
                        id="cTel"
                        placeholder="Your Phone"
                        className="contactUs__col1--input--cTel mb-1"
                    />
                    <input
                        type="text"
                        name="cCompany"
                        id="cCompany"
                        placeholder="Your Company"
                        className="contactUs__col1--input--cCompany mb-1"
                    />
                    <input
                        type="text"
                        name="cSubject"
                        id="cSubject"
                        placeholder="Company Size"
                        className="contactUs__col1--input--cSubject mb-2"
                    />
                    <div className="contactUs__col1--input--cTextareaDiv mb-2">
                        <textarea
                            name="cTextarea"
                            id="cTextarea"
                            cols="40"
                            rows="20"
                            placeholder="Message:"
                            className="contactUs__col1--input--cTextareaDiv--cTextarea"
                        ></textarea>
                    </div>
                </div>
                <button className="btn-warning btnHoveringFloat">Submit</button>
            </form>
        </div>
    )
}

export default contactUsCol1
