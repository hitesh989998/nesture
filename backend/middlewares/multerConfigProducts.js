const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log('Uploading to:', './public///uploads'); // Log the destination
    cb(null, './public/uploads/productImages');
  },
  filename: (req, file, cb) => {
    console.log('Saving file'); // Log the filename

    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed!'), false);
  }
};

const uploadProductConfig = multer({
  storage,
  fileFilter,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2mb limit
});

module.exports = uploadProductConfig;
