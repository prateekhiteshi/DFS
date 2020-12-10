import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import './banner.css'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types';

const Banner = ({ pageData })=>{
  const data = useStaticQuery(graphql`
    query {
      allContentfulAsset(filter: {title: {eq: "banner background image"}, node_locale: {eq: "en-US"}}) {
        edges {
          node {
            id
            title
            fixed(width: 520) {
              src
            }
          }
        }
      }
    }
  `)
  const sliderBG = data.allContentfulAsset.edges[0].node.fixed.src

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) =>{
        return <h1>{ children }</h1>
      },
    }
  }

  return (
    <div className="service-container" style={{
      backgroundImage: `url('${ sliderBG }')`,
    }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-1 col-md-1"></div>
          <div className="col-lg-5 col-md-5">
          <div className="h1">{ documentToReactComponents(pageData.title, options) }</div>
          <div>{ documentToReactComponents(pageData.content) }</div>
          <img src={ pageData.leftImage.src } alt="service" />
          </div>
          <div className="col-lg-6 col-md-6 slider-img">
            <img src={ pageData.rightImage1.src } alt="main" />
            <img src={ pageData.rightImage2.src } alt="general" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
