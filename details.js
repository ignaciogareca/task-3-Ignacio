let eventos = data.events;

const queryString = location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

let tarjeta = eventos.find(item => item._id == id)

const div = document.getElementById("container")
div.innerHTML = `
                <div class="card rounded-4 cartaGrande" style="width: 16rem; height: 23rem;">
                <img src="${tarjeta.image}" class="card-img-top" alt="FeriaDeComidas">
                <div class="card-body">
                    <h5 class="card-title text-center">${tarjeta.name}</h5>
                    <p class="card-text text-center">${tarjeta.description}</p>
                    <p class="card-text"><span class="fw-bold" >Date</span>: ${tarjeta.date}</p>
                    <p class="card-text"><span class="fw-bold" >Category</span>: ${tarjeta.category}</p>
                    <p class="card-text"><span class="fw-bold" >Place</span>: ${tarjeta.place}</p>
                    <p class="card-text"><span class="fw-bold" >Capacity</span>: ${tarjeta.capacity}</p>
                    <p class="card-text"><span class="fw-bold" >Assistance</span>: ${tarjeta.assistance}</p>
                    <p class="card-text"><span class="fw-bold" >Price</span>: ${tarjeta.price}</p>
                </div>
                </div>`