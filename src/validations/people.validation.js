const Joi = require('joi');

// Definición del esquema de validación para el objeto 'personSchema'.
const savePerson = {
  body: Joi.object().keys({
    nombre: Joi.string().required(),
    altura: Joi.string().regex(/^(?:0|[1-9]\d*)$/).required(),
    peso: Joi.string().regex(/^(?:0|[1-9]\d*)$/).required(),
    color_de_cabello: Joi.string(),
    color_de_piel: Joi.string(),
    color_de_ojos: Joi.string(),
    fecha_de_nacimiento: Joi.string().regex(/^(0[1-9]|[12][0-9]|3[01])[\/](0[1-9]|1[0-2])[\/]\d{4}$/).required(),
    mundo_natal: Joi.string(),
    peliculas: Joi.array().items(Joi.string()),
    especies: Joi.array().items(Joi.string()),
    vehiculos: Joi.array().items(Joi.string()),
    naves_especiales: Joi.array().items(Joi.string()),
    url: Joi.string(),
  })
}

const getOne = {
  params: Joi.object().keys({
    id: [
      Joi.string().regex(/^(?:0|[1-9]\d*)$/).required(),
      Joi.string().guid({
        version: [
          'uuidv4'
        ]
      }).required()
    ],
  })
}

module.exports = {
  savePerson,
  getOne
};
