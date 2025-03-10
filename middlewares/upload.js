const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'menus', // Carpeta en Cloudinary
        allowed_formats: ['jpg', 'png', 'jpeg']
    },
});

const upload = multer({ storage });

module.exports = upload;
