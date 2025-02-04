//Modelo de usuario
const User = require("../models/user");

//Para encriptar de password
const bcrypt = require("bcryptjs");

//JSON Web token para el login
const jwt = require('../utils/jwt')

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
    res.status(400).send({ msg: `Error al crear el usuario` });
  }
}

//Solicitudes de login
async function login(req, res) {
  //Recibir datos
  const { password, email } = req.body;

  //Validar que haya email y contraseña
  if (!email) res.status(400).send({ msg: "El email es obligatorio" });
  if (!password) res.status(400).send({ msg: "La contraseña es obligatoria" });

  try {
    //Validar si existe el usuario en la DB
    const user = await User.findOne({ email: email.toLowerCase() });

    //Validar que las contraseñas coincidan
    const checkPass = await bcrypt.compare(password, user.password);

    if (!checkPass) {
      res.status(400).send({ msg: "Contraseña incorrecta" });
    } else if (!user.status) {
      //Valido si el usuario está habilitado
      res.status(401).send({ msg: "Usuario inhabilitado" });
    } else {
      res.status(200).send({ access_token: jwt.createAccessToken(user) });
    }
  } catch (error) {
    res.status(500).send({ msg: "Usuario no encontrado" });
  }
}

module.exports = {
  register,
  login,
};
