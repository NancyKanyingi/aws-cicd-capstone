
const request = require('supertest');
const app = require('../src/app');

describe('AWS CI/CD Capstone application', () => {
  test('homepage returns the HTML welcome page', async () => {
    const response = await request(app).get('/');

    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Hello from AWS CI/CD!');
  });

  test('health endpoint reports healthy status', async () => {
    const response = await request(app).get('/health');

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ status: 'healthy' });
  });
});
