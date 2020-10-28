import React from 'react'
import ContactUsCol1 from './contactUsCol1'
import ContactUsCol2 from './ContactUsCol2'







const contactUs = () => {
    return (
        <>
            <section className="contactUs container mb-6 dflex">
                <ContactUsCol2 />
                <ContactUsCol1 />


            </section>
            <div className="contactUs__wrapper container dflex mb-2">
                <iframe title="contact Map" className="contactUs__wrapper--map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.097694952066!2d125.16136751456224!3d6.117549929446972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f79ff71097470f%3A0x9dabd3e0e30995c9!2s2E%20Accounting%20Solutions%20Philippines!5e0!3m2!1sen!2sph!4v1603375772473!5m2!1sen!2sph"
                    frameBorder="0"
                    allowFullScreen="" aria-hidden="false" >

                </iframe>


            </div>
        </>
    )
}

export default contactUs
