import { describe, it } from "vitest";
import { carMock, invalidDataCarMock } from "../mocks/car.mock";
import { request } from "../setup";
import { carDefaultExpects } from "../utils/carDefaultExpects";

describe("update car", () => {
  it("should be able to update car successfully", async () => {
    const createdCar = await request
      .post("/cars")
      .send(carMock)
      .expect(201)
      .then((response) => response.body);

    const updatedCar = await request
      .patch(`/cars/${createdCar.id}`)
      .send(carMock)
      .expect(200)
      .then((response) => response.body);

    carDefaultExpects(updatedCar);
  });

  it("should throw error when try to update a car with invalid data types", async () => {
    const createdCar = await request
      .post("/cars")
      .send(carMock)
      .expect(201)
      .then((response) => response.body);

    await request
      .patch(`/cars/${createdCar.id}`)
      .send(invalidDataCarMock)
      .expect(400);
  });

  it("should be throw error when try update a car with a invalid id", async () => {
    await request
      .patch("/cars/non_existent_id")
      .send(carMock)
      .expect(404);
  });
});
