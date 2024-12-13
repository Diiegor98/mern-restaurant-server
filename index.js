//Conexion de nuestra DB en MongoDB
const mongoose = require("mongoose");

//Variables de entorno
require("dotenv").config();
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbHost = process.env.DB_HOST;
const port = 3977

//Server
const app = require('./app')


//Conexion a la BD
const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@${dbHost}/`);
    app.listen(port, () => {
        console.log(`API REST.`)
    })
  } catch (error) {
    console.log(`Error al conectar a la base de datos`, error);
  }
};

connectDB();
