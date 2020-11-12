import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'




const getData = graphql`{
    wpgraph2eas {
    teams {
      nodes {
        title(format: RENDERED)
        content(format: RENDERED)
        featuredImage {
          sourceUrl
           altText
        }
      }
    }
  }
}`

const Teams = () => {

    const {
        wpgraph2eas: {
            teams: {
                nodes
            }
        }
    } = useStaticQuery(getData)


    return (
        <section className="teams container">
            <div className="teams__wrapper">
                <ul className="teams__wrapper--ul ">

                    {nodes.map((data, index) => {
                        return (
                            <li key={index} className="teams__wrapper--ul--li ">
                                <div className="teams__wrapper--ul--li--items  ">
                                    <div className="teams__wrapper--ul--li--items--imgWrapper">
                                        <img className="teams__wrapper--ul--li--items--imgWrapper--img" src={data.featuredImage.sourceUrl} alt={data.featuredImage.altText} />
                                    </div>
                                    <div className="teams__wrapper--ul--li--items--content ">
                                        <h4 className="teams__wrapper--ul--li--items--content--h4" dangerouslySetInnerHTML={{ __html: data.title }} />
                                        <p className="teams__wrapper--ul--li--items--content--p" dangerouslySetInnerHTML={{ __html: data.content }} />
                                    </div>
                                </div>
                            </li>
                        )
                    })}

                </ul>
            </div>
        </section>
    )

}

export default Teams


