const swapiRoute = require('../../routes/swapi.routes');
const request = require('supertest');
const express = require('express');

const app = express();
app.use('/swapi', swapiRoute);

describe('GET /', () => {
  test('deberia responder con un status code de 200', async () => {
    const response = await request(app).get('/swapi').send();
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('cantidad');
    expect(response.body).toHaveProperty('siguiente');
    expect(response.body).toHaveProperty('anterior');
    expect(response.body).toHaveProperty('resultado');
    expect(Array.isArray(response.body.resultado)).toBe(true);
  });
})