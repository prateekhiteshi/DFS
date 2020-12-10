import React from 'react'
import '../services-image.css'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types';

const ServicesImage = ({ pageData })=>{
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) =>{
        return <h4>{ children }</h4>
      },
    }
  }

  return (
    <div className="services-image">
      <div>{ documentToReactComponents(pageData.title, options) }</div>
      <p>{ documentToReactComponents(pageData.content) }</p>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          { pageData.images && pageData.images.length>0?
            pageData.images.map((e, i)=>(
              <div className="col-lg-2 col-md-2 img" key={ i }>
                <amp-img
                  src={ e.fixed.src }
                  srcSet={ e.fixed.srcSet }
                  alt="service"
                  width="120"
                  height="50"
                >
                </amp-img>
              </div>
            ))
          :null }
        </div>
      </div>
    </div>
  )
}

export default ServicesImage
