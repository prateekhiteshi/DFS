import React from 'react'
import './work-cost.css'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types';

const WorkCost = ({ howWeWork, cost })=>{

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) =>{

        if(children && children[0] === "")
          return <p className="text-white">.</p>
        else if(children && children[0] === "Min Cost")
          return <p className="martb10"><strong>{ children }</strong></p>
        else if(children && children[0] && children[0].type === "b")
          return <p className="martb10"><strong>{ children }</strong></p>
        else
          return <p>{ children }</p>
      },
    }
  }

  return (
    <div className="container work-cost">
      <h4 className="text-center">How We <span className="focus">Work</span></h4>
      <p className="text-center">Technology that supports ypur customer journey</p>
      <div className="row martop">
        { howWeWork.cards.length>0?
          howWeWork.cards.map((e, i)=>(
            <div className="col-lg-3 col-md-3 text-center" key={ i }>
              <img src={ e.image.src } alt={ e.content } />
              <p className="text-center">{ e.content }</p>
            </div>
          ))
        :null }
      </div>
      <div className="row cost">
        <div className="col-lg-6 col-md-6">
          <h4 className="focus text-left">Cost</h4>
          <div className="cost-content text-left">{ documentToReactComponents(cost.content) }</div>
        </div>
        <div className="col-lg-6 col-md-6 martop20">
        <div className="row">
          { cost.cards && cost.cards.length>0?
            cost.cards.map((e, i)=>(
              <div className="col-md-4" key={ i }>
                <div className="card">
                  <div className="card-body text-center">
                    { documentToReactComponents(e, options) }
                  </div>
                </div>
              </div>
            ))
          :null }
        </div>
        </div>
      </div>
      <div className="text-center book">
        <h4 className="text-center">What you wating for?</h4>
        <button className="btn btn-styled">Book A Call Now</button>
      </div>
    </div>
  )
}

export default WorkCost
