import React from 'react'
import img from '../../images/gifmessage.gif'
import tyCheck from '../../images/thankYouCheckmark.gif'



const ContactUsCol1 = () => {

    const formspree = "https://formspree.io/f/xoqpworz"

    const [contact, setContact] = React.useState({
        FullName: "",
        Email: "",
        Telephone: "",
        Company: "",
        ContactFormMessage: "",
        loading: false,
        error: false,
        buttonDisabled: true,
        submited: false


    })










    const handleChange = (e) => {
        if (contact.FullName === "" || contact.Email === "" || contact.Telephone === "" || contact.Company === "" || contact.ContactFormMessage === "") {
            setContact({ ...contact, [e.target.name]: e.target.value, buttonDisabled: true })

        } else {
            setContact({ ...contact, [e.target.name]: e.target.value, buttonDisabled: false })
            if (contact.submited) {
                setContact({
                    ...contact,
                    FullName: "",
                    Email: "",
                    Telephone: "",
                    Company: "",
                    ContactFormMessage: "",
                    submited: false
                })
            }
        }




    }



    const handleSubmit = (e) => {
        e.preventDefault()
        setContact({ ...contact, loading: true })
        if (contact.FullName === "" || contact.Email === "" || contact.Telephone === "" || contact.Company === "" || contact.ContactFormMessage === "") {
            setContact({ ...contact, error: true })
            alert("You Cannot By Pass The Form")

        } else {


            const form = e.target;
            const data = new FormData(form);
            const xhr = new XMLHttpRequest();
            xhr.open(form.method, formspree);
            xhr.setRequestHeader("Accept", "application/json");
            xhr.onreadystatechange = () => {
                if (xhr.readyState !== XMLHttpRequest.DONE) return;
                if (xhr.status === 200) {
                    form.reset();

                    setTimeout(() => {
                        setContact({
                            ...contact,
                            submited: true,

                            loading: false
                        })
                    }, 3000)

                    console.log("Successfully Submitted")
                } else {
                    setContact({ ...contact, error: true })
                    console.log("Message Failed to Send")
                }
            };
            xhr.send(data);
        }
    }



    return (
        <div className="contactUs__col1">
            <div className={`contactUs__col1--Wrapper`}>




                <form className={`contactUs__col1--Wrapper--form ${contact.loading ? "opacity-hide" : contact.submited ? "opacity-hide" : "opacity-show"}`} method="POST" onSubmit={handleSubmit}>
                    <h2 className="contactUs__col1--h2 mb-1">We Love to Hear From You</h2>
                    <p className="contactUs__col1--p mb-2">
                        Please call or email contact form and we will be happy to assist
                        you.
            </p>
                    <div className="contactUs__col1--input">
                        <input
                            type="hidden"
                            name="_subject"
                            value={`From Contact Form => ${contact.FullName}  `}
                        />
                        <input
                            type="text"
                            name="FullName"
                            id="fName"
                            placeholder="Full Name"

                            className={` ${!contact.FullName ? "contactUs__col1--input--disabled" : "  contactUs__col1--input--fName"} inputValue mb-1`}
                            value={contact.FullName}
                            onChange={handleChange}

                        />

                        <input
                            type="email"
                            name="Email"
                            id="cEmail"
                            placeholder="Email Address"

                            className={` ${!contact.Email ? "contactUs__col1--input--disabled" : "  contactUs__col1--input--cEmail"} inputValue mb-1`}
                            value={contact.Email}
                            onChange={handleChange}
                        />
                        <input
                            type="tel"
                            name="Telephone"
                            id="cTel"
                            placeholder="Your Phone"

                            className={` ${!contact.Telephone ? "contactUs__col1--input--disabled" : "   contactUs__col1--input--cTel"} inputValue mb-1`}
                            value={contact.Telephone}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="Company"
                            id="cCompany"
                            placeholder="Your Company"

                            className={` ${!contact.Company ? "contactUs__col1--input--disabled" : "   contactUs__col1--input--cCompany"} inputValue mb-1`}
                            value={contact.Company}
                            onChange={handleChange}
                        />

                        <div className="contactUs__col1--input--cTextareaDiv mb-2">
                            <textarea
                                name="ContactFormMessage"
                                id="cTextarea"
                                cols="40"
                                rows="20"
                                placeholder="Message:"

                                className={`${!contact.ContactFormMessage ? "contactUs__col1--input--cTextareaDiv--disabled" : " contactUs__col1--input--cTextareaDiv--cTextarea"}  inputValue`}
                                onChange={handleChange}
                                value={contact.ContactFormMessage}
                            ></textarea>
                        </div>
                    </div>
                    <button disabled={contact.buttonDisabled} className={`btn-warning  ${!contact.FullName || !contact.Telephone || !contact.Email || !contact.Company || !contact.ContactFormMessage ? "btnDisabled" : "btnHoveringFloat"}`}>{contact.buttonDisabled ? "Fill Up The Form" : contact.error ? "Network Error" : "Submit"} </button>

                </form>
                <div className={`contactUs__col1--gifWrapper1  ${contact.submited ? " opacity-show" : "opacity-hide"}`}>
                    <img src={contact.submited ? tyCheck : ""} className={`contactUs__col1--gifWrapper1--gif1 ${contact.submited ? " opacity-show" : "opacity-hide"}`} alt="Thank You Checkmark" />
                    <h2 className={`contactUs__col1--gifWrapper1--h2 ${contact.submited ? " opacity-show" : "opacity-hide"}`}>Thank You for Submitting</h2>
                </div>
                <div className={`contactUs__col1--gifWrapper ${contact.loading ? "opacity-show" : contact.submited ? "opacity-hide" : "opacity-hide"} `}>

                    <img src={
                        contact.loading ? img : ""
                    } className="contactUs__col1--gifWrapper--gif" alt="Message Sent gif" />
                    <h2 className={`contactUs__col1--gifWrapper--h2 ${contact.loading ? "opacity-show" : contact.submited ? "opacity-hide" : "opacity-hide"}`}>Message Sent</h2>
                </div>





            </div>

        </div >
    )
}

export default ContactUsCol1
