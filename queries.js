/****************************************************************************************************************
  Page Root Queries
****************************************************************************************************************/
const homeQuery = `
  query {
    allContentfulDfsHomePage(sort: {order: DESC, fields: id}, filter: {node_locale: {eq: "en-US"}}) {
      edges {
        node {
          node_locale
          title1
          subTitle
          description {
            description
          }
          image {
            fixed(width: 50) {
              srcWebp
              srcSet
            }
          }
        }
      }
    }
  }
`

const serviceQuery = `
  query {
    allContentfulDfsServicesContent(filter: {node_locale: {eq: "en-US"}}, sort: {fields: createdAt, order: ASC}) {
      edges {
        node {
          slug
          pageTitle
          serviceTitle
          bannerTitle {
            raw
          }
          bannerContent {
            raw
          }
          bannerLeftImage {
            fixed {
              src
              srcSet
            }
          }
          bannerRightImage1 {
            fixed(width: 500) {
              src
              srcSet
            }
          }
          bannerRightImage2 {
            fixed(width: 500) {
              src
              srcSet
            }
          }
          serviceDetailTitle {
            raw
          }
          serviceDetailContent {
            raw
          }
          serviceDetailImages {
            fixed(width: 120) {
              src
              srcSet
            }
          }
          benefitsContent {
            raw
          }
          scopeOurValueContent {
            raw
          }
          scopeOurValueImage {
            fixed(width: 1600) {
              src
              srcSet
              srcWebp
            }
          }
          whatsCoveredContent {
            raw
          }
          extensionsContent {
            raw
          }
        }
      }
    }
    allContentfulDfsServicesCosts(sort: {order: DESC, fields: id}, filter: {node_locale: {eq: "en-US"}}) {
      edges {
        node {
          servicesWhyServices {
            raw
          }
          servicesCostCard3 {
            raw
          }
          servicesCostCard2 {
            raw
          }
          servicesCostCard1 {
            raw
          }
        }
      }
    }
    allContentfulDfsServicesPageHowWeWorkSection(sort: {order: DESC, fields: id}, filter: {node_locale: {eq: "en-US"}}) {
      edges {
        node {
          howWeWorkTitle
          howWeWorkImage {
            fixed {
              src
              srcSet
            }
          }
        }
      }
    }
    allContentfulDfsServicesPageServicesAvailable(sort: {order: ASC, fields: id}, filter: {node_locale: {eq: "en-US"}}) {
      edges {
        node {
          typeOfServiceAvailable
          typeOfServiceAvailableImage {
            fixed {
              src
              srcSet
            }
          }
        }
      }
    }
    allContentfulDfsServicesContentSecondModel(filter: {node_locale: {eq: "en-US"}}, sort: {fields: createdAt, order: ASC}) {
      edges {
        node {
          slug
          pageTitle
          serviceTitle
          bannerTitle {
            raw
          }
          bannerGrid1 {
            raw
          }
          bannerGrid2 {
            raw
          }
          bannerGrid3 {
            raw
          }
          bannerImages {
            title
            fixed {
              src
              srcSet
            }
          }
          serviceDetailTitle {
              raw
            }
            serviceDetailContent {
              raw
            }
            serviceDetailImages1 {
              fixed(width: 120) {
                height
                width
                src
                srcSet
              }
            }
          serviceDetailImages2 {
              fixed(width: 120) {
                height
                width
                src
                srcSet
              }
            }
          serviceDetailImages3 {
              fixed(width: 120) {
                height
                width
                src
                srcSet
              }
            }
            benefitsContent {
              raw
            }
            scopeOurValueContent {
              raw
            }
            scopeOurValueImage {
              fixed(width: 1600) {
                src
                srcSet
                srcWebp
              }
            }
            whatsCoveredContent {
              raw
            }
            extensionsContent {
              raw
            }
        }
      }
    }
  }
`

const technologyQuery = `
  {
    allContentfulDfsTechnologyPage(filter: {node_locale: {eq: "en-US"}}) {
      edges {
        node {
          title
          subtitle
          serviceImages {
            fixed {
              src
            }
            title
          }
        }
      }
    }
  }
`

const contactUsQuery = `
  {
    allContentfulContactUs(filter: {node_locale: {eq: "en-US"}}) {
      edges {
        node {
          title
          address
          emailAddress
          phoneNumber
          formTitle
          textboxPlaceholders {
            name
            email
            companyName
            contactNumber
          }
          checkboxTitle
          checkboxes {
            content
          }
          textareaPlaceholder
          radiobuttonTitle
          radioButtons {
            content
          }
          radioButtonTitle2
          radioButtons2 {
            content
          }
        }
      }
    }
  }
`

const seoQuery = `
  {
    allContentfulSeoMetaData(filter: {node_locale: {eq: "en-US"}}) {
      edges {
        node {
          id
          seoMetData2
          seoMetadata1
          seoMetData3Keywords
        }
      }
    }
  }
`

module.exports = {
  homeQuery,
  serviceQuery,
  technologyQuery,
  contactUsQuery,
  seoQuery
}
