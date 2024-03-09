import { describe, it } from "vitest";
import { request } from "../setup";

describe("delete car", () => {
  it("should be able to delete a car successfully", async () => {
    const createdCar = await request
      .post("/cars")
      .send({
        name: "Car to delete",
        description: "Car description",
        brand: "Car brand",
        year: 2023,
        km: 10000,
      })
      .expect(201)
      .then((response) => response.body);

    await request
      .delete(`/cars/${createdCar.id}`)
      .expect(204);

    await request
      .get(`/cars/${createdCar.id}`)
      .expect(404);
  });

  it("should throw error when try to delete a invalid car", async () => {
    await request
      .delete("/cars/non_existent_id")
      .expect(404);
  });
});
