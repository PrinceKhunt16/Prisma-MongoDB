const express = require('express');
const { signup, signin, logout } = require('../controllers/userControllers');
const router = express.Router();

router.route('/signup').post(signup);
router.route('/signin').post(signin);
router.route('/logout').get(logout);

module.exports = router;