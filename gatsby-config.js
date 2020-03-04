module.exports = {
  siteMetadata: {
    title: `The COVID-19 FAQ`,
    name: `sogrady`,
    siteUrl: `https://covidfaq.com`,
    description: `A site that answers frequently asked questions about the COVID-19 outbreak using information from health services and media outlets`,
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
      forcedNavOrder: ["/background","/response","/Resources"],
      ignoreIndex: true
    }
  },
  plugins: [{ resolve: `gatsby-theme-document` }]
};
