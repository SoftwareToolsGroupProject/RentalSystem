/* GET 'home' page */
const rentalsList = function (req, res) {
    res.render('index', { title: 'My Rentals' });
};
/* GET 'Location info' page */
const login = function (req, res) {
    res.render('index', { title: 'Login Page' });
};
/* GET 'Add review' page */
const myAccount = function (req, res) {
    res.render('myaccount', { 
    title: 'My Account', 
    user:{
        MemberID: "",
        Eircode: "",
        DOB: "",
        Forename: "Darragh",
        Lastname: "Elbel",
        Password: "123456",
        Phone: "0870980481",
        Email: "darragh.elbel@students.ittralee.ie",
        CarDetails: "",
        ExpireDate: "",
        CVV: ""
    },
    rentals:[{title: "The Nightmare Before Christmas", rentalDate:"12/09/2022", rentalDueDate: "19/09/2022", price:"€5.50"},
    {title: "Night At The Museum", rentalDate:"12/09/2022", rentalDueDate: "19/09/2022", price:"€4.50"},
    {title: "Thor Ragnarok", rentalDate:"12/09/2022", rentalDueDate: "19/09/2022", price:"€6.50"},
    {title: "Avengers Endgame", rentalDate:"12/09/2022", rentalDueDate: "19/09/2022", price:"€5.50"},
    {title: "Apocalypse Now", rentalDate:"12/09/2022", rentalDueDate: "19/09/2022", price:"€5.50"}
]
});
};
module.exports = {
    rentalsList,
    login,
    myAccount
};