require("dotenv").config();
const mongoose = require("mongoose");

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_HOST = process.env.DB_HOST

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/?retryWrites=true&w=majority`;

mongoose.connect(URL)
  .then((connection) => {
    console.log("Estamos conectados a nuestra Base de Datos!");
  })
  .catch((error) => {
    console.error("No se logró establecer la conexión a la base de datos.");
    console.error(error);
  });