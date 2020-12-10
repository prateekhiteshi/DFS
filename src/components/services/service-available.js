import React from 'react'
import './service-available.css'
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const ServiceAvailable = ({ pageData })=>{
  return (
    <div className="service-available text-center">
      <h3>Service Available</h3>
      <p>Technology choice for fast & efficient value of delivery</p>
      <div className="cards">
        <div className="row">
          { pageData.cards.length>0?
            pageData.cards.map((e, i)=>(
              <div className="col-md-4" key={ i }>
                <div className="card1 text-center">
                  <img src={ e.image.src } alt={ e.content } className={ i === 0? 'height60': '' } />
                  <p>{ e.content }</p>
                </div>
              </div>
            ))
          :null }
        </div>
      </div>
    </div>
  )
}

export default ServiceAvailable
