/* Manejo del DOM */
const rickData = window.RICKANDMORTY.results;
console.log(rickData);

const container = document.getElementById("root");
document.getElementById("rickandmorty-p").addEventListener("change", () => {
let speciesFilter=document.getElementById("rickandmorty-p").value;
console.log(speciesFilter);

const result = filterData(rickData,speciesFilter);
console.log(result);
  container.innerHTML = "";
  result.forEach(element => {
    container.innerHTML += `
    <div class="flip-card">
<div class="flip-card-inner">

 <div class="flip-card-front">
   <img id="img-card" src=${element.image} alt="Imagen">
   <h4>${element.name}</h4> 
   <p>${element.status}</p>
   <p>${element.species}</p>
   <p>${element.type}</p>
   <p>${element.gender}<p>
  </div>


</div>
</div>`

})
})


//console.log(speciesFilter);
//ßconsole.log(window.rickAndMortyP(rickData, speciesFilter));
//console.log(result);
//let lastrResult= window.FilterSpecies(rickData,speciesFilter);

    

