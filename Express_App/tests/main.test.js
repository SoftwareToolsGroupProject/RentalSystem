/**
 * @jest-environment jsdom
 */

require('../public/javascripts/main.js');

describe('Test /main', () => {
    before('before', () => {
        console.log('Ran before all the test suites');
    });

    after('after', () => {
        console.log('Ran after all the test suites');
    });

    beforeEach('beforeEach', () => {
        console.log('Ran before EACH test suite');
    });

    afterEach('afterEach', () => {
        console.log('Ran after EACH test suite');
    });

});