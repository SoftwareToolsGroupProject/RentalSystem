/* GET 'Register' page */
const register = function (req, res) {
    res.render('index', { title: 'Register' });
};

/* GET 'Login' page */
const login = function (req, res) {
    res.render('login', { title: 'Login Page' });
};

/* GET 'My Account' page */
const myAccount = function (req, res) {
    res.render('index', { title: 'My Account' });
};

module.exports = {
    register,
    login,
    myAccount
};