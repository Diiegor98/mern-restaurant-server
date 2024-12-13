//Modelo de usuario
const User = require("../models/user");

//Para encriptar de password
const bcrypt = require("bcryptjs");

//Solicitudes de registro
async function register(req, res) {
  const { name, email, password } = req.body;

  if (!name) res.status(400).send({ msg: "El nombre es obligatorio" });
  if (!email) res.status(400).send({ msg: "El email es obligatorio" });
  if (!password) res.status(400).send({ msg: "La contraseña es obligatoria" });

  const user = new User({
    name: name,
    email: email.toLowerCase(),
    password: password,
    role: "cliente",
    status: true,
  });

  //Encriptamiento de la pass
  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);
  user.password = hashPassword;

  try {
    await user.save();
    res.status(200).send({ msg: "Usuario creado con éxito" });
  } catch (error) {
    res.status(400).send({ msg: `Error al crear el usuario: ${error}` });
  }
}

module.exports = {
  register,
};
