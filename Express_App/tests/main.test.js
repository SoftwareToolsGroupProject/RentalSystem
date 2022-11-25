/**
 * @jest-environment jsdom
 */

'use strict'

const mongoose = require('mongoose');
require('dotenv').config();

//Database testing
describe('Member CRUD', () => {

    let connection;
    let db;
    const members = mongoose.model("test_"+process.env.COLLECTION,mongoose.Schema({
        MemberID: String,
        Email: String
    }));

    beforeAll(async () => {

        connection = await mongoose.connect('mongodb://localhost:27017/test_'+process.env.DATABASE,{useNewUrlParser: true, useUnifiedTopology: true });
        db = mongoose.connection;
        const collection = process.env.COLLECTION;
        await db.createCollection(collection);
    });

    afterAll(async () => {
        const collection = "test_" + process.env.COLLECTION;
        await db.dropCollection(collection);
        await db.dropDatabase();
        await db.close();
       // await connection.end();
    });

    /*test("Get Member POST /members", async () => {
        const response = await members.create({
            MemberID: process.env.MEMBERID,
            Email: process.env.EMAIL
        });
        await response.save();
        expect(response.memId).toBe(process.env.MEMBERID);
    });*/

    test("All Members GET /members", async () => {
        const response = await members.find({});
        
        expect(response.length).toBe(0);
     });

    /* test("Update Member PUT /members/:id", async () => {
        const response = await members.updateOne({MemberID: process.env.MEMBERID},{Email: process.env.EMAIL_ALT});
        expect(response.ok).toBeTruthy();
      });

      test("Member update is correct", async () => {
      const responseTwo = await members.findOne({MemberID: process.env.MEMBERID});
      expect(responseTwo.Email).toBe(process.env.EMAIL_ALT);
      });

      test("Delete Memebr DELETE /members/:id", async() => {
        const response = await members.deleteOne({MemberID: process.env.MEMBERID});
        expect(response.ok).toBe(1);
      });*/

});

