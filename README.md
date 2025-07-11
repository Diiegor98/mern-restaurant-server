# Servidor - Proyecto MERN RESTAURANT

Este repositorio contiene el código del servidor backend de una aplicación MERN (MongoDB, Express, React, Node.js). Se encarga de gestionar la lógica del servidor, autenticación, conexión a la base de datos y manejo de archivos.

## 🚀 Tecnologías utilizadas

- [Express](https://expressjs.com/) – Framework minimalista para Node.js
- [Mongoose](https://mongoosejs.com/) – Modelado de objetos MongoDB
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) – Encriptación de contraseñas
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) – Autenticación vía tokens JWT
- [cloudinary](https://cloudinary.com/) – Almacenamiento de imágenes en la nube
- [nodemon](https://nodemon.io/) – Reinicio automático en desarrollo

## 🔐 Autenticación
La app usa JWT (JSON Web Tokens) para autenticar usuarios.

## ☁️ Subida de imágenes
Se integró Multer junto a Cloudinary para permitir subir imágenes a la nube. El archivo se procesa desde el frontend, se sube a Cloudinary y se guarda la URL en la base de datos.

SweetAlert2 brinda diálogos de confirmación, alertas de éxito/error, etc.

## 📡 Frontend
🔗 Repositorio del frontend: [ACÁ](https://github.com/Diiegor98/mern-restaurant-client)

## 🚀 Deploy
⚠️ IMPORTANTE: La primer carga puede demorar un poco ya que están deployados en sitios gratuitos. 
El proyecto fue desplegado en Render, podes verlo en línea: [ACÁ](https://mern-restaurant-client-e3a5.onrender.com)

Podés crearte una cuenta como usuario, o usar las siguientes credenciales para ver el panel de administrador:

EMAIL: admin@admin.com
PASS: 1234

🧑‍💻 Autor
Diego Rodríguez - @DiiegoR98
