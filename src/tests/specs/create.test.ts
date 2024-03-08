
import { describe, expect, it } from "vitest";
import { carMock, invalidDataCarMock } from "../mocks/car.mock";
import { request } from "../setup";
import { carDefaultExpects } from "../utils/carDefaultExpects";


describe("create car", () => {
  it("should be able to create a car sucessfully", async () => {
    const data = await request
      .post("/cars")
      .send(carMock)
      .expect(201)
      .then((response) => response.body);

    carDefaultExpects(data)
  });

  it("should throw error when try to create a car with a missing body parameter", async () => {
    await request.post("/cars").expect(400);
 });

 it("should throw error when try to create a car with invalid data types", async () => {
    await request.post("/cars").send(invalidDataCarMock).expect(400);
 });
})