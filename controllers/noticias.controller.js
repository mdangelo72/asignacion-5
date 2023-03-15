const db = require("../models");
const noticia = db.noticia;

/// Funcion para retornar todos las noticias

exports.obtenerAllnoticias = async () => {
  const response = await noticia.findAll();
  if (response !== null) {
    return response;
  } else {
    return null;
  }
};

exports.crearNoticia = async (objnoticia) => {
  const response = await noticia.create({
    titulo: objnoticia.titulo,
    autor: objnoticia.autor,
    fecha: objnoticia.fecha,
    descripcion: objnoticia.descripcion,
  });

  if (response !== null) {
    return true;
  } else {
    return false;
  }
};