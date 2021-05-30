module.exports = {
  siteMetadata: {
    title: "amp-bitious",
    siteUrl: `https://www.test.com`
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "@leomanlapera/gatsby-source-yelp",
      options: {
        id: "aFSze_J2vCXFa3gVjbIzaA",
        apiKey: "w1lC5xXDnstFzd10WCnigUGPc88wA4Thg2zdpIJfpnmckpSW65S3_t6CPvqyfNtxTSFJOSKp_djBG1qrTT9-T1y3TtW0AcOn2G5JLNqhzgen3bfi0Biz2_yQ19mzYHYx"
      }
    }
  ],
};
