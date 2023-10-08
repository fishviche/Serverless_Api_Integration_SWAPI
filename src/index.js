const express = require("express");
const serverless = require("serverless-http");
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const routes = require('./routes');
const { boomErrorHandler, errorHandler } = require('./middlewares/error.handler');
const swaggerDocument = require('../swagger.json');
const swaggerSpec = swaggerJsdoc(swaggerDocument);
const app = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());

// register routes
app.use(routes);

// middlewares
app.use(boomErrorHandler);
app.use(errorHandler);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
