import { UUID } from "crypto";

export const cars = {
  name: "Car name",
  description: "Car description",
  brand: "Card brand",
  year: 2023,
  km: 10000
};

export const invalidDataCar = {
  name: 123,
  description: 123,
  brand: 123,
  year: "testing",
  km: "testing"
};

export const updateCar = {
  name: "Updated name",
  description: "Updated description",
  brand: "Card brand",
  year: 2023,
  km: 10000
};

export const invalidDataUpdateCar = {
  name: 123,
  description: 123,
  brand: 123,
  year: "testing",
  km: "testing"
};

export const getTaskList = async (userId: UUID) => {

  return [
    {
      name: "Lorem ipsum",
      description: "Lorem ipsum",
      userId,
    },
    {
      name: "Lorem ipsum",
      description: "Lorem ipsum",
      userId,
    },
  ];
};
