const express = require('express');
const peopleRoute = require('./people.routes');
const swapiRoute = require('./swapi.routes');

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Persona:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: ID único de la persona
 *         nombre:
 *           type: string
 *           description: Nombre de la persona
 *         altura:
 *           type: string
 *           description: Altura de la persona
 *         peso:
 *           type: string
 *           description: Peso de la persona
 *         color_de_cabello:
 *           type: string
 *           description: Color de cabello de la persona
 *         color_de_piel:
 *           type: string
 *           description: Color de piel de la persona
 *         color_de_ojos:
 *           type: string
 *           description: Color de ojos de la persona
 *         fecha_de_nacimiento:
 *           type: string
 *           description: Fecha de nacimiento de la persona
 *         mundo_natal:
 *           type: string
 *           description: Mundo natal de la persona
 *         peliculas:
 *           type: array
 *           items:
 *             type: string
 *           description: Películas en las que ha aparecido la persona
 *         especies:
 *           type: array
 *           items:
 *             type: string
 *           description: Especies a las que pertenece la persona
 *         vehiculos:
 *           type: array
 *           items:
 *             type: string
 *           description: Vehículos que la persona ha utilizado
 *         naves_especiales:
 *           type: array
 *           items:
 *             type: string
 *           description: Naves especiales utilizadas por la persona
 *         creado:
 *           type: string
 *           description: Fecha de creación de la persona
 *         editado:
 *           type: string
 *           description: Fecha de última edición de la persona
 *         url:
 *           type: string
 *           description: URL de la persona
 *       required:
 *         - nombre
 *         - altura
 *         - peso
 *         - fecha_de_nacimiento
 *       example:
 *         id: "1"
 *         nombre: "Luke Skywalker"
 *         color_de_ojos: "blue"
 *         fecha_de_nacimiento: "19BBY"
 *         color_de_piel: "fair"
 *         vehiculos:
 *           - "https://swapi.py4e.com/api/vehicles/14/"
 *           - "https://swapi.py4e.com/api/vehicles/30/"
 *         altura: "172"
 *         url: "https://swapi.py4e.com/api/people/1/"
 *         peso: "77"
 *         peliculas:
 *           - "https://swapi.py4e.com/api/films/1/"
 *           - "https://swapi.py4e.com/api/films/2/"
 *           - "https://swapi.py4e.com/api/films/3/"
 *           - "https://swapi.py4e.com/api/films/6/"
 *           - "https://swapi.py4e.com/api/films/7/"
 *         mundo_natal: "https://swapi.py4e.com/api/planets/1/"
 *         editado: "2014-12-20T21:17:56.891000Z"
 *         naves_especiales:
 *           - "https://swapi.py4e.com/api/starships/12/"
 *           - "https://swapi.py4e.com/api/starships/22/"
 *         especies:
 *           - "https://swapi.py4e.com/api/species/1/"
 *         creado: "2014-12-09T13:50:51.644000Z"
 *         color_de_cabello: "blond"
 */

router.use('/people', peopleRoute);
router.use('/swapi', swapiRoute);
module.exports = router;