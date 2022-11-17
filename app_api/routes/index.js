const express = require('express');
const router = express.Router();

const ctrlMembers = require('../controllers/members');


router
  .route('/members/:MemberID')
  .get(ctrlMembers.membersReadOne)

router
    .route('/members/login/:Email/p/:Password')
    .get(ctrlMembers.membersLogin)


module.exports = router;
