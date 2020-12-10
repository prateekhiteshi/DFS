import React from "react"
import './multiple.css'

const Multiple = ({ title, images }) => (
  <div className="tech-main container">
    <h6>{ title }</h6>
    <div className="horizontal"></div>
    <table className="imgtable">
      { images && images.length>0?
        images.map((e, i)=>(
          <tr key={ i }>
            <td className="card-td">
              <div className="text-card">{ e.node.subtitle }</div>
            </td>
            <td>
              <div className="row mb5">
                { e.node.serviceImages.map((f, j)=>(
                  <div className="col-lg-2 col-md-2 plr">
                    <div className="img-card" key={ j }>
                      <img className="multiimg" src={ f.fixed.src } alt={ f.title } />
                    </div>
                  </div>
                ))}
              </div>
            </td>
          </tr>
        ))
      :null }
    </table>
  </div>
)

export default Multiple
