import React from 'react'
import './slider.css'
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const SubMenuPath = ({ left })=>(
  <div style={{ marginLeft: left }}>
    <div className="ver"></div>
    <div className="hor"></div>
  </div>
)

const Slider = ()=>{
  const count = ['', '', '', '', '', '', '', '', '', '', '', '', '']

  const data = useStaticQuery(graphql`
    query {
      allContentfulAsset(filter: {title: {regex: "/image/"}, node_locale: {eq: "en-US"}}) {
        edges {
          node {
            id
            title
            fluid {
              src
            }
            fixed(width: 520) {
              src
            }
          }
        }
      }
    }
  `)

  const filterImage = (title, type="fluid")=>{
    const image = data && data.allContentfulAsset?
      data.allContentfulAsset.edges.filter((e, i)=>{
        return e.node.title === title
      }): null
    return image && image.length>0?
      image[0].node[type].src : null
  }

  const sliderBG = filterImage('banner background image', 'fixed')

  const general = filterImage('Home page slider common image')

  return (
    <div className="slider-container" style={{
      backgroundImage: `url('${ sliderBG }')`,
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="container">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-lg-5 col-md-5">
                  <h1>Data & Digital Connect <br />Manage Services</h1>
                  <p>We help your business grow</p>
                  <Buttons btn={'/'} link={'/'} />
                </div>
                <div className="col-lg-1 col-md-1"></div>
                <div className="col-lg-6 col-md-6">
                  <img className="img-fluid" src={ filterImage('Home page slider image reports') } alt="slider img 1" />
                  <img className="img-fluid slider-img-bottom" src={ general } alt="general" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-lg-1 col-md-1"></div>
                <div className="col-lg-5 col-md-5">
                  <h1>Automation <br/>Service</h1>
                  <p>Connect your apps and automate workflows</p>
                  <Buttons btn={'/'} link={'/'} />
                </div>
                <div className="col-lg-6 col-md-6 slider-img">
                  <img className="img-fluid" src={ filterImage('Home page slider image data points') } alt="slider img 2" />
                  <img className="img-fluid slider-img-bottom" src={ general } alt="general" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-lg-1 col-md-1"></div>
                <div className="col-lg-5 col-md-5">
                  <h1>Shopify Services</h1>
                  <p>Setup • Support • Maintanence<br/>Migration • Customisation • Integration</p>
                  <Buttons btn={'/'} link={'/'} />
                </div>
                <div className="col-lg-6 col-md-6 slider-img">
                  <img className="img-fluid" src={ filterImage('Home page slider image online shopping') } alt="slider img 2" />
                  <img className="img-fluid slider-img-bottom" src={ general } alt="general" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-lg-1 col-md-1"></div>
                <div className="col-lg-5 col-md-5">
                  <h1>Value Engineering Service</h1>
                  <ul className="ver-hor">
                    <li>
                      <p>Engineering Value</p>
                    </li>
                    <li>
                    <SubMenuPath left="60px" />
                      <p>Cupturing Value</p>
                    </li>
                    <li>
                    <SubMenuPath left="120px" />
                      <p>Desiging Value </p>
                    </li>
                  </ul>
                  <Buttons btn={'/'} link={'/'} />
                </div>
                <div className="col-lg-6 col-md-6 slider-img">
                  <img className="img-fluid" src={ filterImage('Home page slider image value engineering service') } alt="slider img 2" />
                  <img className="img-fluid slider-img-bottom" src={ general } alt="general" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-lg-1 col-md-1"></div>
                <div className="col-lg-5 col-md-5">
                  <h1>WooCommerce<br/> Special Offer</h1>
                  <p>Cloudways + Klavio + Abandon Cart Set Up</p>
                  <Buttons btn={'/'} link={'/'} />
                </div>
                <div className="col-lg-6 col-md-6 slider-img">
                  <img className="img-fluid" src={ filterImage('Home page slider image woocommerce') } alt="slider img 2" />
                  <img className="img-fluid slider-img-bottom" src={ general } alt="general" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-lg-1 col-md-1"></div>
                <div className="col-lg-5 col-md-5">
                  <h1>Megento<br/>Special Offer</h1>
                  <p>Cloudways + Klavio + Abandon Cart Set Up</p>
                  <Buttons btn={'/'} link={'/'} />
                </div>
                <div className="col-lg-6 col-md-6 slider-img">
                  <img className="img-fluid" src={ filterImage('Home page slider image megento') } alt="slider img 2" />
                  <img className="img-fluid slider-img-bottom" src={ general } alt="general" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-lg-1 col-md-1"></div>
                <div className="col-lg-5 col-md-5">
                  <h1>Special Offer Wordpress<br/> +WooCommerce</h1>
                  <p>Free for Migration</p>
                  <Buttons btn={'/'} link={'/'} />
                </div>
                <div className="col-lg-6 col-md-6 slider-img">
                  <img className="img-fluid" src={ filterImage('Home page slider image wordpress woocommerce') } alt="slider img 2" />
                  <img className="img-fluid slider-img-bottom" src={ general } alt="general" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-lg-1 col-md-1"></div>
                <div className="col-lg-5 col-md-5">
                  <h1>Lead Generation<br/>Plateform & Service</h1>
                  <p>Oue Solution and service - insurance for sales object</p>
                  <Buttons btn={'/'} link={'/'} />
                </div>
                <div className="col-lg-6 col-md-6 slider-img">
                  <img className="img-fluid" src={ filterImage('Home page slider image lead generation') } alt="slider img 2" />
                  <img className="img-fluid slider-img-bottom" src={ general } alt="general" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-lg-1 col-md-1"></div>
                <div className="col-lg-5 col-md-5">
                  <h1>Guaranteed<br/>Inprovment</h1>
                  <p>We will guarantee improvment and ROI</p>
                  <Buttons btn={'/'} link={'/'} />
                </div>
                <div className="col-lg-6 col-md-6 slider-img">
                  <img className="img-fluid" src={ filterImage('Home page slider image QA engineers') } alt="slider img 2" />
                  <img className="img-fluid slider-img-bottom" src={ general } alt="general" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-lg-1 col-md-1"></div>
                <div className="col-lg-5 col-md-5">
                  <h1>Reasons For Justifying Any<br/>Digital Object</h1>
                  <ul className="ver-hor">
                    <li>
                      <p>Remove / Reduce cost</p>
                    </li>
                    <li>
                    <SubMenuPath left="60px" />
                      <p>New / Increase Revenue</p>
                    </li>
                    <li>
                    <SubMenuPath left="120px" />
                      <p>Remove / Reduce risk</p>
                    </li>
                    <li>
                    <SubMenuPath left="180px" />
                      <p>Seek commercial advantage</p>
                    </li>
                  </ul>
                  <Buttons btn={'/'} link={'/'} />
                </div>
                <div className="col-lg-6 col-md-6 slider-img">
                  <img className="img-fluid" src={ filterImage('Home page slider image maintenance') } alt="slider img 2" />
                  <img className="img-fluid slider-img-bottom" src={ general } alt="general" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-lg-1 col-md-1"></div>
                <div className="col-lg-5 col-md-5">
                  <h1>What Do We Do</h1>
                  <ul className="ver-hor">
                    <li>
                      <p>We help clients grow there revenue</p>
                    </li>
                    <li>
                    <SubMenuPath left="60px" />
                      <p>We develope process capability</p>
                    </li>
                    <li>
                    <SubMenuPath left="120px" />
                      <p>Our services cover the complete</p>
                    </li>
                    <li>
                    <SubMenuPath left="180px" />
                      <p>Life cycle of a project</p>
                    </li>
                  </ul>
                  <Buttons btn={'/'} link={'/'} />
                </div>
                <div className="col-lg-6 col-md-6 slider-img">
                  <img className="img-fluid" src={ filterImage('Home page slider image what do we do') } alt="slider img 2" />
                  <img className="img-fluid slider-img-bottom" src={ general } alt="general" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-lg-1 col-md-1"></div>
                <div className="col-lg-5 col-md-5">
                  <h1>Type Of Value Improvment<br/>Project We Target</h1>
                  <p>
                    <ul>
                      <li>Value protection - easier to locate and project low to middle-value returns</li>
                      <li>Value Enhancement - easier to locate and project - low to middle-value returns</li>
                      <li>Value Creation - more strategic but higher value returns</li>
                    </ul>
                  </p>
                  <Buttons btn={'/'} link={'/'} />
                </div>
                <div className="col-lg-6 col-md-6 slider-img">
                  <img className="img-fluid" src={ filterImage('Home page slider image moving forward') } alt="slider img 2" />
                  <img className="img-fluid slider-img-bottom" src={ general } alt="general" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-lg-1 col-md-1"></div>
                <div className="col-lg-10 col-md-10 text-center">
                  <h1>Customer Journey</h1>
                  <p>We Focus Helping You To Get The Best Value</p>
                  <img className="img-fluid slider-img-bottom" src={ general } alt="general" />
                </div>
              </div>
            </div>
          </div>
          <ol className="carousel-indicators">
            { data?
               count.map((e, i)=>(
                 <li data-target="#carouselExampleIndicators" data-slide-to={ i } key={ i } className={ i===0? 'active': null }></li>
               ))
             :null }
          </ol>
        </div>
      </div>
    </div>
  )
}

const Buttons = ({ btn, link })=>(
  <div>
    <div className="get-start">
      <Link className="btn" to={ btn }>Get started</Link>
      <Link className="link" to={ link }>Learn More</Link>
    </div>
  </div>
)

export default Slider
