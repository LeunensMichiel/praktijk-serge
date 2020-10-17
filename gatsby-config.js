module.exports = {
  siteMetadata: {
    title: "Serge Van de Voorde",
    description: `Privéconsultatie fysische geneeskunde en revalidatie in Deinze`,
    author: `@leunesmedia`,
    siteUrl: `https://sergevandevoorde.be/`,
    keywords: [
      `Serge Van de Voorde`,
      `Serge`,
      `dokter`,
      `specialisatie`,
      `praktijk`,
      `Privéconsultatie`,
      `fysische geneeskunde`,
      `AZ Sint-LUCAS GENT`,
      `Arts`,
      `Oost-vlaanderen`,
      `revalidatie`,
      `spieren`,
      `sportletsels`,
      `Deinze`,
      `bewegingsstelsel`,
      `manuele therapie`,
      `steunzolen`,
      `infiltraties`,
      `emg`,
      `eswt`,
      `Rug`,
      `Nek`,
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown/`,
      },
    },
    `gatsby-plugin-emotion`,
    "gatsby-transformer-sharp",
    `gatsby-transformer-remark`,
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Serge Van de Voorde`,
        short_name: `Serge Van de Voorde`,
        description: `Privéconsultatie fysische geneeskunde en revalidatie in Deinze`,
        start_url: `/`,
        background_color: `#F0EFF2`,
        theme_color: `#4C5866`,
        display: `browser`,
        icon: `src/assets/images/favicon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["300i", "400", "700"],
              fontDisplay: "swap",
              strategy: "selfHosted",
            },
          ],
        },
        formats: ["woff2", "woff"],
        useMinify: true,
        usePreload: true,
        usePreconnect: false,
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify-cache`,
  ],
}
