module.exports = {
  siteMetadata: {
    title: 'Bianca Sasscer | Web Developer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
    'gatsby-plugin-netlify-cms',
  ],
}
