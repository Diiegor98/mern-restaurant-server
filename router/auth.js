const express = require("express");

//Controller (logica)
const AuthController = require("../controllers/auth");

//Enrutador
const api = express.Router();

//Definimos ruta POST y con su controller
api.post("/auth/register", AuthController.register);

module.exports = api;
