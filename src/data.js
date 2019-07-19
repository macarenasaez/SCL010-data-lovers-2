/* Manejo de data */

function filterData (data,species){
  let filterResult = data.filter(element =>{
    return element.species.includes(species)
  })
  return filterResult
}
window.filterData = filterData;