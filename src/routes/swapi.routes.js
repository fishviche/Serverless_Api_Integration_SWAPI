const express = require('express');
const swapiController = require('../controller/swapi.controller');
const validatorHandler = require('../middlewares/validator.handler');
const swapiValidator = require('../validations/swapi.validation');
const router = express.Router();

/**
 * @swagger
 * /swapi:
 *   get:
 *     summary: Obtiene una lista de personas de la API SWAPI
 *     description: Endpoint para obtener una lista de personas de la API SWAPI.
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: string
 *           pattern: '^[0-9]+$'
 *         description: Página de resultados (opcional, solo números)
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 cantidad:
 *                   type: integer
 *                   description: Cantidad total de personas
 *                 siguiente:
 *                   type: string
 *                   description: Enlace a la página siguiente
 *                 anterior:
 *                   type: string
 *                   description: Enlace a la página anterior
 *                 resultado:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Persona'
 *                   description: Lista de personas
 *     tags:
 *       - SWAPI
 */
router.get('/',
  validatorHandler(swapiValidator.getPeople),
  swapiController.getPeople
);
module.exports = router;
