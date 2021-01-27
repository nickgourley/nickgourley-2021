module.exports = {
  siteMetadata: {
    title: `Nicholas Gourley`,
    description: `A developer living in Toronto, Canada.`,
    pages: [
      { 
        title: "Home",
        displayTitle: "Page: Home",
        link: "/"
      },
      { 
        title: "CV",
        displayTitle: "Page: CV",
        link: "/cv/"
      },
      {
        title: "Resume",
        displayTitle: "Page: Resume",
        link: "/cv/"
      },
      { 
        title: "Projects",
        displayTitle: "Page: Projects",
        link: "/projects/"
      },
      { 
        title: "Contact",
        displayTitle: "Page: Contact",
        link: "/contact/"
      },
      { 
        title: "Calculator",
        displayTitle: "App: Calculator",
        link: "/apps/calculator/"
      },
      { 
        title: "Unit Conversion",
        displayTitle: "App: Unit Conversion",
        link: "/apps/unit-conversion/"
      },
      {
        title: "Balance Sheet",
        displayTitle: "App: Balance Sheet",
        link: "/apps/balance-sheet/"
      },
      {
        title: "Fitness Tracker",
        displayTitle: "App: Fitness Tracker",
        link: "/apps/fitness-tracker/"
      },
      {
        title: "Notes",
        displayTitle: "App: Notes",
        link: "/apps/notes/"
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
