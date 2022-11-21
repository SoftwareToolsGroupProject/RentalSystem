


// Testing database TBC
const mongoose = require("mongoose");
const request = require('supertest');
const app = require("../app");

require("dotenv").config();

beforeEach(async () => {
    await mongoose.connect(process.env.dbURI);
});



describe("GET /members/:MemberID", () => {
    it("should return member", async () => {
        const res = await request(app).get("/api/members/00001");
        expect(res.statusCode).toBe(200);
    });
});

afterEach(async () => {
    await mongoose.connection.close();
});