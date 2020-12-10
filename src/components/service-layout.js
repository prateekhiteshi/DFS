import React from "react"
import Layout from "./layout"

import Benifites from "./services/benifites"
import Covered from "./services/covered"
import ServiceAvailable from "./services/service-available"
import WorkCost from "./services/work-cost"
import GetLatestUpdates from "./home/get-latest"

const ServicesLayout = ({ children }) =>{
  return (
    <Layout>
      <div>{children}</div>
      <Benifites />
      <Covered />
      <ServiceAvailable />
      <WorkCost />
      <GetLatestUpdates />
    </Layout>
  )
}

export default ServicesLayout
