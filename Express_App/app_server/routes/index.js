const express = require('express');
const router = express.Router();

const ctrlRentals = require('../controllers/rentals');
const ctrlOthers = require('../controllers/users');

/* Rentals pages */
router.get('/', ctrlRentals.rentals);
router.get('/rentals', ctrlRentals.myRentals);


/* Other pages */
router.get('/register', ctrlOthers.register);
router.get('/login', ctrlOthers.login);
router.get('/myaccount', ctrlOthers.myAccount);

module.exports = router;