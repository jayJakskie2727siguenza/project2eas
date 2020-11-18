import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'


const getData = graphql`
{
  wpgraph2eas {
    pageBy(uri: "contact") {
      contact_pagesection_acf {
        
        number
        address
        email
       
      }
    }
  }
}
`

const formattingCellphone = (num) => {
    let number = num.toString()
    let result = "+"
    // + 63 - 9465728674
    for (let i in number) {

        if (result.length === 3) {

            result += " "
            result += number[i]

        } else if (result.length === 7) {
            result += " "
            result += number[i]
        } else if (result.length === 11) {
            result += " "
            result += number[i]
        } else {
            result += number[i]
        }


    }

    return result


}

const ContactUsCol2 = () => {

    const {

        wpgraph2eas: {
            pageBy: {
                contact_pagesection_acf: {

                    number,
                    address,
                    email

                }
            }
        }

    } = useStaticQuery(getData)



    return (
        <div className="contactUs__col2 mr-2">
            <h2 className="contactUs__col2--h2 mb-3">CONTACT US</h2>
            <p className="contactUs__col2--p contactUs__col2--p--p1 mb-4"><a href="tel:+63 917 421 9688">{
                number ? `${formattingCellphone(number)}` : (<span>+63 999 999 9999</span>)
            }</a></p>
            <p className="contactUs__col2--p contactUs__col2--p--p2 mb-4">
                {address ? address : (<span>21 Apple St., General Santos City, 9500 South Cotabato, Philippines (default)</span>)}
                {/* 21 Apple St., General Santos City, 9500 South Cotabato, Philippines */}
            </p>
            <p className="contactUs__col2--p contactUs__col2--p--p3 mb-4">
                {email ? email : (<span>
                    solutions.2eas@gmail.com (default)
                </span>)}
                {/* solutions.2eas@gmail.com */}
            </p>
        </div>
    )
}

export default ContactUsCol2
