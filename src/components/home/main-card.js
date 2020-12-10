import React from 'react'
import './main-card.css'

const MainCard = ({ data })=>(
  <div className="container-fluid">
    <div className="row main-card">
      <div className="col-lg-1 col-md-1"></div>
      { data && data.length>0?
        data.map((e, i)=>(
          <div className="col-lg-5 col-md-5" key={ i }>
            <div className="card extraShadow">
              <div className="card-body">
                <div className="text-center">
                  <img
                    src={ e.node.image.fixed.srcWebp }
                    alt={ e.node.subTitle }
                    layout="responsive"
                  /></div>
                <h4 className="text-center mh4">{ e.node.subTitle }</h4>
                <p className="text-center mp">{ e.node.description.description }</p>
              </div>
            </div>
          </div>
        ))
      :null }
    </div>
  </div>
)

export default MainCard
