import React from 'react'
import '../main-card.css'

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
                  <amp-img
                    src={ e.node.image.fixed.src }
                    srcSet={ e.node.image.fixed.srcSet }
                    alt={ e.node.subTitle }
                    width="50"
                    height="50"
                  >
                  </amp-img>
                </div>
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
