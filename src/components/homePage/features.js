import React from 'react'


import Image from '../image'

import { useStaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Features = () => {
    const dataFeatures = useStaticQuery(graphql`
    query Features{
  demoElevenIconOne:file(relativePath:{eq:"demo-eleven-icon-01.png"}){
    childImageSharp{
      fixed(width:86){
       ...GatsbyImageSharpFixed_noBase64
      }
    }
  },
  demoElevenIconTwo:file(relativePath:{eq:"demo-eleven-icon-02.png"}){
    childImageSharp{
      fixed(width:86){
         ...GatsbyImageSharpFixed_noBase64
      }
    }
  },
  demoElevenIconThree:file(relativePath:{eq:"demo-eleven-icon-03.png"}){
    childImageSharp{
      fixed(width:86){
        ...GatsbyImageSharpFixed_noBase64
      }
    }
  }
}		
    `)

    return (

        <section className={`features container`}>

            <div className="features__col dflex justify-content-start py-3 px-2">
                <div className="features__col--imgWrapper mr-1">
                    {/* <img
                        className="features__col--img"
                        src={pDemo1}
                        alt="creative idea"
                    /> */}

                    <Image picsFixed={dataFeatures.demoElevenIconOne.childImageSharp.fixed} className="features__col--img" alt="creative idea" />

                </div>
                <div>
                    <h2 className="features__col--title mb-1">Create Idea</h2>
                    <p className="features__col--description my-2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Reprehenderit unde fuga numquam non optio!
                    </p>
                    <a className="features__col--link" href="/"> READ MORE
                    <i className="fas fa-arrow-right ml-1">
                            <FontAwesomeIcon icon={faArrowRight} />
                        </i>
                    </a>
                </div>
            </div>
            <div className="features__col dflex justify-content-start py-3 px-2">
                <div className="features__col--imgWrapper mr-1">
                    {/* <img
                        className="features__col--img"
                        src={pDemo2}
                        alt="creative idea"
                    /> */}
                    <Image picsFixed={dataFeatures.demoElevenIconTwo.childImageSharp.fixed} className="features__col--img" alt="creative idea" />
                </div>
                <div>
                    <h2 className="features__col--title mb-1">Create Idea</h2>
                    <p className="features__col--description my-2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Reprehenderit unde fuga numquam non optio!
                    </p>
                    <a className="features__col--link" href="/"> READ MORE
                    <i className="fas fa-arrow-right ml-1">
                            <FontAwesomeIcon icon={faArrowRight} />
                        </i>
                    </a>
                </div>
            </div>
            <div className="features__col dflex justify-content-start py-3 px-2">
                <div className="features__col--imgWrapper mr-1">
                    {/* <img
                        className="features__col--img"
                        src={pDemo3}
                        alt="creative idea"
                    /> */}
                    <Image picsFixed={dataFeatures.demoElevenIconThree.childImageSharp.fixed} className="features__col--img" alt="creative idea" />
                </div>
                <div>
                    <h2 className="features__col--title mb-1">Create Idea</h2>
                    <p className="features__col--description my-2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Reprehenderit unde fuga numquam non optio!
                    </p>
                    <a className="features__col--link" href="/"> READ MORE
                    <i className="fas fa-arrow-right ml-1">
                            <FontAwesomeIcon icon={faArrowRight} />
                        </i>
                    </a>
                </div>
            </div>
        </section>


    )
}

export default Features
