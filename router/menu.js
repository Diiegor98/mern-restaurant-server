const express = require("express");

//Controller (logica)
const MenuController = require("../controllers/menu");

//Enrutador
const api = express.Router();

//Middleware Connect-Multiparty
const multiparty = require("connect-multiparty");
const md_upload = multiparty({ uploadDir: "./uploads/menu" });

//Ruta para crear un menu y su controller
api.post("/menu", [md_upload], MenuController.createMenu);
//Ruta obtener todos los menus
api.get("/menus", MenuController.getMenus);
//Ruta actualizar un menu
api.put("/menu/:id", [md_upload], MenuController.updateMenu);
//Ruta eliminar un menu
api.delete("/menu/:id", MenuController.deleteMenu);
//Buscar un menu
api.get("/menu/:id", MenuController.searchMenu)


module.exports = api;
