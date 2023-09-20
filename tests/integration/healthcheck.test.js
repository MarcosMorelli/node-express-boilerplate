const mongoose = require('mongoose');
const request = require('supertest');
const httpStatus = require('http-status');
const app = require('../../src/app');
const setupTestDB = require('../utils/setupTestDB');

setupTestDB();

describe('Healthcheck routes', () => {
  describe('GET /health', () => {
    test('should return 200 when healthy', async () => {
      const res = await request(app).get('/health').send().expect(httpStatus.OK);
      expect(res.body).toEqual({
        uptime: expect.anything(),
        message: 'OK',
        timestamp: expect.anything(),
      });
    });

    test('should return 500 when disconnected of db', async () => {
      await mongoose.disconnect();
      await request(app).get('/health').send().expect(httpStatus.SERVICE_UNAVAILABLE);
    });
  });
});
