module.exports = {
  siteMetadata: {
    title: `2EAS Accounting Philippines`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: "https://2eas-accounting.netlify.app"
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // https://www.googletagmanager.com/gtag/js?id=
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-1BYFETEHKR",
        head: true,
        respectDNT: true
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://gmail.us2.list-manage.com/subscribe/post?u=1fcede93033feb606b544f0b2&amp;id=e9854fd5f3', // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "WPGraph2eas",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "wpgraph2eas",
        // Url to query from
        // url: "http://2easmain.local/graphql",
        url: "https://2eas-629268.ingress-baronn.easywp.com/graphql/",
        refetchInterval: 50
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `2EAS Accounting`,
        short_name: `2EAS`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/2eas_mobile_logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://2eas-accounting.netlify.app",
        sitemap: "https://2eas-accounting.netlify.app/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }]
      }
    },



    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [
          `/News/`,
          `/financial-Planning/`,
          `/contactPage/`,
          `/about/`,
          `/404/`
        ]
      }
    },


  ],
}
