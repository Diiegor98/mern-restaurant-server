const User = require("../models/user");

//Obtener usuario a través del token
async function getUser(req, res) {
  const { user_id } = req.user;

  const user = await User.findById(user_id);

  if (!user) {
    res.status(400).send({ msg: "No se encontro el usuario"});
  } else {
    res.status(200).send(user)
  }
}

module.exports = {
  getUser,
};
