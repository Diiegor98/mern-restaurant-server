const Menu = require("../models/menu");
const image = require("../utils/image");

//Crear menu
async function createMenu(req, res) {
  const menu = new Menu(req.body);

  //Url de la imagen
  if (req.files.image) {
    const imagePath = image.getPathImage(req.files.image);
    menu.image = imagePath;
  }

  //Guarda en DB
  try {
    await menu.save();
    res.status(200).send({ msg: "Menu guardado" });
  } catch (error) {
    res.status(400).send({ msg: "Error al crear el menu" });
  }
}

module.exports = {
  createMenu,
};
