fetch("/nuevo", {
    method: "POST",
    headers: {
            "Content-Type": "application/json"
        },
    body: JSON.stringify(nuevo)
}).then(function (nuevo){
    return respuesta.json();
}).then(function (datos){
    let nuevoProducto = {
        nombre,
        descripcion,
        img,
        precio,
    };
})

fetch("/")
  .then(function (respuesta) {
    return respuesta.json();
  })
  .then(function (datos) {
    let armarios = "";
    let sillas = "";
    let mesas = "";
    for (let i = 0; i < datos.armarios.length; i++) {
      armarios += `
            <h1>${datos.armarios[i].nombre}</h1>
            <p>Descripción: ${datos.armarios[i].descripcion}</p>
            <p>Precio: ${datos.armarios[i].precio}</p>
            <img src="${datos.armarios[i].img}" alt="" />
         `;
    }
    for (let i = 0; i < datos.sillas.length; i++) {
      sillas += `
        <h1>${datos.sillas[i].nombre}</h1>
        <p>Descripción: ${datos.sillas[i].descripcion}</p>
        <p>Precio: ${datos.sillas[i].precio}</p>
        <img src="${datos.sillas[i].img}" alt="" />
     `;
    }

    for (let i = 0; i < datos.mesas.length; i++) {
      mesas += `
        <h1>${datos.mesas[i].nombre}</h1>
        <p>Descripción: ${datos.mesas[i].descripcion}</p>
        <p>Precio: ${datos.mesas[i].precio}</p>
        <img src="${datos.mesas[i].img}" alt="" />
     `;
    }
    document.getElementById("div1").innerHTML = armarios + sillas + mesas;
  })