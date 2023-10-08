const peopleRoute = require('../../routes/people.routes');
const request = require('supertest');
const express = require('express');

const app = express();
app.use('/people', peopleRoute);

describe('GET /', () => {
  test('deberia responder con un status code de 200', async () => {
    const response = await request(app).get('/people').send();
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    response.body.forEach((item) => {
        expect(item).toHaveProperty('id');
        expect(typeof item.id).toBe('string');
    });  
    
  });
})