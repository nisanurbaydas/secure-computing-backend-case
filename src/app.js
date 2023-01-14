const express = require('express');

const config = require('./config/index');
const loaders = require('./loaders');
const errorHandler = require('./middlewares/errorHandler');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const { TaskRoutes } = require('./routes');

const app = express();

config();
loaders();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.APP_PORT;
app.listen(PORT, () => {
  console.log(`App listening on port 3000`);

  app.use('/tasks', TaskRoutes);

  app.use((req, res, next) => {
    const error = new Error('Page you are looking for does not exist');
    error.status = 404;
    next(error);
  });

  app.use(errorHandler);
});

module.exports = app;
