/* GET 'Register' page */

const register = function (req, res) {
    res.render('index', { title: 'Register' });
};

/* GET 'Login' page */
const login = function (req, res) {
    res.render('login', { title: 'Login Page' });
};


const myAccount = function (req, res) {
    res.render('myaccount', { 
    title: 'My Account', 
    user:{
        MemberID: "",
        Eircode: "",
        DOB: "",
        Forename: "",
        Lastname: "",
        Password: "",
        Phone: "",
        Email: "",
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
    register,
    login,
    myAccount
};