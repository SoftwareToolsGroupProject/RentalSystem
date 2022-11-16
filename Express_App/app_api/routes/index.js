const express = require('express');
const router = express.Router();

const ctrlMembers = require('../controllers/members');
const ctrlMovies = require('../controllers/movies');


router
  .route('/members/:MemberID')
  .get(ctrlMembers.membersReadOne)

router
  .route('/members/login/:Email/p/:Password')
  .get(ctrlMembers.membersLogin)

// my account : get my details
router
  .route('/myaccount/:MemberID')
  .get(ctrlMembers.membersReadOne)
  .put(ctrlMembers.updateMember)


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
