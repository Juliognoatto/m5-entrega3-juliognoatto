export const CarServiceMock = jest.fn().mockImplementation(() => ({
  createCar: jest.fn().mockResolvedValue({
    id: 'fe111d24-1b79-44df-931b-4c9fd5859014',
    name: 'Car name',
    description: 'Car description',
    brand: 'Card brand',
    year: 2023,
    km: 10000
  }),
  getCars: jest.fn().mockResolvedValue([
    {
      id: 'fe111d24-1b79-44df-931b-4c9fd5859014',
      name: 'Car name',
      description: 'Car description',
      brand: 'Card brand',
      year: 2023,
      km: 10000
    }
  ]),
  getCarById: jest.fn().mockImplementation((id: string) => {
    if (id === 'fe111d24-1b79-44df-931b-4c9fd5859014') {
      return {
        id: 'fe111d24-1b79-44df-931b-4c9fd5859014',
        name: 'Car name',
        description: 'Car description',
        brand: 'Card brand',
        year: 2023,
        km: 10000
      };
    } else {
      throw new Error('Car not found.');
    }
  }),
  updateCar: jest.fn().mockImplementation((id: string, car: any) => {
    if (id === 'fe111d24-1b79-44df-931b-4c9fd5859014') {
      return {
        id: 'fe111d24-1b79-44df-931b-4c9fd5859014',
        ...car
      };
    } else {
      throw new Error('Car not found.');
    }
  }),
  deleteCar: jest.fn().mockResolvedValue(null)
}));
