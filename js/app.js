// download current prices from yahoo finance using d3.js and plain javascript
function getPets() {
  d3.json("js/data.json")
    .then(showPets);
};


function showPets(data){
  let ul = document.getElementById("pets");
  data.forEach(pet => {
    let li = document.createElement("li");
    li.innerText = pet.name;
    ul.append(li);
  });
}
