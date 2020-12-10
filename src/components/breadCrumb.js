import React from 'react'
import { Link } from "gatsby"
import './breadcrumb.css'
const Breadcrumb = ({ title, links })=>{

  return (
    <div className="container-fluid">
      <div className="row breadcrumb1">
        <div className="col-lg-6 col-md-6 text-center">
          <h4>{ title }</h4>
        </div>
        <div className="col-lg-6 col-md-6 text-center">
          <ol className="breadcrumb-links">
            <li>
              <Link to="/">Home</Link>
              <span>  • </span>
            </li>
           { links && links.length>0?
             links.map((e, i)=>(
               <li key={ i }>
                <Link to={ e.link }>{ e.title }</Link>
                { i < links.length -1 ? <span>  • </span>: null }
               </li>
             ))
           :null }
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Breadcrumb
