import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import '../banner2.css'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types';

const Banner2 = ({ pageData })=>{
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

  const getImage = (title)=>{
    const images = pageData.bannerImages.filter((e)=>{
      return e.fixed.src.indexOf(title)>-1
    })

    return images && images.length>0? images[0].fixed.src : ''
  }

  const getImageSet = (title)=>{
    const images = pageData.bannerImages.filter((e)=>{
      return e.fixed.src.indexOf(title)>-1
    })

    return images && images.length>0? images[0].fixed.srcSet : ''
  }

  const optionsTitle = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) =>{
        return <h2>{ children }</h2>
      },
    }
  }

  const optionsLeft = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) =>{

        if(children && children[0] && ['CMSs', 'Markdown', 'Data'].includes(children[0])){
          return<li>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
            { children }
          </li>
        }
        return <li>{ children }</li>
      },
    }
  }

  const optionsCenter = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) =>{
        if (children && children[0] === "Powered by GraphQL") {
          return <p style={{ marginTop: '15px' }}>
            { children }&nbsp;
            <amp-img
              src={ getImage('graphql') }
              srcSet={ getImageSet('graphql') }
              alt="graphql"
              width="25"
              height="25"
            >
            </amp-img>
          </p>
        } else if (children && children[0].length === 0) {
          return <amp-img
            src={ getImage('gatsby') }
            srcSet={ getImageSet('gatsby') }
            alt="gatsby"
            width="70"
            height="70"
          >
          </amp-img>
        } else if(children && children[0].length>0){
          return <p>{ children }</p>
        }
      },
    }
  }

  const optionsRight = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) =>{
        if(children && children[0] && ['Web Hosting'].includes(children[0])){
          return <p>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
            { children }
          </p>
        }
        return <p>{ children }</p>
      },
    }
  }

  return (
    <div className="service-container2" style={{
      backgroundImage: `url('${ sliderBG }')`,
    }}>
      <div className="container-fluid">
        <div>{ documentToReactComponents(pageData.title, optionsTitle) }</div>
        <div className="row">
          <div className="col-lg-1 col-md-1"></div>
          <div className="col-lg-3 col-md-3">
            <ul>{ documentToReactComponents(pageData.bannerGrid1, optionsLeft) }</ul>
          </div>
          <div className="col-lg-1 col-md-1 justify-content-center align-self-center">
            <amp-img
              src={ getImage('right_arrow') }
              srcSet={ getImageSet('right_arrow') }
              alt="right-arrow-2"
              width="20"
              height="20"
            >
            </amp-img>
          </div>
          <div className="col-lg-3 col-md-3 text-center">
            <div className="grid-center">{ documentToReactComponents(pageData.bannerGrid2, optionsCenter) }</div>
            <amp-img
              src={ getImage('Front-end') }
              srcSet={ getImageSet('Front-end') }
              alt="front-end"
              width="170"
              height="80"
            >
            </amp-img>
          </div>
          <div className="col-lg-1 col-md-1 justify-content-center align-self-center">
          <amp-img
            src={ getImage('right_arrow') }
            srcSet={ getImageSet('right_arrow') }
            alt="right-arrow-2"
            width="20"
            height="20"
          >
          </amp-img>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="grid-right">{ documentToReactComponents(pageData.bannerGrid3, optionsRight) }</div>
            <amp-img
              src={ getImage('Hosting_Services') }
              srcSet={ getImageSet('Hosting_Services') }
              alt="hosting-services"
              width="175"
              height="80"
              className="hosting-services"
            >
            </amp-img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner2
