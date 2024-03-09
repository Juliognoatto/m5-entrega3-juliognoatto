import { describe, it } from "vitest";
import { request } from "../setup";
import { carDefaultExpects, ICar } from "../utils/carDefaultExpects";
import { carMock } from "../mocks/car.mock";

describe("get car", () => {
  it("should be able to get cars successfully", async () => {
    const createdCars = await Promise.all([
      request
        .post("/cars")
        .send(carMock),
      request
        .post("/cars")
        .send(carMock),
    ]).then((responses) => responses.map((response) => response.body));

    const carsList = await request
      .get("/cars")
      .expect(200)
      .then((response) => response.body);

    expect(carsList).toBeDefined();
    expect(Array.isArray(carsList)).toBe(true);
    expect(carsList.length).toBeGreaterThanOrEqual(2);

    createdCars.forEach((createdCar: ICar) => {
      const foundCar = carsList.find((car: ICar) => car.id === createdCar.id);
      expect(foundCar).toBeDefined();
      carDefaultExpects(foundCar);
    });
  });

  it("should be able to get a single car by the id correctly", async () => {
    const createdCar = await request
      .post("/cars")
      .send(carMock)
      .expect(201)
      .then((response) => response.body);

    const carById = await request
      .get(`/cars/${createdCar.id}`)
      .expect(200)
      .then((response) => response.body);

    expect(carById).toBeDefined();
    carDefaultExpects(carById);
  });

  it("should be throw error when try get a car with a invalid id", async () => {
    await request
      .get("/cars/non_existent_id")
      .expect(404);
  });
});
