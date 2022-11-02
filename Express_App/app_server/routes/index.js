const express = require('express');
const router = express.Router();

const ctrlRentals = require('../controllers/rentals');
const ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/', ctrlRentals.rentalsList);
router.get('/login', ctrlRentals.login);
router.get('/myaccount', ctrlRentals.myAccount);

/* Other pages */
router.get('/register', ctrlOthers.register);

module.exports = router;