import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from "../components/home/slider"
import MainCard from "../components/home/main-card"
import FocusCard from "../components/home/focus-card"
import HowWeWork from "../components/home/how-we-work"
import GetStarted from "../components/home/get-started"
import GetLatestUpdates from "../components/home/get-latest"

const IndexPage = ({ pageContext }) =>{
  return (
    <Layout>
      <SEO
        title={ pageContext.seo.title }
        currentPage={ '' }
        description={ pageContext.seo.description }
        keywords={ pageContext.seo.keywords }
      />
      <Slider />
      <MainCard data={ pageContext.mainCard } />
      <FocusCard data={ pageContext.focusCard } />
      <GetStarted/>
      <HowWeWork data={ pageContext.whatWeWork } />
      <GetLatestUpdates/>
    </Layout>
  )
}

export default IndexPage
