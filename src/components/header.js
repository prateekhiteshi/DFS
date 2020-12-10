import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import './header.css'

const Header = ({ services, amp }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAsset(filter: {title: {eq: "Navbar logo"}}) {
        edges {
          node {
            id
            fixed(width: 180) {
              src
              srcSet
            }
          }
        }
      }
    }
  `)

  const logo = data && data.allContentfulAsset?
    data.allContentfulAsset.edges[0].node.fixed: null

  return(
    <header className="main-header">
      <div className="top-header">
        <div className="container">
          <p>+44-01738-506283 | info@digitalflexsolutions.com</p>
        </div>
      </div>
      <div className="down-header">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-expand-md">
            <Link className="navbar-brand" to="/">
              { amp?
                <amp-img
                  src={ logo.src }
                  srcSet={ logo.srcSet }
                  alt="brand logo"
                  width="180"
                  height="56"
                >
                </amp-img>
              :
                <img src={ logo.src } alt="brand logo" />
              }
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav">
              <i class="fa fa-bars" aria-hidden="true"></i>
            </button>
            <div className="collapse navbar-collapse" id="main_nav">
              <ul className="navbar-nav ml-auto">
                <Li name="Home" link="/" />
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" onClick={ e=> e.preventDefault() } data-toggle="dropdown">Services</a>
                  <ul className="dropdown-menu dropdown-main service-drop">
                    { services.map((e, i)=>(
                      <li key={ i }>
                        { e.links && e.links.length>0 && e.serviceTitle !== e.links[0].node.pageTitle?
                          <React.Fragment>
                            <a className="dropdown-item" onClick={ e=> e.preventDefault() } href="/">{ e.serviceTitle } &raquo;</a>
                    		    <ul className="submenu dropdown-menu">
                              { e.links.map((f, g)=>(
                      		      <DropDownLi key={ g } name={ f.node.pageTitle } link={`${ f.node.slug }`} />
                              )) }
                            </ul>
                          </React.Fragment> :
                          <DropDownLi name={ e.links[0].node.serviceTitle } link={`${ e.links[0].node.slug }`} /> }
                  	  </li>
                    )) }
                  </ul>
                </li>
                <Li name="Technologies" link="/technologies" />
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#about" data-toggle="dropdown">About Us</a>
                    <ul className="dropdown-menu dropdown-main about-drop">
                      <DropDownLi name="Pay A Bill" link="/about-us" />
                      <DropDownLi name="About Company" link="/about-us/about-company" />
                    </ul>
                </li>
                <Li name="Contact Us" link="/contact" />
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

const Li = ({ name, link })=>(
  <li className="nav-item">
    <Link className="nav-link" to={ link }>{ name }</Link>
  </li>
)

const DropDownLi = ({ name, link })=>(
  <li>
    <Link className="dropdown-item" to={ link }>{ name }</Link>
  </li>
)

export default Header
