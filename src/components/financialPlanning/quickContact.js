import React from 'react'

const quickContact = () => {
    return (
        <div className="quickContact py-3 my-3">
            <h2 className="quickContact__h2 contentTitle--subtitle">
                Quick Contact
            </h2>
            <form className="quickContact__form" action="/" method="GET">
                <div className="quickContact__form--name quickContact__form--form">
                    <input
                        className="quickContact__form--name--text"
                        type="text"
                        placeholder="Name:"
                        size="40"
                        aria-required="true"
                        aria-invalid="false"
                    />
                </div>
                <div className="quickContact__form--email quickContact__form--form">
                    <input
                        className="quickContact__form--email--email"
                        type="email"
                        placeholder="Email:"
                        size="40"
                        aria-required="true"
                        aria-invalid="false"
                    />
                </div>
                <div className="quickContact__form--tel quickContact__form--form">
                    <input
                        className="quickContact__form--tel--tel"
                        type="tel"
                        placeholder="Phone:"
                        size="40"
                        aria-required="true"
                        aria-invalid="false"
                    />
                </div>
                <div className="quickContact__form--subject quickContact__form--form">
                    <input
                        className="quickContact__form--subject--subject"
                        type="text"
                        placeholder="Subject:"
                        size="40"
                        aria-required="true"
                        aria-invalid="false"
                    />
                </div>
                <div className="quickContact__form--select quickContact__form--form">
                    <select
                        className="quickContact__form--select--service"
                        name="service"
                        id="service"
                    >
                        <option value="Financial Planning">Financial Planning</option>
                        <option value="Software & Research"
                        >Software & Research</option
                        >
                        <option value="Business Services">Business Services</option>
                        <option value="Quality Resourcing">Quality Resourcing</option>
                        <option value="Travel and Aviation"
                        >Travel and Aviation</option
                        >
                        <option value="Healthcare Services"
                        >Healthcare Services</option
                        >
                    </select>
                </div>
                <div className="quickContact__form--message quickContact__form--form">
                    <textarea
                        className="quickContact__form--message--message"
                        name="message"
                        id="message"
                        cols="40"
                        rows="10"
                        placeholder="Message:"
                        aria-invalid="false"
                    ></textarea>
                </div>
                <div className="quickContact__form--button">
                    <button className="quickContact__form--button--btn btn-warning">
                        SEND MESSAGE
                </button>
                </div>
            </form>
        </div>
    )
}

export default quickContact
