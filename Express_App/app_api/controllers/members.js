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

const updateMember = function (req, res) {
  mem.updateOne(
      { _id: "6353e0eb1d591e49c07fef35" },//variable for logged in user
      { $set: { 
        MemberID: req.params.MemberID,
        Forename: req.params.Forename,
        Lastname: req.params.Lastname,
        Password:req.params.Lastname,
        Eircode:req.params.Eircode,
        Phone:req.params.Phone,
        Email:req.params.Email,
        DOB:req.params.DOB,
        CardDetails:req.params.v,
        ExpireDate:req.params.ExpireDate,
        CCV:req.params.CCV
      } },
      function (err, member) {
          if (err) {
              res
                  .status(404)
                  .json({
                      err,
                      "message": "Account details not updated"
                  });
          } else {
              res
                  .status(201)
                  .json({
                    member,
                      "message": "Account details updated successfully"
                  });
          }
      }
  );
};
  

  
module.exports = {
    membersReadOne,
    membersLogin,
    updateMember
  };