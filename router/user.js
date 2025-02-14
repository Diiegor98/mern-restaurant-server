const express = require("express");

//Middleware Auth
const md_auth = require("../middlewares/authenticated");

//Controller (logica)
const UserController = require("../controllers/user");

//Enrutador
const api = express.Router();

//Ruta para registro y su controller
api.get("/user/me", [md_auth.mdAuth], UserController.getUser);

//Ruta para obtener todos los usuarios
api.get("/users", UserController.getUsers);

//Ruta para actualizar un usuario
api.put("/user/:id", UserController.updateUser)

module.exports = api;
