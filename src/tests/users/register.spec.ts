import request from 'supertest';
import app from '../../app.js';

describe('POST /auth/register', () => {
  describe('Given all fields', () => {
    it('should return the 201 status code', async () => {
      // Arrange -> data ready krna
      const userData = {
        firstName: 'Riya',
        lastName: 'Tyagi',
        email: 'abc@gmail.com',
        password: 'secret',
      };

      // Act -> Api call hote h
      const response = await request(app).post('/auth/register').send(userData);

      // Assert -> result check krte h
      expect(response.statusCode).toBe(201);
    });

    it('should return valid json response', async () => {
      // Arrange
      const userData = {
        firstName: 'Riya',
        lastName: 'Tyagi',
        email: 'abc@gmail.com',
        password: 'secret',
      };

      // Act
      const response = await request(app).post('/auth/register').send(userData);

      // Assert
      expect((response.headers as Record<string, string>)['content-type']).toEqual(
        expect.stringContaining('json')
      );
    });

    it('should persist the user in the database', async () => {
      // Arrange
      const userData = {
        firstName: 'Rakesh',
        lastName: 'K',
        email: 'rakesh@mern.space',
        password: 'secret',
      };
      // Act
      await request(app).post('/auth/register').send(userData);

      // Assert
    });
  });

  describe('Fields are missing', () => {});
});
