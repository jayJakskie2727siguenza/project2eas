import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
      {
 "@context": "http://www.schema.org",
 "@type": "AccountingService",
 "name": "2E Accounting Solutions Philippines",
 "url": "https://www.2eas.ph/",
 "sameAs": [
   "https://www.facebook.com/pages/category/Accountant/2E-Accounting-Solutions-Philippines-2304099389605381/",
   "https://www.linkedin.com/company/2e-accounting-solutions-philippines/"
 ],
 "logo": "https://www.2eas.ph/static/2EAS-LOGO-Horizontal-Website-a4cea75ebb188d9880dcb7afc6c66418.png",
 "image": "http://www.2eas.ph/static/2EAS-LOGO-Horizontal-Website-footer-14b7889010e762732358a06cf0cc9087.png",
 "description": "2E Accounting Solutions provides the best online accounting consultancy services specializing in Accounting & Taxation System Solutions in the Philippines nationwide since 2018.\n",
 "address": {
   "@type": "PostalAddress",
   "streetAddress": "21 Apple St, Barangay Dadiangas North",
   "addressLocality": "General Santos City",
   "addressRegion": "South Cotabato",   "postalCode": "9500",
   "addressCountry": "Philippines"
 },
 "geo": {
   "@type": "GeoCoordinates",
   "latitude": "6.1175499",
   "longitude": "125.1613622"
 },
 "hasMap": "https://www.google.com/maps/place/2E+Accounting+Solutions+Philippines/@6.1175499,125.1613622,17z/data=!3m1!4b1!4m5!3m4!1s0x32f79ff71097470f:0x9dabd3e0e30995c9!8m2!3d6.1175446!4d125.1635562",
 "openingHours": "Mo, Tu, We, Th, Fr 09:00-17:00",
 "contactPoint": {
   "@type": "ContactPoint",
   "contactType": "Certified Public Accountant",
   "telephone": "+2 (083) 227-1227"
 }
}
      `}}
        />
      </head>


      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
