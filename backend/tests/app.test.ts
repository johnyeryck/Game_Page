import { describe, it } from "node:test";
import app from "../index.js";

import request from "supertest";

describe("User Creator E2E", async () => {
  it("Deve enviar um email de confirmação e retornar 200", async () => {
    const NewAccount = {
      email: "johnyderyck51@gmail.com",
      password: "1234",
    };
    await request(app).post("/criarconta").send(NewAccount).expected(200);
  });
});
