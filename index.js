const express=require("express");
const app=express();

const almacen = require("./almacen.js");

app.use(express.static("public"));  
app.use(express.urlencoded({extended: false}));
app.use(express.json());  

app.get("/", function(req, res){  //petición GET para sacar todos los elementos del almacén
    res.send(almacen);
});

app.post("/nuevo", function(req, res){  //petición POST para introducir un nuevo producto
    let nombre = req.body.nombre;
    let descripcion = req.body.descripcion;
    let img = req.body.img;
    let precio = req.body.precio;
    let seccion = req.body.seccion;     //pedimos la seccion para saber dónde añadir el nuevo producto

    let productoNuevo = {               //creamos el objeto {productoNuevo}, con los datos anteriores
      nombre: nombre,
      descripcion: descripcion,
      img: img,
      precio: precio,
    };

    almacen[seccion].push(productoNuevo); //añadimos el objeto {productoNuevo} al almacén, en la sección que corresponde
    res.send(`Añadido`);
});

app.listen(3000);