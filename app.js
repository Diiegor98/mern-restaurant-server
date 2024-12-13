
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")

const app = express();

//Config Header HTTP - CORS
app.use(cors())

//Importar rutas
//...

//Config Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

//Config Static Folders (Donde se suben todas las imagenes en nuestro server)
app.use(express.static('uploads'))



//Config rutas
//...

module.exports = app;
