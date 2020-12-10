import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import './how-we-work.css'

const HowWeWork = ({ data })=>{
  const img = useStaticQuery(graphql`
    query {
      allContentfulAsset(filter: {title: {eq: "home img12"}}) {
        edges {
          node {
            id
            fixed(width: 370) {
              srcWebp
            }
          }
        }
      }
    }
  `)

  const image = img && img.allContentfulAsset?
    img.allContentfulAsset.edges[0].node.fixed.srcWebp: null

  return (
    <div className="how-we-work">
      <div className="row">
        <div className="col-lg-4 col-md-4"></div>
        <div className="col-lg-4 col-md-4 text-center">
          <h4 className="card-title">How We Work</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4">
          <img src={ image } class="img-fluid" alt="sideimage" />
        </div>
        <div className="col-lg-8 col-md-8">
          <div className="row">
            { data && data.length>0?
              data.map((e, i)=>(
                <div className="col-lg-6 col-md-6" key={ i }>
                  <div className="card extraShadow">
                    <div className="card-body">
                    <div className="row">
                      <div className="col-lg-2 col-md-2">
                        <img src={ e.node.image.fixed.srcWebp } alt={ e.node.subTitle }/>
                      </div>
                      <div className="col-lg-10 col-md-10">
                        <span className="text-center">{ e.node.description.description }</span>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              ))
            :null }
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowWeWork
