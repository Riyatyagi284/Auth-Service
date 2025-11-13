import request from 'supertest';

import { calculateDiscount } from './utils.js';
import app from './app.js';

describe('testing dummy calculator function', () => {
  it('should calculate the discount', () => {
    const result = calculateDiscount(100, 10);
    expect(result).toBe(10);
  });

  it('should return 200 status code', async () => {
    const response = await request(app).get('/').send();
    expect(response.statusCode).toBe(200);
  });
});
