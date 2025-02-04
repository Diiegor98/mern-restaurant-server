const express = require("express");

//Controller (logica)
const MenuController = require("../controllers/menu");

//Enrutador
const api = express.Router();

//Middleware Connect-Multiparty
const multiparty = require("connect-multiparty");
const md_upload = multiparty({ uploadDir: "./uploads/menu" });

//Ruta para registro y su controller
api.post("/menu", [md_upload], MenuController.createMenu);

module.exports = api;
