const jwt = require("../utils/jwt");

function mdAuth(req, res, next) {
  //Verificamos que el Middleware recibe el token
  if (!req.headers.authorization) {
    res.status(400).send({ msg: `La peticion no tiene cabecera` });
  }

  //Limpiamos el token y lo guardamos en una variable
  const token = req.headers.authorization.replace("Bearer ", "");

  try {
    //Decode trae los datos del token
    const payload = jwt.decode(token);
    //Verificar fecha de expiración
    const { exp } = payload;
    const currentDate = new Date().getTime();

    if (exp <= currentDate) {
      return res.status(400).send({ msg: `El token expiró` });
    }

    //Pasamos la data del payload al controller
    req.user = payload;
    next();
  } catch (error) {
    return res.status(400).send({ msg: `Token inválido` });
  }
}

module.exports = {
  mdAuth,
};
