const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//Variables de entorno
require("dotenv").config();
const apiVersion = process.env.API_VERSION;

//Inicializamos express
const app = express();

//Config Header HTTP - CORS
app.use(cors());

//Importar rutas
const authRoutes = require("./router/auth");
const userRoutes = require("./router/user");
const menuRoutes = require("./router/menu");

//Config Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Config Static Folders (Donde se suben todas las imagenes en nuestro server)
app.use(express.static("uploads"));

//Configurar rutas
app.use(`/api/${apiVersion}`, authRoutes);
app.use(`/api/${apiVersion}`, userRoutes);
app.use(`/api/${apiVersion}`, menuRoutes);

module.exports = app;
