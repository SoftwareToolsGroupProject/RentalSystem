/**
 * @jest-environment jsdom
 */

'use strict'

const main = require('../public/javascripts/main');

describe('Members CRUD', () => {


    beforeAll(async () => {

        console.log('Starting tests')
    });

    afterAll(async () => {

        console.log('Ending tests')

    });
    test("Check availability function changes button text positive", async () => {

        document.body.innerHTML = '<button id="add" value="Add to Order" />';
        let available = true;
        main.checkAvailibility(available)
        expect(document.querySelector('#add').textContent).toBe("Add to Order");
    });

    test("Check availability function changes button text negative", async () => {

        document.body.innerHTML = '<button id="add" value="Add to Order" />';
        let notAvailable = false;
        main.checkAvailibility(notAvailable)
        expect(document.querySelector('#add').textContent).toBe("Not Available");
    });

    test("Test Increase cart count", async () => {

        document.body.innerHTML = '<h4 id="cartHeader" value="0" />';
        main.increaseCartCount();
        expect(document.querySelector('#cartHeader').textContent).toBe("Cart (1)");

    });

    test("Test Four", async () => {
        //test updateCartTotal
        //document.body.innerHTML = '<tr id="totalPrice" value="0" />';
        //document.querySelector('#totalPrice').innerHTML = "0";
        //let totalPrice = 0;
        //let price = 10;
        //main.updateCartTotal(price);
        //expect(document.querySelector('#totalPrice').innerHTML).toBe("10.00");
    });

});
 
 
 
 