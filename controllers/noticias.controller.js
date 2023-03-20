const db = require("../models");
const noticia = db.noticia;

/// Funcion para retornar todos las noticias


exports.obtenerAllnoticias = async (req, res) => {
  const response = await noticia.findAll();
  if (response !== null && response.length) {
    res.status(200).json({
      statusCode: 200,
      data: response,
      message: "Noticias listadas exitosamente",
      error: null,
    });
  } else {
    res.status(500).json({
      statusCode: 500,
      data: null,
      message: null,
      error: "No se encontraron noticias",
    });
  }
};


exports.crearNoticia = async (req,res) => {
  const obj=req.body;
  const response = await noticia.create(obj);
  if (response === true) {
    res.status(200).json({
      statusCode:200,
      data:null,
      message:"Noticia Creada",
      error: null,
    });    
  } else {
    res.status(500).json({
      statusCode:500,
      data:null,
      message:null,
      error: "Ocurrio error creando Noticia",
  })
}
};