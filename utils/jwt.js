//JSON Web Token
const jwt = require("jsonwebtoken");

//Variables de entorno
require("dotenv").config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

function createAccessToken(user) {
  //Creamos hora de expiración
  //Se le agrega 1hs para que expire 1hs despues de haberse creado
  const expToken = new Date();
  expToken.setHours(expToken.getHours() + 1);

  //Informacion del token
  const payload = {
    token_type: "access",
    user_id: user._id,
    iat: Date.now(),
    exp: expToken.getTime(),
  };

  //Return token
  return jwt.sign(payload, JWT_SECRET_KEY);
}

module.exports = {
  createAccessToken,
};
