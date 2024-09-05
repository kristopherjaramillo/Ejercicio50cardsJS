let divData = document.getElementById("divData");

function getData() {
    fetch("https://freetestapi.com/api/v1/products", { method: "get" })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            createCards(data);
        })
        .catch((err) => console.log("existe un problema con la solicitud", err));
}
//Aqui va la funcción para crear las tarjetas del ejercicio

function createCards(products) {
    console.log(products.length);
    console.log(products[0].name);
    divData.innerHTML = "";
    products.forEach(product => {
        const card = `
        <div class="card" style="width: 18rem;">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.description}</p>
                <p class="card-price">Precio: ${product.price}</p>
            </div>
        </div>`;
        divData.innerHTML += card;
    });
}
getData()

