import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import './bootstrap.min.css'

const Layout = ({ amp, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      allContentfulDfsServicesContent(filter: {node_locale: {eq: "en-US"}}, sort: {fields: createdAt, order: ASC}) {
        edges {
          node {
            slug
            pageTitle
            serviceTitle
          }
        }
      }
      allContentfulDfsServicesContentSecondModel(filter: {node_locale: {eq: "en-US"}}, sort: {fields: createdAt, order: ASC}) {
        edges {
          node {
            slug
            pageTitle
            serviceTitle
          }
        }
      }
    }
  `)

  const headless = data.allContentfulDfsServicesContentSecondModel.edges[0]

  const serviceTitle = data && data.allContentfulDfsServicesContent?
    Array.from(new Set(data.allContentfulDfsServicesContent.edges.map((e)=>{
    return e.node.serviceTitle
  }))) : []

  const filterAndReverse = (data, e)=>{
    const arr = data.allContentfulDfsServicesContent.edges.filter((item) => {
      return item.node.serviceTitle === e
    })

    if(arr && arr.length>0){
      const first = arr[0]
      const reverse = arr.reverse()
      reverse.pop()
      return [first, ...reverse]
    }
    return []
  }

  const services = data && data.allContentfulDfsServicesContent?
    serviceTitle.map((e)=>{
      const arr = filterAndReverse(data, e)
      if(e === 'Digital Marketing Services ' || e === 'Digital Marketing Services')
      arr.splice(5, 0, headless);
      return {
        serviceTitle: e,
        links: arr
      }
    }): []

  return (
    <>
      <Header amp={ amp } services={ services } />
      <div className="background">
        <main>{children}</main>
      </div>
      <Footer amp={ amp } services={ services } />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
