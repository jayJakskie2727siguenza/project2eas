import React from 'react'

import pImg1 from '../../images/ceo.jpg'
import pImg2 from '../../images/demo-eleven-line-2.png'






const testimony = () => {
  return (
    <section className={`testimony container mt-5 px-5 py-4`}>
      <div className="testimony__person">
        <div className="testimony__person--imgWrapper mx-auto my-auto">
          <img
            className="w-100 testimnoy__person--img"
            src={pImg1}
            alt="person"
          />
        </div>
        <h3>Verniedeck Abad</h3>
        <p>Philippines</p>
      </div>
      <div
        className="testimony__comments dflex justify-content-start align-items-center"
      >
        <img
          className="mr-2"
          src={pImg2}
          alt="line 2"
        />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque sit non
        natus nostrum eligendi! Obcaecati accusantium repellat explicabo
        incidunt? Nam quo tenetur modi aliquam, aliquid accusantium molestias a!
        Recusandae autem adipisci dolore? Recusandae aliquid a quam nulla
        voluptate? Reprehenderit nisi asperiores quae vitae aut quisquam iusto
        odio. Vero, quae perferendis.
      </div>
    </section>
  )
}

export default testimony
