const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const db = require('./models');
const noticia = require("./controllers/noticias.controller");
// const { noticia } = require('./models');
const port = 3000

app.set("view engine", "hbs");
app.use(bodyParser());

app.use(express.static('public'))


db.miconexion.sync();


// Esta funcion llama al HTML Students y carga todos los estudiantes en pantalla
app.get("/", async (req, res) => {
  const allnoticias = await noticia.obtenerAllnoticias();
  res.render("principal", {
    noticia: allnoticias,
  });
});




// Se llama a la funcion Crear Estudiante, cuando el usuario preciona boton para crear
app.post("/get-noticia", async (req, res) => {
  const objnoticia = req.body;
  const response = await noticia.crearNoticia(objnoticia);
  if (response === true) {
    res.redirect("/");
  }
});



// habilita el puerto 3000 , para escuchar
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})