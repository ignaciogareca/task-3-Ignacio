const checkbox = document.getElementById( "checkboxs" )
const contcard = document.getElementById( "container" )
const searchBar = document.getElementById("search")

let eventos = data.events
const upcomingEvents = eventos.filter( events=> events.date >= data.currentDate)

console.log(checkbox);

const obtenerCategorias = ( evento ) => evento.category

const categorias = new Set(upcomingEvents.map( obtenerCategorias))
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

function mostrarCards (upcomingEvents, contenedor){
    contenedor.innerHTML = ""
    let fragment = document.createDocumentFragment()
    upcomingEvents.forEach(upcomingEvents => fragment.appendChild(crearCartas(upcomingEvents)))
    contenedor.appendChild ( fragment )
}
mostrarCards(upcomingEvents,contcard)

checkbox.addEventListener("change", (ev)=>{
    const checked = Array.from( document.querySelectorAll('input[type="checkbox"]:checked')).map(input =>input.value)
    const eventosfiltrados = filtrarEventos  ( upcomingEvents, checked )
    mostrarCards(eventosfiltrados,contcard)
})

function filtrarEventos(upcomingEvents,eventosSeleccionados){

    let filtrados = upcomingEvents.filter( evento => eventosSeleccionados.includes(evento.category) )
    return filtrados
}

function searchFilter(upcomingEvents, inputvalue){
    const fn = upcomingEvents => upcomingEvents.name
}

searchBar.addEventListener("keyup" , (e) =>{

    crearTarjetas(filtroSearch (filtrarPorChecked(eventos))) 
})

searchBar.addEventListener("submit" , (e) => e.preventDefault()) 