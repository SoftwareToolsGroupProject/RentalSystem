/* Register */
const register = function (req, res) {
    res.render('index', { title: 'Register' });
};
module.exports = {
    register
};