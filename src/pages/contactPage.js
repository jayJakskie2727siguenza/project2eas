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
      contact_pagesection_acf {
        title
       
       
      }
    }
  }}
`

const ContactPage = () => {

    const {
        wpgraph2eas: {
            pageBy: {
                contact_pagesection_acf: {
                    title


                }
            }
        }
    } = useStaticQuery(getData)

    return (
        <Layouts>
            <SEO title={title} />
            <Banner title={title} />

            <ContactUs />
            <MainFooter />
        </Layouts>
    )
}

export default ContactPage
