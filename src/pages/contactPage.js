import React from 'react'
import Layouts from '../components/layouts/layout'
import MainFooter from '../components/layouts/Mainfooter'
import '../styles/style.scss'
import SEO from '../components/seo'


import { Banner, ContactUs } from '../components/contacts/contactsMain'



const contactPage = () => {
    return (
        <Layouts>
            <SEO title="Contact Us" />
            <Banner title="Contact Us" />

            <ContactUs />
            <MainFooter />
        </Layouts>
    )
}

export default contactPage
