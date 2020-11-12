import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layouts from '../components/layouts/layout'
import MainFooter from '../components/layouts/Mainfooter'
import '../styles/style.scss'
import SEO from '../components/seo'


import { Banner, ContactUs } from '../components/contacts/contactsMain'

const getData = graphql`
{wpgraph2eas {
    pageBy(uri: "contact") {
       page_seo_acf {
                    siteMetaTitle
                    siteMetaDescription
                }
    }
  }}
`

const ContactPage = () => {

    const {
        wpgraph2eas: {
            pageBy: {
                page_seo_acf: {
                    siteMetaTitle,
                    siteMetaDescription
                }
            }
        }
    } = useStaticQuery(getData)

    return (
        <Layouts>
            <SEO title={siteMetaTitle} description={siteMetaDescription} />
            <Banner title={siteMetaTitle} />

            <ContactUs />
            <MainFooter />
        </Layouts>
    )
}

export default ContactPage
