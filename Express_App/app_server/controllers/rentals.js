/* GET 'Rentals' page */
const rentals = function (req, res) {
    res.render('main', {
        dvdInfo: [{
            title: "The Nightmare Before Christmas",
            description: "Jack Skellington, the Pumpkin King of Halloween Town, decides to spread Christmas joy to the world. But his well-meaning mission unwittingly puts Santa Clause in jeopardy and creates a nightmare for all good little boys and girls everywhere!",
            availability: "true",
            price: 6.00,
            image: "images/The_nightmare_before_christmas.jpg"
        }, {
            title: "Night At The Museum",
            description: "A newly recruited night security guard at the Museum of Natural History discovers that an ancient curse causes the animals and exhibits on display to come to life and wreak havoc.",
            availability: "true",
            price: 6.00,
            image: "images/museum.jpg"
        }, {
            title: "Thor Ragnarok",
            description: "Imprisoned on the other side of the universe, the mighty Thor finds himself in a deadly gladiatorial contest that pits him against the Hulk, his former ally and fellow Avenger. Thor's quest for survival leads him in a race against time to prevent the all-powerful Hela from destroying his home world and the Asgardian civilization.",
            availability: "false",
            price: 6.00,
            image: "images/ragnarok.jpg"
        }, {
            title: "Avengers Endgame",
            description: "After half of all life is snapped away by Thanos, the Avengers are left scattered and divided. Now with a way to reverse the damage, the Avengers and their allies must assemble once more and learn to put differences aside in order to work together and set things right.",
            availability: "true",
            price: 6.00,
            image: "images/avengers.jpg"
        }]
    });
};

/* GET 'My Rentals' page */
const myRentals = function (req, res) {
    res.render('myRentals', {
        rentals: [{
            title: "The Nightmare Before Christmas",
            rentalDate: "12/09/2022",
            rentalDueDate: "19/09/2022"
        }, {
            title: "Night At The Museum",
            rentalDate: "12/09/2022",
            rentalDueDate: "19/09/2022"
        }, {
            title: "Thor Ragnarok",
            rentalDate: "12/09/2022",
            rentalDueDate: "19/09/2022"
        }, {
            title: "Avengers Endgame",
            rentalDate: "12/09/2022",
            rentalDueDate: "19/09/2022"
        }]
    });
};

module.exports = {
    myRentals,
    rentals
};

