const Sequelize = require("sequelize");

const miconexion = new Sequelize("noticiero", "root", "", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

const db = {};

db.miconexion = miconexion;
db.Sequelize = Sequelize;

db.noticia = require("./noticia.model")(miconexion, Sequelize);

module.exports = db;