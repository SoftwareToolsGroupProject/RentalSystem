const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
    {
        DVDID: {
            type: String,
            unique: true,
            required: true
        },
        Title: {
            type: String,
            required: true
        },
        Genre: {
            type: String,
            required: true
        },
        Duration: {
            type: String,
            required: true
        },
        Rating: {
            type: String,
            required: true
        },
        Cost: {
            type: Number,
            required: true
        },
        Status: {
            type: String,
            required: true
        }
    }
);

const rentalSchema = new mongoose.Schema(
    {
        RentalID: {
            type: String,
            unique: true,
            required: true
        },
        MemberID: {
            type: String,
            required: true
        },
        DVDID: {
            type: String,
            required: true
        },
        RentalDueDate: {
            type: String,
            required: true
        },
        Status: {
            type: String,
            required: true
        }
    }
);

mongoose.model('Movie', movieSchema);
mongoose.model('Rental', rentalSchema);