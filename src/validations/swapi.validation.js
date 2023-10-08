const Joi = require('joi');

// Esquema de validación para los parámetros de la solicitud 'page'.
const getPeople = {
  query: Joi.object().keys({
    page: Joi.number()
      .integer() // Asegura que el número sea un valor entero.
      .min(0)    // Asegura que el número sea mayor o igual a 0.
  })
}
module.exports = {
  getPeople
}