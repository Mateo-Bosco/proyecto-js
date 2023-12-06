const productos = [
    {
        id: 1,
        nombre: "Playstation",
        precio: 20,
        img:
            "https://i.pinimg.com/564x/c1/96/4c/c1964c7d6611e6c6858c386d17797e13.jpg",
    },
    {
        id: 2,
        nombre: "Xbox",
        precio: 20,
        img:
            "https://i.pinimg.com/564x/25/b5/cb/25b5cb36cf1bf98fe957696ab9896eba.jpg",
    },
    {
        id: 3,
        nombre: "Steam",
        precio: 20,
        img:
            "https://i.pinimg.com/564x/9d/5d/95/9d5d9507e55b5ee501c154d02996acad.jpg",
    },
    {
        id: 4,
        nombre: "Google play",
        precio: 50,
        img:
            "https://i.pinimg.com/564x/17/7e/54/177e546331aae7719c5dae765b11a1b3.jpg",
    },
];

let carrito = [];

productos.forEach((product)=>{
    let content = document.createElement("div");
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p>${product.precio} $USD</p>
    `
});