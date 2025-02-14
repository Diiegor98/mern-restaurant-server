const express = require("express");

//Controller (logica)
const OrderController = require("../controllers/order");

//Enrutador
const api = express.Router();

//Ruta para obtener todas las ordenes
api.get("/orders", OrderController.getOrders);

//Ruta para actualizar una orden
api.put("/order/:id", OrderController.updateOrder);

module.exports = api;
