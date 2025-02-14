const User = require("../models/user");

//Obtener usuario a través del token
async function getUser(req, res) {
  const { user_id } = req.user;

  const user = await User.findById(user_id);

  if (!user) {
    res.status(400).send({ msg: "No se encontro el usuario" });
  } else {
    res.status(200).send(user);
  }
}

//Obtener todos los usuarios
async function getUsers(req, res) {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(200).send({ msg: `Error al cargar los usuarios` });
  }
}

//Actualizar usuario
async function updateUser(req, res) {
  //Id del user que voy a actualizar
  const { id } = req.params;

  //Nuevos datos del user
  const user = req.body;

  //Actualizar user
  try {
    console.log(user)
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: user },
      { new: true, omitUndefined: true } // Retorna el nuevo documento sin sobrescribir los valores no enviados
    );
    res
      .status(200)
      .send({ msg: "Se actualizo correctamente", user: updatedUser });
  } catch (error) {
    res.status(400).send({ msg: "Error al actualizar" });
  }
}

module.exports = {
  getUser,
  getUsers,
  updateUser
};
