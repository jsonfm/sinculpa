module.exports = {
  pathPrefix: "/sinculpa",
  siteMetadata: {
    title: `sinculpa`,
    siteUrl: `https://sinculpaloja.com`,
    description: `Sin Culpa es un restaurante ubicado en la ciudad de loja, cuyo leitmotiv es ofrecer alimentación de calidad sin perjudicar la conciencia calórica de nuestros clientes. Brindamos diversidad de platos, ensaladas, comida tradicional, jugos, vinos. A más de un ambiente ameno para compartir, dialogar, y disfrutar de buena comida, con amigos y sin culpas.`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-plugin-smoothscroll",
    "gatsby-transformer-sharp",
    "gatsby-plugin-cname",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: './src/images/spiralwhite.png',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-2KCJQQCXDP",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "https://www.sinculpaloja.com/",
        // defaults to false
        enableWebVitalsTracking: true,
      },
    },
  ]
};
