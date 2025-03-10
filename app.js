const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//Variables de entorno
require("dotenv").config();
const apiVersion = process.env.API_VERSION;

//Cloudinary
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

//Inicializamos express
const app = express();

//Config Header HTTP - CORS
app.use(cors());

//Importar rutas
const authRoutes = require("./router/auth");
const userRoutes = require("./router/user");
const menuRoutes = require("./router/menu");
const orderRoutes = require("./router/order");

//Config Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Configurar rutas
app.use(`/api/${apiVersion}`, authRoutes);
app.use(`/api/${apiVersion}`, userRoutes);
app.use(`/api/${apiVersion}`, menuRoutes);
app.use(`/api/${apiVersion}`, orderRoutes);

module.exports = app;
