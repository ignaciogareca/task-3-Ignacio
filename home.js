const checkbox = document.getElementById( "checkboxs" )
const contcard = document.getElementById( "container" )
const searchBar = document.getElementById("search")
let eventos = data.events


console.log(checkbox);

const obtenerCategorias = ( evento ) => evento.category

const categorias = new Set(eventos.map( obtenerCategorias))
const arrayCategorias = Array.from(categorias)

console.log(categorias);

function crearCheckbox(categoria, contenedor){
    let template =""
    categoria.forEach(element => template +=`
    <label class="btn btn-primary active check " > 
        <input class="me-2" type="checkbox" value="${element}" name="" id="" checked autocomplete="off"> ${element}
    </label>
    
    `        
    );
    console.log(template);
    contenedor.innerHTML = template
}

crearCheckbox (arrayCategorias, checkbox)

function crearCartas( evento){
    let nombre = evento.name.split(" ").join("").toLowerCase()
    console.log(nombre);
    let div = document.createElement("div")
    div.className = "card cartita"
    div.innerHTML =`
    <img src="${evento.image}" class="card-img-top cardimg" alt="food-fair">
        <div class="card-body">
            <h5>${evento.name}</h5>
            <p class="card-text">${evento.description}</p>
            <div class="card-container">
            <p class="price">${evento.price}</p>
            <a class="info" href="./details.html" ?name=${evento.nombre}">More info</a>
            </div>
        </div>
    `
    return div
}

function mostrarCards (eventos, contenedor){
    contenedor.innerHTML = ""
    let fragment = document.createDocumentFragment()
    eventos.forEach(eventos => fragment.appendChild(crearCartas(eventos)))
    contenedor.appendChild ( fragment )
}
mostrarCards(eventos,contcard)

checkbox.addEventListener("change", (ev)=>{
    const checked = Array.from( document.querySelectorAll('input[type="checkbox"]:checked')).map(input =>input.value)
    const eventosfiltrados = filtrarEventos  ( eventos, checked )
    mostrarCards(eventosfiltrados,contcard)
})

function filtrarEventos(eventos,eventosSeleccionados){

    let filtrados = eventos.filter( evento => eventosSeleccionados.includes(evento.category) )
    return filtrados
}

function searchFilter(eventos, inputvalue){
    const fn = eventos => eventos.name
}

searchBar.addEventListener("keyup" , (e) =>{

    crearTarjetas(filtroSearch (filtrarPorChecked(eventos))) // doble filtro 1filtra x boton de checked y luego por la barra d ebusqueda
})

searchBar.addEventListener("submit" , (e) => e.preventDefault()) // como se comporta como un formulario le digo que no haga la recarga de la pagina


{/* <div class="card" style="width: 18rem;">
          <img src="./assets/images/Feria-de-comidas7.jpg" class="card-img-top cardimg" alt="food-fair">
          <div class="card-body">
            <h5>Festival of the collectivities</h5>
            <p class="card-text">Enjoy your favorite dishes from different countries in a unique event for the whole family.</p>
            <div class="card-container">
              <p class="price">price</p>
              <a class="info" href="#">More info</a>
            </div>
          </div>
        </div> */}


{/* <label class="btn btn-primary active" > 
        <input class="me-2" type="checkbox" value="" name="" id="" autocomplete="off"> categoria1
    </label>
 */}
/* let container = document.getElementById('container')

console.log(container);


for(let i = 0; i < data.events.length; i++){
    container.innerHTML += `
    <div class="main-container " id="container">
    <div class="card" style="width: 18rem;">
    <img src=${data.events[i].image} class="card-img-top cardimg" alt=${data.events[i].name}>
    <div class="card-body">
        <h5>${data.events[i].name}</h5>
        <p class="card-text">${data.events[i].description}</p>
        <div class="card-container">
        <p class="price">${data.events[i].price}</p>
        <a class="info" href="#">More info</a>
        </div>
    </div>
    </div>
    `
}

const cards = (data.events) (container.innerHTML += `
<div class="main-container " id="container">
<div class="card" style="width: 18rem;">
<img src=${data.events[i].image} class="card-img-top cardimg" alt=${data.events[i].name}>
<div class="card-body">
    <h5>${data.events[i].name}</h5>
    <p class="card-text">${data.events[i].description}</p>
    <div class="card-container">
    <p class="price">${data.events[i].price}</p>
    <a class="info" href="#">More info</a>
    </div>
</div>
</div>
` )
 */
