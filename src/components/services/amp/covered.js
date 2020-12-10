import React from 'react'
import '../covered.css'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Covered = ({ whatWeCovered, extensions })=>{
  return (
    <div className="container covered">
      <div className="row">
        <div className="col-lg-5 col-md-5">
          <h4>Whats <span className="focus">covered</span> by our services</h4>
          { documentToReactComponents(whatWeCovered.content) }
        </div>
        <div className="col-lg-1 col-md-1"></div>
        <div className="col-lg-6 col-md-6">
          <h4><span className="focus">Extentions</span> to the service</h4>
          { documentToReactComponents(extensions.content) }
        </div>
      </div>
    </div>
  )
}

export default Covered
