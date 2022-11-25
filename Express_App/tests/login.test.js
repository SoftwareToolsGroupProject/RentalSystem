/**
 * @jest-environment jsdom
 */

require('../public/javascripts/login.js');

describe('verifyLogin() true', function() {
    it('should return true if email and password are entered', function () {
        let email = "darragh@elbow";
        let password = "Darragh2";
        let allowContinue = true;
        let warningMessage = "";
        if (email === "" || password === "") {
            warningMessage += "> Email must be entered.\n";
            allowContinue = false;
        }
    })
});