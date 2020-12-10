import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SmallBanner from '../components/banner/small-banner'
import Single from '../components/technologies/amp/single'
import Multiple from '../components/technologies/amp/multiple'
import './technology.css'

const TechnologiesAMPPage = ({ pageContext: { technology, seo } })=>{

  return (
    <Layout amp={ true }>
      <SEO
        title={ seo.title }
        currentPage={ '/technologies/amp/' }
        description={ seo.description }
        keywords={ seo.keywords }
      />
      <SmallBanner
        title="Technologies"
        links={[
          { name: 'Home', link: '/' },
          { name: 'Technologies', link: '/technologies' }
        ]}
      />
      <div className="container tech">
        { technology && technology.length>0?
        technology.map((e, i)=>(
          <React.Fragment key={ i }>
            { e.node?
              <Single
                title={ e.node.title }
                images={ e.node.serviceImages }
              />
            :
              <Multiple
                title={ e[0].node.title }
                images={ e }
              />
            }
          </React.Fragment>
        ))
      :null }
      </div>
    </Layout>
  )
}

export default TechnologiesAMPPage
