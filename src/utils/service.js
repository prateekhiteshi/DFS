export const filterImage = (data, title, type="fluid")=>{
  const image = data && data.allContentfulAsset?
    data.allContentfulAsset.edges.filter((e, i)=>{
      return e.node.title === title
    }): null
  return image && image.length>0?
    image[0].node[type].src : null
}
