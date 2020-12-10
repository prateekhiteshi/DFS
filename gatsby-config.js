module.exports = {
  siteMetadata: {
    title: `Digital Flex Web Services`,
    description: `digitalflexsolutions.com – Automation Service`,
    author: `Digital Flex Web Services`,
    siteUrl: 'https://friendly-pare-1e7823.netlify.app/'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-offline',
    'gatsby-plugin-preact',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://friendly-pare-1e7823.netlify.app',
        sitemap: 'https://friendly-pare-1e7823.netlify.app/sitemap.xml',
        policy: [{ userAgent: '*', disallow: '/' }]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `digitalflexsolutions`,
        short_name: `DFS`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: "standalone",
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        "purpose": "any maskable"
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.CONTENT_DELIVERY_ID
      },
    },
    {
      resolve: `gatsby-plugin-amp`,
      options: {
      // analytics: {
      //   type: 'gtag',
      //   dataCredentials: 'include',
      //   config: {
      //     vars: {
      //       gtag_id: <GA_TRACKING_ID>,
      //       config: {
      //         <GA_TRACKING_ID>: {
      //           page_location: '{{pathname}}'
      //         },
      //       },
      //     },
      //   },
      // },
      canonicalBaseUrl: 'https://friendly-pare-1e7823.netlify.app/',
      components: ['amp-form'],
      excludedPaths: ['/404*'],
      pathIdentifier: '/amp/',
      relAmpHtmlPattern: '{{canonicalBaseUrl}}{{pathname}}{{pathIdentifier}}',
      useAmpClientIdApi: true,
    },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     // The property ID; the tracking code won't be generated without it
    //     trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
    //     // Defines where to place the tracking script - `true` in the head and `false` in the body
    //     head: false,
    //     // Setting this parameter is optional
    //     anonymize: true,
    //     // Setting this parameter is also optional
    //     respectDNT: true,
    //     // Avoids sending pageview hits from custom paths
    //     exclude: ["/preview/**", "/do-not-track/me/too/"],
    //     // Delays sending pageview hits on route update (in milliseconds)
    //     pageTransitionDelay: 0,
    //     // Enables Google Optimize using your container Id
    //     optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
    //     // Enables Google Optimize Experiment ID
    //     experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
    //     // Set Variation ID. 0 for original 1,2,3....
    //     variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
    //     // Defers execution of google analytics script after page load
    //     defer: false,
    //     // Any additional optional fields
    //     sampleRate: 5,
    //     siteSpeedSampleRate: 10,
    //     cookieDomain: "example.com",
    //   },
    // },
    `gatsby-plugin-stylus`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-less`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: true,
        tailwind: true,
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      }
    }
  ],
}
