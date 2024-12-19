const express = require("express");

//Controller (logica)
const AuthController = require("../controllers/auth");

//Enrutador
const api = express.Router();

//Ruta para registro y su controller
api.post("/auth/register", AuthController.register);
//Ruta para login y su controller
api.post("/auth/login", AuthController.login);

module.exports = api;
