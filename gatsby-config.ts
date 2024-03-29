module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `sinculpa`,
    siteUrl: `https://sinculpaloja.com`,
    description: `Sin Culpa es un restaurante ubicado en la ciudad de loja, cuyo leitmotiv es ofrecer alimentación de calidad sin perjudicar la conciencia calórica de nuestros clientes. Brindamos diversidad de platos, ensaladas, comida tradicional, jugos, vinos. A más de un ambiente ameno para compartir, dialogar, y disfrutar de buena comida, con amigos y sin culpas.`,
    image: `https://sinculpasite.files.wordpress.com/2022/08/metaimage-1.jpeg`,
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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-FBD1WBZKHT", // Google Analytics / GA
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
  ]
};
