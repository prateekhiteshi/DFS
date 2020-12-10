import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import './services.css'
import Breadcrumb from "../components/breadCrumb"
import Banner from "../components/services/banner"
import Banner2 from "../components/services/banner2"
import ServicesImage from "../components/services/services-image"
import ServicerImageExtended from "../components/services/service-image-extended"
import Benifites from "../components/services/benifites"
import Covered from "../components/services/covered"
import ServiceAvailable from "../components/services/service-available"
import WorkCost from "../components/services/work-cost"
import GetLatestUpdates from "../components/home/get-latest"

const ServiceTemplate = ({ pageContext }) =>{

  return (
    <Layout>
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
    </Layout>
  )
}

export default ServiceTemplate
