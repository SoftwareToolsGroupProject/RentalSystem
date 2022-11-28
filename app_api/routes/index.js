const express = require('express');
const createHttpError = require('http-errors');
const router = express.Router();

const ctrlMembers = require('../controllers/members');
const ctrlMovies = require('../controllers/movies');

router
  .route('/members/')
  .get(ctrlMembers.membersLogin)

router
  .route('/members/:MemberID')
  .get(ctrlMembers.membersReadOne)

router
  .route('/members/login/:Email/p/:Password')
  .get(ctrlMembers.membersLogin)
  .put(ctrlMembers.updateMember)

// my account : get my details

// main : list all movies
router
  .route('/')
  .get(ctrlMovies.moviesListAll)

//main : show movie details
router
  .route('/:movieid')
  .get(ctrlMovies.movieReadOne)

  // my rentals : Load all & update rental
router
  .route('/rentals/:MemberID')
  .get(ctrlMovies.rentalsReadAll)
  .put(ctrlMovies.updateRental)

module.exports = router;
