const mongoose = require('mongoose');
const mem = mongoose.model('Member');


const membersReadOne = function (req, res) {
    if (req.params && req.params.MemberID) {
        mem
        .findById(req.params.MemberID)
        .exec((err, MemberID) => {
          if (!MemberID) {
            res	
              .status(404) 
              .json({	
                "message": "MemberID not found"
              });	 
            return;
          } else if (err) {
            res	
              .status(404) 
              .json(err); 
            return; 	
          }
          res		
            .status(200)
            .json(MemberID);
        });
    } 
  };


const membersLogin = function(req,res){
    if (req.params && req.params.Email) {
        mem
        .find({Email: req.params.Email})
        .exec((err, Email) => {
          if (!Email) {
            res	
              .status(404) 
              .json({	
                "message": "Email not found"
              });	 
            return;
          } else if (err) {
            res	
              .status(404) 
              .json(err); 
            return; 	
          }
          res		
            .status(200)
            .json(Email);
        });

        
    } 
}


  

  
module.exports = {
    membersReadOne,
    membersLogin
  };