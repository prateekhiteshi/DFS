import React from 'react'
import './benifites.css'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Benifites = ({ benefits, scope })=>{
  return (
    <div className="container benifites">
      <div className="row">
        <div className="col-lg-2 col-md-2"></div>
        <div className="col-lg-2 col-md-2 d-flex">
          <h4 className="title justify-content-center align-self-center">The Benefites</h4>
        </div>
        <div className="col-lg-8 col-md-8">
          { documentToReactComponents(benefits.content) }
        </div>
      </div>
      <div className="scope">
        <h4>
          Scope of our Value <span className="focus">Engineering Services</span>
        </h4>
        <p>
          { documentToReactComponents(scope.content) }
        </p>
        <img src={ scope.image.src } alt="scope" />
      </div>
    </div>
  )
}

export default Benifites
