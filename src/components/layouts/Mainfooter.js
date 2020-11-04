import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'


const getData = graphql`
{
     wpgraph2eas {
    pageBy(uri: "footer") {
      footer_pagesection_acf {
        mainFooter {
          button
          description
        }
      }
    }
  }
}
`

const Mainfooter = () => {

    const {
        wpgraph2eas: {
            pageBy: {
                footer_pagesection_acf: {
                    mainFooter: {
                        button,
                        description
                    }
                }
            }
        }
    } = useStaticQuery(getData)


    return (
        <section className="mainFooter py-4">
            <div className="mainFooter__content px-5">
                <p className="mainFooter__content--p">
                    {
                        description ? description : (<span>Heating and Air Conditioning Services in Palm Coast, Bunnell and St. Augustine. Call now to schedule your repair or installation. (default)</span>)
                    }
                </p>
                <a href="tel:+63 917 421 9688">
                    <button className=" btn-primary btn">
                        {
                            button ? button : (<span>Call Now (default)</span>)
                        }
                    </button>
                </a>
            </div>
        </section>
    )
}

export default Mainfooter
