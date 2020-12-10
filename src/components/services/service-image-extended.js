import React from "react"
import './service-available.extended.css'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types';

const ServicerImageExtended = ({ pageData })=>{

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) =>{
        return <h4>{ children }</h4>
      },
    }
  }

  return (
      <div className="services-image2">
        <div className="text-center">{ documentToReactComponents(pageData.title, options) }</div>
        <p className="text-center">{ documentToReactComponents(pageData.content) }</p>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-3 d-flex justify-content-center align-items-center">
              <h5>The Brands</h5>
            </div>
            <div className="col-lg-9 col-md-9">
              <p className="text-left">DATA SOURCES:</p>
              <div className="row">
                { pageData.images1 && pageData.images1.length>0?
                  pageData.images1.map((e, i)=>(
                    <div className="col-lg-2 col-md-2 img  d-flex justify-content-center align-items-center" key={ i }>
                      <img src={ e.fixed.src } alt="img" />
                    </div>
                  ))
                :null }
              </div>
              <p className="text-left">BUILD:</p>
              <div className="row">
                { pageData.images2 && pageData.images2.length>0?
                  pageData.images2.map((e, i)=>(
                    <div className="col-lg-2 col-md-2 img d-flex justify-content-center align-items-center" key={ i }>
                      <img src={ e.fixed.src } alt="img" />
                    </div>
                  ))
                :null }
              </div>
              <p className="text-left">DEPLOY & CDN:</p>
              <div className="row">
                { pageData.images3 && pageData.images3.length>0?
                  pageData.images3.map((e, i)=>(
                    <div className="col-lg-2 col-md-2 img d-flex justify-content-center align-items-center" key={ i }>
                      <img src={ e.fixed.src } alt="img" />
                    </div>
                  ))
                :null }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ServicerImageExtended
