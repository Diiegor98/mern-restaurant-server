const Menu = require("../models/menu");
const { getPathImage } = require("../utils/image");

async function createMenu(req, res) {
  if (!req.files || !req.files.image) {
    return res.status(400).send({ msg: "No se ha enviado la imagen" });
  }

  const { name, price, detail, category } = req.body;
  const { image } = req.files;


  // Obtener la ruta de la imagen
  const imagePath = getPathImage(image);

  const menu = new Menu({
    name,
    status: true,
    price,
    category,
    detail,
    image: imagePath,
  });

  try {
    await menu.save();
    res.status(200).send({ msg: "Menú guardado correctamente" });
  } catch (error) {
    console.error("❌ Error al crear el menú:", error);
    res.status(400).send({ msg: "Error al crear el menú", error });
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
  if (req.files && req.files.image) {
    const imagePath = getPathImage(req.files.image);
    menu.image = imagePath;
  }

  //Actualizar menu
  try {
    const updatedMenu = await Menu.findByIdAndUpdate(
      id,
      { $set: menu },
      { new: true, omitUndefined: true } // Retorna el nuevo documento sin sobrescribir los valores no enviados
    );
    res
      .status(200)
      .send({ msg: "Menú actualizado correctamente", menu: updatedMenu });
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

//Buscar un menu por categoría
async function searchMenuByCategory(req, res) {
  const { category } = req.params;

  try {
    const menu = await Menu.find({ category: category });
    res.status(200).send(menu);
  } catch (error) {
    res.status(400).send({ msg: `Categoría no encontrada` });
  }
}

module.exports = {
  createMenu,
  getMenus,
  updateMenu,
  deleteMenu,
  searchMenuByCategory,
};
