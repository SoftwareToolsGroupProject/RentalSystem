// tests login

const login = require('../public/javascripts/login')



// Testing databse TBC
const mongoose = require("mongoose");
const request = require('supertest');
const app = require("../app");

require("dotenv").config();

beforeEach(async () => {
    await mongoose.connect(process.env.dbURI);
});



describe("GET /members/:MemberID", () => {
    it("should return member", async () => {
        const res = await request(app).get("/api/members/:MemberID");
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
});

afterEach(async () => {
    await mongoose.connection.close();
});