// import { UUID } from "crypto";

// export const cars = {
//   name: "Car name",
//   description: "Car description",
//   brand: "Card brand",
//   year: 2023,
//   km: 10000
// };

// export const invalidDataCar = {
//   name: 123,  
//   description: 123,
//   brand: 123,
//   year: "testing",
//   km: "testing"
// };

// export const updateCar = {
//   name: "Updated name",
//   description: "Updated description",
//   brand: "Card brand",
//   year: 2023,
//   km: 10000
// };

// export const invalidDataUpdateCar = {
//   name: 123,
//   description: 123,
//   brand: 123,
//   year: "testing",
//   km: "testing"
// };

// export const getTaskList = async (userId: UUID) => {

//   return [
//     {
//       name: "Lorem ipsum",
//       description: "Lorem ipsum",
//       userId,
//     },
//     {
//       name: "Lorem ipsum",
//       description: "Lorem ipsum",
//       userId,
//     },
//   ];
// };


export const CarServiceMock = jest.fn().mockImplementation(() => ({
  createCar: jest.fn().mockResolvedValue({
    id: 'fe111d24-1b79-44df-931b-4c9fd5859014',
    name: 'Car name',
    description: 'Car description',
    brand: 'Card brand',
    year: 2023,
    km: 10000
  }),
  getCar: jest.fn().mockResolvedValue({
    id: 'fe111d24-1b79-44df-931b-4c9fd5859014',
    name: 'Car name',
    description: 'Car description',
    brand: 'Card brand',
    year: 2023,
    km: 10000
  }),
  updateCar: jest.fn().mockResolvedValue({
    id: 'fe111d24-1b79-44df-931b-4c9fd5859014',
    name: 'Car name updated',
    description: 'Car description updated',
    brand: 'Card brand updated',
    year: 2022,
    km: 20000
  }),
  deleteCar: jest.fn().mockResolvedValue(null)
}));
