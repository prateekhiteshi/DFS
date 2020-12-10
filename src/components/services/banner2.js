import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import './banner2.css'
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

    return images && images.length>0? images[0].fixed.src : null
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
            <img src={ getImage('graphql') } style={{ width: '25px' }} alt='graphql' />
          </p>
        } else if (children && children[0].length === 0) {
          return <img src={ getImage('gatsby') } style={{ width: '70px' }} alt='gatsby' />
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
            <img src={ getImage('right_arrow') } alt="right-arrow-2" />
          </div>
          <div className="col-lg-3 col-md-3 text-center">
            <div className="grid-center">{ documentToReactComponents(pageData.bannerGrid2, optionsCenter) }</div>
            <img className="front-end" src={ getImage('Front-end') } alt="front-end" />
          </div>

          <div className="col-lg-1 col-md-1 justify-content-center align-self-center">
            <img src={ getImage('right_arrow') } alt="right-arrow-1" />
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="grid-right">{ documentToReactComponents(pageData.bannerGrid3, optionsRight) }</div>
            <img className="hosting-services img-fluid" src={ getImage('Hosting_Services') } alt="hosting-services" />
          </div>
        </div>
        <img />
      </div>
    </div>
  )
}

export default Banner2
