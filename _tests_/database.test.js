/**
 * @jest-environment jsdom
 */

'use strict'

const mongoose = require('mongoose');
require('dotenv').config();

//Database testing
describe('Members CRUD', () => {

    let connection;
    let db;
    const members = mongoose.model("test_" + process.env.COLLECTION, mongoose.Schema({
        MemberID: String,
        Email: String
    }));
    const movies = mongoose.model("test_" + process.env.COLLECTIONTWO, mongoose.Schema({
        DVDID: String,
        Title: String
    }));

    beforeAll(async () => {

        connection = await mongoose.connect('mongodb://localhost:27017/test_' + process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true });
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

    test("Create Member POST /members", async () => {
        const response = await members.create({
            MemberID: process.env.MEMBERID,
            Email: process.env.EMAIL
        });
        await response.save();
        expect(response.MemberID).toBe(process.env.MEMBERID);
    });

    test("All Members GET /members", async () => {
        const response = await members.find({});

        expect(response.length).toBeGreaterThan(0);
    });

    test("Member detail is correct", async () => {
        const response = await members.findOne({ MemberID: process.env.MEMBERID });
        expect(response.Email).toBe(process.env.EMAIL);
    });

   test("Update Member PUT /members/login/:Email/p/:Password", async () => {
        const response = await members.updateOne({ MemberID: process.env.MEMBERID }, { Email: process.env.EMAIL_ALT });
        expect(response).toBeTruthy();
    });
 
    test("Member update is correct", async () => {
        const responseTwo = await members.findOne({ MemberID: process.env.MEMBERID });
        expect(responseTwo.Email).toBe(process.env.EMAIL_ALT);
    });

    test("Create Movies POST /movies", async () => {
        const response = await movies.create({
            DVDID: process.env.ID,
            Title: process.env.TITLE
        });
        await response.save();
        expect(response.ID).toBe(process.env.DVDID);
    });

    test("All Movies GET /movies", async () => {
        const response = await movies.find({});

        expect(response.length).toBeGreaterThan(0);
    });

    test("Movie title is correct", async () => {
        const response = await movies.findOne({ DVDID: process.env.ID });

        expect(response.Title).toBe(process.env.TITLE);
    });

    test("Update Movie PUT", async () => {
        const response = await movies.updateOne({ DVDID: process.env.ID }, { Title: process.env.TITLE_ALT });

        expect(response).toBeTruthy();
    });
 
    test("Movie update is correct", async () => {
        const response = await movies.findOne({ DVDID: process.env.ID });

        expect(response.Title).toBe(process.env.TITLE_ALT);
    });

});



