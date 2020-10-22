import React from 'react'
import Layouts from '../components/layouts/layout'
import '../styles/style.scss'
import SEO from '../components/seo'


import { Banner, PricePlan, ContactUs } from '../components/contacts/contactsMain'



const contactPage = () => {
    return (
        <Layouts>
            <SEO title="Contact Us" />
            <Banner title="Contact Us" />
            <PricePlan />
            <ContactUs />
        </Layouts>
    )
}

export default contactPage
