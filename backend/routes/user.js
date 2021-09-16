const express = require('express');
const router = express.Router();

//const auth = require('../middleware/auth');
const userCtrl = require('../controllers/User.js');
//const passwordValidation = require('../middleware/password-validation');
const profilPicture = require('../middleware/multer-profil.js');

router.post('/signup', profilPicture, userCtrl.signup);

module.exports = router;