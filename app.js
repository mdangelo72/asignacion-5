const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./models");
const port = 3000


db.miconexion.sync();

app.use(bodyParser());


require("./routes/noticia.routes")(app);

// habilita el puerto 3000 , para escuchar
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})