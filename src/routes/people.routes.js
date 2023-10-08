const express = require('express');
const peopleController = require('../controller/people.controller');
const validatorHandler = require('../middlewares/validator.handler');
const peopleValidator = require('../validations/people.validation');
const router = express.Router();


/**
 * @swagger
 * tags:
 *   name: People
 *   description: Endpoints para gestionar personas
 */

/**
 * @swagger
 * /people:
 *   get:
 *     summary: Obtener todas las personas
 *     tags: [People]
 *     responses:
 *       200:
 *         description: Lista de personas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Persona'
 */
router.get('/', peopleController.getPeople);

/**
 * @swagger
 * /people/{id}:
 *   get:
 *     summary: Obtener una persona por su ID
 *     tags: [People]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la persona a buscar
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Datos de la persona
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Persona'
 *       404:
 *         description: Persona no encontrada
 */
router.get('/:id',
  validatorHandler(peopleValidator.getOne),
  peopleController.getPerson
);

/**
 * @swagger
 * /people:
 *   post:
 *     summary: Crear una nueva persona
 *     tags: [People]
 *     requestBody:
 *       description: Datos de la nueva persona
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Persona'
 *     responses:
 *       201:
 *         description: Persona creada con éxito
 *       400:
 *         description: Datos no válidos
 */
router.post('/',
  validatorHandler(peopleValidator.savePerson),
  peopleController.savePerson
);
module.exports = router;
