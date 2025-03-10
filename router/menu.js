const express = require("express");

//Controller (logica)
const MenuController = require("../controllers/menu");

//Enrutador
const api = express.Router();

//Middleware Cloudinary
const upload = require("../middlewares/upload");

//Ruta para crear un menu y su controller
api.post("/menu", upload.single("image"), MenuController.createMenu);
//Ruta obtener todos los menus
api.get("/menus", MenuController.getMenus);
//Ruta actualizar un menu
api.put("/menu/:id", upload.single("image"), MenuController.updateMenu);
//Ruta eliminar un menu
api.delete("/menu/:id", MenuController.deleteMenu);
//Buscar un menu
api.get("/menu/:category", MenuController.searchMenuByCategory);


module.exports = api;
