const mongoose = require('mongoose');
const movie = mongoose.model('Movie');
const rental = mongoose.model('Rental');
const Movie = require('../models/movies');

const moviesListAll = function (req, res) {
    movie.find({}, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
};

const movieReadOne = function (req, res) {
    if (req.params && req.params.movieid) {
        movie
            .findById(req.params.movieid)
            .exec((err, movie) => {
                if (!movie) {
                    res
                        .status(404)
                        .json({
                            "message": "Rented Movie ID not found"
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
                    .json(movie);
            });
    } else {
        res
            .status(404)
            .json({
                "message": "No movie ID in request"
            });
    }
};

const addRental = function (req, res) {
    rental.create({
        RentalID: req.body.RentalID,
        MemberID: req.body.MemberID,
        DVDID: req.body.DVDID,
        RentalDueDate: req.body.RentalDueDate,
        Status: req.body.Status
    }, (err, rental) => {
        if (err) {
            res
                .status(400)
                .json(err);
        } else {
            res
                .status(201)
                .json(rental);
        }
    });
};

const rentalsReadAll = function (req, res) {
    rental.find(
        {
            'RentalID': '00002'
        }
    )
};

const updateRental = function (req, res) {
    rental.updateOne(
        {RentalID: "00002"},//get variable from member logged in
        {
            $set: {
                rentals: {
                    Status: "C"
                }
            }
        },
        function (err, rental) {
            if (err) {
                res
                    .status(404)
                    .json({
                        err,
                        "message": "Rental not updated"
                    });
            } else {
                res
                    .status(201)
                    .json({
                        rental,
                        "message": "Rental successfully updated"
                    });
            }
        }
    );
};


module.exports = {
    moviesListAll,
    movieReadOne,
    addRental,
    rentalsReadAll,
    updateRental
}