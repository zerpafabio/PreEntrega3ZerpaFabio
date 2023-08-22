let usuario;
let usuarioStorage = sessionStorage.getItem("usuario");

if (usuarioStorage) {
   usuario = usuarioStorage;
   alert(`Que bueno verte de nuevo ${usuario}`);
} else {
   usuario = prompt("Ingrese el usuario");
   sessionStorage.setItem("usuario", usuario);
   alert(`Bienvenido por primera vez ${usuario}`);
}

let container = document.getElementById("container");

const productos = [
   { id: 1, nombre: "Hostal Premium", precio: 12000, observacion:"Pension Completa" },
   { id: 2, nombre: "Hostal Estandar", precio: 80000, observacion:"Media Pension" },
   { id: 3, nombre: "Hostal familiar", precio: 5000, observacion:"Solo incluye desayuno" },
];

const reserva= (id) => {
   let producto = productos.find((item) => item.id === id);
   let mensaje = `
     Id: ${producto.id}
     Nombre: ${producto.nombre}
     precio:${producto.precio}
     observacion:${producto.observacion}
   `;
   alert(mensaje); 
   let mensajes =`
   SE RESERVO ESTE HOSTAL, MONTO FINAL ${producto.precio} +IVA. MUCHAS GRACIAS
   `;
   alert(mensajes);
}
productos.forEach((item) => {
   let div = document.createElement("div");
   div.innerHTML = `
     <h2>Id: ${item.id}</h2>
     <p>Nombre: ${item.nombre}</p>
     $${item.precio}
     ${item.observacion}
     <button id="boton${item.id}">Reservar</button>
   `;
   container.append(div);  
   let boton = document.getElementById(`boton${item.id}`);
   boton.addEventListener("click", () => reserva(item.id));
});

alert('Bienvenido a El cielo en Pumamarca');
