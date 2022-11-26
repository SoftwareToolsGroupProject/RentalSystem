/**
 * @jest-environment jsdom
 */

 const verifyUpdate = require('../public/javascripts/myaccount');
 
 describe("If any details incorrect should window alert", () => {
 
     it("should mock window alert function", () => {

         document.body.innerHTML = '<input id="firstName" value="John" />';
         localStorage.setItem("Firstname", "John");
         document.body.innerHTML += '<input id="lastName" value="" />';
         document.body.innerHTML += '<input id="password" value="password" />';
         document.body.innerHTML += '<input id="confPassword" value="password" />';
         document.body.innerHTML += '<input id="email" value="deirdre@email.com"/>';
         document.body.innerHTML += '<input id="phone" value="0874567890" />';
         document.body.innerHTML += '<input id="cnum" value="1234567890" />';
         document.body.innerHTML += '<input id="cExp" value="12/05/25"/>';
         document.body.innerHTML += '<input id="ccv" value="123" />';
 
 
         window.alert = jest.fn();
 
         verifyUpdate.verifyUpdate();
 
         expect(window.alert).toBeCalled();
     });
 
 });