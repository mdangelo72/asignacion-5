const route = require("express").Router();
const noticiaController = require("../controllers/noticias.controller");

module.exports = (app) => {
  route.get("/", noticiaController.obtenerAllnoticias);
  route.post("/crear-noticia", noticiaController.crearNoticia);

  app.use("/api/noticia", route);
};