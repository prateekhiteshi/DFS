export const createRichText = (value, type='string') => {
  const structure = {
    content: [],
    data: {},
    nodeType: 'document'
  }

  if(type === 'array'){
    let pStr = {
      nodeType: "paragraph",
      data: {},
      content: []
    }
    const contentArray = value.map((e, i)=>{
      return {
        value: e,
        nodeType: "text",
        marks: [],
        data: {}
      }
    })

    pStr.content = contentArray
    structure.content = [pStr]
    return structure
  }

  return {
    content: [{
      nodeType: "paragraph",
      data: {},
      content: [{
        value: value,
        nodeType: "text",
        marks: [],
        data: {}
      }]
    }],
    data: {},
    nodeType: 'document'
  }
}

export const headerFunc = () => {
  return {
    "Authorization": `Bearer CFPAT-jZVZ6MBLCnwz1-WFKQZv7nJLvtqpMWAr_IuPMGznE7o`,
    "Content-Type": "application/vnd.contentful.management.v1+json",
    "X-Contentful-Content-Type": "contactUsEndUserSubmittedData"
  };
};
