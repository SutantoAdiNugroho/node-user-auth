const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");

describe("Get route", () => {
  it("page return welcome to node-user-auth", async (done) => {
    const res = await request(app).get("/")
    expect(res.statusCode).toEqual(200)
    done()
  });
});

afterAll(async () => {
  await mongoose.connection.close();
  app.close();
});
