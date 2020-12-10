const path = require('path');
const { homeQuery, serviceQuery, technologyQuery, contactUsQuery, seoQuery } = require('./queries');
const { filterHomeData, filterServiceData, filter2ndServiceData, filterTechData, filterSEO, filterSEO2 } = require('./filter-func');

/****************************************************************************************************************
  Create Pages API
****************************************************************************************************************/
module.exports.createPages = async ({ graphql, actions })=>{
  const { createPage } = actions

  const seoData = await graphql(seoQuery)

  /****************************************************************************************************************
    Create Home Page
  ****************************************************************************************************************/
  const homeData = await graphql(homeQuery)

  const homeContext = {
    seo: filterSEO(seoData, '2774422b-686c-5c6f-b598-28f27225956b'),
    mainCard: filterHomeData(homeData, 'Main Card'),
    focusCard: filterHomeData(homeData, 'Focus Card'),
    whatWeWork: filterHomeData(homeData, 'What We Work')
  }

  createPage({
    component: path.resolve('./src/templates/index.js'),
    path: '/',
    context: homeContext
  })

  createPage({
    component: path.resolve('./src/templates/index.amp.js'),
    path: '/amp/',
    context: homeContext
  })

  /****************************************************************************************************************
    Create Service Pages
  ****************************************************************************************************************/
  const serviceData = await graphql(serviceQuery)

  const howWeWork = serviceData.data.allContentfulDfsServicesPageHowWeWorkSection;
  const servicesAvailable = serviceData.data.allContentfulDfsServicesPageServicesAvailable;
  const servicesCosts = serviceData.data.allContentfulDfsServicesCosts.edges[0].node;

  serviceData.data.allContentfulDfsServicesContent.edges.forEach((edge, index)=>{
    const serviceData = filterServiceData(edge, howWeWork, servicesAvailable, servicesCosts)
    const seo = filterSEO2(seoData, edge.node.pageTitle)

    createPage({
      component: path.resolve('./src/templates/service.js'),
      path: serviceData.slug,
      context: { ...serviceData, seo: seo }
    })

    createPage({
      component: path.resolve('./src/templates/service.amp.js'),
      path: `${ serviceData.slug }/amp/`,
      context: { ...serviceData, seo: seo }
    })
  })

  const serviceDataHeadless = serviceData.data.allContentfulDfsServicesContentSecondModel.edges[0];

  const serviceHeadlessData = filter2ndServiceData(serviceDataHeadless, howWeWork, servicesAvailable, servicesCosts)
  const seo = filterSEO2(seoData, serviceDataHeadless.node.pageTitle)

  createPage({
    component: path.resolve('./src/templates/service.js'),
    path: serviceHeadlessData.slug,
    context: { ...serviceHeadlessData, seo: seo }
  })

  createPage({
    component: path.resolve('./src/templates/service.amp.js'),
    path: `${ serviceHeadlessData.slug }/amp/`,
    context: { ...serviceHeadlessData, seo: seo }
  })

  /****************************************************************************************************************
    Create Technology Page
  ****************************************************************************************************************/
  const technologyData = await graphql(technologyQuery)

  const tech = technologyData.data.allContentfulDfsTechnologyPage

  let technology = []

  for (let i = 0; i < tech.edges.length; i++) {
    if(tech.edges[i].node.subtitle){
      const temp = tech.edges.filter((e) => {
        return e.node.title === tech.edges[i].node.title
      })
      i += temp.length
      technology.push(temp)
    }else
      technology.push(tech.edges[i])
  }

  const techSeo = filterSEO(seoData, '16a7988c-81b6-5f33-9027-213ef091f160')

  createPage({
    component: path.resolve('./src/templates/technologies.js'),
    path: '/technologies',
    context: { technology: technology, seo: techSeo }
  })

  createPage({
    component: path.resolve('./src/templates/technologies.amp.js'),
    path: '/technologies/amp/',
    context: { technology: technology, seo: techSeo }
  })

  /****************************************************************************************************************
    Create Contact Us Page
  ****************************************************************************************************************/
  const contactUsData = await graphql(contactUsQuery)

  const contactUs = contactUsData.data.allContentfulContactUs.edges[0]

  const contactUsSeo = filterSEO(seoData, '')

  createPage({
    component: path.resolve('./src/templates/contact.js'),
    path: '/contact',
    context: { contactUs: contactUs, seo: contactUsSeo }
  })

  createPage({
    component: path.resolve('./src/templates/contact.amp.js'),
    path: '/contact/amp/',
    context: { contactUs: contactUs, seo: contactUsSeo }
  })
}
