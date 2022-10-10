module.exports = {
  siteMetadata: {
    title: `Itana GmbH`,
    description: ``,
    author: `Jörg Weißleder`,
    siteUrl: `https://itana.de`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-K56QMGF",

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    "gatsby-plugin-remove-console",
    `gatsby-plugin-arengu-forms`,
    "gatsby-plugin-webpack-bundle-analyser-v2",
    {
      resolve: "gatsby-plugin-htaccess",
      options: {
        https: true,
        www: false,
        DisallowSymLinks: true,
        SymLinksIfOwnerMatch: true,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-no-sourcemaps",
    },
    {
      resolve: "gatsby-plugin-preconnect",
      options: {
        domains: ["https://www.googletagmanager.com", "https://sdk.arengu.com"],
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://itana.de",
        sitemap: "https://itana.de/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `itana.de`,
        short_name: `itana.de`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#d40000`,
        display: `standalone`,
        include_favicon: true,
        icon: `src/images/favicon.png`,
        icons: [
          {
            src: `icon-192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `icon-512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
        icon_options: {
          // For all the options available, please see:
          // https://developer.mozilla.org/en-US/docs/Web/Manifest
          // https://w3c.github.io/manifest/#purpose-member
          purpose: `maskable`,
        },
        cache_busting_mode: `name`,
        legacy: `false`,
        theme_color_in_head: true,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        stripMetadata: true,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"),
        ],
      },
    },
    `gatsby-plugin-remove-serviceworker`,
  ],
};
