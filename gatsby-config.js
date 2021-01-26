module.exports = {
  siteMetadata: {
    title: `Nicholas Gourley`,
    description: `A developer living in Toronto, Canada.`,
    pages: [
      { 
        title: "Home",
        link: "/"
      },
      { 
        title: "CV",
        link: "/cv/"
      },
      {
        title: "Resume",
        link: "/cv/"
      },
      { 
        title: "Projects",
        link: "/projects/"
      },
      { 
        title: "Contact",
        link: "/contact/"
      },
      { 
        title: "Calculator",
        link: "/apps/calculator/"
      },
      { 
        title: "Unit Conversion",
        link: "/apps/unit-conversion/"
      },
      {
        title: "Weather Forecast",
        link: "/apps/weather/"
      },
      {
        title: "Balance Sheet",
        link: "/apps/balance-sheet/"
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
