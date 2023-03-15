module.exports = (miconexion, Sequelize) => {
    const noticia = miconexion.define(
      "noticia",
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        titulo : {
          type: Sequelize.STRING,
        },
        autor : {
          type: Sequelize.STRING,
        },
        fecha : {
          type: Sequelize.INTEGER,
        },
        descripcion : {
          type: Sequelize.STRING,
        },
      },
      {
        tableName: "noticia",
      }
    );
  
    return noticia;
  };