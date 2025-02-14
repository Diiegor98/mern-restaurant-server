const Order = require("../models/order");

//Obtenemos todas las ordenes
async function getOrders(req, res) {
  try {
    const orders = await Order.find();
    res.status(200).send(orders);
  } catch (error) {
    res.status(400).send({ msg: "Error" });
  }
}

//Actualizamos una orden


module.exports = {
    getOrders
}