import request from 'supertest';
import { app } from '../../app';

describe('Car routes', () => {
  it('should create a car', async () => {
    const res = await request(app)
      .post('/cars')
      .send({
        name: 'Car name',
        description: 'Car description',
        brand: 'Card brand',
        year: 2023,
        km: 10000
      });
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toBe('Car name');
    expect(res.body.description).toBe('Car description');
    expect(res.body.brand).toBe('Card brand');
    expect(res.body.year).toBe(2023);
    expect(res.body.km).toBe(10000);
  });

  it('should get all cars', async () => {
    const res = await request(app).get('/cars');
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should get a car by id', async () => {
    const carId = 'fe111d24-1b79-44df-931b-4c9fd5859014';
    const res = await request(app).get(`/cars/${carId}`);
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(carId);
    expect(res.body.name).toBe('Car name');
    expect(res.body.description).toBe('Car description');
    expect(res.body.brand).toBe('Card brand');
    expect(res.body.year).toBe(2023);
    expect(res.body.km).toBe(10000);
  });

  it('should update a car', async () => {
    const carId = 'fe111d24-1b79-44df-931b-4c9fd5859014';
    const res = await request(app)
      .patch(`/cars/${carId}`)
      .send({
        name: 'Car name updated',
        description: 'Car description updated',
        brand: 'Card brand updated',
        year: 2022,
        km: 20000
      });
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(carId);
    expect(res.body.name).toBe('Car name updated');
    expect(res.body.description).toBe('Car description updated');
    expect(res.body.brand).toBe('Card brand updated');
    expect(res.body.year).toBe(2022);
    expect(res.body.km).toBe(20000);
  });

  it('should delete a car', async () => {
    const carId = 'fe111d24-1b79-44df-931b-4c9fd5859014';
    const res = await request(app).delete(`/cars/${carId}`);
    expect(res.status).toBe(204);
  });
});
