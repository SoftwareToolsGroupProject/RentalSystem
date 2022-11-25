/**
 * @jest-environment jsdom
 */

require('../public/javascripts/myaccount.js');

 test('update details function', () => {
     expect(updateDetails()).toBe("Your account details have been updated");
 });