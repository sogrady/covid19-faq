module.exports = {
  siteMetadata: {
    title: `Document by Code Bushi`,
    name: `Code Bushi`,
    siteUrl: `https://gatsby-theme-document.netlify.com`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    social: [
      {
        name: `github`,
        url: `https://github.com/sogrady/covid19-faq`
      },
      {
        name: `twitter`,
        url: `https://twitter.com/sogrady`
      }
    ],
    sidebarConfig: {
      forcedNavOrder: ["/background","/response"],
      ignoreIndex: true
    }
  },
  plugins: [{ resolve: `gatsby-theme-document` }]
};
