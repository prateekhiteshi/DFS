import React from 'react'
import './small-banner.css'
import { Link } from "gatsby"

const SmallBanner = ({ title, links })=>(
  <div className="small-banner">
    <div className="container1">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <h4 className="focus">{ title }</h4>
        </div>
        <div className="col-lg-6 col-md-6 text-center">
          <ul className="banner-ul">
            { links && links.length>0?
              links.map((e, i)=>(
                <React.Fragment>
                  { i/2 === 0?
                    <React.Fragment>
                      <li><Link to={ e.link }>{ e.name }</Link></li>
                      <li className="circle">•</li>
                    </React.Fragment>
                    :
                    <li><Link to={ e.link }>{ e.name }</Link></li>
                  }
                </React.Fragment>
              ))
            :null }
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default SmallBanner
