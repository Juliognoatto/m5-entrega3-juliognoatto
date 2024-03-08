import { CarsService } from "../../services";
import { CarServiceMock } from "../mocks/carsService.mock";
import { Car, CarCreate } from "../../interfaces";

describe('CarService', () => {
  let carService: CarsService;

  beforeEach(() => {
    carService = new CarServiceMock();
  });

  it('should create a car', async () => {
    const car: CarCreate = {
      name: 'Car name',
      description: 'Car description',
      brand: 'Card brand',
      year: 2023,
      km: 10000
    };
    const createdCar = await carService.create(car);
    expect(createdCar).toEqual({
      id: 'fe111d24-1b79-44df-931b-4c9fd5859014',
      name: 'Car name',
      description: 'Car description',
      brand: 'Card brand',
      year: 2023,
      km: 10000
    });
  });

  it('should get a car', async () => {
    const car = await carService.read();
    expect(car).toEqual({
      id: 'fe111d24-1b79-44df-931b-4c9fd5859014',
      name: 'Car name',
      description: 'Car description',
      brand: 'Card brand',
      year: 2023,
      km: 10000
    });
  });

  // Add tests for updateCar and deleteCar methods
});
