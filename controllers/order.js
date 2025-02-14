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
async function updateOrder(req, res) {
  //Id de la order que voy a actualizar
  const { id } = req.params;

  //Nuevos datos de la order
  const order = req.body;

  //Actualizar order
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { $set: order },
      { new: true, omitUndefined: true } // Retorna el nuevo documento sin sobrescribir los valores no enviados
    );
    res
      .status(200)
      .send({ msg: "Se actualizo correctamente", order: updatedOrder });
  } catch (error) {
    res.status(400).send({ msg: "Error al actualizar" });
  }
}

module.exports = {
  getOrders,
  updateOrder,
};
