/****************************************************************************************************************
  Filter Functions
****************************************************************************************************************/
const filterHomeData = (homeData, str) => {
  return homeData.data.allContentfulDfsHomePage.edges.filter((e) => {
    return e.node.title1 === str && e.node.node_locale === 'en-US'
  })
}

const filterServiceData = (data, commonHowWeWork, commonServicesAvailable, servicesCosts) => {
  const cms = data.node

  const serviceTitle = cms.serviceTitle
  const pageTitle = cms.pageTitle
  const slug = cms.slug

  const banner = {
    title: JSON.parse(cms.bannerTitle.raw),
    content: JSON.parse(cms.bannerContent.raw),
    leftImage: cms.bannerLeftImage.fixed,
    rightImage1: cms.bannerRightImage1.fixed,
    rightImage2: cms.bannerRightImage2.fixed
  }
  const services = {
    title: JSON.parse(cms.serviceDetailTitle.raw),
    content: JSON.parse(cms.serviceDetailContent.raw),
    images: cms.serviceDetailImages
  }
  const benefits = {
    content: JSON.parse(cms.benefitsContent.raw)
  }
  const scope = {
    content: JSON.parse(cms.scopeOurValueContent.raw),
    image: cms.scopeOurValueImage.fixed
  }
  const covered = {
    content: JSON.parse(cms.whatsCoveredContent.raw)
  }
  const extensions = {
    content: JSON.parse(cms.extensionsContent.raw)
  }

  const availableCard = commonServicesAvailable.edges.map((e)=>{
    return {
      content: e.node.typeOfServiceAvailable,
      image: e.node.typeOfServiceAvailableImage.fixed
    }
  })

  const serviceAvailable = {
    cards: availableCard
  }

  const workCard = commonHowWeWork.edges.map((e)=>{
    return {
      content: e.node.howWeWorkTitle,
      image: e.node.howWeWorkImage.fixed
    }
  })

  const howWeWork = {
    cards: workCard
  }

  const cost = {
    content: JSON.parse(servicesCosts.servicesWhyServices.raw),
    cards: [
      JSON.parse(servicesCosts.servicesCostCard1.raw),
      JSON.parse(servicesCosts.servicesCostCard2.raw),
      JSON.parse(servicesCosts.servicesCostCard3.raw)
    ]
  }

  return {
    slug,
    serviceTitle,
    pageTitle,
    banner,
    services,
    benefits,
    scope,
    covered,
    extensions,
    serviceAvailable,
    howWeWork,
    cost
  }
}

const filter2ndServiceData = (data, commonHowWeWork, commonServicesAvailable, servicesCosts) => {
  const cms = data.node

  const serviceTitle = cms.serviceTitle
  const pageTitle = cms.pageTitle
  const slug = cms.slug

  const banner = {
    title: JSON.parse(cms.bannerTitle.raw),
    bannerGrid1: JSON.parse(cms.bannerGrid1.raw),
    bannerGrid2: JSON.parse(cms.bannerGrid2.raw),
    bannerGrid3: JSON.parse(cms.bannerGrid3.raw),
    bannerImages: cms.bannerImages
  }

  const services = {
    title: JSON.parse(cms.serviceDetailTitle.raw),
    content: JSON.parse(cms.serviceDetailContent.raw),
    images1: cms.serviceDetailImages1,
    images2: cms.serviceDetailImages2,
    images3: cms.serviceDetailImages3,
  }
  const benefits = {
    content: JSON.parse(cms.benefitsContent.raw)
  }
  const scope = {
    content: JSON.parse(cms.scopeOurValueContent.raw),
    image: cms.scopeOurValueImage.fixed
  }
  const covered = {
    content: JSON.parse(cms.whatsCoveredContent.raw)
  }
  const extensions = {
    content: JSON.parse(cms.extensionsContent.raw)
  }
  const availableCard = commonServicesAvailable.edges.map((e)=>{
    return {
      content: e.node.typeOfServiceAvailable,
      image: e.node.typeOfServiceAvailableImage.fixed
    }
  })

  const serviceAvailable = {
    cards: availableCard
  }

  const workCard = commonHowWeWork.edges.map((e)=>{
    return {
      content: e.node.howWeWorkTitle,
      image: e.node.howWeWorkImage.fixed
    }
  })

  const howWeWork = {
    cards: workCard
  }

  const cost = {
    content: JSON.parse(servicesCosts.servicesWhyServices.raw),
    cards: [
      JSON.parse(servicesCosts.servicesCostCard1.raw),
      JSON.parse(servicesCosts.servicesCostCard2.raw),
      JSON.parse(servicesCosts.servicesCostCard3.raw)
    ]
  }

  return {
    slug,
    serviceTitle,
    pageTitle,
    banner,
    services,
    benefits,
    scope,
    covered,
    extensions,
    serviceAvailable,
    howWeWork,
    cost
  }
}

const filterTechData = (techData, title) => {
  return techData.data.allContentfulDfsTechnologyPage.edges.filter((item) => {
    return item.node.title === title
  })
}

const filterSEO = (seoData, id) => {
  const seo = seoData.data.allContentfulSeoMetaData.edges.filter((item) => {
    return item.node.id === id
  })

  if(seo && seo.length>0){
    const { seoMetadata1, seoMetData2, seoMetData3Keywords } = seo[0].node
    return {
      title: seoMetadata1,
      keywords: seoMetData2,
      description: seoMetData3Keywords
    }
  }
  return {
    title: '',
    keywords: '',
    description: ''
  }
}

const filterSEO2 = (seoData, title) => {
  const seo = seoData.data.allContentfulSeoMetaData.edges.filter((item) => {
    return item.node.seoMetadata1.indexOf(title.toLowerCase()) > -1
  })

  if(seo && seo.length>0){
    const { seoMetadata1, seoMetData2, seoMetData3Keywords } = seo[0].node
    return {
      title: seoMetadata1,
      keywords: seoMetData2,
      description: seoMetData3Keywords
    }
  }
  return {
    title: '',
    keywords: '',
    description: ''
  }
}

module.exports = {
  filterHomeData,
  filterServiceData,
  filter2ndServiceData,
  filterTechData,
  filterSEO,
  filterSEO2
}
