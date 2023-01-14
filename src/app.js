const express = require('express');

const config = require('./config/index');
const loaders = require('./loaders');

const { TaskRoutes } = require('./routes');

const errorHandler = require('./middlewares/errorHandler');

const swaggerUI = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

//const swaggerDocument = require('../swagger.json');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Todo App',
      version: '1.0.0',
      description: 'A simple Express Todo app with CRUD operations',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/routes/*.js'],
};

const specs = swaggerJSDoc(options);

const app = express();

config();
loaders();

app.use(express.json());

//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.APP_PORT;
app.listen(PORT, () => {
  console.log(`App listening on port 3000`);

  app.use('/tasks', TaskRoutes);
  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));

  app.use((req, res, next) => {
    const error = new Error('Page you are looking for does not exist');
    error.status = 404;
    next(error);
  });

  app.use(errorHandler);
});

module.exports = app;
