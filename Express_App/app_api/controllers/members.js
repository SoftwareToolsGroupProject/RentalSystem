const mongoose = require('mongoose');
const mem = mongoose.model('Member');


const membersReadOne = function (req, res) {
    if (req.params && req.params.MemberID) {
        mem
            .findById(req.params.MemberID)
            .exec((err, member) => {
                if (!member) {
                    res
                        .status(404)
                        .json({
                            "message": "Member id not found"
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
                    .json(member);
            });
    } else {
        res
            .status(404)
            .json({
                "message": "No member id in request"
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

/*const updateMember = function (req, res) {
  mem.updateOne(
      { _id: "6353e0eb1d591e49c07fef35" },//variable for logged in user
      { $push: {
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
};*/

/*const updateMember = function (req, res) {  //inserts default enum, must take variable from selected image
    const email = req.params.email;
    const password = req.params.password;
    if (email && password) {
        mem
            .findById(email)
            .exec((err, member) => {
                    if (err) {
                        res
                            .status(400)
                            .json(err);
                    } else {
                        _updateAccount(req, res, member);
                    }
                }
            );
    } else {
        res
            .status(404)
            .json({
                "message": "Not found, email & password required"
            });
    }
};

const _updateAccount = function (req, res, member) {
    if (!member) {
        res
            .status(404)
            .json({
                "message": "member not found"
            });
    }

    else {
        member.set({
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
        });
        member.save((err, member) => {
            if (err) {
                console.log(err);
                res
                    .status(400)
                    .json(err);
            } else {
                res
                    .status(201)
                    .json(member);
            }
        });
    }
};*/

const updateMember = function (req, res) {
    mem.updateOne(
        { email: "darragh@elbow.ie" },// variable for logged in user
        { $push: {
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
        function (err, favourite) {
            if (err) {
                res
                    .status(404)
                    .json({
                        err,
                        "message": "Favourite not added"
                    });
            } else {
                res
                    .status(201)
                    .json({
                        favourite,
                        "message": "Favourite added successfully"
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