import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import './services.css'
import Breadcrumb from "../components/breadCrumb"
import Banner from "../components/services/amp/banner"
import Banner2 from "../components/services/amp/banner2"
import ServicesImage from "../components/services/amp/services-image"
import ServicerImageExtended from "../components/services/amp/service-image-extended"
import Benifites from "../components/services/amp/benifites"
import Covered from "../components/services/amp/covered"
import ServiceAvailable from "../components/services/amp/service-available"
import WorkCost from "../components/services/amp/work-cost"
import GetLatestUpdates from "../components/home/get-latest"

const ServiceAMPTemplate = ({ pageContext }) =>{

  return (
    <Layout amp={ true }>
      <React.Fragment>
        <SEO
          title={ pageContext.seo.title }
          description={ pageContext.seo.description }
          keywords={ pageContext.seo.keywords }
          currentPage={ pageContext.slug }
        />
        { pageContext.banner.bannerGrid1?
          <Banner2
            pageData={ pageContext.banner }
          />
          :
          <Banner
            pageData={ pageContext.banner }
          />
        }
        <Breadcrumb
          title={ pageContext.pageTitle }
          links={[
            { title: pageContext.pageTitle, link: pageContext.slug }
          ]}
        />
        { pageContext.banner.bannerGrid1?
          <ServicerImageExtended pageData={ pageContext.services } />
          :
          <ServicesImage pageData={ pageContext.services } />
        }
        <Benifites
          benefits={ pageContext.benefits }
          scope={ pageContext.scope }
        />
        <Covered
          whatWeCovered={ pageContext.covered }
          extensions={ pageContext.extensions }
        />
        <ServiceAvailable pageData={ pageContext.serviceAvailable } />
        <WorkCost
          howWeWork={ pageContext.howWeWork }
          cost={ pageContext.cost }
        />
        <GetLatestUpdates />
      </React.Fragment>
    </Layout>
  )
}

export default ServiceAMPTemplate
