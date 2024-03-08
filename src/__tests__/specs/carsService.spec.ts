import { CarsService } from "../../services";
import { CarServiceMock } from "../mocks/carsService.mock";


describe('CarService', () => {
  let carService: CarsService;

  beforeEach(() => {
    carService = new CarServiceMock();
  });

  it('should create a car', async () => {
    const car = {
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

  it('should get all cars', async () => {
    const cars = await carService.read();
    expect(cars).toBeInstanceOf(Array);
    expect(cars.length).toBeGreaterThan(0);
  });

  it('should get a car by id', async () => {
    const carId = 'fe111d24-1b79-44df-931b-4c9fd5859014';
    const car = await carService.readById(carId);
    expect(car).toEqual({
      id: 'fe111d24-1b79-44df-931b-4c9fd5859014',
      name: 'Car name',
      description: 'Car description',
      brand: 'Card brand',
      year: 2023,
      km: 10000
    });
  });

  it('should update a car', async () => {
    const carId = 'fe111d24-1b79-44df-931b-4c9fd5859014';
    const updatedCar = await carService.update(carId, {
      name: 'Car name updated',
      description: 'Car description updated',
      brand: 'Card brand updated',
      year: 2022,
      km: 20000
    });
    expect(updatedCar).toEqual({
      id: 'fe111d24-1b79-44df-931b-4c9fd5859014',
      name: 'Car name updated',
      description: 'Car description updated',
      brand: 'Card brand updated',
      year: 2022,
      km: 20000
    });
  });

  it('should delete a car', async () => {
    const carId = 'fe111d24-1b79-44df-931b-4c9fd5859014';
    const deletedCar = await carService.delete(carId);
    expect(deletedCar).toBeNull();
  });
});