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

//Obtener menus
async function getMenus(req, res) {
  try {
    const menus = await Menu.find();
    res.status(200).send(menus);
  } catch (error) {
    res.status(400).send({ msg: "Error" });
  }
}

//Actualizar menu
async function updateMenu(req, res) {
  //Id del menu que voy a actualizar
  const { id } = req.params;

  //Nuevos datos del menu
  const menu = req.body;

  //Url de la imagen
  if (req.files.image) {
    const imagePath = image.getPathImage(req.files.image);
    menu.image = imagePath;
  }

  //Actualizar menu
  try {
    await Menu.findByIdAndUpdate({ _id: id }, menu);
    res.status(200).send({ msg: "Se actualizó correctamente" });
  } catch (error) {
    res.status(400).send({ msg: "Error al actualizar" });
  }
}

//Eliminar menu
async function deleteMenu(req, res) {
  const { id } = req.params;

  //Actualizar menu
  try {
    await Menu.findByIdAndDelete(id);
    res.status(200).send({ msg: "Se eliminó correctamente" });
  } catch (error) {
    res.status(400).send({ msg: "Error al eliminar" });
  }
}

module.exports = {
  createMenu,
  getMenus,
  updateMenu,
  deleteMenu,
};
