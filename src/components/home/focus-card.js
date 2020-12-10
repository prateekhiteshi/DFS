import React from 'react'
import './focus-card.css'

const FocusCard = ({ data })=>{

  const formatStr = (str)=>{
    if(str){
      const strArr = str.split(', ')
      return (
        <React.Fragment>
        { strArr && strArr.length>0?
          strArr.map((e, i)=>(
            <p>{ e }</p>
          ))
        :null }
        </React.Fragment>
      )
    }
    return ''
  }
  return (
    <div className="focus-card">
      <div class="row justify-content-center">
        <div class="col-5">
          <div class="head-txt text-center mb-50">
            <h2>We focus on helping you get the best value</h2>
          </div>
        </div>
      </div>
      <div class="row">
        { data && data.length>0?
          data.map((e, i)=>(
            <div className="col-lg-4 col-md-4" key={ i }>
              <div className="card extraShadow">
                <div className="card-body">
                  <h4>{ e.node.subTitle }</h4>
                  <div>{ formatStr(e.node.description.description) }</div>
                </div>
              </div>
            </div>
          ))
        :null }
      </div>
    </div>
  )
}

export default FocusCard
