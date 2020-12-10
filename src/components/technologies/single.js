import React from "react"
import './single.css'

const Single = ({ title, images }) => (
  <div className="container">
    <div className="tech-main single">
    <h6>{ title }</h6>
    <div className="horizontal"></div>
    <div className="row">
      { images && images.length>0?
        images.map((e, i)=>(
          <div className="col-lg-2 col-md-2">
            <div className="img-card">
              <img src={ e.fixed.src } alt={ e.title } />
            </div>
          </div>
        ))
      :null }
    </div>
    </div>
  </div>
)

export default Single
