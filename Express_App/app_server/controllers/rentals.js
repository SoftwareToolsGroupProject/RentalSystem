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
    res.render('index', { title: 'My Account' });
};
module.exports = {
    rentalsList,
    login,
    myAccount
};
