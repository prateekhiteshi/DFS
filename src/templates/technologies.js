import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SmallBanner from '../components/banner/small-banner'
import Single from '../components/technologies/single'
import Multiple from '../components/technologies/multiple'
import './technology.css'

const TechnologiesPage = ({ pageContext: { technology, seo } })=>{

  return (
    <Layout>
      <SEO
        title={ seo.title }
        currentPage={ '/technologies' }
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
        { technology.map((e, i)=>(
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
       }
      </div>
    </Layout>
  )
}

export default TechnologiesPage
