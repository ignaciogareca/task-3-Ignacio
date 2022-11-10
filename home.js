let container = document.getElementById('container')

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
/* for(let i = 0; i < data.length; i++){
    console.log(i);
    container.innerHTML += `<div class="main-container " id="container">
    <div class="card" style="width: 18rem;">
    <img src="${data[i].image}" class="card-img-top cardimg" alt="${data[i].name}">
    <div class="card-body">
        <h5>"${data[i].name}"</h5>
        <p class="card-text">"${data[i].description}"</p>
        <div class="card-container">
        <p class="price">"${data[i].price}"</p>
        <a class="info" href="#">More info</a>
        </div>
    </div>
    </div>` 
}  */
